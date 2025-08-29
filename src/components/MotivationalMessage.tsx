import React from "react";

interface MotivationalMessageProps {
  message: string;   
  author: string;    
}

export default function MotivationalMessage(props: MotivationalMessageProps) {
  const container: React.CSSProperties = {
    padding: "16px",
    fontStyle: "italic",
    borderLeft: "4px solid #4CAF50",
    margin: "16px 0",
    backgroundColor: "#f9f9f9",
    borderRadius: "0 8px 8px 0"
  };

  const authorStyle: React.CSSProperties = {
    marginTop: "8px",
    textAlign: "right",
    fontWeight: "bold",
    color: "#555"
  };

  return (
    <section style={container}>
      "{props.message}"
      <div style={authorStyle}>...{props.author}</div>
    </section>
  );
}