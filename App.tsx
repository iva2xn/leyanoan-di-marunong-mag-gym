
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
          <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">Live Preview</h2>
          <ProfileCard profile={profile} />
        </div>
      </main>
    </div>
  );
};

export default App;
