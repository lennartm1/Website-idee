import { useState } from 'react';

const faqs = [
  ['Hoe werkt bezorging?', 'Bestellingen vóór 22:00 worden dezelfde dag verwerkt en meestal de volgende dag geleverd.'],
  ['Kan ik retourneren?', 'Ja, binnen 14 dagen na ontvangst in ongeopende verpakking.'],
  ['Staat allergeneninformatie vermeld?', 'Ja, op elke productpagina staat een duidelijk allergenenoverzicht.'],
  ['Welke betaalmethoden accepteren jullie?', 'iDEAL, creditcard en PayPal worden ondersteund.'],
  ['Kan ik mijn bestelling wijzigen?', 'Neem direct contact op met klantenservice, dan helpen we je snel.'],
  ['Wat is de levertijd?', 'Gemiddeld 1 werkdag in Nederland, 2-3 werkdagen in België.'],
];

export const CustomerServicePage = () => {
  const [sent, setSent] = useState(false);

  return (
    <section className="container section customer-service">
      <h1>Klantenservice</h1>
      <p>Stel je vraag en ontvang meestal binnen 24 uur een reactie.</p>

      <div className="service-grid">
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <label>
            Naam
            <input required name="name" />
          </label>
          <label>
            Email
            <input required type="email" name="email" />
          </label>
          <label>
            Onderwerp
            <input required name="subject" />
          </label>
          <label>
            Bericht
            <textarea required name="message" rows="5" />
          </label>
          <button className="btn solid" type="submit">
            Stel je vraag
          </button>
          {sent && <p className="success">Bedankt! We nemen snel contact op.</p>}
        </form>

        <aside>
          <h3>Direct contact</h3>
          <p>Email: klantenservice@kleursnoep.nl</p>
          <p>Telefoon: +31 20 123 4567</p>

          <h3>FAQ</h3>
          <ul className="faq-list">
            {faqs.map(([question, answer]) => (
              <li key={question}>
                <strong>{question}</strong>
                <p>{answer}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};
