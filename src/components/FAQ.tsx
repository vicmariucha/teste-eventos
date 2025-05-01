const faqs = [
    {
      question: "Como posso comprar ingressos para o festival?",
      answer:
        "Você pode adquirir seus ingressos diretamente aqui no site, na seção 'Ingressos'. Basta escolher o tipo de ingresso desejado, preencher seus dados e realizar o pagamento com cartão, Pix ou boleto.",
    },
    {
      question: "Quais artistas vão se apresentar?",
      answer:
        "A programação completa está disponível na página 'Eventos'. Contamos com atrações nacionais e internacionais de diversos estilos musicais. Fique de olho nas nossas redes sociais para possíveis surpresas!",
    },
    {
      question: "Onde acontece o festival?",
      answer:
        "O festival será realizado na Arena TechMusic – São Paulo - SP, um espaço amplo e seguro, com estrutura preparada para receber milhares de pessoas. Veja como chegar em 'Localização'.",
    },
    {
      question: "Menores de idade podem participar?",
      answer:
        "Sim, o evento é classificação livre, mas menores de 16 anos devem estar acompanhados de um responsável legal e portar documento com foto.",
    },
    {
      question: "Vai ter praça de alimentação e opções veganas?",
      answer:
        "Sim! Contamos com uma área gastronômica completa, incluindo opções veganas, vegetarianas e sem glúten. Levar alimentos de fora não será permitido, exceto em casos médicos com comprovação.",
    },
    {
      question: "E se chover no dia do evento?",
      answer:
        "O festival acontece mesmo com chuva, com estrutura coberta em partes do local. Recomendamos o uso de capas de chuva em vez de guarda-chuvas, por segurança.",
    },
    {
      question: "Posso entrar e sair do festival no mesmo dia?",
      answer:
        "A política de entrada e saída depende do tipo de ingresso. Ingressos comuns não permitem retorno após saída. Ingressos VIP ou Camarote têm acesso livre durante o dia.",
    },
    {
      question: "O festival é acessível para pessoas com deficiência?",
      answer:
        "Sim, temos áreas de acessibilidade, banheiros adaptados e atendimento especializado para garantir a melhor experiência para todos.",
    },
  ];
  
  export default function FAQ() {
    return (
      <section className="py-24 bg-white bg-gray-100 dark:bg-gray-900 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-purple-700 dark:text-purple-700 mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600 dark:text-white max-w-2xl mx-auto">
              Tire suas dúvidas sobre o festival e aproveite ao máximo essa experiência.
            </p>
          </div>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-gray-200 dark:text-white rounded-lg p-6 shadow-sm open:shadow-md transition-shadow"
              >
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800 dark:text-purple-500">
                  <span>{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-purple-500 group-open:rotate-180 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-600 dark:text-white text-base">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  }
  