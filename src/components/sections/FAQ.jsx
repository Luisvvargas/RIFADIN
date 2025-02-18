import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      pregunta: "¿Cómo participar?",
      respuesta: "Puedes contactaerte con nosotros por medio de instagram para comprar un boleto digital u obtener uno fisico."
    },
    {
      pregunta: "¿Cómo se realiza el sorteo?",
      respuesta: "Los sorteos se realizan en vivo a través de nuestro Instagram en la fecha inidicada de finalización de la rifa."
    },
    {
      pregunta: "¿Cómo se entregan los premios?",
      respuesta: "Los premios se entregan personalmente o mediante envío según la ubicación del ganador y el tipo de premio."
    },
    {
      pregunta: "Cuantos boletos puedo comprar?",
      respuesta: "No existe limite de compra por persona. Cada persona puede comprar la cantidad de boletos que desee."
    },
    {
      pregunta: "Como me entregan mi boleto?",
      respuesta: ["Si el boleto es comprado de manera digital, se enviara por medio de instagram o correo electronico con el numero elegido segun la disponibilidad del mismo.",
                 "Si el boleto se compra en persona, se entregará un boleto fisico al instante.",]
    },
    {
      pregunta: "Puedo participar si estoy fuera de la ciudad?",
      respuesta: "Claro! Los premios pueden ser enviados a su localidad mientras se encuentre dentro de la república Mexicana."
    },
    {
      pregunta: "Cuantos boletos puedo comprar?",
      respuesta: "No existe limite de compra por persona. Cada persona puede comprar la cantidad de boletos que desee."
    },
    {
      pregunta: "Como sabré si gano?",
      respuesta: "Se informará a todos los participantes quien fue el ganador de cada rifa por medio de nuestra cuenta de instagram. Además, si usted resulta ganador, se le notificara personalmente por mensaje de whatsapp, llamada telefonica, correo electronico, mensaje de instagram o cualquier medio que haya dado para contactarlo."
    },
    {
      pregunta: "Que pasa si el ganador no reclama el premio?",
      respuesta: "Si el ganador no reclama el premio nos intentaremos poner en contacto con el. Si no se logra contactar al ganador en 3 días entonces la rifa volvera a realizarse a través de un live de instagram."
    },

  ];

  return (
    <div className="p-4 md:p-6 max-w-3xl mx-auto animate-slide-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">Preguntas Frecuentes</h2>
      <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-base md:text-lg text-black border-b-2 border-gray-200 hover:border-[#f29359] transition-all duration-300 px-2 md:px-4">
              {faq.pregunta}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-sm md:text-base px-2 md:px-4">
              {faq.respuesta}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;