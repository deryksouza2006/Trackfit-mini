import React from "react";

// Mensagens fixas dentro do componente
const motivationalMessages = [
  {
    message: "A persistência é o caminho do êxito",
    author: "Charles Chaplin"
  },
  {
    message: "O sucesso nasce do querer, da determinação e persistência",
    author: "Paulo Muzy"
  },
  // Adicione mais mensagens aqui
];

export default function MotivationalMessage() {
  // Seleciona uma mensagem aleatória
  const randomMessage = motivationalMessages[
    Math.floor(Math.random() * motivationalMessages.length)
  ];

  const container: React.CSSProperties = {
    padding: "16px",
    fontStyle: "italic",
    borderLeft: "4px solid #accc",
    margin: "16px 0"
  };

  const authorStyle: React.CSSProperties = {
    marginTop: "8px",
    textAlign: "right",
    fontWeight: "bold"
  };

  return (
    <section style={container}>
      "{randomMessage.message}"
      <div style={authorStyle}>...{randomMessage.author}</div>
    </section>
  );
}