import { ExternalLink, Sparkles, Shield, Navigation, Heart, Users, Camera, AlertTriangle } from 'lucide-react';

const projects = [
  {
    title: 'PixPrompt.in',
    description: 'AI-powered prompt gallery showcasing creative prompts and their stunning visual outputs',
    link: 'https://pixprompt.in/',
    icon: Sparkles,
    gradient: 'from-violet-500 to-purple-600',
    tags: ['AI', 'Gallery', 'Web App'],
  },
  {
    title: 'ADWANTAGE',
    description: 'Revolutionary AI-based platform for creating professional advertising content in minutes',
    icon: Camera,
    gradient: 'from-blue-500 to-cyan-600',
    tags: ['AI', 'Marketing', 'Automation'],
  },
  {
    title: 'Disaster Management System',
    description: 'Dynamic real-time disaster management and response coordination platform',
    icon: AlertTriangle,
    gradient: 'from-red-500 to-orange-600',
    tags: ['Real-time', 'IoT', 'Emergency'],
  },
  {
    title: 'Mental Health App',
    description: 'Comprehensive mental wellness platform with therapy resources and mood tracking',
    icon: Heart,
    gradient: 'from-pink-500 to-rose-600',
    tags: ['Healthcare', 'Mobile', 'AI'],
  },
  {
    title: 'Travel Management',
    description: 'All-in-one travel planning and booking platform with personalized recommendations',
    icon: Navigation,
    gradient: 'from-emerald-500 to-teal-600',
    tags: ['Travel', 'Web App', 'Booking'],
  },
  {
    title: 'Deepfake Detector',
    description: 'Advanced ML-powered system for detecting manipulated images and deepfakes',
    icon: Shield,
    gradient: 'from-amber-500 to-yellow-600',
    tags: ['ML', 'Security', 'Detection'],
  },
  {
    title: 'CarPooling App',
    description: 'Smart carpooling solution connecting commuters for eco-friendly shared rides',
    icon: Users,
    gradient: 'from-sky-500 to-blue-600',
    tags: ['Mobile', 'Social', 'Green Tech'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of innovative solutions that have transformed
            businesses and delighted users
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl dark:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 border border-transparent dark:border-gray-700"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-15 transition-opacity duration-300`}></div>

                <div className="p-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <span>Visit Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
