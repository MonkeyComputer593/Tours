// FAQ translations
export const faqTranslations = {
  es: [
    {
      question: "¿Cómo me apunto a la expedición?",
      answer: "Presionando el botón RESERVAR, se te abrirá un formulario en el cual te haremos algunas preguntas para saber si tienes el perfil ideal para sumarte a la expedición. Para nosotros es sumo importante el grupo, por eso nos tomamos esto en serio, te recomendamos tomarte el tiempo necesario para rellenarlo y explicarnos al detalle tus motivaciones y por qué quieres ser parte de esta experiencia única."
    },
    {
      question: "¿Cuándo y cómo tengo que pagar?",
      answer: "Recibirás un email adjuntando un enlace para el pago de la fianza a través de tarjeta de crédito, una vez completes el pago recibirás un enlace para añadirte al grupo de WhatsApp, oficialmente formarás parte de la expedición. El pago final se realizará ya una vez estés en el grupo de WhatsApp junto al líder de expedición quien ayudará en todo momento con la preparación previa al viaje."
    },
    {
      question: "¿Cómo hago para llegar al punto de inicio del Tour?",
      answer: "En nuestras expediciones no incluimos los vuelos para que se pueda unir gente de todo el mundo. Una vez seleccionado para participar en la aventura, serás introducido en un grupo de WhatsApp privado de esa expedición. Nuestro Líder de Expedición te ayudará a encontrar las mejores combinaciones aéreas."
    },
    {
      question: "¿Una vez llegue al destino que debo hacer?",
      answer: "Dependiendo del tour, avisaremos del día y el lugar de encuentro. No habrá problema, ya que todos nos conoceremos previamente en los grupos de WhatsApp."
    },
    {
      question: "Información sobre Habitaciones y Dormitorios en Nuestros Tours",
      answer: "En nuestros tours, las habitaciones siempre se comparten con otros participantes. Si prefieres una habitación individual, se aplicará un suplemento adicional."
    },
    {
      question: "Si he pagado el tour y finalmente no puedo ir al viaje… ¿Realizan Devoluciones?",
      answer: "El depósito inicial y los pagos subsiguientes no serán reembolsables ni se aplicarán como descuentos en futuras expediciones, dado que cubren los costos asociados con la gestión de tu reserva y el esfuerzo de nuestro equipo."
    },
    {
      question: "¿Hay algún límite en la edad para poder acudir a una expedición?",
      answer: "Para poder acceder a nuestras expediciones debes ser mayor de edad (18 años), en caso contrario has de ir acompañado de tus padres o tutores legales."
    },
    {
      question: "Tengo una discapacidad ¿Puede acudir al Tour?",
      answer: "En este caso, debemos estudiar la situación dependiendo de la expedición. Algunas de nuestras aventuras exigen un serio desgaste físico."
    },
    {
      question: "¿Realizan algún tipo de actividad o deporte el cual requiere experiencia previa?",
      answer: "Contamos con todos los implementos con tablas de SUP. También tenemos experiencias para aprender/entrenar en ambas modalidades. No tener la suficiente experiencia no es problema, se puede entrenar previamente."
    },
    {
      question: "¿Recomiendan contratar algún seguro de viaje y pertenencias?",
      answer: "Nosotros incluimos seguros médicos a todos los integrantes de las expediciones. En caso de que una persona quiera comprar un seguro con más cobertura, puede hacerlo por su cuenta."
    }
  ],
  en: [
    {
      question: "How do I sign up for the expedition?",
      answer: "By pressing the RESERVE button, a form will open where we will ask you some questions to find out if you have the ideal profile to join the expedition. For us, the group is extremely important, which is why we take this seriously."
    },
    {
      question: "When and how do I have to pay?",
      answer: "You will receive an email with a link to pay the deposit via credit card. Once you complete the payment, you will receive a link to join the WhatsApp group, officially becoming part of the expedition. The final payment will be made once you are in the WhatsApp group."
    },
    {
      question: "How do I get to the starting point of the Tour?",
      answer: "Our expeditions do not include flights so that people from all over the world can join. Once selected to participate in the adventure, you will be introduced to a private WhatsApp group. Our Expedition Leader will help you find the best flight combinations."
    },
    {
      question: "Once I arrive at the destination, what should I do?",
      answer: "Depending on the tour, we will inform you of the day and meeting place. There will be no problem, as we will all know each other beforehand in the WhatsApp groups."
    },
    {
      question: "Information about Rooms and Dormitories in Our Tours",
      answer: "In our tours, rooms are always shared with other participants. If you prefer a private room, an additional supplement will apply."
    },
    {
      question: "If I have paid for the tour and finally cannot go on the trip… Do you make refunds?",
      answer: "The initial deposit and subsequent payments will not be refundable or apply as discounts on future expeditions, as they cover the costs associated with managing your reservation and our team's effort."
    },
    {
      question: "Is there any age limit to attend an expedition?",
      answer: "To access our expeditions you must be of legal age (18 years), otherwise you must be accompanied by your parents or legal guardians."
    },
    {
      question: "I have a disability. Can I attend the Tour?",
      answer: "In this case, we must study the situation depending on the expedition. Some of our adventures require serious physical exertion."
    },
    {
      question: "Do you carry out any type of activity or sport that requires prior experience?",
      answer: "We have all the equipment for SUP boards. We also have experiences to learn/train in both modalities. Not having enough experience is not a problem, you can train beforehand."
    },
    {
      question: "Do you recommend hiring travel and baggage insurance?",
      answer: "We include medical insurance for all expedition members. If a person wants to buy insurance with more coverage, they can do so on their own."
    }
  ]
};

export function getFaqs(language: string) {
  return language === 'en' ? faqTranslations.en : faqTranslations.es;
}
