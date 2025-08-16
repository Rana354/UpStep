import React from 'react';
import { Target, Users, Lightbulb, Award, BookOpen, Brain } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About UpStep
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing education by making AI-powered learning accessible, personalized, and effective for every student worldwide.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To democratize quality education by leveraging cutting-edge AI technology, making personalized learning 
                accessible to every student regardless of their background or location.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every student deserves access to intelligent, adaptive learning tools that can understand 
                their unique learning style and help them achieve their full potential.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-full">
                <Target className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Constantly pushing boundaries with cutting-edge AI technology to create revolutionary learning experiences.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Building a supportive ecosystem where students, educators, and AI work together for better learning outcomes.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Committed to delivering the highest quality educational tools and maintaining the highest standards.
              </p>
            </div>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Makes UpStep Different?</h2>
            <p className="text-xl text-blue-100">
              We're not just another learning platform - we're your intelligent learning companion
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Brain className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-First Approach</h3>
                <p className="text-blue-100">
                  Every feature is powered by advanced AI that learns from your behavior and adapts to your needs.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Learning</h3>
                <p className="text-blue-100">
                  From question scanning to collaborative learning - everything you need in one platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">10k+</div>
            <div className="text-gray-600">Active Students</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
            <div className="text-gray-600">Questions Solved</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Subjects Covered</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;