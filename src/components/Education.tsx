import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Education() {
  const { isDark } = useTheme();
  const certifications = [
    {
      title: 'Basics of Operations and Project Management',
      provider: 'UniAthena',
      type: 'Professional Certification'
    },
    {
      title: 'DevOps Course',
      provider: 'Mind Luster',
      type: 'Professional Certification'
    },
    {
      title: 'Scrum Fundamentals Certified',
      provider: 'Scrum Study',
      type: 'Professional Certification'
    },
    {
      title: 'Skills for Improved Jobs and Livelihood',
      provider: 'ACWICT',
      type: 'Professional Training'
    },
    {
      title: 'Dart Application Development Certificate',
      provider: 'Microsoft IT Academy',
      type: 'Technical Certification'
    },
    {
      title: 'Postman API Fundamentals Student Expert',
      provider: 'Lets Upgrade',
      code: 'LUEPAFSOCT12317',
      type: 'Workshop'
    },
    {
      title: 'DBMS and SQL Zero to Hero',
      provider: 'Lets Upgrade',
      code: 'LUEDBSQLNOV123204',
      type: 'Workshop'
    },
    {
      title: 'Frontend Web Development with React.js and JavaScript',
      provider: 'DevTown',
      link: 'https://cert.devtown.in/verify/Z2je7Gs',
      type: 'Workshop'
    }
  ];

  return (
    <section id="education" className={`py-24 ${isDark ? 'bg-slate-800' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-slate-900'}`}>Education & Certifications</h2>

        <div className="max-w-5xl mx-auto">
          <div className={`rounded-xl p-8 shadow-sm border mb-12 ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-slate-200'}`}>
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-blue-600' : 'bg-slate-900'}`}>
                <GraduationCap className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Bachelor of Science in Computer Science</h3>
                <p className={`text-xl mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>St Paul's University</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${isDark ? 'bg-slate-600 text-slate-200' : 'bg-slate-100 text-slate-700'}`}>
                  Second Class Honours (Upper Division)
                </span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <Award size={28} className={isDark ? 'text-slate-400' : 'text-slate-700'} />
              Professional Certifications & Training
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className={`rounded-lg p-6 border transition-colors ${isDark ? 'bg-slate-700 border-slate-600 hover:border-slate-500' : 'bg-white border-slate-200 hover:border-slate-300'}`}>
                  <div className="flex items-start justify-between mb-2">
                    <h4 className={`text-lg font-semibold flex-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{cert.title}</h4>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <p className={`mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{cert.provider}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{cert.type}</span>
                    {cert.code && (
                      <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{cert.code}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-xl p-8 text-white ${isDark ? 'bg-slate-700' : 'bg-slate-900'}`}>
            <h3 className="text-2xl font-semibold mb-4">Interests</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {['Quantum Physics', 'Robotics', 'Doing Research', 'Travelling and Hiking'].map((interest, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className={isDark ? 'text-slate-300' : 'text-slate-200'}>{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
