/**
 * Todo el contenido del sitio vive aquí (español e inglés).
 * Para cambiar un texto, edita este archivo: no hace falta tocar los componentes.
 */

export type Lang = "es" | "en";
export const languages: Lang[] = ["es", "en"];

export const person = {
  name: "Jose Tello Solís",
  email: "tellosolisjose@gmail.com",
  phone: "+51 934 299 227",
  whatsapp: "https://wa.me/51934299227",
  linkedin: "https://www.linkedin.com/in/jose-ernesto-tello-solis-0a0822287/",
  github: "https://github.com/JoseTelloSolis",
  cvEs: "/cv/jose-tello-solis-cv-es.pdf",
  cvEn: "/cv/jose-tello-solis-cv-en.pdf",
};

export interface Link {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  context: string;
  period?: string;
  what: string;
  role?: string;
  result?: string;
  stack?: string;
  links?: Link[];
}

export interface Role {
  title: string;
  period: string;
  mode: string;
  points: string[];
}

export interface Job {
  company: string;
  span: string;
  roles: Role[];
}

export interface Content {
  meta: { title: string; description: string; locale: string };
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  ui: {
    skip: string;
    menu: string;
    switchLabel: string;
    switchText: string;
    home: string;
    top: string;
  };
  hero: {
    status: string;
    role: string;
    headline: string;
    intro: string;
    ctaCv: string;
    ctaProjects: string;
    photoAlt: string;
    dimension: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  experience: { title: string; jobs: Job[] };
  projects: {
    title: string;
    labels: { what: string; role: string; result: string; stack: string };
    items: Project[];
    more: {
      title: string;
      text: string;
      repos: { name: string; lang: string; href: string }[];
    };
  };
  skills: {
    title: string;
    coreNote: string;
    core: string[];
    groups: { name: string; items: string[] }[];
  };
  contact: {
    title: string;
    text: string;
    channels: {
      email: string;
      whatsapp: string;
      linkedin: string;
      github: string;
    };
    copy: string;
    copied: string;
  };
  footer: { rights: string };
}

const repos = [
  {
    name: "dashboard-php-angular",
    lang: "PHP, Angular",
    href: "https://github.com/JoseTelloSolis/dashboard-php-angular",
  },
];

export const content: Record<Lang, Content> = {
  es: {
    meta: {
      title: "Jose Tello Solís, desarrollador Full Stack",
      description:
        "Desarrollador Full Stack con más de 13 años de experiencia en PHP, Laravel y Vue.js. Sistemas como un ERP, tiendas en línea con pasarela de pagos y sitios con panel de administración.",
      locale: "es_PE",
    },
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    ui: {
      skip: "Saltar al contenido",
      menu: "Menú",
      switchLabel: "Cambiar el idioma a inglés",
      switchText: "EN",
      home: "Ir al inicio",
      top: "Volver arriba",
    },
    hero: {
      status: "Disponible para un puesto full-time o proyectos a medida",
      role: "Desarrollador Full Stack en Lima, Perú",
      headline:
        "Desarrollo sistemas web de punta a punta, del diseño a producción.",
      intro:
        "Más de 13 años con PHP, Laravel y Vue.js, en sistemas como un ERP, tiendas en línea con pasarela de pagos y sitios con panel de administración. He liderado equipos técnicos.",
      ctaCv: "Descargar CV (PDF)",
      ctaProjects: "Ver proyectos",
      photoAlt: "Retrato de Jose Tello Solís",
      dimension: "13+ años desarrollando",
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Soy desarrollador Full Stack con más de 13 años de experiencia en aplicaciones web para empresas y entidades públicas. He liderado equipos técnicos, participado en decisiones de arquitectura y llevado a producción desde un sistema de consulta catastral para la Municipalidad de Lima hasta un ERP y tiendas en línea.",
        "Combino un backend sólido en PHP y Laravel con interfaces en Vue.js, Angular y React. Trabajo a partir de diseños de clientes o de diseñadores web y he participado en reuniones de diseño con clientes. Como líder técnico capacité cada semana a desarrolladores junior y revisé entregables y calidad del código. Aprendo de forma autónoma y trabajo bien en equipo.",
      ],
      facts: [
        {
          label: "Busco",
          value:
            "Un puesto full-time (Full Stack, Frontend o Backend) y proyectos freelance.",
        },
        { label: "Enfoque", value: "Full Stack con base en Backend." },
        { label: "Ubicación", value: "Lima, Perú." },
        {
          label: "Modalidad",
          value:
            "Remoto desde 2019, con experiencia previa presencial e híbrida.",
        },
        { label: "Idiomas", value: "Español nativo. Inglés escrito y leído." },
        {
          label: "Formación",
          value:
            "Técnico en Computación e Informática, I.S.T.P. Carlos Cuento Fernandini (2009 a 2011).",
        },
      ],
    },
    experience: {
      title: "Experiencia",
      jobs: [
        {
          company: "XCrivas Comunicaciones",
          span: "Octubre 2014 a la actualidad",
          roles: [
            {
              title: "Desarrollador Full Stack",
              period: "Enero 2019 a la actualidad",
              mode: "Remoto",
              points: [
                "Finalización de un ERP que había quedado incompleto, con mejoras de estabilidad y funcionalidad.",
                "Aplicaciones web completas con Laravel, Vue.js, Angular y React.",
                "Diseño e implementación de sistemas escalables, con frontend y backend integrados.",
                "Mejoras de rendimiento, mantenimiento y calidad del código.",
                "Participación en decisiones de arquitectura y resolución de problemas técnicos complejos.",
              ],
            },
            {
              title: "Desarrollador web, Full Stack y líder técnico",
              period: "Octubre 2014 a diciembre 2018",
              mode: "Híbrido",
              points: [
                "Aplicaciones web para distintos sectores con PHP y frameworks modernos.",
                "Soluciones de e-commerce con carritos de compra y flujos de pago.",
                "Evolución hacia el rol Full Stack, en sistemas cada vez más complejos.",
                "Apoyo como líder técnico en decisiones y supervisión de desarrollos.",
              ],
            },
          ],
        },
        {
          company: "Manya",
          span: "Enero 2013 a setiembre 2014",
          roles: [
            {
              title: "Desarrollador web y líder técnico",
              period: "Enero 2013 a setiembre 2014",
              mode: "Presencial",
              points: [
                "Aplicaciones web con PHP y el CMS Modx para múltiples clientes.",
                "Coordinación del equipo de desarrollo, con revisión de entregables y calidad del código.",
                "Capacitación semanal a desarrolladores junior en habilidades técnicas y buenas prácticas.",
                "Definición de soluciones técnicas y mejora de los procesos de desarrollo.",
              ],
            },
          ],
        },
        {
          company: "Global GIS Perú",
          span: "Enero a julio 2012",
          roles: [
            {
              title: "Desarrollador web",
              period: "Enero a julio 2012",
              mode: "Presencial",
              points: [
                "Aplicación web de consulta de catastro para la Municipalidad de Lima.",
                "Funciones para visualizar y consultar información de domicilios mediante geolocalización.",
                "Sistemas de consulta territorial con PHP y Java.",
                "Participación en proyectos de geolocalización para el sector transporte.",
              ],
            },
          ],
        },
      ],
    },
    projects: {
      title: "Proyectos",
      labels: {
        what: "Qué es",
        role: "Mi parte",
        result: "Resultado",
        stack: "Tecnologías",
      },
      items: [
        {
          title: "ERP para BJR Import",
          context:
            "BJR Import, distribuidora de autopartes y neumáticos. Proyecto en XCrivas Comunicaciones",
          what: "Sistema ERP para una empresa que comercializa autopartes y neumáticos, con módulos de contabilidad, planillas, registro de ventas y consulta de stock.",
          role: "Participé en la finalización del sistema, que había quedado incompleto, y mejoré su estabilidad y funcionalidad.",
          result:
            "Lo usaban 5 personas del área de administración, en contabilidad y planillas, y entre 10 y 12 vendedores, que registraban sus ventas y consultaban el stock disponible.",
          stack: "PHP 7, HTML, CSS3, JavaScript",
        },
        {
          title: "Sitio web de Americatel con panel de administración",
          context: "Americatel. Proyecto en XCrivas Comunicaciones",
          what: "Sitio web con un panel de administración que permite editar todo el contenido, tanto textos como imágenes, y crear páginas nuevas.",
          role: "Desarrollé el frontend y el backend del sitio y de su panel de administración.",
        },
        {
          title: "Tukrea",
          context:
            "Tienda en línea de productos escolares. Proyecto en XCrivas Comunicaciones",
          what: "Tienda en línea con libros de texto, material didáctico como rompecabezas y productos tecnológicos que enseñan programación a niños.",
          role: "Desarrollé el frontend y el backend e integré la pasarela de pagos Culqi.",
          stack:
            "PHP, Laravel, Blade, jQuery, Bootstrap, pasarela de pagos Culqi",
          links: [
            { label: "Ver sitio", href: "https://tukrea.com" },
            {
              label: "Ver código",
              href: "https://github.com/JoseTelloSolis/tukrea",
            },
          ],
        },
        {
          title: "Cake",
          context:
            "Tienda en línea para una pastelería. Proyecto en XCrivas Comunicaciones",
          what: "Tienda en línea con catálogo de productos, carrito de compra, galería y blog.",
          role: "Desarrollé el frontend y el backend.",
          stack: "PHP, MySQL, Smarty, jQuery, Bootstrap",
          links: [
            {
              label: "Ver código",
              href: "https://github.com/JoseTelloSolis/cake",
            },
          ],
        },
        {
          title: "Consulta de catastro para la Municipalidad de Lima",
          context: "Global GIS Perú, 2012",
          what: "Aplicación web para consultar el catastro y visualizar la información de domicilios mediante geolocalización.",
          role: "Desarrollé la aplicación y los sistemas de consulta territorial.",
          stack: "PHP, Java, geolocalización",
        },
      ],
      more: {
        title: "Más código en GitHub",
        text: "Código disponible como repositorio público.",
        repos,
      },
    },
    skills: {
      title: "Habilidades",
      coreNote: "Stack principal",
      // Herramientas del stack principal: se marcan en la sección (ver CV)
      core: ["PHP", "Laravel", "Vue.js", "MySQL"],
      // Los grupos sin herramientas no se muestran
      groups: [
        {
          name: "Frontend",
          items: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "Vue.js",
            "Angular",
            "React",
            "jQuery",
            "Astro",
            "Tailwind CSS",
            "Bootstrap",
          ],
        },
        { name: "Backend", items: ["PHP", "Laravel", "Node.js", "Java"] },
        {
          name: "Bases de datos",
          items: ["MySQL", "PostgreSQL", "MariaDB", "SQL Server"],
        },
        // Herramientas verificadas en los repositorios públicos (composer.json / package.json)
        {
          name: "Testing y calidad de software",
          items: ["PHPUnit", "Jasmine", "Karma"],
        },
        {
          name: "Herramientas y control de versiones",
          items: ["Git", "GitHub", "Composer", "npm", "Vercel"],
        },
        {
          name: "Metodologías y prácticas de desarrollo",
          items: [
            "Scrum",
            "Kanban",
            "Arquitectura de software",
            "Optimización de sistemas",
          ],
        },
        {
          name: "APIs e integraciones",
          items: [
            "APIs REST",
            "Autenticación con tokens",
            "Pasarelas de pago (Culqi)",
          ],
        },
      ],
    },
    contact: {
      title: "Hablemos",
      text: "Si tienes una vacante o un proyecto, escríbeme por correo o WhatsApp.",
      channels: {
        email: "Correo",
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
      copy: "Copiar correo",
      copied: "Correo copiado",
    },
    footer: { rights: "Todos los derechos reservados." },
  },

