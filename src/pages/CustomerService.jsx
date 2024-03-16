import "./CustomerService.css";
const CustomerService = () => {
    return (
        <div>
            <h1>Obsługa klienta</h1>
            <section>
                <h2>Centrum Obsługi Klientów</h2>
                <p>
                    W naszym Centrum Obsługi Klientów staramy się zapewnić pełne
                    wsparcie dla naszych klientów. Oto kilka usług, które
                    oferujemy:
                </p>

                <h3>FAQ</h3>
                <p>
                    Sprawdź nasze najczęściej zadawane pytania, aby znaleźć
                    odpowiedzi na pytania dotyczące zamówień, płatności, dostawy
                    i wiele więcej.
                </p>
                <ul>
                    <li>
                        <strong>Jakie są opcje płatności?</strong>
                        <p>
                            W naszym sklepie internetowym akceptujemy płatności
                            kartą kredytową, przelewem bankowym oraz płatnością
                            przy odbiorze.
                        </p>
                    </li>
                    <li>
                        <strong>Jak długo trwa dostawa?</strong>
                        <p>
                            Czas dostawy zależy od wybranego przez Ciebie
                            sposobu dostawy oraz miejsca zamieszkania.
                            Standardowo, dostawa zazwyczaj trwa od 2 do 5 dni
                            roboczych.
                        </p>
                    </li>
                    <li>
                        <strong>Jak mogę zwrócić produkt?</strong>
                        <p>
                            Jeśli nie jesteś zadowolony z zakupu, możesz zwrócić
                            produkt w ciągu 14 dni od daty otrzymania
                            zamówienia. Skontaktuj się z nami, aby uzyskać
                            więcej informacji na temat procedury zwrotu.
                        </p>
                    </li>
                </ul>

                <h3>Chatter-boty</h3>
                <p>
                    Nasi inteligentni chatter-boty są tutaj, aby odpowiedzieć na
                    Twoje pytania w czasie rzeczywistym. Wystarczy zadać
                    pytanie, a bot odpowie na Twoje zapytania.
                </p>

                <h3>Forum Dyskusyjne</h3>
                <p>
                    Nasz forum dyskusyjne to idealne miejsce, aby podzielić się
                    swoimi doświadczeniami, uzyskać porady od innych klientów i
                    uzyskać pomoc w razie problemów z produktami. Dołącz do
                    dyskusji i korzystaj z wiedzy społeczności!
                </p>
            </section>
            <a href="#" className="chatbot-icon">
                <img src="chatbot.jpg" alt="Chat Bot" />
            </a>
        </div>
    );
};

export default CustomerService;
// – centrum obsługi klientów (FAQ, chatter-boty, forum dyskusyjne jako substytut help-desku),
