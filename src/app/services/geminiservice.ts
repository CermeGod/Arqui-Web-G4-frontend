import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environments } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class Geminiservice {
private generativeAI = new GoogleGenerativeAI(environments.geminiApiKey);

  constructor() { }

  async generarRespuesta(prompt: string): Promise<string> {
    try {
      // Usamos el modelo gemini-1.5-flash, ideal para tareas rápidas de texto y chat
      const model = this.generativeAI.getGenerativeModel({ model: 'gemini-2.5-flash' });      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error al comunicarse con Gemini:', error);
      throw error;
    }
  }
}

