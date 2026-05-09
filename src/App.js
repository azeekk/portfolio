// App.jsx
import { GitMerge, Link, Mail, Phone, ExternalLink, Code2, Database, LayoutDashboard } from "lucide-react";

const projects = [
  {
    title: "Enterprise ERP Management Platform",
    description:
      "A complete ERP platform for managing projects, milestones, tasks, teams, reports, and workflow automation with role-based access control.",
    tech: ["PHP", "React", "MySQL", "Node.js", "Bootstrap"],
    features: [
      "Role-Based Authentication",
      "Project & Task Tracking",
      "Milestone & Subtask Management", 
      "Auto Progress Calculation",
      "Dashboard Analytics",
    ],
  },
  {
    title: "CRM Management System",
    description:
      "A CRM platform for managing leads, customers, sales pipelines, reminders, and business workflows.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    features: [
      "Lead Management",
      "Customer Tracking",
      "Sales Pipeline",
      "Task Reminders",
      "Admin Dashboard",
    ],
  },
  {
    title: "CMS Platform",
    description:
      "A dynamic content management system with admin controls, SEO fields, image uploads, and user role management.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    features: [
      "Dynamic Content Management",
      "SEO Fields",
      "Image Upload",
      "User Roles",
      "Admin Dashboard",
    ],
  },
  {
    title: "E-commerce Website",
    description:
      "A feature-rich e-commerce platform with product management, shopping cart, and secure payment processing.",
    tech: ["React", "Node.js", "MongoDB", "Stripe API"],
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Secure Payment Processing",
      "User Reviews & Ratings",
      "Admin Dashboard",
    ],

  },
];

const skills = {
  frontend: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  backend: ["PHP", "Laravel", "Node.js", "Express.js"],
  database: ["MySQL", "MongoDB"],
  tools: ["Git", "GitHub", "Postman", "Vite", "XAMPP"],
};

export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-500">Azeek K</h1>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-400 mb-3">ERP & CRM Developer / Full Stack Developer</p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Building Modern Business Software Solutions
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Full stack developer specializing in ERP systems, CRM platforms,
              CMS solutions, and workflow automation using PHP and MERN Stack technologies.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium transition"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="border border-slate-700 hover:border-blue-500 px-6 py-3 rounded-xl font-medium transition"
              >
                Download Resume
              </a>
            </div>

            <div className="flex gap-5 mt-8">
              <a href="https://github.com/azeekk">
                <GitMerge className="hover:text-blue-400 transition" />
              </a>

              <a href="https://www.linkedin.com/in/azeek-kalathil-b58a5028a">
                <Link className="hover:text-blue-400 transition" />
              </a>

              <a href="mailto:azeekkalathil99@gmail.com">
                <Mail className="hover:text-blue-400 transition" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-slate-800 border border-slate-800 rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <LayoutDashboard className="text-blue-400 mb-4" />
                <h3 className="font-semibold mb-2">ERP Systems</h3>
                <p className="text-sm text-slate-400">
                  Workflow automation & business management systems.
                </p>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <Code2 className="text-blue-400 mb-4" />
                <h3 className="font-semibold mb-2">CRM Platforms</h3>
                <p className="text-sm text-slate-400">
                  Customer & sales management solutions.
                </p>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 col-span-2">
                <Database className="text-blue-400 mb-4" />
                <h3 className="font-semibold mb-2">Full Stack Development</h3>
                <p className="text-sm text-slate-400">
                  MERN Stack, PHP, MySQL, MongoDB, REST APIs, and dashboard systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-slate-400 leading-relaxed text-lg">
            I am a full stack ERP and CRM developer specializing in PHP and MERN Stack
            technologies. I build scalable business management systems, admin dashboards,
            CMS platforms, and workflow automation tools.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="capitalize text-xl font-semibold mb-5 text-blue-400">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-800 px-3 py-2 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition"
            >
              <div className="flex justify-between items-start mb-5">
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                <ExternalLink className="text-blue-400" />
              </div>

              <p className="text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-400 px-3 py-2 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-blue-600 rounded-3xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>

          <p className="text-lg mb-8 text-blue-100">
            Open for ERP, CRM, full stack, and software development opportunities.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:azeekkalathil99@gmail.com"
              className="bg-white text-black px-6 py-3 rounded-xl font-medium flex items-center gap-2"
            >
              <Mail size={18} />
              Email Me
            </a>

            <a
              href="tel:+918129944572"
              className="border border-white px-6 py-3 rounded-xl font-medium flex items-center gap-2"
            >
              <Phone size={18} />
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        © 2026 Azeek K — ERP & CRM Developer
      </footer>
    </div>
  );
}
