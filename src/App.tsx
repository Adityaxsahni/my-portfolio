import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUp, ArrowUpRight, Github, Linkedin, Mail, Menu, Terminal, X } from 'lucide-react'

const experience = [
  {
    period: '2024 — PRESENT', company: 'Freelance / Independent', role: 'Software Engineer',
    location: 'India · Remote',
    body: 'Designing and shipping focused digital products for people who care about speed, clarity, and craft.',
    impact: ['Built full-stack applications from brief to production', 'Created reusable UI systems with attention to performance'],
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    period: '2022 — 2024', company: 'Product Engineering', role: 'Full-Stack Developer',
    location: 'Bengaluru, India',
    body: 'Worked across product, platform, and data layers to turn ambiguous problems into dependable software.',
    impact: ['Improved core workflows through thoughtful frontend architecture', 'Designed APIs and data models for evolving products'],
    stack: ['JavaScript', 'Python', 'REST APIs', 'AWS'],
  },
  {
    period: '2021 — 2022', company: 'Early Career', role: 'Engineer & Builder',
    location: 'India',
    body: 'Built a strong foundation in computer science, systems thinking, and the habit of learning in public.',
    impact: ['Shipped experiments across web, automation, and developer tooling', 'Translated ideas into useful, testable prototypes'],
    stack: ['Python', 'C++', 'Git', 'SQL'],
  },
]

