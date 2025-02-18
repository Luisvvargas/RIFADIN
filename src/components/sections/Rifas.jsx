import React, { useState } from 'react';

const Rifas = () => {
  const rifasActivas = [
    {
      id: 1,
      titulo: "Rifa del Valle",
      fecha: "29 de Marzo 2025",
      precio: "$50",
      descripcion: [
        "3 Cabañas a rifarse (1 noche).",
        "3 Ganadores.",
        {
          cabanas: [
            {
              numero: 1,
              descripcion: "4 personas / 2 camas queen size",
              imagen: "/cabana1.png"
            },
            {
              numero: 2,
              descripcion: "2 personas / 1 cama king size",
              imagen: "/cabana2.jpg"
            },
            {
              numero: 3,
              descripcion: "2 personas / 1 cama queen",
              imagen: "/cabana3.png"
            }
          ]
        }
      ]
    }
  ];

  const rifasFinalizadas = [
    {
      id: 3,
      titulo: "Rifa de Febrero",
      fecha: "15 de Febrero 2025",
      precio: "$30",
      ganador: {
        numero: "089",
        nombre: "Juan Pérez",
        premio: "iPhone 15 Pro"
      }
    }
  ];

  const [expandedRifa, setExpandedRifa] = useState(null);

  const toggleRifa = (id) => {
    setExpandedRifa(expandedRifa === id ? null : id);
  };

  return (
    <div className="p-4 md:p-6 animate-slide-in">
      {/* Rifas Activas */}
      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">Rifas Activas</h2>
        <div className="space-y-4 md:space-y-6">
          {rifasActivas.map((rifa) => (
            <div 
              key={rifa.id} 
              onClick={() => toggleRifa(rifa.id)}
              className={`bg-white rounded-lg p-4 md:p-6 cursor-pointer border-2 transition-all duration-300 shadow-md ${
                expandedRifa === rifa.id 
                  ? 'border-[#f29359] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-1px_rgba(0,0,0,0.06),_0_0_10px_#f29359]' 
                  : 'border-gray-200 hover-glow'
              }`}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">{rifa.titulo}</h3>
              <div className="text-gray-600 mb-4 text-sm md:text-base">
                <p>Fecha: {rifa.fecha}</p>
                <p>Precio: {rifa.precio}</p>
              </div>
              {expandedRifa === rifa.id && (
                <div className="mt-4 pt-4 border-t border-gray-200 text-black text-sm md:text-base">
                  {typeof rifa.descripcion === 'string' ? (
                    <p>{rifa.descripcion}</p>
                  ) : (
                    <div>
                      {rifa.descripcion.map((item, index) => {
                        if (typeof item === 'string') {
                          return <p key={index} className="mb-2 font-semibold">{item}</p>;
                        } else if (item.cabanas) {
                          return (
                            <div key={index} className="mt-4 space-y-4">
                              {item.cabanas.map((cabana, cabanaIndex) => (
                                <div key={cabanaIndex} className="bg-gray-50 p-4 rounded-lg">
                                  <h4 className="text-lg font-semibold mb-3 text-[#f29359]">
                                    {cabana.numero}# Ganador.
                                  </h4>
                                  <div className="mb-4 w-full bg-gray-200 rounded-lg overflow-hidden">
                                    <img
                                      src={cabana.imagen}
                                      alt={`Cabaña ${cabana.numero}`}
                                      className="w-full object-contain"
                                      style={{ maxHeight: '400px' }}
                                    />
                                  </div>
                                  <p className="text-black">{cabana.descripcion}</p>
                                </div>
                              ))}
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Rifas Finalizadas */}
      {/* <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">Rifas Finalizadas</h2>
        <div className="space-y-4 md:space-y-6">
          {rifasFinalizadas.map((rifa) => (
            <div 
              key={rifa.id} 
              onClick={() => toggleRifa(rifa.id)}
              className={`bg-white rounded-lg p-4 md:p-6 cursor-pointer border-2 transition-all duration-300 shadow-md ${
                expandedRifa === rifa.id 
                  ? 'border-[#f29359] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-1px_rgba(0,0,0,0.06),_0_0_10px_#f29359]' 
                  : 'border-gray-200 hover-glow'
              }`}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">{rifa.titulo}</h3>
              <div className="text-gray-600 mb-4 text-sm md:text-base">
                <p>Fecha: {rifa.fecha}</p>
                <p>Precio: {rifa.precio}</p>
              </div>
              {expandedRifa === rifa.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="bg-[#f29359]/10 p-4 rounded-lg border border-[#f29359]">
                    <h4 className="text-lg font-semibold text-black mb-2">¡Ganador!</h4>
                    <p className="text-black text-sm md:text-base">Número: {rifa.ganador.numero}</p>
                    <p className="text-black text-sm md:text-base">Nombre: {rifa.ganador.nombre}</p>
                    <p className="text-black text-sm md:text-base">Premio: {rifa.ganador.premio}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Rifas;