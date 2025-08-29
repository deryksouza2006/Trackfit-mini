// src/components/Welcome.tsx import React from "react";
export default function Welcome() {
  const container: React.CSSProperties = {
    padding: "16px",
    textAlign: "center",
  };
  const title: React.CSSProperties = { fontSize: "24px", marginBottom: "8px" };
  const phrase: React.CSSProperties = { fontSize: "16px", opacity: 0.9 };

  return (
    <section style={container}>
      <h1 style={title}>Bem-vindo ao TrackFit Mini </h1>
      <p style={phrase}>Bora treinar com foco e consistência!</p>
    </section>
  );
}