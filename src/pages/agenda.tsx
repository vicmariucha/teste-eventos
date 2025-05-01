import React from "react";
import Layout from "../components/Layout"; // Assumindo que Layout é o componente de layout

const Agenda = () => {
  const schedule = [
    {
      time: "17:00 - 18:00",
      title: "Abertura do Dev Music Festival 2025",
      description: "Abertura oficial do festival, com uma breve introdução e boas-vindas a todos os participantes, com uma visão geral do evento e sua importância na junção de música e tecnologia.",
    },
    {
      time: "18:00 - 19:30",
      title: "DJ Code - Set Inédito",
      description: "O DJ Code, um especialista em mixagem e programação, vai mostrar como a música eletrônica e o código podem se fundir em uma apresentação única.",
    },
    {
      time: "19:30 - 21:00",
      title: "Banda StackOverflow - Ao Vivo",
      description: "A Banda StackOverflow traz um espetáculo de rock moderno, misturando riffs de guitarra e batidas inspiradas na cultura da programação e desenvolvimento de software.",
    },
    {
      time: "21:00 - 22:30",
      title: "The Bug Fixers - Show final",
      description: "Encerramento do evento com a banda The Bug Fixers, uma performance épica para celebrar o final de um evento inesquecível, com uma mistura de música e tecnologia.",
    },
    {
      time: "22:30 - 23:00",
      title: "Encerramento e agradecimentos",
      description: "Agradecimentos finais aos participantes, patrocinadores e todos que tornaram o evento possível, além de um convite para o próximo evento.",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-purple-500 mb-8">Cronograma completo do Dev Music Festival 2025</h1>
        
        <div className="relative border-l-4 border-purple-500 pl-6">
          {schedule.map((item, index) => (
            <div key={index} className="mb-8">
              <div className="absolute left-[-12px] top-0 w-6 h-6 bg-purple-500 rounded-full"></div>
              <div className="ml-8">
                <h2 className="text-xl font-semibold text-purple-600">{item.title}</h2>
                <span className="text-sm text-gray-500">{item.time}</span>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Agenda;
