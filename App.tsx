
import React, { useState } from 'react';
import type { Profile } from './types';
import ProfileForm from './components/ProfileForm';
import ProfileCard from './components/ProfileCard';

const initialProfile: Profile = {
  username: 'janedev',
  displayName: 'Jane Doe',
  bio: 'Full-stack developer passionate about AI and building cool things. Looking for a team to join for the next big hackathon!',
  profilePicture: 'https://picsum.photos/seed/janedev/200/200',
  skills: ['React', 'TypeScript', 'Node.js', 'Python', 'Gemini API'],
  interests: ['Artificial Intelligence', 'Web3', 'Developer Tools', 'FinTech'],
  socials: {
    github: 'https://github.com/janedev',
    linkedin: 'https://linkedin.com/in/janedev',
    portfolio: 'https://janedev.com',
    twitter: 'https://twitter.com/janedev',
  },
};

const App: React.FC = () => {
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text p-4 sm:p-6 lg:p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
          Developer Profile Builder
        </h1>
        <p className="text-dark-text-secondary mt-2">
          Create and preview your hackathon profile in real-time.
        </p>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="bg-dark-card rounded-xl p-6 sm:p-8 border border-dark-border shadow-2xl">
          <ProfileForm profile={profile} setProfile={setProfile} />
        </div>
        
        <div className="lg:sticky lg:top-8">
          {isPreviewVisible ? (
             <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Live Preview</h2>
                <button
                  onClick={() => setIsPreviewVisible(false)}
                  className="px-3 py-2 text-sm font-semibold text-dark-text-secondary bg-dark-border rounded-md hover:bg-dark-border/80 transition-colors flex items-center gap-2"
                  aria-label="Hide live preview"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
                  Hide
                </button>
              </div>
              <ProfileCard profile={profile} />
            </>
          ) : (
            <div className="bg-dark-card rounded-xl border-2 border-dashed border-dark-border p-8 text-center flex flex-col items-center justify-center h-full min-h-[500px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-brand-primary/50 mb-4"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
              <h2 className="text-2xl font-bold mb-2">Profile Preview</h2>
              <p className="text-dark-text-secondary mb-6 max-w-sm">
                Click the button below to see a live preview of your profile card.
              </p>
              <button
                onClick={() => setIsPreviewVisible(true)}
                className="px-6 py-3 font-semibold text-white bg-brand-primary rounded-md hover:bg-brand-primary/90 transition-colors shadow-lg flex items-center gap-2"
                aria-label="Show live preview"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                Show Preview
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
