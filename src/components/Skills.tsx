import { Code, Layers, Database, GitBranch, Cloud, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Skills() {
  const { isDark } = useTheme();
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Flutter Dart', 'Java', 'HTML & CSS', 'PHP', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      skills: ['React', 'Angular', 'AngularJS', 'Spring Boot', 'Mobile Apps (Android & iOS)']
    },
    {
      title: 'Database & Backend',
      icon: Database,
      skills: ['MySQL', 'Firebase', 'RESTful APIs', 'Object-Oriented Programming']
    },
    {
      title: 'DevOps & Tools',
      icon: GitBranch,
      skills: ['Git & GitHub', 'Jira', 'Version Control', 'CI/CD']
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      skills: ['Firebase', 'Cloud Computing', 'System Administration', 'Networking']
    },
    {
      title: 'Project Management',
      icon: Users,
      skills: ['Agile & Waterfall', 'SDLC', 'Risk Management', 'Stakeholder Communication', 'Business Analysis']
    }
  ];

  const softSkills = [
    'Effective Collaboration',
    'Strong Problem-solving',
    'Attention to Detail',
    'Outstanding Communication',
    'Documentation & Reporting',
    'Fast Learner',
    'Disciplined & Committed'
  ];

  return (
    <section id="skills" className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-slate-900'}`}>Skills & Expertise</h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className={`rounded-xl p-6 border transition-colors ${isDark ? 'bg-slate-800 border-slate-700 hover:border-slate-600' : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isDark ? 'bg-blue-600' : 'bg-slate-900'}`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className={`px-3 py-1 rounded-full text-sm border ${isDark ? 'bg-slate-700 text-slate-200 border-slate-600' : 'bg-white text-slate-700 border-slate-200'}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`rounded-xl p-8 ${isDark ? 'bg-slate-800 text-white' : 'bg-slate-900 text-white'}`}>
            <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className={isDark ? 'text-slate-300' : 'text-slate-200'}>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
