import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Hero() {
  const { isDark } = useTheme();

  return (
    <section className={`min-h-screen flex items-center justify-center ${
      isDark
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white'
        : 'bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-900'
    } relative pt-20`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Hezron Murithi Joseph
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Project Manager & Full-Stack Developer
            </p>
            <p className={`text-lg mb-12 max-w-2xl leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Results-driven professional with 4+ years of experience in project management,
              software development, and ICT support. Specialized in fintech solutions and agile methodologies.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
              <a
                href="mailto:jeihezmurithi@gmail.com"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium ${
                  isDark
                    ? 'bg-white text-slate-900'
                    : 'bg-slate-900 text-white'
                }`}
              >
                <Mail size={20} />
                Get in Touch
              </a>
              <a
                href="https://github.com/MUTIJ"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium border ${
                  isDark
                    ? 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-900 border-slate-300 hover:bg-slate-200'
                }`}
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/hezron-murithi-71110a246"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium border ${
                  isDark
                    ? 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-900 border-slate-300 hover:bg-slate-200'
                }`}
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="tel:0740302808"
                className={`flex items-center gap-2 transition-colors ${
                  isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Phone size={18} />
                0740302808
              </a>
              <a
                href="tel:0701354886"
                className={`flex items-center gap-2 transition-colors ${
                  isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Phone size={18} />
                0701354886
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className={`w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-8 ${
              isDark ? 'border-slate-700' : 'border-slate-200'
            } hover:scale-105 transition-transform duration-300`}>
              <img
                src="/hez.jpg"
                alt="Hezron Murithi Joseph"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
        isDark ? 'text-slate-400' : 'text-slate-500'
      }`}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
}

export default Hero;
