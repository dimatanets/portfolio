const { useState, useEffect } = React;

/* ── Scroll Reveal ── */
function useReveal() {
  useEffect(() => {
    const run = () => {
      document.querySelectorAll('.reveal:not(.in)').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 32)
          el.classList.add('in');
      });
    };
    run();
    window.addEventListener('scroll', run, { passive: true });
    return () => window.removeEventListener('scroll', run);
  });
}

/* ── Lightbox Component ── */
function Lightbox({ activeImage, onClose }) {
  if (!activeImage) return null;
  return (
    <div className="lightbox active" onClick={onClose}>
      <img className="lightbox-img" src={activeImage} alt="Fullscreen View" />
    </div>
  );
}

/* ── App ── */
function App() {
  const [route, setRoute] = useState(window.location.hash.replace('#', '') || 'home');
  const [lightboxImage, setLightboxImage] = useState(null);

  const go = (to) => {
    const basePath = window.location.pathname.endsWith('index.html') 
      ? window.location.pathname.replace(/index\.html$/, '') 
      : window.location.pathname;
      
    const path = to === 'home' ? basePath : basePath + '#' + to;
    window.history.pushState(null, '', path);
    setRoute(to);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    if (window.location.pathname.endsWith('index.html')) {
      const cleanPath = window.location.pathname.replace(/index\.html$/, '');
      window.history.replaceState(null, '', cleanPath + window.location.hash);
    }
    
    const onPop = () => {
      setRoute(window.location.hash.replace('#', '') || 'home');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    
    window.addEventListener('popstate', onPop);
    window.addEventListener('hashchange', onPop);
    return () => {
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('hashchange', onPop);
    };
  }, []);

  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [lightboxImage]);

  const activeCase = portfolioData.find(c => c.id === route);
  const idx = portfolioData.findIndex(c => c.id === route);
  const nextCase = portfolioData[(idx + 1) % portfolioData.length];
  const prevCase = portfolioData[(idx - 1 + portfolioData.length) % portfolioData.length];

  return (
    <>
      {activeCase
        ? <CasePage key={route} caseData={activeCase} nextCase={nextCase} prevCase={prevCase} go={go} openLightbox={setLightboxImage} />
        : <HomePage key="home" go={go} />
      }
      <Lightbox activeImage={lightboxImage} onClose={() => setLightboxImage(null)} />
    </>
  );
}

/* ── Nav ── */
function Nav({ go }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-brand" onClick={() => go('home')}>
          <div className="nav-logo">Dmytro Tanets</div>
          <div className="nav-role">Product Designer</div>
        </div>
        <div className="nav-links">
          <a href="mailto:dmitriytanets@gmail.com" className="animated-link">dmitriytanets@gmail.com</a>
        </div>
      </div>
    </nav>
  );
}

/* ── Footer ── */
function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a href="mailto:dmitriytanets@gmail.com" className="animated-link">dmitriytanets@gmail.com</a>
          <span className="footer-separator">/</span>
          <a href="https://www.linkedin.com/in/dmitriytanets/" target="_blank" rel="noopener noreferrer" className="animated-link">LinkedIn</a>
          <span className="footer-separator">/</span>
          <a href="https://dribbble.com/dmitriyt95" target="_blank" rel="noopener noreferrer" className="animated-link">Dribbble</a>
        </div>
        
        <div className="footer-back-to-top">
          <a href="#" onClick={scrollToTop} className="back-to-top-link animated-link">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ── Home Page ── */
function HomePage({ go }) {
  useReveal();

  return (
    <>
      <Nav go={go} />

      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title reveal">Hi, I’m Dmytro, a product designer.</h1>
          <p className="hero-sub reveal d1">
            I specialize in turning complex business requirements into intuitive, scalable digital products.
          </p>
        </div>
      </section>

      <div className="projects">
        <div className="projects-inner">
          <div className="projects-grid">
            {portfolioData.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} go={go} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

/* ── Project Card ── */
function ProjectCard({ project, index, go }) {
  const thumb = project.images.find(img => img.includes('thumb-small-720'))
             || project.images.find(img => img.includes('thumb-'))
             || project.images[0];

  return (
    <a
      className={`project-card reveal d${(index % 3) + 1}`}
      href={`#${project.id}`}
      onClick={e => { e.preventDefault(); go(project.id); }}
    >
      <div className="card-thumb">
        <img src={thumb} alt={project.title} loading={index > 5 ? 'lazy' : 'eager'} />
      </div>
      <div className="card-info">
        <div className="card-tags">
          {project.tags.map(t => <span key={t} className="card-tag">{t}</span>)}
        </div>
        <div className="card-title">{project.title}</div>
        <div className="card-sub">{project.subtitle}</div>
      </div>
    </a>
  );
}

/* ── Case Page ── */
function CasePage({ caseData, nextCase, prevCase, go, openLightbox }) {
  useReveal();

  return (
    <div className="case-page">
      <Nav go={go} />

      <div className="case-header">
        <div className="case-header-inner reveal">
          <div className="case-header-main">
            <h1 className="case-title">{caseData.title}</h1>
            <p className="case-subtitle">{caseData.subtitle}</p>
          </div>
          <div className="case-header-role">
            <table className="metadata-table">
              <tbody>
                <tr>
                  <td className="metadata-label">Category</td>
                  <td className="metadata-value">
                    {caseData.metadata?.Category?.join(', ')}
                  </td>
                </tr>
                <tr>
                  <td className="metadata-label">Year</td>
                  <td className="metadata-value">{caseData.metadata?.Year}</td>
                </tr>
                <tr>
                  <td className="metadata-label">Role</td>
                  <td className="metadata-value">{caseData.metadata?.Role}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="case-blocks-container">
        {caseData.blocks?.map((block, idx) => {
          if (block.type === 'text') {
            return (
              <div key={`block-${idx}`} className="case-content reveal">
                <div
                  className="case-text-block"
                  dangerouslySetInnerHTML={{ __html: block.content }}
                />
              </div>
            );
          } else if (block.type === 'image') {
            // Usually the first image is the hero, which doesn't have large padding
            const isHero = idx === 0 && block.src.includes('thumb-big');
            const imgClass = isHero ? 'case-hero-image reveal' : 'case-image reveal';
            return (
              <div key={`block-${idx}`} className={imgClass}>
                <img 
                  src={block.src} 
                  loading={isHero ? "eager" : "lazy"} 
                  onClick={() => openLightbox(block.large || block.src)} 
                  style={{ cursor: (block.large || block.src) ? 'zoom-in' : 'default' }}
                />
              </div>
            );
          } else if (block.type === 'gallery') {
            return (
              <div key={`block-${idx}`} className="case-gallery reveal">
                <div className="article-image-grid">
                  {block.images.map((img, i) => (
                    <div key={i} className="article-image-wrapper">
                      <img 
                        src={img.src} 
                        loading="lazy" 
                        onClick={() => openLightbox(img.large || img.src)}
                        style={{ cursor: (img.large || img.src) ? 'zoom-in' : 'default' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="case-next reveal">
        <div className="case-next-inner">
          <h2 className="read-next-title">Read next</h2>
          <div className="projects-grid">
            {portfolioData.filter(c => c.id !== caseData.id).sort(() => 0.5 - Math.random()).slice(0, 3).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} go={go} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
