import React, { useState } from 'react';
import { Camera, Brain, FileText, Search, Users, MessageSquare, Calendar, HelpCircle, BookOpen, Star, RotateCcw, Drum as Forum, UserCheck, GraduationCap, PenTool, Mic, Globe, Menu, X, Home, Settings, User, Bell, BarChart } from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'scanner', label: 'Question Scanner', icon: Camera },
    { id: 'ai-tutor', label: 'AI Tutor', icon: Brain },
    { id: 'notes', label: 'Notes Generator', icon: FileText },
    { id: 'search', label: 'Smart Search', icon: Search },
    { id: 'classes', label: 'Smart Classes', icon: GraduationCap },
    { id: 'groups', label: 'Groups & Chat', icon: Users },
    { id: 'planner', label: 'Study Planner', icon: Calendar },
    { id: 'doubts', label: 'Doubt Solver', icon: HelpCircle },
    { id: 'bookshelf', label: 'Digital Bookshelf', icon: BookOpen },
    { id: 'revision', label: 'Revision Mode', icon: RotateCcw },
    { id: 'forums', label: 'Student Forums', icon: Forum },
    { id: 'marketplace', label: 'Tutor Marketplace', icon: UserCheck },
  ];

  const quickStats = [
    { label: 'Questions Solved', value: '247', color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Study Streak', value: '12 days', color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Notes Created', value: '89', color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Hours Studied', value: '156', color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  const recentActivities = [
    { action: 'Solved Math Question', subject: 'Algebra', time: '2 hours ago' },
    { action: 'Created Notes', subject: 'Physics', time: '4 hours ago' },
    { action: 'Joined Study Group', subject: 'Chemistry', time: '1 day ago' },
    { action: 'Completed Mock Test', subject: 'Biology', time: '2 days ago' },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, Student!</h2>
        <p className="text-blue-100">Ready to continue your learning journey?</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
            <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center mb-4`}>
              <BarChart className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Activities</h3>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-800">{activity.action}</div>
                  <div className="text-sm text-gray-600">{activity.subject}</div>
                </div>
                <div className="text-xs text-gray-500">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-4 bg-blue-50 rounded-lg text-left hover:bg-blue-100 transition-colors">
              <Camera className="h-6 w-6 text-blue-600 mb-2" />
              <div className="font-medium text-gray-800">Scan Question</div>
            </button>
            <button className="p-4 bg-purple-50 rounded-lg text-left hover:bg-purple-100 transition-colors">
              <Brain className="h-6 w-6 text-purple-600 mb-2" />
              <div className="font-medium text-gray-800">AI Tutor</div>
            </button>
            <button className="p-4 bg-green-50 rounded-lg text-left hover:bg-green-100 transition-colors">
              <FileText className="h-6 w-6 text-green-600 mb-2" />
              <div className="font-medium text-gray-800">Create Notes</div>
            </button>
            <button className="p-4 bg-orange-50 rounded-lg text-left hover:bg-orange-100 transition-colors">
              <Calendar className="h-6 w-6 text-orange-600 mb-2" />
              <div className="font-medium text-gray-800">Study Plan</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFeatureContent = (sectionId: string) => {
    const featureConfigs = {
      scanner: {
        title: 'Question Scanner',
        icon: Camera,
        content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
              <div className="text-center">
                <Camera className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Scan Any Question</h3>
                <p className="text-gray-600 mb-6">Take a photo of any question and get instant step-by-step solutions</p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Scanning
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-2">Recent Scans</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>Math: Quadratic Equations</div>
                  <div>Physics: Newton's Laws</div>
                  <div>Chemistry: Organic Compounds</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-2">Success Rate</h4>
                <div className="text-2xl font-bold text-green-600">98.5%</div>
                <div className="text-sm text-gray-600">Questions solved correctly</div>
              </div>
            </div>
          </div>
        )
      },
      'ai-tutor': {
        title: 'AI Tutor',
        icon: Brain,
        content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200">
              <div className="text-center">
                <Brain className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Personal AI Tutor</h3>
                <p className="text-gray-600 mb-6">Get personalized learning recommendations and adaptive practice</p>
                <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        )
      }
      // Add more feature configurations as needed
    };

    const config = featureConfigs[sectionId as keyof typeof featureConfigs];
    
    if (!config) {
      return (
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="text-gray-500 mb-4">Feature coming soon!</div>
          <div className="text-2xl font-bold text-gray-800 mb-2">{sectionId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
          <p className="text-gray-600">This feature is currently under development.</p>
        </div>
      );
    }

    return (
      <div>
        <div className="flex items-center mb-6">
          <config.icon className="h-8 w-8 text-gray-700 mr-3" />
          <h2 className="text-3xl font-bold text-gray-800">{config.title}</h2>
        </div>
        {config.content}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-3 py-2 text-left text-sm font-medium rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-800">Student</div>
              <div className="text-xs text-gray-600">Free Plan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Top Bar */}
        <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Bell className="h-6 w-6" />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <Settings className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="p-6">
          {activeSection === 'overview' ? renderOverview() : renderFeatureContent(activeSection)}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;