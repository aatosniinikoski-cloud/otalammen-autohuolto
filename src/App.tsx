import { Check, LockKeyhole, PhoneCall, Wrench } from 'lucide-react'
import { EstimateTool } from './components/estimate/EstimateTool'

const benefits = [
  'Hinta heti yleisimpiin huoltoihin',
  'Muut työt suoraan korjaamon arvioitavaksi',
  'Korjaamo vahvistaa lopullisen hinnan ennen työn aloittamista',
]

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Otalammen Autohuolto, sivun alku">
          <Wrench aria-hidden="true" size={18} />
          <span>Otalammen Autohuolto</span>
        </a>
        <span className="header-label">Hinta-arvio</span>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="page-title">
          <div className="hero-copy">
            <p className="eyebrow">Selkeä pyyntö. Parempi lähtötieto.</p>
            <h1 id="page-title">Autosi huollon hinta-arvio. Noin minuutissa.</h1>
            <p className="hero-lead">Valitse autosi tarvitsemat työt. Saat heti hinta-arvion yleisimmistä huolloista, ja korjaamo hinnoittelee tarvittaessa muut työt erikseen.</p>
            <ul className="benefit-list" aria-label="Palvelun hyödyt">
              {benefits.map((benefit) => (
                <li key={benefit}><Check aria-hidden="true" size={17} />{benefit}</li>
              ))}
            </ul>
            <div className="privacy-note">
              <LockKeyhole aria-hidden="true" size={17} />
              <span>Pyyntö ei sido sinua korjaukseen.</span>
            </div>
          </div>
          <EstimateTool />
        </section>

        <section className="process-section" aria-labelledby="process-title">
          <div className="section-heading">
            <span className="section-kicker">Yksi pyyntö alusta loppuun</span>
            <h2 id="process-title">Näin pyyntö etenee</h2>
          </div>
          <ol className="process-list">
            <li><span>1</span><p>Asiakas kertoo auton tiedot.</p></li>
            <li><span>2</span><p>Asiakas valitsee palvelut ja näkee yleisimpien huoltojen hinta-arvion.</p></li>
            <li><span>3</span><p>Asiakas kuvailee tarvittaessa muun työn ja jättää yhteystietonsa.</p></li>
            <li><span>4</span><p>Korjaamo saa valmiiksi jäsennellyn työpyynnön.</p></li>
            <li><span>5</span><p>Korjaamo tarkistaa työn ja vahvistaa hinnan.</p></li>
          </ol>
          <div className="trust-row">
            <p><Check aria-hidden="true" size={16} /> Pyyntö ei sido korjaukseen.</p>
            <p><PhoneCall aria-hidden="true" size={16} /> Lopullinen hinta vahvistetaan ennen työn aloittamista.</p>
            <p><LockKeyhole aria-hidden="true" size={16} /> Yhteystiedot pyynnön käsittelyä varten.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Otalammen Autohuolto</span>
        <span>Korjaamo vahvistaa lopullisen hinnan ennen työn aloittamista.</span>
      </footer>
    </div>
  )
}
