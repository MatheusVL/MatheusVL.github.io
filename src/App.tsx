import React, { useState } from 'react';
import { Phone, Clock, MapPin, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleInfo = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Logo Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-400 mb-2 tracking-wider">
            World System
          </h1>
          <p className="text-slate-400">Soluções em TI</p>
        </div>

        {/* Main Buttons */}
        <a
          href="https://wa.me/SEU_NUMERO_AQUI"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 px-6 mb-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <MessageCircle size={20} />
          Iniciar Conversa
        </a>

        <button
          onClick={() => toggleInfo('horarios')}
          className="flex items-center justify-center gap-2 w-full py-3 px-6 mb-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all duration-300"
        >
          <Clock size={20} />
          Horários de Atendimento
        </button>

        <button
          onClick={() => toggleInfo('contato')}
          className="flex items-center justify-center gap-2 w-full py-3 px-6 mb-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all duration-300"
        >
          <Phone size={20} />
          Contato & Endereço
        </button>

        {/* Info Sections */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            activeSection === 'horarios'
              ? 'max-h-48 opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-slate-800 p-6 rounded-xl mb-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Clock size={20} className="text-blue-400" />
              Horários:
            </h3>
            <div className="space-y-2 text-slate-300">
              <p>Seg-Sex: 7h45 às 18h</p>
              <p>Sábado: 7h45 às 13h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-300 overflow-hidden ${
            activeSection === 'contato'
              ? 'max-h-64 opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-slate-800 p-6 rounded-xl mb-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <MapPin size={20} className="text-blue-400" />
              Contato:
            </h3>
            <div className="space-y-2 text-slate-300">
              <p>Tel/WhatsApp: (37) 3261-3366</p>
              <p>Tel/WhatsApp Plantão: (37) 98826-6252</p>
              <p>Email: contato@wsionline.com.br</p>
              <p>Endereço: Rua Santa Catarina, 273 - Centro</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <Instagram size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;