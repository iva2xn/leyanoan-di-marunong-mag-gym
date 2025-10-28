
import React, { useState } from 'react';
import type { Profile } from './types';
import ProfileForm from './components/ProfileForm';
import ProfileCard from './components/ProfileCard';
import PreviewModal from './components/PreviewModal';

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

  const handleSave = () => {
    // Here you would typically save the profile data to a backend or local storage
    console.log('Profile saved:', profile);
    setIsPreviewVisible(false);
  };

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

      <main className="max-w-3xl mx-auto">
        <div className="bg-dark-card rounded-xl p-6 sm:p-8 border border-dark-border shadow-2xl">
          <ProfileForm 
            profile={profile} 
            setProfile={setProfile} 
            onPreview={() => setIsPreviewVisible(true)} 
          />
        </div>
      </main>

      {isPreviewVisible && (
        <PreviewModal
          profile={profile}
          onClose={() => setIsPreviewVisible(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default App;
