import React from 'react'

export default function Hero({t}){
  return (
    <header className="section bg-transparent">
      <div className="container d-flex gap-4 align-items-center flex-column flex-md-row">
  <img src="/images/AxelCara.JPG" alt="Axel Herrera" className="avatar" style={{width:180,height:180}} />
        <div>
          <h1 className="h3">{t.name}</h1>
          <p className="text-muted">{t.title}</p>
          <p>{t.summary}</p>
          <div className="d-flex gap-2">
            <a className="btn btn-primary btn-sm" href="mailto:axeldoge4@gmail.com">Email</a>
            <a className="btn btn-outline-secondary btn-sm" href="https://wa.me/593988334397" target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="btn btn-outline-secondary btn-sm" href="https://github.com/AxelHerrera4" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn btn-outline-secondary btn-sm" href="https://www.linkedin.com/in/axel-herrera-83101b2aa/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </header>
  )
}
