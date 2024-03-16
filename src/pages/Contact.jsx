import "./Contact.css";
const Contact = () => {
    return (
        <div>
            <h1>Kontakt</h1>
            <section>
                <h2>Dane Teleadresowe</h2>
                <p>Skontaktuj się z nami za pomocą poniższych danych:</p>
                <p>Nazwa Firmy: Diamond Deck Designs</p>
                <p>Adres: ul. Przykładowa 123, 00-000 Warszawa</p>
                <p>Telefon: +48 123 456 789</p>
                <p>Email: info@diamonddeckdesigns.pl</p>
            </section>

            <section>
                <h2>Formularz Kontaktowy</h2>
                <p>
                    Skorzystaj z poniższego formularza, aby skontaktować się z
                    nami bezpośrednio przez stronę:
                </p>
                <form
                    action="mailto:info@twojafirmabizuteryjna.pl"
                    method="post"
                >
                    <label>Imię i Nazwisko:</label>
                    <br />
                    <input type="text" id="name" name="name" required />
                    <br />
                    <label>Adres Email:</label>
                    <br />
                    <input type="email" id="email" name="email" required />
                    <br />
                    <label>Wiadomość:</label>
                    <br />
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                    ></textarea>
                    <br />
                    <input type="submit" value="Wyślij" />
                </form>
            </section>
        </div>
    );
};

export default Contact;

//– dane teleadresowe,
// – możliwość kontaktu z przedsiębiorstwem (adres poczty elektronicznej, formularz kontaktu z firmą),
