import { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState(""); // Resultaatbericht

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(""); // Reset het resultaatbericht voor de verzending

    const formData = new FormData(event.target);
    formData.append("access_key", "b4fd9a8f-25ef-4a58-bbde-beede017f712"); // Jouw API-sleutel

    console.log("Formuliergegevens worden verzonden:", formData); // Controleer wat er wordt verzonden

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log("API-respons:", data); // Log de API-respons

      if (data.success) {
        setResult("Je bericht is succesvol verzonden!"); // Succesbericht
      } else {
        setResult("Er is iets misgegaan, probeer het opnieuw."); // Foutbericht
      }
    } catch (error) {
      setResult("Er is een fout opgetreden, probeer het later nog eens."); // Foutafhandeling
      console.error("Fout bij het indienen van het formulier:", error); // Log de fout
    }
  };

  return (
    <section className="ContactBody">
      <h1 class ="h1Contact">Contact</h1>
      <p>Heb je vragen of wil je samenwerken? Stuur me gerust een bericht!</p>
      <div className="contact-info">
        <p><strong>Email:</strong> 9024283@student.zadkine.com</p>
        <p><strong>Locatie:</strong> Rotterdam, Nederland</p>
      </div>

      {/* Web3Forms Contact Form */}
      <form onSubmit={onSubmit} className="contact-form">
        <input type="hidden" name="access_key" value="b4fd9a8f-25ef-4a58-bbde-beede017f712" />
        <input type="text" name="name" placeholder="Naam" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Bericht" rows="5" required></textarea>
        <button type="submit" className="btnVerstuur">Verstuur</button>
      </form>

      {/* Resultaat Bericht */}
      {result && <p className="result-message">{result}</p>}
    </section>
  );
}
