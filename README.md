# Otalammen Autohuolto

Autohuollon sivusto ja viisivaiheinen hinta-arviolaskuri. Toteutus käyttää Reactia, TypeScriptiä ja Viteä. Tämä repository sisältää nykyisen toimivan käyttöliittymän ja hinnoittelulogiikan.

## Paikallinen käyttö

Tarvitset Node.js:n ja npm:n. Testit edellyttävät Node.js 20:tä tai uudempaa.

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 5173
```

## Tarkistukset

```sh
npm test
npm run lint
npm run build
```

## Hinnoittelu ja lähetys

Hinnat ovat Otalammen Autohuollon yrittäjän ilmoittamat. Öljyn ja öljynsuodattimen vaihto on noin 200 €, renkaanvaihto henkilöautolle 30 € ja pakettiautolle / maasturille 40 €, katsastustarkastus 50 € ja ilmastointihuolto 80 €. Muut työt hinnoitellaan autokohtaisesti. Korjaamo vahvistaa lopullisen hinnan ennen työn aloittamista.

Vastaanottavaa backendia tai GoHighLevel-yhteyttä ei ole vielä liitetty. Lähetysrajapinta on valmisteltu, mutta ilman vastaanottopalvelua lähetys näyttää virheen. Katso [integraatio-ohje](INTEGRATION.md).

Ympäristötiedostoja, salaisuuksia, asennettuja riippuvuuksia ja rakennustuloksia ei julkaista tässä repositoryssa. Mahdollinen paikallinen `.env.local` pysyy Gitin ulkopuolella. API:n oletusosoite on `/api/estimate-requests`; salaiset webhook-osoitteet kuuluvat backendin ympäristöön.

## GitHub Pages

Julkaisuosoite: https://aatosniinikoski-cloud.github.io/otalammen-autohuolto/

Viten `base` on `/otalammen-autohuolto/`. Repositoryn Pages-lähteenä käytetään GitHub Actionsia. `.github/workflows/deploy.yml` rakentaa sovelluksen komennolla `npm run build` ja julkaisee vain `dist`-kansion aina, kun `main` päivittyy. Lähdekoodin `index.html`-tiedostoa ei julkaista suoraan.

Paikallisen tuotantoversion esikatselu buildin jälkeen:

```sh
npx vite preview --host 127.0.0.1 --port 4173
```

Esikatselu on osoitteessa `http://127.0.0.1:4173/otalammen-autohuolto/`. Pages on staattinen sivusto; huoltopyyntöjen toimitus tarvitsee edelleen integraatio-ohjeessa kuvatun erillisen vastaanottopalvelun.
