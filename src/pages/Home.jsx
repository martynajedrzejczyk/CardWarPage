// import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Diamond Deck Designs</h1>
            <h2>Kim jesteśmy?</h2>
            <p>
                Jesteśmy miłośnikami biżuterii pasjonującymi się grą w karty. Na
                co dzień produkujemy zjawiskową biżuterię inspirowaną kartami do
                gry. Nasze produkty są wyjątkowe, ponieważ każdy element jest
                ręcznie robiony. Nasza pasja do biżuterii i gier karcianych
                inspiruje nas do tworzenia unikalnych i oryginalnych projektów,
                które zachwycają zarówno miłośników biżuterii, jak i entuzjastów
                gier karcianych.
            </p>
            <p>
                W wolnym czasie gramy w karty z najbliższymi. Poker, brydż,
                blackjack... To nie tylko rozrywka, ale także sposób na relaks i
                spędzanie czasu z bliskimi. Nasze doświadczenia związane z grami
                karcianymi sprawiają, że wiemy, jakie elementy są istotne dla
                prawdziwych miłośników tej formy rozrywki, dlatego nasza
                biżuteria jest tak dopracowana i atrakcyjna dla naszych
                klientów.
            </p>
            <h2>Zagraj w wojnę i zdobądź kod rabatowy na zakupy!</h2>
            <p>
                Zagraj w naszą grę karcianą "Wojna" i zdobądź kod rabatowy na
                zakupy w naszym sklepie. Gra jest dostępna na naszej stronie
                internetowej. Zasady są proste: wygrywa osoba, która zdobędzie
                więcej punktów. Graj i zdobądź kod rabatowy na zakupy w naszym
                sklepie!
            </p>
            <a href="https://card-war.vercel.app/" className="game-link">
                Kliknij mnie, aby zagrać w grę "Wojna"!{" "}
            </a>

            <h2>Nasza historia</h2>
            <p>
                Zaczęliśmy naszą przygodę z pasją do biżuterii i miłością do
                gier karcianych. Przez lata nieustannego doskonalenia rzemiosła
                i inspiracji płynącej z gry w karty, stworzyliśmy firmę, która
                jest dziś symbolem elegancji i wyrafinowania w świecie
                biżuterii. Nasza historia jest pełna wyzwań, pasji i
                zaangażowania. Od skromnych początków, gdy nasze pierwsze
                kawałki biżuterii zaczęły zachwycać naszych bliskich, po
                teraźniejszość, gdzie nasze unikalne projekty docierają do
                miłośników na całym świecie. Nasza historia to nie tylko
                opowieść o tworzeniu biżuterii, ale także o budowaniu
                społeczności z ludźmi, którzy podzielają nasze zamiłowanie do
                kreatywności i elegancji.
            </p>
            <h2>Poznaj strukturę naszej firmy!</h2>
            <h3>Oddziały</h3>
            <p>
                Produkcja: Odpowiada za wytwarzanie biżuterii zgodnie z
                określonymi standardami jakościowymi i wytycznymi projektowymi.
                <br />
                Sprzedaż i Marketing: Zajmuje się promocją, sprzedażą oraz
                budowaniem relacji z klientami. Obejmuje działania reklamowe,
                obsługę klienta i zarządzanie mediami społecznościowymi. <br />
                Zarządzanie zasobami ludzkimi: Odpowiada za rekrutację,
                szkolenie i rozwój pracowników, zarządzanie wynagrodzeniami oraz
                dbanie o atmosferę pracy. <br />
                Finanse i Administracja: Zapewnia wsparcie w zakresie
                księgowości, rachunkowości, planowania finansowego i obsługi
                administracyjnej.
            </p>
            <h3>Nasz personel</h3>
            <p>
                Nasza firma zatrudnia wyłącznie wykwalifikowanych i
                doświadczonych pracowników, którzy są pasjonatami biżuterii i
                gier karcianych. Każdy z naszych pracowników jest ekspertem w
                swojej dziedzinie i przyczynia się do tworzenia wyjątkowych
                projektów. Nasz zespół to ludzie z pasją, którzy są gotowi
                podjąć każde wyzwanie, aby sprostać oczekiwaniom naszych
                klientów.
            </p>
            <h2>Prezes firmy</h2>
            <img className="personel" src="prezes.jpg" alt="Prezes firmy" />
            <p className="personel-label">Jan Kowalski</p>
            <p>
                Nasza firma jest zarządzana przez prezesa, który jest
                odpowiedzialny za podejmowanie kluczowych decyzji i kierowanie
                firmą. Prezes jest ekspertem w dziedzinie gier karcianych, który
                zawsze stawia na jakość i innowacyjność.{" "}
            </p>
            <h2>Dyrektorka ds. biżuterii</h2>
            <img className="personel" src="dyrektorka.jpg" alt="Dyrektorka" />
            <p className="personel-label">Anna Kowalska</p>
            <p>
                Dyrektorka ds. biżuterii jest odpowiedzialna za nadzór nad
                procesem produkcyjnym, zarządzanie zespołem projektantów oraz
                tworzenie nowych kolekcji. Jest ekspertem w dziedzinie biżuterii
                i pasjonatką projektowania.
            </p>
        </div>
    );
};

export default Home;
