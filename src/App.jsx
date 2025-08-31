import React, {useEffect, useState} from 'react'
import translations from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App(){
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'es')

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light')
    localStorage.setItem('theme', theme)
  },[theme])

  useEffect(()=>{
    localStorage.setItem('lang', lang)
  },[lang])

  const t = translations[lang]

  return (
    <div>
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
      <main>
        <Hero t={t} />
  <section className="section container section-tools">
          <h3 className="mb-3">{t.toolsTitle}</h3>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="card card-custom p-3">
                <h5>Frontend</h5>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {t.tools.front.map((tool,i)=> (
                    <div className="tool-item" key={i}>
                      <i className={`${tool.icon} tool-icon`}></i>
                      <div className="tool-name">{tool.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="card card-custom p-3">
                <h5>Backend & DB</h5>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {t.tools.backend.map((tool,i)=> (
                    <div className="tool-item" key={i}>
                      <i className={`${tool.icon} tool-icon`}></i>
                      <div className="tool-name">{tool.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="card card-custom p-3">
                <h5>Office</h5>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {t.tools.office.map((tool,i)=> (
                    <div className="tool-item" key={i}>
                      <i className={`${tool.icon} tool-icon`}></i>
                      <div className="tool-name">{tool.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="card card-custom p-3">
                <h5>Sistema / IDE</h5>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {t.tools.toolsOS.map((tool,i)=> (
                    <div className="tool-item" key={i}>
                      <i className={`${tool.icon} tool-icon`}></i>
                      <div className="tool-name">{tool.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects t={t} />

        <section className="section container section-contact">
          <Contact t={t} />
        </section>
      </main>

      <footer className="text-center py-3">
        <small className="text-muted">© {new Date().getFullYear()} {t.name} — {t.title}</small>
      </footer>
    </div>
  )
}
