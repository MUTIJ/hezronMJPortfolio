import { Mail, Phone, Github, Linkedin, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Contact() {
  const { isDark } = useTheme();
  const references = [
    {
      name: 'Sebastian Kiamba',
      organization: 'Craft Silicon',
      role: 'Project Manager',
      email: 'sebastiankiamba93@gmail.com'
    },
    {
      name: 'Isaac Obuya',
      organization: 'Tangazoletu Ltd',
      role: 'Tech Lead',
      email: 'isaacobuya5@yahoo.com'
    },
    {
      name: 'David Wangonjo',
      organization: 'Mpsh Hospital',
      role: 'System Engineer',
      email: 'davidwangonjo12@gmail.com'
    },
    {
      name: 'Alex Magana',
      organization: 'Dalima Sales Ltd',
      role: 'Manager',
      email: 'maganaalex634@gmail.com'
    }
  ];

  return (
    <section id="contact" className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-slate-900'}`}>Get In Touch</h2>

        <div className="max-w-5xl mx-auto">
          <div className={`rounded-2xl p-8 md:p-12 mb-16 text-white ${isDark ? 'bg-gradient-to-br from-slate-800 to-slate-700' : 'bg-gradient-to-br from-slate-900 to-slate-800'}`}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                I'm always open to discussing new projects, opportunities, or collaborations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <a
                href="mailto:jeihezmurithi@gmail.com"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-300">Email</p>
                  <p className="font-medium">jeihezmurithi@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:0740302808"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-300">Phone</p>
                  <p className="font-medium">0740302808 / 0701354886</p>
                </div>
              </a>

              <a
                href="https://github.com/MUTIJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-300">GitHub</p>
                  <p className="font-medium">github.com/MUTIJ</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/hezron-murithi-71110a246"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-300">LinkedIn</p>
                  <p className="font-medium">Hezron Murithi</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <Users size={28} className={isDark ? 'text-slate-400' : 'text-slate-700'} />
              Professional References
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {references.map((ref, index) => (
                <div key={index} className={`rounded-lg p-6 border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                  <h4 className={`text-lg font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{ref.name}</h4>
                  <p className={`mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{ref.role}</p>
                  <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{ref.organization}</p>
                  <a
                    href={`mailto:${ref.email}`}
                    className={`text-sm transition-colors break-all ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    {ref.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className={`mt-24 border-t pt-8 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
        <div className="container mx-auto px-6 text-center">
          <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>Hezron Murithi Joseph - Portfolio 2025</p>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
