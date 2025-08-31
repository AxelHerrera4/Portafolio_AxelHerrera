import React from 'react'

export default function Contact({t}){
  return (
    <section className="section container">
      <h3 className="mb-3">{t.contactTitle}</h3>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="card card-custom p-3">
            <p>
              <i className="fas fa-envelope me-2"></i>
              <strong>Email:</strong>
              <span className="ms-2">axeldoge4@gmail.com</span>
              <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => {navigator.clipboard.writeText('axeldoge4@gmail.com')}}>Copiar</button>
            </p>
            <p>
              <i className="fab fa-whatsapp me-2" style={{color:'#25D366'}}></i>
              <a href="https://wa.me/593988334397" target="_blank" rel="noreferrer">+593 988 334 397</a>
            </p>
            <p>
              <i className="fab fa-github me-2"></i>
              <a href="https://github.com/AxelHerrera4" target="_blank" rel="noreferrer">github.com/AxelHerrera4</a>
            </p>
            <p>
              <i className="fab fa-linkedin me-2" style={{color:'#0A66C2'}}></i>
              <a href="https://www.linkedin.com/in/axel-herrera-83101b2aa/" target="_blank" rel="noreferrer">Axel Herrera</a>
            </p>
            <p><strong>Idiomas:</strong> Español (Nativo), Inglés (B1)</p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card card-custom p-3">
            <h5>Mensaje</h5>
            <form action="#" onSubmit={(e)=>{e.preventDefault(); alert('Gracias, revisaré tu mensaje') }}>
              <div className="mb-2">
                <input className="form-control" placeholder="Nombre" />
              </div>
              <div className="mb-2">
                <input className="form-control" placeholder="Email" />
              </div>
              <div className="mb-2">
                <textarea className="form-control" rows="3" placeholder="Mensaje"></textarea>
              </div>
              <button className="btn btn-accent btn-sm">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