const skillGroups = [
  { label: 'LANGUAGES', items: ['TypeScript', 'JavaScript', 'Python', 'C++', 'SQL'] },
  { label: 'WEB & FRAMEWORKS', items: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'] },
  { label: 'DATA & CLOUD', items: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Redis'] },
  { label: 'PRACTICE', items: ['System design', 'API design', 'Testing', 'CI/CD', 'Observability'] },
]

const projects = [
  { number: '01', name: 'Signalboard', type: 'DATA PLATFORM', description: 'A calm operational dashboard for turning noisy product signals into decisions teams can act on.', outcome: 'Designed for clarity at a glance', tags: ['React', 'TypeScript', 'Charts'], href: 'https://github.com/' },
  { number: '02', name: 'Threadline', type: 'COLLABORATION TOOL', description: 'A real-time workspace that gives distributed teams a shared sense of context without the noise.', outcome: 'Fast, focused, and built to scale', tags: ['Next.js', 'Node.js', 'WebSockets'], href: 'https://github.com/' },
  { number: '03', name: 'Field Notes', type: 'OPEN SOURCE', description: 'A lightweight knowledge system for capturing technical decisions, patterns, and lessons learned.', outcome: 'Small tool, surprisingly useful', tags: ['Python', 'PostgreSQL', 'Docker'], href: 'https://github.com/' },
]

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className="section-heading reveal"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p className="section-copy">{copy}</p></div>
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id], header[id]')
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-30% 0px -60% 0px' })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <div className="noise" aria-hidden="true" />
    <nav className={`nav ${menuOpen ? 'menu-open' : ''}`} aria-label="Primary navigation">
      <a className="brand" href="https://aditya.is.dev/" onClick={closeMenu}><span>AK</span><i>ADITYA KUMAR</i></a>
      <div className="nav-links">
        {[{ label: 'work', href: '#work' }, { label: 'about', href: '#about' }, { label: 'skills', href: '#skills' }, { label: 'blog', href: '#experience' }, { label: 'contact', href: '#contact' }].map((item) => <a key={item.label} className={activeSection === item.href.slice(1) ? 'active' : ''} href={item.href} onClick={closeMenu}>{item.label}</a>)}
      </div>
      <a className="nav-status" href="mailto:hello@adityakumar.dev"><span className="status-dot" /> QUICK CONNECT</a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
    </nav>

    <header id="home" className="hero section-pad">
      <div className="hero-copy reveal is-visible">
        <p className="eyebrow">SOFTWARE ENGINEER <span>/</span> BUILDER <span>/</span> CURIOUS MIND</p>
        <h1>SOFTWARE<br /><span>ENGINEER<span className="hero-dot">.</span></span><br /><em>BUILDER<span className="hero-dot">.</span></em><br /><span>SCALER<span className="hero-dot">.</span></span></h1>
        <p className="hero-description">I’m Aditya Kumar, a software engineer focused on building clear, resilient products and the systems behind them.</p>
        <div className="hero-actions"><a className="button button-primary" href="#work">View selected work <ArrowDown size={16} /></a><a className="terminal-badge" href="#contact"><Terminal size={18} /> terminal <ArrowUpRight size={14} /></a><a className="text-link" href="#contact">Let’s connect <ArrowUpRight size={16} /></a></div>
      </div>
      <div className="hero-aside reveal is-visible">
        <div className="portrait-frame"><img src={`${import.meta.env.BASE_URL}profile.png`} alt="Professional portrait of Aditya Kumar" /><span className="portrait-label">PORTRAIT / 2026</span></div>
        <div className="hero-meta"><span>01</span><p>Building from<br /><strong>first principles</strong></p><span className="arrow-mark">↘</span></div>
      </div>
      <div className="hero-bottom"><span>BASED IN INDIA</span><span>SCROLL TO EXPLORE <ArrowDown size={14} /></span><span>AVAILABLE / 2026</span></div>
    </header>

    <main>
      <section id="about" className="section-pad about-section"><SectionHeading eyebrow="01 / THE NARRATIVE" title="A builder's mindset." copy="The best software is felt before it is noticed: clear in its purpose, calm under pressure, and designed to make the difficult feel natural." />
        <div className="about-grid reveal"><div className="about-quote">“Good engineering is a practice of making things <span>understandable.</span>”</div><div className="about-text"><p>I enjoy the space between an idea and the thing that actually works. My work moves across interfaces, APIs, and the decisions that connect them.</p><p>I care about simple systems, useful abstractions, and leaving codebases better than I found them. Lately, I’m exploring resilient product architecture and the details that make software feel human.</p><a className="text-link" href="mailto:hello@adityakumar.dev">Say hello <ArrowUpRight size={16} /></a></div></div>
        <div className="stats reveal"><div><strong>05+</strong><span>YEARS LEARNING<br />& BUILDING</span></div><div><strong>20+</strong><span>PROJECTS<br />SHIPPED</span></div><div><strong>∞</strong><span>QUESTIONS<br />STILL OPEN</span></div></div>
      </section>

      <section id="experience" className="section-pad experience-section"><SectionHeading eyebrow="02 / PROFESSIONAL TENURE" title="Where the work happened." copy="A selection of roles and seasons that shaped how I think, collaborate, and ship." />
        <div className="experience-list">{experience.map((item, index) => <article className="experience-item reveal" key={item.company}><div className="experience-index">0{index + 1}</div><div className="experience-main"><div className="experience-top"><div><p className="company">{item.company}</p><h3>{item.role}</h3></div><span className="period">{item.period}</span></div><p className="location">{item.location}</p><p className="experience-body">{item.body}</p><ul>{item.impact.map((point) => <li key={point}>{point}</li>)}</ul><div className="tags">{item.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section id="skills" className="section-pad skills-section"><SectionHeading eyebrow="03 / TECHNICAL PROWESS" title="A considered stack." copy="Tools are a means to an end. I choose the ones that keep the feedback loop short and the product dependable." /><div className="skills-grid reveal">{skillGroups.map((group) => <div className="skill-group" key={group.label}><p className="skill-label">{group.label}</p><div className="skill-items">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>

      <section id="work" className="section-pad work-section"><SectionHeading eyebrow="04 / SELECTED WORK" title="Small systems. Real outcomes." copy="A few things I’ve made while exploring the intersection of thoughtful interfaces and reliable engineering." /><div className="project-grid">{projects.map((project) => <a className="project-card reveal" href={project.href} target="_blank" rel="noreferrer" key={project.number}><div className="project-top"><span>{project.number}</span><ArrowUpRight size={18} /></div><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><p className="project-outcome">↳ {project.outcome}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></a>)}</div></section>

      <section id="contact" className="section-pad contact-section"><div className="contact-content reveal"><p className="eyebrow">05 / LET’S BUILD SOMETHING TOGETHER</p><h2>Have a problem<br />worth <em>solving?</em></h2><p>I’m always open to thoughtful conversations, ambitious products, and work that has a point of view.</p><a className="button button-primary" href="mailto:hello@adityakumar.dev">Start a conversation <Mail size={16} /></a></div><div className="contact-links reveal"><a href="mailto:hello@adityakumar.dev"><Mail size={18} /> hello@adityakumar.dev</a><a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18} /> github.com/adityakumar</a><a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18} /> linkedin.com/in/adityakumar</a></div></section>
    </main>

    <footer className="footer section-pad"><a className="brand" href="https://aditya.is.dev/"><span>AK</span><i>ADITYA KUMAR</i></a><p>© 2026 ADITYA KUMAR. BUILT WITH INTENTION.</p><a className="back-top" href="#home">BACK TO TOP <ArrowUp size={14} /></a></footer>
  </div>
}