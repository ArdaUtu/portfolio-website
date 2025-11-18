import { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "b4fd9a8f-25ef-4a58-bbde-beede017f712");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Je bericht is succesvol verzonden!");
      } else {
        setResult("Er is iets misgegaan, probeer het opnieuw.");
      }
    } catch (error) {
      setResult("Er is een fout opgetreden, probeer het later nog eens.");
      console.error("Fout bij formulier:", error);
    }
  };

  return (
    <section className="ContactBody">
      <h1 className="h1Contact">Contact</h1>
      <p>Heb je vragen of wil je samenwerken? Stuur me gerust een bericht!</p>

      <div className="contact-info">
        <p><strong>Email:</strong> 9024283@student.zadkine.com</p>
        <p><strong>Locatie:</strong> Rotterdam, Nederland</p>
      </div>

      <form onSubmit={onSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Naam" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Bericht" rows="5" required></textarea>
        <button type="submit" className="btnVerstuur">Verstuur</button>
      </form>

      {result && <p className="result-message">{result}</p>}
    </section>
  );
}
