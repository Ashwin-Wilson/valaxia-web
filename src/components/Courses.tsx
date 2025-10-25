import { BookOpen, Clock, Users, Star, ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'Python Programming Mastery',
    description: 'Master Python from basics to advanced concepts with hands-on projects and real-world applications',
    level: 'Beginner to Advanced',
    duration: '12 Weeks',
    students: '500+',
    rating: 4.8,
    modules: [
      'Python Fundamentals',
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Web Development with Django',
      'Data Science & ML Basics',
      'Final Capstone Project',
    ],
    highlight: 'Available Now',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Full Stack Web Development',
    description: 'Build modern web applications with React, Node.js, and industry-standard practices',
    level: 'Intermediate',
    duration: '16 Weeks',
    students: 'Coming Soon',
    rating: null,
    modules: [
      'HTML, CSS & JavaScript',
      'React & Modern Frontend',
      'Node.js & Express',
      'Database Design',
      'API Development',
      'Deployment & DevOps',
    ],
    highlight: 'Coming Soon',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Dive deep into artificial intelligence and machine learning with practical implementations',
    level: 'Advanced',
    duration: '14 Weeks',
    students: 'Coming Soon',
    rating: null,
    modules: [
      'ML Fundamentals',
      'Neural Networks',
      'Deep Learning',
      'Computer Vision',
      'NLP Applications',
      'Real-world Projects',
    ],
    highlight: 'Coming Soon',
    color: 'from-violet-500 to-purple-500',
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Learn & Grow With Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transform your career with our comprehensive online courses designed
            by industry experts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-100 dark:border-gray-700 overflow-hidden hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:shadow-blue-500/10"
            >
              <div className={`absolute top-0 right-0 px-4 py-2 bg-gradient-to-r ${course.color} text-white text-sm font-semibold rounded-bl-2xl`}>
                {course.highlight}
              </div>

              <div className="p-8 pt-12">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <BookOpen className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {course.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-center space-x-2 flex-1">
                      <Clock className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  {course.rating && (
                    <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(course.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                  )}

                  <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">
                    {course.level}
                  </div>
                </div>

                <div className="border-t border-gray-100 dark:border-gray-700 pt-6 mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {course.modules.slice(0, 4).map((module, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  disabled={course.highlight === 'Coming Soon'}
                  className={`w-full py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all ${
                    course.highlight === 'Coming Soon'
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:scale-105'
                  }`}
                >
                  <span>{course.highlight === 'Coming Soon' ? 'Coming Soon' : 'Enroll Now'}</span>
                  {course.highlight !== 'Coming Soon' && (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
