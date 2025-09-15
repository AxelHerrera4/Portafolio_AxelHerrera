import React from 'react'

export default function Projects({t}){
  return (
    <section className="section container">
      <h3 className="mb-3">{t.projectsTitle}</h3>
      <div className="row g-3">
        {t.projects.map((p,idx)=> {
          // Mapear imágenes según el proyecto
          const images = [
            '/images/Sabrosura.JPG',
            '/images/ecommerceMovil.png',
            '/images/Administrador De Tareas.png',
            '/images/SistemaCitasMedicas.JPG'
          ]
          const img = images[idx] || '/images/placeholder.png'

          return (
            <div className="col-12 col-md-6" key={idx}>
              <div className="card card-custom p-3">
                <div className="project-card">
                  <img className="project-img" src={img} alt={p.title} onError={(e)=> e.target.src = '/images/placeholder.png'} />
                  <div style={{flex:1}}>
                    <h5 className="mb-1">{p.title}</h5>
                    <p className="mb-0 text-muted">{p.desc}</p>
                    <div className="mt-2 d-flex gap-2">
                      {p.live && (
                        <a className="btn btn-sm btn-accent" href={p.live} target="_blank" rel="noreferrer">{t.lang === 'EN' ? 'View demo' : 'Ver demo'}</a>
                      )}
                      <a className="btn btn-sm btn-accent" href={p.repo} target="_blank" rel="noreferrer">{t.lang === 'EN' ? 'Repo' : 'Repositorio'}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
