import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Geminiservice } from '../../services/geminiservice';

interface ChatMessage {
  text: string;
  isUser: boolean;
}

@Component({
  selector: 'app-chatbot',
  imports: [FormsModule, CommonModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
})
export class Chatbot {
  mensajeUsuario: string = '';
  historial: ChatMessage[] = [];
  cargando: boolean = false;

  constructor(private geminiService: Geminiservice) {}

  async enviarMensaje() {
    if (!this.mensajeUsuario.trim()) return;

    // 1. Guardar y mostrar el mensaje del usuario
    const prompt = this.mensajeUsuario;
    this.historial.push({ text: prompt, isUser: true });
    this.mensajeUsuario = ''; 
    this.cargando = true;

    // 2. Obtener respuesta de Gemini
    try {
      const respuesta = await this.geminiService.generarRespuesta(prompt);
      this.historial.push({ text: respuesta, isUser: false });
    } catch (error) {
      this.historial.push({ text: 'Hubo un error al procesar tu solicitud.', isUser: false });
    } finally {
      this.cargando = false;
    }
  }
}
