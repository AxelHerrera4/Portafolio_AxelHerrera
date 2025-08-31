import React from 'react'

export default function Navbar({lang,setLang,theme,setTheme,t}){
  return (
  <nav className="navbar navbar-expand-lg p-3">
      <div className="container">
  <a className="navbar-brand" href="#">[Portafolio virtual]</a>
        <div className="d-flex gap-2 align-items-center">
      <a className="btn btn-accent btn-sm" href="/00HerreraHojaDeVida.pdf.pdf" download>{t.downloadCV}</a>
      <button className="btn btn-sm btn-accent-outline" onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark') }>{theme === 'dark' ? 'Light' : 'Dark'}</button>
      <button className="btn btn-sm btn-accent-outline" onClick={()=> setLang(lang === 'es' ? 'en' : 'es') }>{t.lang}</button>
        </div>
      </div>
    </nav>
  )
}
