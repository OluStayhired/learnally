import React from 'react';
import { ArrowRight, BarChart2, Brain, Building2, CheckCircle, Globe2, Mail, MessageSquare, Users, Zap, Clock, Database, Trophy } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <header className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-[#0a0a0a]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Build Beautiful Products in 2 weeks without Tech
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Don't wait for developers. Build and launch your own products with AI. 
                Join me and thousands of other non-technical solopreneurs who are taking control of their futures.
              </p>
              <div className="space-y-4">
                {[
                  'Build software that scales your business.',
                  'Escape the developer bottleneck.',
                  'Transform your Services into Software',
                  'Launch your product in 4 weeks'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg text-gray-300">
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </div>
              <div className="pt-4">
                <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Pre-Book Your Slot Now <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-blue-400 text-sm mt-3 text-center">Early Bird Price Increases Every 30 Sales</p>
              </div>
              {/* Mobile Image */}
              <div className="lg:hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                  alt="Product Development"
                  className="w-full h-[300px] object-cover rounded-2xl"
                />
              </div>
            </div>
            {/* Right Column - Desktop */}
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                alt="Product Development"
                className="w-full h-[600px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-blue-400 text-xl mb-4">BUSINESS TRANSFORMATION CASE STUDIES</h3>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">500+ Businesses Transformed</h2>
          <h4 className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Don't waste time with trial and error. Learn from our proven frameworks that have helped companies scale from 6 to 8 figures.
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-gray-400 text-sm">
            {['Microsoft', 'Citigroup', 'Deutsche Bank', 'Barclays', 'HSBC', 'Goldman Sachs'].map((company) => (
              <div key={company} className="flex items-center justify-center">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/20 to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h5 className="text-blue-400 text-xl mb-4">THE FULL PACKAGE</h5>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">All-in-one Solution</h2>
          <h4 className="text-2xl text-gray-400 mb-16 max-w-3xl mx-auto">
            Skip months of strategy uncertainty and implementation delays with our battle-tested frameworks and expert guidance
          </h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: 'Weekly Strategy Sessions', desc: '12 hours of practical step-by-step guidance' },
              { icon: Database, title: 'Framework Library', desc: 'Proven templates and strategies to accelerate growth' },
              { icon: Brain, title: 'AI Integration', desc: 'Learn how to leverage AI for business automation' },
              { icon: Trophy, title: 'Lifetime Access', desc: 'Full access to all materials + future updates' }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-colors">
                <feature.icon className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-12 rounded-3xl border border-blue-800 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of business leaders using our proven frameworks to achieve exponential growth.
            </p>
            <div className="space-y-6">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto">
                Pre-Book Your Slot Now <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-blue-400">Limited Time Offer - First 100 Clients Only</p>
              <p className="text-sm text-gray-400">Results-based guarantee: If you don't see results, get a free 1-on-1 consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "How quickly can I expect to see results?", a: "Most clients see measurable improvements within 90 days of implementing our frameworks." },
              { q: "Do I need a large team to implement these strategies?", a: "Our frameworks are designed to work with businesses of all sizes, from solopreneurs to large teams." },
              { q: "What if I'm not satisfied with the program?", a: "We offer a results-based guarantee with a personal consultation to ensure your success." },
              { q: "How is this different from other consulting services?", a: "We provide actionable frameworks, not just theory, plus ongoing support to ensure implementation." }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                Leading consulting firm helping businesses achieve sustainable growth and success.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Strategic Planning</li>
                <li>Business Transformation</li>
                <li>AI Integration</li>
                <li>Growth Strategy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@agency.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Business Ave</li>
                <li>New York, NY 10001</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Consulting Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;