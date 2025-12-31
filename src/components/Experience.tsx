import { Briefcase, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Experience() {
  const { isDark } = useTheme();
  const experiences = [
    {
      company: 'Craft Silicon',
      role: 'Project / Product Manager',
      period: '2025 - Current',
      type: 'Fintech',
      responsibilities: [
        'Developing detailed action plans, timelines, and tasks for over 20 software projects, ensuring 95% on-time and on-scope delivery while improving team productivity by 25%',
        'Supervising cross-functional teams of up to 15 members, ensuring task clarity and completion, resulting in a 20% reduction in project delays',
        'Managing project budgets of up to $500K, ensuring cost control and maintaining profitability targets with a variance of less than 5%',
        'Collaborating with sales and marketing to successfully launch 10+ software solutions, contributing to a 15% increase in customer acquisition',
        'Building and maintaining strong client relationships, achieving a 90% client satisfaction rate',
        'Continuously identifying and mitigating risks, reducing development barriers and cutting project delays by 30%'
      ]
    },
    {
      company: 'Tangazoletu Limited',
      role: 'Software Developer',
      period: 'January 2023 - 2025',
      type: 'Software Development',
      responsibilities: [
        'Performed root cause analysis (RCAs) to identify breakdowns in processes and systems that contributed to downtimes',
        'Collaborated cross-functionally with QA and client teams to roll out mission critical features aligned with user requirements',
        'Led optimization of mobile app deployment processes, improving delivery timelines',
        'Created custom USSD journeys for different Saccos based on their requirements',
        'Optimized Mobile Apps to utilize easily customizable JSON powered forms (Formly Forms) for easy maintainability',
        'Collaborated with the team in developing new system end to end'
      ]
    },
    {
      company: 'Mpsha Hospital',
      role: 'ICT Support',
      period: 'January 2024 - February 2024',
      type: 'ICT Support',
      responsibilities: [
        'Networking and server maintenance',
        'Cable management and infrastructure setup',
        'General ICT support based on employee requests'
      ]
    },
    {
      company: 'Dalima Tech Company',
      role: 'Software Developer Intern',
      period: 'August 2022 - January 2023',
      type: 'Internship',
      responsibilities: [
        'Writing lines of code, testing and debugging software in a realistic setting',
        'Delivered complex communications, driving implementations and high visibility growth projects',
        'Coordinated testing activities with project managers and developers',
        'Attended team meetings to discuss projects, brainstorm ideas and put forward solutions'
      ]
    }
  ];

  return (
    <section id="experience" className={`py-24 ${isDark ? 'bg-slate-800' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-slate-900'}`}>Professional Experience</h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className={`rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-slate-200'}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h3>
                  <p className={`text-xl mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{exp.company}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${isDark ? 'bg-slate-600 text-slate-200' : 'bg-slate-100 text-slate-700'}`}>
                    {exp.type}
                  </span>
                </div>
                <div className={`flex items-center gap-2 mt-4 md:mt-0 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <Calendar size={18} />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className={`flex items-start gap-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    <span className={`mt-1.5 ${isDark ? 'text-slate-400' : 'text-slate-900'}`}>•</span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
