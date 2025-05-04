
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: December 3, 2025
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Our Commitment to Privacy</h3>
              <p className="text-blue-800">
                Timeloom is designed with privacy as a core principle. We don't store your emails or calendar data. 
                We only store the tags and associations you create to provide our service.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Information</h3>
            <p className="text-gray-700 mb-4">
              When you sign up for Timeloom, we collect basic account information including your email address, 
              name, and profile picture from your Google account. This information is used to create and manage your account.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Google API Access</h3>
            <p className="text-gray-700 mb-4">
              Timeloom requires specific Google API permissions to provide our tagging functionality:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Gmail API Scopes:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm font-mono">
                <li>https://www.googleapis.com/auth/gmail.readonly - Read email messages</li>
                <li>https://www.googleapis.com/auth/gmail.modify - Modify email labels</li>
                <li>https://www.googleapis.com/auth/gmail.send - Send emails on your behalf (for notifications)</li>
                <li>https://www.googleapis.com/auth/gmail.compose - Compose draft emails</li>
                <li>https://www.googleapis.com/auth/gmail.labels - Manage email labels</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3 mt-4">Calendar API Scopes:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm font-mono">
                <li>https://www.googleapis.com/auth/calendar - Access and modify calendar events</li>
                <li>https://www.googleapis.com/auth/calendar.events - Create and modify calendar events</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded-r-lg">
              <h4 className="font-semibold text-green-900 mb-2">Important: We Don't Store Your Data</h4>
              <p className="text-green-800">
                While we request these permissions, <strong>we do not store your email content or calendar event details</strong> 
                on our servers. We only process this information locally to create tag associations and store only the 
                metadata about which items you've tagged.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Tags and Associations</h3>
            <p className="text-gray-700 mb-4">
              We store the tags you create and their associations with your Gmail messages and calendar events. 
              This includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Tag names and descriptions you create</li>
              <li>References to Gmail message IDs and calendar event IDs</li>
              <li>Custom dashboard cards and their associated tags</li>
              <li>Project structures and Gantt chart data</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the collected information to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Provide the core tagging and organization functionality</li>
              <li>Create unified views of tagged items across Gmail and Calendar</li>
              <li>Generate project progress visualizations</li>
              <li>Sync your tags and associations across devices</li>
              <li>Improve our service and develop new features</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>All data transmission is encrypted using HTTPS/TLS</li>
              <li>OAuth 2.0 authentication with Google for secure API access</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Limited data retention - we only keep what's necessary for functionality</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Open Source Transparency</h2>
            <p className="text-gray-700 mb-6">
              Timeloom is completely open source. You can review our code, security practices, and data handling 
              on GitHub. This transparency ensures you can verify our privacy commitments and contribute to 
              making the platform even more secure.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Access all data we store about you</li>
              <li>Delete your account and all associated data</li>
              <li>Revoke Google API permissions at any time</li>
              <li>Export your tags and associations</li>
              <li>Request corrections to any stored information</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Google API Compliance</h2>
            <p className="text-gray-700 mb-6">
              Timeloom's use of information received from Google APIs adheres to Google API Services User Data Policy, 
              including the Limited Use requirements. We do not use Gmail or Calendar data for advertising, 
              do not sell any data to third parties, and do not use the data for any purpose other than providing 
              the core Timeloom functionality.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this privacy policy from time to time. We will notify you of any changes by posting 
              the new privacy policy on this page and updating the "Last updated" date. Significant changes will 
              be communicated via email or in-app notifications.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this privacy policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="text-gray-700">
                Email: privacy@timeloom.com<br />
                GitHub: <a href="https://github.com/timeloom" className="text-blue-600 hover:underline">https://github.com/timeloom</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;
