import { Target, TrendingUp, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function About() {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-slate-900'}`}>About Me</h2>

        <div className="max-w-4xl mx-auto">
          <p className={`text-lg leading-relaxed mb-12 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            I am a tech-savvy and results-driven professional with 4+ years of experience in Project
            management, software development and ICT support. I have hands-on experience leading
            and collaborating with cross-functional teams, developing dynamic Mobile application and
            web applications, and delivering quality software products in a fintech environment. With a
            strong grasp of SDLC, Agile methodologies, and stakeholder communication, I thrive in
            roles that require both technical insight and strategic coordination.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-xl border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isDark ? 'bg-blue-600' : 'bg-slate-900'}`}>
                <Target className="text-white" size={24} />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Career Focus</h3>
              <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                Working in dynamic, performance-based organizations that offer prospects for
                career growth while creating environments for personal development.
              </p>
            </div>

            <div className={`p-6 rounded-xl border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isDark ? 'bg-blue-600' : 'bg-slate-900'}`}>
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Professional Growth</h3>
              <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                Dedicated to becoming one of the most respectable professionals in my field
                through continuous learning and excellence.
              </p>
            </div>

            <div className={`p-6 rounded-xl border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isDark ? 'bg-blue-600' : 'bg-slate-900'}`}>
                <Award className="text-white" size={24} />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Value Delivery</h3>
              <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                Committed to delivering value-driven solutions in a timely manner through
                technical expertise and strategic execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
