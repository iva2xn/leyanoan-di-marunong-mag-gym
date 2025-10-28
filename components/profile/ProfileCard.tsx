
import React from 'react';
import type { Profile } from '../../types';
import { ICONS } from '../../constants';

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div className="bg-dark-card rounded-xl shadow-lg overflow-hidden border border-dark-border transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl">
      <div className="bg-gradient-to-r from-brand-primary to-brand-secondary h-24"></div>
      <div className="p-6 relative">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          <img
            src={profile.profilePicture || 'https://picsum.photos/seed/placeholder/200/200'}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-dark-card object-cover"
          />
        </div>
        <div className="pt-12 text-center">
          <h2 className="text-2xl font-bold text-dark-text">{profile.displayName}</h2>
          <p className="text-sm text-brand-secondary">@{profile.username}</p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-dark-text-secondary">{profile.bio}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-dark-text-secondary uppercase tracking-wider mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <span key={index} className="bg-dark-border text-xs font-medium text-dark-text-secondary px-2.5 py-1 rounded-full">{skill}</span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-dark-text-secondary uppercase tracking-wider mb-2">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {profile.interests.map((interest, index) => (
              <span key={index} className="bg-brand-primary/20 text-brand-primary text-xs font-medium px-2.5 py-1 rounded-full">{interest}</span>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-dark-border flex justify-center gap-6">
          {Object.entries(profile.socials).map(([key, value]) => (
            value && (
              <a key={key} href={value} target="_blank" rel="noopener noreferrer" className="text-dark-text-secondary hover:text-brand-primary transition-colors">
                {ICONS[key]}
              </a>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
