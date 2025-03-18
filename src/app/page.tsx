'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  // const [selectedPlan, setSelectedPlan] = useState('premium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Your actual form IDs from the pre-filled URL
      const formId = "1FAIpQLScOn0ZzwcAIsoKil-KldkiLOldCyhKm89c160riHE91nA8c3w";
      const emailEntryId = "183948955";
      
      // Create form submission URL with query parameters
      const submissionUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse?entry.${emailEntryId}=${encodeURIComponent(email)}&submit=Submit`;
      
      // Create a hidden form in the page
      const hiddenForm = document.createElement('form');
      hiddenForm.method = 'POST';
      hiddenForm.action = submissionUrl;
      hiddenForm.target = '_blank'; // So it opens in a new tab, which we'll close immediately
      
      // Create a hidden input for the email
      const emailInput = document.createElement('input');
      emailInput.type = 'hidden';
      emailInput.name = `entry.${emailEntryId}`;
      emailInput.value = email;
      hiddenForm.appendChild(emailInput);
      
      // Create a submit button (required for automatic form submission)
      const submitButton = document.createElement('input');
      submitButton.type = 'submit';
      submitButton.style.display = 'none';
      hiddenForm.appendChild(submitButton);
      
      // Add the form to the page
      document.body.appendChild(hiddenForm);
      
      // Submit the form
      hiddenForm.submit();
      
      // Remove the form after submission
      setTimeout(() => {
        document.body.removeChild(hiddenForm);
      }, 1000);
      
      // Show success modal
      setShowModal(true);
      setEmail('');
      
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting your email. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
            <img 
              src="/images/PNG Transparent File-01.png" 
              alt="Endorsify Logo" 
              className="h-36 w-auto"
              />
              <span className="ml-3 text-2xl font-bold text-gray-900">Welcome to Endorsify</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-cyan-500">Features</Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-cyan-500">How It Works</Link>
              <Link href="#pricing" className="text-gray-600 hover:text-cyan-500">Pricing</Link>
              <button className="rounded-md bg-cyan-500 text-white px-6 py-2 hover:bg-cyan-600 transition-colors cursor-pointer whitespace-nowrap">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-gray-900 to-cyan-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 min-h-[800px] items-center">
            <div className="text-white pt-20 md:pt-0">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Connect, Advertise, Sell
                <span className="block text-cyan-400">Empower Your Network</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                A trust-driven marketplace where endorsements unlock opportunities. Build genuine connections, showcase your business, and grow through trusted endorsements.
              </p>
              <form onSubmit={handleSubmit} className="flex max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-l-lg border-none text-white focus:border-white focus:outline-none bg-transparent"
                  required
                />
                <button type="submit" className="rounded-md bg-cyan-500 px-8 py-4 text-white font-semibold hover:bg-cyan-600 rounded-r-lg transition-colors cursor-pointer whitespace-nowrap">
                  Join Waitlist
                </button>
              </form>
            </div>
            <div className="hidden md:block">
              <div className="bg-white p-4 rounded-lg shadow-xl">
                <div className="rounded-lg bg-gray-100 p-6">
                  <div className="bg-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Business Profile</h3>
                  <div className="space-y-3">
                    <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="font-bold text-sm text-gray-700 mb-2">Endorsements</div>
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs text-gray-600">
                          {i}
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full bg-cyan-100 border-2 border-white flex items-center justify-center text-xs text-cyan-600">
                        +8
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Endorsify?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Endorsify is a revolutionary platform where businesses grow through trusted endorsements instead of traditional reviews.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Endorse & Build Trust",
                description: "No star ratings, only real endorsements from verified businesses and professionals.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                  </svg>
                )
              },
              {
                title: "Marketplace for Everyone",
                description: "Connect with businesses, freelancers, and entrepreneurs in a trusted environment.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                )
              },
              {
                title: "Earn Business XP",
                description: "Gain levels and credibility through meaningful engagements and transactions.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Sign up & Create Your Store",
                description: "Showcase products & services effortlessly with our intuitive platform.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                  </svg>
                )
              },
              {
                step: "2",
                title: "Get Endorsed",
                description: "Gain credibility from real users instead of generic ratings.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                )
              },
              {
                step: "3",
                title: "Sell, Network, and Grow",
                description: "Expand your business through trusted connections and endorsements.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                  </svg>
                )
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 border-2 border-cyan-100 hover:border-cyan-500 transition-colors">
                  <div className="absolute -top-4 left-8 bg-cyan-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div className="mb-6 text-cyan-500">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-20 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Choose Your Plan</h2>

          <div className="grid md:grid-cols-3 gap-8 justify-center">
            {[{
              name: "Consumer",
              price: "0",
              features: [
                "Shop and browse storefronts",
                "Like and interact with businesses",
                "Access marketplace listings"
              ]
            }, {
              name: "Business",
              price: "15",
              features: [
                "Create a storefront",
                "List products and services",
                "Endorse other businesses"
              ],
              isPopular: true
            }, {
              name: "Business Elite",
              price: "50",
              features: [
                "Advanced analytics",
                "Exclusive marketing tools",
                "Enhanced marketplace visibility"
              ],
              isComingSoon: true
            }].map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-xl p-8 shadow-lg text-center ${plan.isPopular ? 'border-2 border-cyan-500' : ''} ${plan.isComingSoon ? 'bg-gray-200 opacity-50' : ''}`}>
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                {plan.isComingSoon && (
                  <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-sm font-bold py-1">
                    Coming Soon!
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-cyan-500 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                {!plan.isComingSoon && (
                  <button 
                  className="rounded-md w-full py-3 text-center font-semibold bg-gray-300 text-gray-600 cursor-not-allowed" 
                  disabled
                >
                  Get Started
                </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security & Trust</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your security is our top priority. We implement industry-leading measures to protect your business and data.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Verification",
                description: "All businesses undergo a thorough verification process to ensure authenticity.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                )
              },
              {
                title: "Fraud Prevention",
                description: "Advanced AI systems detect and prevent fraudulent activities in real-time.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                )
              },
              {
                title: "Data Protection",
                description: "Enterprise-grade encryption keeps your sensitive information secure.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="mb-6 text-cyan-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Join the Movement</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Be part of the next generation of business networking. Start building your trusted network today.
          </p>
          <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-l-lg border-none text-white"
              required
            />
            <button type="submit" className="rounded-md bg-cyan-500 px-8 py-4 text-white font-semibold hover:bg-cyan-600 rounded-r-lg transition-colors cursor-pointer whitespace-nowrap focus:border-cyan-500 focus:outline-none bg-transparent">
              Get Started
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
              <Image 
                src="/images/PNG Transparent File-01.png" 
                alt="Endorsify Logo" 
                width={200}  
                height={200}
                className="h-50 w-auto"
                />
              </div>
              <p className="mt-2">
                <a href="https://endorsifyxp.com" className="hover:text-cyan-400 transition-colors">
                  endorsifyxp.com
                </a>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-white font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">API Docs</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Cookies</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} Endorsify. All rights reserved.</p>
          </div>
        </div>
      </footer>
     {/* Success Modal */}
     {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                We have received your request. We will notify you when Endorsify launches.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="rounded-md bg-cyan-500 text-white px-8 py-3 font-semibold hover:bg-cyan-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;