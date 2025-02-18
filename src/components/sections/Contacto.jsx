import React from 'react';

const Contacto = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-black">Contacto</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Nombre
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Mensaje
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-white text-black border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default Contacto;