  en: {
    meta: {
      title: "Jose Tello Solís, Full Stack developer",
      description:
        "Full Stack developer with 13+ years of experience in PHP, Laravel and Vue.js. Systems such as an ERP, online stores with a payment gateway and sites with an admin panel.",
      locale: "en_US",
    },
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    ui: {
      skip: "Skip to content",
      menu: "Menu",
      switchLabel: "Cambiar el idioma a español",
      switchText: "ES",
      home: "Go to top",
      top: "Back to top",
    },
    hero: {
      status: "Open to a full-time role or custom projects",
      role: "Full Stack developer in Lima, Peru",
      headline: "I build web systems end to end, from design to production.",
      intro:
        "13+ years with PHP, Laravel and Vue.js, on systems such as an ERP, online stores with a payment gateway and sites with an admin panel. I have led technical teams.",
      ctaCv: "Download CV (PDF)",
      ctaProjects: "View projects",
      photoAlt: "Portrait of Jose Tello Solís",
      dimension: "13+ years building",
    },
    about: {
      title: "About",
      paragraphs: [
        "I am a Full Stack developer with over 13 years of experience in web applications for companies and public institutions. I have led technical teams, taken part in architecture decisions and shipped everything from a cadastral lookup system for the Municipality of Lima to an ERP and online stores.",
        "I pair a solid PHP and Laravel backend with interfaces in Vue.js, Angular and React. I work from designs provided by clients or web designers and have taken part in design meetings with clients. As a technical lead I trained junior developers every week and reviewed deliverables and code quality. I learn on my own and work well in a team.",
      ],
      facts: [
        {
          label: "Looking for",
          value:
            "A full-time role (Full Stack, Frontend or Backend) and freelance projects.",
        },
        { label: "Focus", value: "Full Stack, with a Backend foundation." },
        { label: "Location", value: "Lima, Peru." },
        {
          label: "Work mode",
          value:
            "Remote since 2019, with earlier on-site and hybrid experience.",
        },
        {
          label: "Languages",
          value: "Native Spanish. Written and reading English.",
        },
        {
          label: "Education",
          value:
            "Computer Science technician, I.S.T.P. Carlos Cuento Fernandini (2009 to 2011).",
        },
      ],
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          company: "XCrivas Comunicaciones",
          span: "October 2014 to present",
          roles: [
            {
              title: "Full Stack developer",
              period: "January 2019 to present",
              mode: "Remote",
              points: [
                "Finished an ERP that had been left incomplete, with stability and functionality improvements.",
                "Complete web applications with Laravel, Vue.js, Angular and React.",
                "Design and implementation of scalable systems, with integrated frontend and backend.",
                "Performance, maintainability and code-quality improvements.",
                "Took part in architecture decisions and solved complex technical problems.",
              ],
            },
            {
              title: "Web developer, Full Stack and technical lead",
              period: "October 2014 to December 2018",
              mode: "Hybrid",
              points: [
                "Web applications for different sectors using PHP and modern frameworks.",
                "E-commerce solutions with shopping carts and payment flows.",
                "Grew into a Full Stack role on increasingly complex systems.",
                "Supported the team as technical lead: decisions and oversight of development.",
              ],
            },
          ],
        },
        {
          company: "Manya",
          span: "January 2013 to September 2014",
          roles: [
            {
              title: "Web developer and technical lead",
              period: "January 2013 to September 2014",
              mode: "On-site",
              points: [
                "Web applications with PHP and the Modx CMS for multiple clients.",
                "Coordinated the development team, reviewing deliverables and code quality.",
                "Weekly training for junior developers on technical skills and good practices.",
                "Helped define technical solutions and improve development processes.",
              ],
            },
          ],
        },
        {
          company: "Global GIS Perú",
          span: "January to July 2012",
          roles: [
            {
              title: "Web developer",
              period: "January to July 2012",
              mode: "On-site",
              points: [
                "Web application for cadastral queries for the Municipality of Lima.",
                "Features to view and query home information through geolocation.",
                "Territorial query systems with PHP and Java.",
                "Geolocation projects for the transport sector.",
              ],
            },
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      labels: {
        what: "What it is",
        role: "My part",
        result: "Outcome",
        stack: "Stack",
      },
      items: [
        {
          title: "ERP for BJR Import",
          context:
            "BJR Import, auto parts and tire distributor. Project at XCrivas Comunicaciones",
          what: "ERP system for a company that sells auto parts and tires, with accounting, payroll, sales recording and stock lookup modules.",
          role: "I took part in finishing the system, which had been left incomplete, and improved its stability and functionality.",
          result:
            "It was used by 5 people in administration, for accounting and payroll, and by 10 to 12 salespeople, who recorded their sales and checked available stock.",
          stack: "PHP 7, HTML, CSS3, JavaScript",
        },
        {
          title: "Americatel website with admin panel",
          context: "Americatel. Project at XCrivas Comunicaciones",
          what: "Website with an administration panel that lets the client edit all of its content, both text and images, and create new pages.",
          role: "I built the frontend and the backend of the site and its admin panel.",
        },
        {
          title: "Tukrea",
          context:
            "Online store for school products. Project at XCrivas Comunicaciones",
          what: "Online store with textbooks, educational materials such as puzzles, and technology products that teach children to code.",
          role: "I built the frontend and the backend and integrated the Culqi payment gateway.",
          stack:
            "PHP, Laravel, Blade, jQuery, Bootstrap, Culqi payment gateway",
          links: [
            { label: "Visit site", href: "https://tukrea.com" },
            {
              label: "View code",
              href: "https://github.com/JoseTelloSolis/tukrea",
            },
          ],
        },
        {
          title: "Cake",
          context:
            "Online store for a bakery. Project at XCrivas Comunicaciones",
          what: "Online store with a product catalog, shopping cart, gallery and blog.",
          role: "I built the frontend and the backend.",
          stack: "PHP, MySQL, Smarty, jQuery, Bootstrap",
          links: [
            {
              label: "View code",
              href: "https://github.com/JoseTelloSolis/cake",
            },
          ],
        },
        {
          title: "Cadastral lookup for the Municipality of Lima",
          context: "Global GIS Perú, 2012",
          what: "Web application to query the cadastre and view home information through geolocation.",
          role: "I built the application and the territorial query systems.",
          stack: "PHP, Java, geolocation",
        },
      ],
      more: {
        title: "More code on GitHub",
        text: "Code available as a public repository.",
        repos,
      },
    },
    skills: {
      title: "Skills",
      coreNote: "Core stack",
      // Tools of the core stack: highlighted in the section (see CV)
      core: ["PHP", "Laravel", "Vue.js", "MySQL"],
      // Groups without tools are not shown
      groups: [
        {
          name: "Frontend",
          items: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "Vue.js",
            "Angular",
            "React",
            "jQuery",
            "Astro",
            "Tailwind CSS",
            "Bootstrap",
          ],
        },
        { name: "Backend", items: ["PHP", "Laravel", "Node.js", "Java"] },
        {
          name: "Databases",
          items: ["MySQL", "PostgreSQL", "MariaDB", "SQL Server"],
        },
        // Tools verified in the public repositories (composer.json / package.json)
        {
          name: "Testing and software quality",
          items: ["PHPUnit", "Jasmine", "Karma"],
        },
        {
          name: "Tools and version control",
          items: ["Git", "GitHub", "Composer", "npm", "Vercel"],
        },
        {
          name: "Methodologies and development practices",
          items: [
            "Scrum",
            "Kanban",
            "Software architecture",
            "System optimization",
          ],
        },
        {
          name: "APIs and integrations",
          items: [
            "REST APIs",
            "Token authentication",
            "Payment gateways (Culqi)",
          ],
        },
      ],
    },
    contact: {
      title: "Let's talk",
      text: "If you have an opening or a project, write to me by email or WhatsApp.",
      channels: {
        email: "Email",
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
      copy: "Copy email",
      copied: "Email copied",
    },
    footer: { rights: "All rights reserved." },
  },
};

/** Ruta de cada idioma: español en la raíz, inglés bajo /en/ */
export const homePath = (lang: Lang) => (lang === "es" ? "/" : "/en/");
