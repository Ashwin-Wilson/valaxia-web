import { Target, Users, Award, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We are committed to delivering solutions that make a real impact on your business.',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your success is our success. We work closely with you every step of the way.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'We maintain the highest standards in code quality, design, and user experience.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'We stay ahead of the curve with the latest technologies and best practices.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Building Digital Excellence Since Day One
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              At VALAXIA, we are a passionate team of developers, designers, and innovators
              dedicated to transforming ideas into powerful digital solutions. Our expertise
              spans web development, mobile applications, AI/ML solutions, and intelligent
              automation.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              From startups to established enterprises, we have helped businesses across
              industries leverage technology to achieve their goals. Our commitment to
              excellence and innovation drives everything we do.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">30+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Team Members</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Core Values</h3>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg dark:shadow-blue-500/10 transition-shadow duration-300 border border-transparent dark:border-gray-700"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
