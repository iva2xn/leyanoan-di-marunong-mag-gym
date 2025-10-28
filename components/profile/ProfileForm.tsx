
import React from 'react';
import type { Profile } from '../../types';
import Input from '../ui/Input';
import TagInput from '../ui/TagInput';
import ImageUpload from '../ui/ImageUpload';
import Textarea from '../ui/Textarea';
import { ICONS } from '../../constants';

interface ProfileFormProps {
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
  onPreview: () => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ profile, setProfile, onPreview }) => {
  const handleChange = (field: keyof Profile, value: any) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSocialChange = (social: keyof Profile['socials'], value: string) => {
    setProfile(prev => ({
      ...prev,
      socials: { ...prev.socials, [social]: value }
    }));
  };
  
  const setSkills = (skills: string[]) => handleChange('skills', skills);
  const setInterests = (interests: string[]) => handleChange('interests', interests);
  const setProfilePicture = (url: string | null) => handleChange('profilePicture', url);

  return (
    <form className="space-y-8">
      <h2 className="text-2xl font-bold border-b border-dark-border pb-4">Edit Your Profile</h2>
      
      <ImageUpload 
        imageUrl={profile.profilePicture} 
        setImageUrl={setProfilePicture} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input 
          label="Username" 
          id="username" 
          value={profile.username} 
          onChange={(e) => handleChange('username', e.target.value)} 
          prefix="@" 
        />
        <Input 
          label="Display Name" 
          id="displayName" 
          value={profile.displayName} 
          onChange={(e) => handleChange('displayName', e.target.value)} 
        />
      </div>

      <Textarea
        label="Bio / About Me"
        id="bio"
        value={profile.bio}
        onChange={(e) => handleChange('bio', e.target.value)}
        rows={4}
        maxLength={200}
      />

      <TagInput 
        label="Skills / Technologies" 
        tags={profile.skills} 
        setTags={setSkills} 
        placeholder="e.g., React, Python" 
      />

      <TagInput 
        label="Areas of Interest" 
        tags={profile.interests} 
        setTags={setInterests} 
        placeholder="e.g., AI, Web3" 
      />

      <div>
        <h3 className="text-lg font-semibold mb-4">Social Links</h3>
        <div className="space-y-4">
          <Input 
            id="github" 
            value={profile.socials.github || ''} 
            onChange={(e) => handleSocialChange('github', e.target.value)} 
            icon={ICONS.github}
            placeholder="https://github.com/username"
          />
          <Input 
            id="linkedin" 
            value={profile.socials.linkedin || ''} 
            onChange={(e) => handleSocialChange('linkedin', e.target.value)} 
            icon={ICONS.linkedin}
            placeholder="https://linkedin.com/in/username"
          />
          <Input 
            id="portfolio" 
            value={profile.socials.portfolio || ''} 
            onChange={(e) => handleSocialChange('portfolio', e.target.value)} 
            icon={ICONS.portfolio}
            placeholder="https://yourportfolio.com"
          />
           <Input 
            id="twitter" 
            value={profile.socials.twitter || ''} 
            onChange={(e) => handleSocialChange('twitter', e.target.value)} 
            icon={ICONS.twitter}
            placeholder="https://twitter.com/username"
          />
        </div>
      </div>

      <div className="flex justify-end pt-6 border-t border-dark-border">
        <button
          type="button"
          onClick={onPreview}
          className="px-6 py-3 font-semibold text-white bg-brand-primary rounded-md hover:bg-brand-primary/90 transition-colors shadow-lg"
        >
          Preview Profile
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
