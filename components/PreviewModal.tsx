
import React from 'react';
import type { Profile } from '../types';
import ProfileCard from './ProfileCard';

interface PreviewModalProps {
  profile: Profile;
  onClose: () => void;
  onSave: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ profile, onClose, onSave }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-dark-card rounded-xl p-6 sm:p-8 border border-dark-border shadow-2xl max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Profile Preview</h2>
          <button
            onClick={onClose}
            className="px-3 py-2 text-sm font-semibold text-dark-text-secondary bg-dark-border rounded-md hover:bg-dark-border/80 transition-colors"
            aria-label="Close preview"
          >
            Close
          </button>
        </div>
        <ProfileCard profile={profile} />
        <div className="flex justify-end mt-6">
          <button
            onClick={onSave}
            className="px-6 py-3 font-semibold text-white bg-brand-primary rounded-md hover:bg-brand-primary/90 transition-colors shadow-lg"
            aria-label="Save profile"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
