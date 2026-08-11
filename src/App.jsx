import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FacebookIcon,
  InstagramIcon,
  Menu,
  MessageCircle,
  Play,
  ShieldCheck,
  Sparkles,
  X,
} from './icons.jsx'
import logo from './assets/logo.png'
import heroDayse from './assets/hero-dayse.png'
import aboutDayse from './assets/about-dayse.jpg'
import botox from './assets/treatment-botox.jpg'
import preenchimento from './assets/treatment-preenchimento.jpg'
import skinbooster from './assets/treatment-skinbooster.jpg'
import bioestimuladores from './assets/treatment-bioestimuladores.jpg'
import peeling from './assets/treatment-peeling.jpg'
import { siteConfig, treatments as treatmentData } from './config.js'



const treatmentImages = {
  'treatment-botox.jpg': botox,
  'treatment-preenchimento.jpg': preenchimento,
  'treatment-skinbooster.jpg': skinbooster,
  'treatment-bioestimuladores.jpg': bioestimuladores,
  'treatment-peeling.jpg': peeling,
}

const NAV_ITEMS = [
  ['Início', 'inicio'],
  ['Sobre', 'sobre'],
  ['Tratamentos', 'tratamentos'],
  ['Resultados', 'resultados'],
  ['Vídeos', 'videos'],
  ['Contato', 'contato'],
]

function goTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function whatsappUrl(message = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedTreatment, setSelectedTreatment] = useState(null)
  const [form, setForm] = useState({ name: '', treatment: '', message: '' })
  const year = useMemo(() => new Date().getFullYear(), [])

  useEffect(() => {
    document.body.style.overflow = menuOpen || selectedTreatment ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, selectedTreatment])

  const submitAppointment = (event) => {
    event.preventDefault()
    const lines = [
      'Olá! Gostaria de agendar uma avaliação.',
      form.name && `Meu nome é ${form.name}.`,
      form.treatment && `Tenho interesse em: ${form.treatment}.`,
      form.message && `Mensagem: ${form.message}`,
    ].filter(Boolean)
    window.open(whatsappUrl(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <button className="brand" onClick={() => goTo('inicio')} aria-label="Ir para o início">
            <img src={logo} alt="Logo Dra. Dayse Ettinger" />
          </button>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {NAV_ITEMS.map(([label, id]) => (
              <button key={id} onClick={() => goTo(id)}>{label}</button>
            ))}
          </nav>

          <a className="btn btn-outline nav-cta" href={whatsappUrl()} target="_blank" rel="noreferrer">
            <MessageCircle size={17} /> Agendar
          </a>

          <button className="mobile-menu-button" onClick={() => setMenuOpen(true)} aria-label="Abrir menu">
            <Menu />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)}>
          <aside className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-head">
              <img src={logo} alt="Logo Dra. Dayse Ettinger" />
              <button onClick={() => setMenuOpen(false)} aria-label="Fechar menu"><X /></button>
            </div>
            <nav>
              {NAV_ITEMS.map(([label, id]) => (
                <button key={id} onClick={() => { goTo(id); setMenuOpen(false) }}>{label}</button>
              ))}
            </nav>
            <a className="btn btn-gold" href={whatsappUrl()} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Agendar avaliação
            </a>
          </aside>
        </div>
      )}

      <main>
        <section className="hero section-dark" id="inicio">
          <div className="hero-grain" />
          <div className="container hero-grid">
            <div className="hero-copy reveal-copy">
              <span className="eyebrow">Biomedicina Estética • São Paulo</span>
              <h1>Realço da sua beleza com <em>ciência e naturalidade.</em></h1>
              <div className="gold-divider"><span /><Sparkles size={18} /><span /></div>
              <p>
                Protocolos exclusivos que unem tecnologia, segurança e cuidado individualizado
                para valorizar sua essência com elegância e equilíbrio.
              </p>
              <div className="hero-actions">
                <a className="btn btn-gold" href={whatsappUrl()} target="_blank" rel="noreferrer">
                  <CalendarDays size={19} /> Agendar avaliação
                </a>
                <button className="text-link" onClick={() => goTo('sobre')}>
                  Saiba mais <ChevronDown size={16} />
                </button>
              </div>
            </div>

            <div className="hero-visual" aria-label="Retrato profissional">
              <img src={heroDayse} alt="Dra. Dayse Ettinger em ambiente profissional" />
              <div className="hero-logo-card">
                <img src={logo} alt="" />
                <div>
                  <strong>Drª Dayse Ettinger</strong>
                  <span>Biomédica Esteta</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pillars" aria-label="Diferenciais">
          <div className="container pillars-grid">
            {[
              [Sparkles, 'Protocolos Exclusivos', 'Planejamento personalizado para realçar a sua beleza única.'],
              [ShieldCheck, 'Segurança e Qualidade', 'Atendimento cuidadoso, técnica e acompanhamento profissional.'],
              [CheckCircle2, 'Resultados Naturais', 'Harmonia, leveza e respeito às características individuais.'],
              [Play, 'Tecnologia e Inovação', 'Protocolos atuais e recursos selecionados para cada necessidade.'],
            ].map(([Icon, title, text]) => (
              <article className="pillar" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-light" id="sobre">
          <div className="container about-grid">
            <div className="about-image-wrap">
              <img src={aboutDayse} alt="Dra. Dayse Ettinger" />
              <div className="about-frame" />
            </div>
            <div className="about-copy">
              <span className="eyebrow">Sobre mim</span>
              <h2>Cuidado que transforma.</h2>
              <p className="lead">Beleza com propósito, naturalidade e atenção aos detalhes.</p>
              <p>
                O atendimento é pensado de forma individual, considerando objetivos, características
                e necessidades de cada pessoa. A proposta é construir um plano coerente, seguro e elegante.
              </p>
              <p>
                Mais do que seguir tendências, cada protocolo busca valorizar a identidade de quem está
                sendo cuidado — com técnica, responsabilidade e acompanhamento.
              </p>
              <a className="btn btn-dark" href={siteConfig.instagram} target="_blank" rel="noreferrer">
                Conhecer mais no Instagram <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="treatments section-cream" id="tratamentos">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">Tratamentos</span>
              <h2>Procedimentos que realçam sua melhor versão.</h2>
              <p>Conheça alguns protocolos. A indicação final é definida após avaliação individual.</p>
            </div>

            <div className="treatment-grid">
              {treatmentData.map((treatment) => (
                <article className="treatment-card" key={treatment.id}>
                  <div className="treatment-media">
                    <img src={treatmentImages[treatment.image]} alt={treatment.name} />
                  </div>
                  <div className="treatment-content">
                    <span>Protocolo personalizado</span>
                    <h3>{treatment.name}</h3>
                    <p>{treatment.short}</p>
                    <button onClick={() => setSelectedTreatment(treatment)}>
                      Ver detalhes <ArrowRight size={15} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="center-actions">
              <a className="btn btn-outline-dark" href={whatsappUrl('Olá! Gostaria de saber quais tratamentos são mais indicados para mim.')} target="_blank" rel="noreferrer">
                Quero uma avaliação <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="results section-dark" id="resultados">
          <div className="container results-grid">
            <div>
              <span className="eyebrow">Resultados</span>
              <h2>Naturalidade em primeiro lugar.</h2>
              <p>
                Cada plano de tratamento parte de uma avaliação cuidadosa. O objetivo é equilibrar
                técnica, proporção e individualidade, sem padronizar rostos ou resultados.
              </p>
              <div className="check-list">
                {['Avaliação individualizada', 'Planejamento por etapas', 'Acompanhamento profissional', 'Foco em harmonia e naturalidade'].map(item => (
                  <div key={item}><CheckCircle2 size={18} /><span>{item}</span></div>
                ))}
              </div>
              <a className="btn btn-gold" href={siteConfig.instagram} target="_blank" rel="noreferrer">
                <InstagramIcon size={18} /> Ver conteúdos e resultados
              </a>
            </div>
            <div className="result-card-stack">
              <div className="quote-card quote-card-main">
                <Sparkles size={30} />
                <strong>“Realçar, não transformar.”</strong>
                <p>Uma estética sofisticada começa por respeitar aquilo que já é seu.</p>
              </div>
              <div className="quote-card quote-card-secondary">
                <ShieldCheck size={27} />
                <strong>Segurança + técnica + cuidado</strong>
                <p>Decisões conscientes e protocolos planejados para cada fase.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="videos section-light" id="videos">
          <div className="container videos-grid">
            <div className="video-poster">
              <img src={heroDayse} alt="Conteúdos da Dra. Dayse Ettinger" />
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="play-button" aria-label="Abrir vídeos no Instagram">
                <Play fill="currentColor" />
              </a>
            </div>
            <div className="videos-copy">
              <span className="eyebrow">Conteúdo & informação</span>
              <h2>Vídeos para você entender cada cuidado.</h2>
              <p>
                Acompanhe conteúdos sobre procedimentos, dúvidas frequentes, cuidados e bastidores
                diretamente pelo Instagram.
              </p>
              <a className="btn btn-dark" href={siteConfig.instagram} target="_blank" rel="noreferrer">
                <InstagramIcon size={18} /> Acessar @dradaysettinger
              </a>
            </div>
          </div>
        </section>

        <section className="appointment section-cream" id="contato">
          <div className="container appointment-grid">
            <div className="appointment-copy">
              <span className="eyebrow">Agendamento</span>
              <h2>Vamos conversar sobre o que faz sentido para você?</h2>
              <p>Preencha os campos e o site monta sua mensagem automaticamente para o WhatsApp.</p>
              <div className="contact-mini-list">
                <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp para agendamentos</a>
                <a href={siteConfig.instagram} target="_blank" rel="noreferrer"><InstagramIcon /> @dradaysettinger</a>
                <span><Clock3 /> {siteConfig.hours[0]}</span>
              </div>
            </div>

            <form className="appointment-form" onSubmit={submitAppointment}>
              <label>
                Seu nome
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Como podemos te chamar?" />
              </label>
              <label>
                Interesse principal
                <select value={form.treatment} onChange={(e) => setForm({ ...form, treatment: e.target.value })}>
                  <option value="">Quero entender as opções</option>
                  {treatmentData.map((t) => <option key={t.id}>{t.name}</option>)}
                </select>
              </label>
              <label>
                Conte um pouco do que procura
                <textarea rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Ex.: quero melhorar a qualidade da pele..." />
              </label>
              <button className="btn btn-gold submit-btn" type="submit">
                <MessageCircle size={19} /> Enviar para o WhatsApp
              </button>
              <small>Ao clicar, você será direcionada(o) ao WhatsApp. Nenhum dado fica armazenado neste site.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer section-dark">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="Logo Dra. Dayse Ettinger" />
            <p>Biomedicina estética com cuidado individualizado, segurança e naturalidade.</p>
            <div className="social-row">
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
              <a href={siteConfig.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a>
            </div>
          </div>
          <div>
            <h4>Navegação</h4>
            {NAV_ITEMS.map(([label, id]) => <button className="footer-link" key={id} onClick={() => goTo(id)}>{label}</button>)}
          </div>
          <div>
            <h4>Contato</h4>
            <a className="footer-contact" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a>
            <a className="footer-contact" href={siteConfig.instagram} target="_blank" rel="noreferrer"><InstagramIcon size={17} /> @dradaysettinger</a>
            <span className="footer-contact"><Clock3 size={17} /> {siteConfig.city}</span>
          </div>
          <div>
            <h4>Horário</h4>
            {siteConfig.hours.map((hour) => <p key={hour}>{hour}</p>)}
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {year} Dra. Dayse Ettinger. Todos os direitos reservados.</span>
          <span>Site premium • responsivo • integrado ao WhatsApp</span>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
        <MessageCircle />
        <span>Agendar</span>
      </a>

      {selectedTreatment && (
        <div className="modal-backdrop" onMouseDown={() => setSelectedTreatment(null)}>
          <div className="treatment-modal" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={selectedTreatment.name}>
            <button className="modal-close" onClick={() => setSelectedTreatment(null)} aria-label="Fechar"><X /></button>
            <img src={treatmentImages[selectedTreatment.image]} alt={selectedTreatment.name} />
            <div className="modal-content">
              <span className="eyebrow">Tratamento</span>
              <h2>{selectedTreatment.name}</h2>
              <p>{selectedTreatment.description}</p>
              <div className="modal-note">
                <ShieldCheck />
                <span>A indicação, técnica e quantidade são definidas somente após avaliação profissional.</span>
              </div>
              <a className="btn btn-gold" href={whatsappUrl(`Olá! Gostaria de agendar uma avaliação para conversar sobre ${selectedTreatment.name}.`)} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Quero saber mais
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
