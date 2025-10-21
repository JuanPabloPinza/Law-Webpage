'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [selectedLawyer, setSelectedLawyer] = useState<{
    name: string;
    role: string;
    specialty: string;
    image: string;
    imagePosition: string;
    fullDescription: string;
  } | null>(null)

  // Hook para animaciones al scroll
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-slate-50 to-stone-100 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        

        {/* Desktop/Tablet: ambas damas a los lados */}
        <div className="absolute left-20 lg:left-24 top-0 bottom-0 w-64 lg:w-80 hidden md:flex items-center justify-start opacity-35 pointer-events-none">
          <Image
            src="/dama-de-justicia.png"
            alt="Dama de Justicia"
            width={359}
            height={800}
            className="h-full w-auto object-contain"
            priority
          />
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-72 lg:w-96 hidden md:flex items-center justify-end opacity-35 pointer-events-none">
          <Image
            src="/dama-justicia-2.png"
            alt="Dama de Justicia"
            width={359}
            height={800}
            className="h-full w-auto object-contain"
            priority
          />
        </div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <svg className="w-16 h-16 mx-auto mb-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-slate-800 mb-4 tracking-tight">
              JARA, ALARCÓN &<br />SAQUICELA
            </h1>
            <div className="inline-block">
              <div className="border-t-2 border-slate-600 pt-4 mt-4">
                <p className="text-xl md:text-2xl text-slate-600 tracking-[0.3em] font-light">
                  ASOCIADOS
                </p>
              </div>
            </div>
            <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Excelencia jurídica al servicio de nuestros clientes
            </p>

            {/* Móvil: solo una dama centrada debajo del texto */}
            <div className="flex md:hidden w-full justify-center items-center mt-12">
              <Image
                src="/dama-de-justicia.png"
                alt="Dama de Justicia"
                width={180}
                height={400}
                className="w-32 h-auto opacity-40"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-800 shadow-lg">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center">
            {[
              { label: 'Inicio', href: '#inicio' },
              { label: 'Nosotros', href: '#nosotros' },
              { label: 'Áreas de Práctica', href: '#servicios' },
              { label: 'Equipo', href: '#equipo' },
              { label: 'Contacto', href: '#contacto' }
            ].map((item) => (
              <li key={item.label}>
                <Link 
                  href={item.href}
                  className="block px-6 py-4 text-slate-100 hover:bg-slate-700 transition-colors duration-200 font-light tracking-wide"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Introduction */}
      <section id="inicio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-8 scroll-animate">
              Comprometidos con la Justicia
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-8 scroll-animate-scale"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6 scroll-animate delay-100">
              Somos un bufete de abogados de reconocida trayectoria, especializados en brindar asesoría legal integral a personas naturales y jurídicas. Nuestro equipo de profesionales altamente calificados se distingue por su compromiso con la excelencia y la defensa rigurosa de los derechos de nuestros clientes.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed scroll-animate delay-200">
              Con años de experiencia en el ejercicio del derecho, ofrecemos soluciones jurídicas estratégicas adaptadas a las necesidades específicas de cada caso.
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="nosotros" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4 text-center scroll-animate">
              Nuestra Firma
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-12 scroll-animate-scale"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="scroll-animate-left">
                <p className="text-slate-600 leading-relaxed mb-6">
                  Jara, Alarcón & Saquicela Asociados fue fundada con la visión de crear una firma legal que combine la tradición jurídica con enfoques innovadores y eficientes. Nuestra práctica se fundamenta en valores sólidos de integridad, profesionalismo y resultados.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Contamos con un equipo multidisciplinario de abogados especializados en diversas áreas del derecho, lo que nos permite ofrecer un servicio integral y coordinado a nuestros clientes.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Cada miembro de nuestro equipo está comprometido con la excelencia académica y profesional, manteniendo una actualización constante en las últimas tendencias legales y jurisprudenciales.
                </p>
              </div>
              <div className="bg-white p-8 shadow-lg border border-slate-200 scroll-animate-right">
                <h3 className="text-2xl font-serif text-slate-800 mb-6">Nuestros Principios</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-slate-700 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Excelencia Profesional</h4>
                      <p className="text-slate-600 text-sm">Compromiso con los más altos estándares de calidad en cada caso.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-slate-700 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Ética y Transparencia</h4>
                      <p className="text-slate-600 text-sm">Actuamos con integridad absoluta en todas nuestras relaciones profesionales.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-slate-700 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Compromiso con el Cliente</h4>
                      <p className="text-slate-600 text-sm">Sus objetivos son nuestros objetivos. Trabajamos incansablemente por sus intereses.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-slate-700 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Confidencialidad</h4>
                      <p className="text-slate-600 text-sm">Protección absoluta de la información y privacidad de nuestros clientes.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4 text-center scroll-animate">
            Áreas de Práctica
          </h2>
          <div className="w-24 h-1 bg-slate-700 mx-auto mb-12 scroll-animate-scale"></div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Derecho Civil',
                description: 'Asesoramiento integral en contratos, obligaciones, derecho de familia, sucesiones, responsabilidad civil y patrimonial. Representación judicial en todas las instancias. Soluciones estratégicas en derecho de personas, bienes y herencias.',
                featured: true
              },
              {
                title: 'Derecho Penal',
                description: 'Defensa penal especializada en todas las etapas procesales: investigación previa, instrucción fiscal y juicio. Protección de garantías constitucionales. Representación ante autoridades judiciales en delitos de toda naturaleza y gravedad.',
                featured: true
              },
              {
                title: 'Derecho Constitucional',
                description: 'Defensa y protección de derechos fundamentales. Acciones de protección, hábeas corpus, hábeas data y cumplimiento. Recursos extraordinarios de protección. Control constitucional de actos del poder público y garantías jurisdiccionales.',
                featured: true
              }
            ].map((service, index) => (
              <div key={index} className={`bg-slate-50 border-l-4 border-slate-700 p-6 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden scroll-animate delay-${index + 1}00`}>
                <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
                  {index === 0 && (
                    // Ácono de Derecho Civil: Documento/Contrato con pluma
                    <svg className="w-32 h-32 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                      <path d="M8 16h8v2H8zm0-3h8v1H8zm0-3h5v1H8z" opacity="0.7"/>
                      <path d="M16 9l-2-2v4l4-4-2 2z" opacity="0.5"/>
                    </svg>
                  )}
                  {index === 1 && (
                    // Ácono de Derecho Penal: Martillo de juez con balanza
                    <svg className="w-32 h-32 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83V6.31l6-2.12 6 2.12v4.78z"/>
                      <path d="M10 8h4v2h-4zm-1 3h6v1H9zm1 2h4v1h-4z" opacity="0.6"/>
                      <circle cx="12" cy="12" r="1.5" opacity="0.8"/>
                    </svg>
                  )}
                  {index === 2 && (
                    // Ácono de Derecho Constitucional: Edificio gubernamental/columnas
                    <svg className="w-32 h-32 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L2 6v2h20V6l-10-5zM4 8v9H3v2h18v-2h-1V8H4zm2 9V8h2v9H6zm4 0V8h2v9h-2zm4 0V8h2v9h-2zm4 0V8h2v9h-2z"/>
                      <rect x="2" y="19" width="20" height="2" opacity="0.8"/>
                      <path d="M12 3L6 6h12l-6-3z" opacity="0.6"/>
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-serif text-slate-800 mb-3 relative z-10">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm relative z-10">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Carousel */}
      <section id="equipo" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4 text-center scroll-animate">
            Nuestro Equipo
          </h2>
          <div className="w-24 h-1 bg-slate-700 mx-auto mb-12 scroll-animate-scale"></div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Dra. Joyce Jara',
                  role: 'Socia',
                  specialty: 'Especialista en Derecho Civil y Constitucional',
                  image: '/dra-jara.webp',
                  imagePosition: 'center 20%',
                  shortDescription: 'Reconocida por su experiencia como litigante y su habilidad para combinar la técnica jurídica con una visión moderna del Derecho. Amplia experiencia en debate nacional e internacional.',
                  fullDescription: 'La Dra. Joyce Jara cuenta con una trayectoria marcada por la excelencia, la ética y el compromiso con la justicia. Abogada graduada de la Pontificia Universidad Católica del Ecuador, se ha especializado en la resolución de asuntos civiles y constitucionales, destacándose por su sólida formación jurídica y su capacidad estratégica en litigación.\n\nReconocida por su experiencia como litigante y su habilidad para combinar la técnica jurídica con una visión moderna del Derecho, posee amplia experiencia en debate nacional e internacional y en el uso de herramientas digitales aplicadas a la práctica legal.\n\nSu ejercicio profesional se caracteriza por la precisión analítica, la proactividad y un profundo compromiso ético orientado al logro de resultados justos y eficaces.\n\n"¡Sé fuerte y valiente! ¡No tengas miedo ni te desanimes! Porque el Señor tu Dios te acompañará dondequiera que vayas." -Josué 1:9'
                },
                {
                  name: 'Dr. Antonino Alarcón',
                  role: 'Socio',
                  specialty: 'Especialista en Derecho Penal y Constitucional',
                  image: '/dr-alarcon.webp',
                  imagePosition: 'center 65%',
                  shortDescription: 'Profesional destacado por su profundo conocimiento y por sus estrategias de defensa innovadoras y meticulosas. Su práctica se ha consolidado en el litigio de alta complejidad.',
                  fullDescription: 'El Dr. Antonino Alarcón, abogado graduado en la Pontificia Universidad Católica del Ecuador, cuenta con una larga trayectoria de especialización en asuntos penales y en temas constitucionales.\n\nProfesional destacado por su profundo conocimiento y por sus estrategias de defensas innovadoras y meticulosas. Su práctica se ha consolidado en el litigio de alta complejidad.\n\nSu principal compromiso es brindar un servicio de calidad donde preponderen sus principios éticos, la transparencia y un alto rigor técnico.\n\nEl conocimiento y la experiencia del Dr. Alarcón están al servicio y disposición de cada caso concreto, asegurando la mejor defensa técnica.'
                },
                {
                  name: 'Dra. Ana Camila Saquicela',
                  role: 'Socia',
                  specialty: 'Especialista en Derecho Constitucional y Penal',
                  image: '/dra-saquicela.jpg',
                  imagePosition: 'center 45%',
                  shortDescription: 'Abogada con visión humanista del Derecho, orientada hacia la protección de garantías constitucionales y administración de justicia penal.',
                  fullDescription: 'La Dra. Ana Camila Saquicela se destaca por su sólida formación jurídica y su compromiso con la defensa de los derechos fundamentales. Abogada con una visión humanista del Derecho, ha orientado su carrera hacia la protección de las garantías constitucionales y la administración de justicia penal, actuando siempre con ética, firmeza y responsabilidad social.\n\n"La justicia no es un ideal lejano, sino el reflejo de nuestra determinación por hacer lo correcto."\n\nSu ejercicio profesional se distingue por la argumentación precisa, la sensibilidad ante las causas humanas y una profunda vocación de servicio. Cree en la justicia como un instrumento de transformación y equidad, buscando en cada caso no solo resolver conflictos, sino también restaurar la confianza en el Derecho.'
                }
              ].map((lawyer, index) => (
                <div 
                  key={index} 
                  className={`group relative bg-slate-800 overflow-hidden shadow-xl h-96 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer scroll-animate delay-${index + 1}00`}
                  onClick={() => setSelectedLawyer(lawyer)}
                >
                  {/* Overlay gradient que se intensifica en hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 z-10"></div>
                  
                  <img
                    alt={lawyer.name}
                    src={lawyer.image}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    style={{ objectPosition: lawyer.imagePosition }}
                  />
                  
                  <div className="relative p-6 h-full flex flex-col justify-end z-20">
                    {/* Información visible por defecto */}
                    <div className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
                      <p className="text-xs font-medium tracking-widest text-slate-200 uppercase mb-2">
                        {lawyer.specialty}
                      </p>
                      <p className="text-2xl font-serif font-bold text-white mb-1">
                        {lawyer.name}
                      </p>
                      <p className="text-sm text-slate-200 font-light">
                        {lawyer.role}
                      </p>
                    </div>
                    
                    {/* Descripción visible en hover */}
                    <div className="absolute bottom-6 left-6 right-6 translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="border-l-4 border-white/70 pl-4 pr-2">
                        <p className="text-xs font-medium tracking-widest text-slate-300 uppercase mb-2">
                          {lawyer.specialty}
                        </p>
                        <p className="text-xl font-serif font-bold text-white mb-3">
                          {lawyer.name}
                        </p>
                        <p className="text-sm text-slate-200 leading-relaxed">
                          {lawyer.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-center scroll-animate">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-12 scroll-animate-scale"></div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-slate-300 mb-12 text-lg scroll-animate">
              Estamos a su disposición para atender sus consultas legales. Contáctenos para una evaluación inicial de su caso.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center scroll-animate delay-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700 rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Dirección</h3>
                <p className="text-slate-300">Av. González Suárez N45-123<br />Edificio Platinum, Piso 10<br />Quito, Ecuador</p>
              </div>
              
              <div className="text-center scroll-animate delay-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700 rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
                <p className="text-slate-300">+593 2 2345-678<br />+593 99 123 4567</p>
              </div>
              
              <div className="text-center scroll-animate delay-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700 rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-slate-300">info@jaraalarcon.ec<br />consultas@jaraalarcon.ec</p>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://wa.me/593996766136?text=Hola,%20me%20gustaría%20solicitar%20una%20consulta%20legal" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-slate-800 px-8 py-3 font-semibold hover:bg-slate-100 transition-colors duration-200 scroll-animate delay-400"
              >
                Solicitar Consulta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2025 Jara, Alarcón & Saquicela Asociados</p>
          <p className="text-sm">Bufete de Abogados | Quito, Ecuador</p>
        </div>
      </footer>

      {/* Modal de descripción completa */}
      {selectedLawyer && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedLawyer(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96 bg-slate-800 flex items-center justify-center">
              <img
                src={selectedLawyer.image}
                alt={selectedLawyer.name}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
              <button
                onClick={() => setSelectedLawyer(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-6 left-6">
                <p className="text-xs font-medium tracking-widest text-slate-300 uppercase mb-2">
                  {selectedLawyer.specialty}
                </p>
                <h2 className="text-3xl font-serif font-bold text-white mb-1">
                  {selectedLawyer.name}
                </h2>
                <p className="text-slate-200">
                  {selectedLawyer.role}
                </p>
              </div>
            </div>
            <div className="p-8">
              <div className="prose prose-slate max-w-none">
                {selectedLawyer.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className={`text-slate-700 leading-relaxed mb-4 ${paragraph.startsWith('"') ? 'text-xl font-serif italic text-slate-600 border-l-4 border-slate-300 pl-4 my-6' : ''}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}