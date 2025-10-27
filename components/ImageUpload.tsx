
import React, { useRef } from 'react';

interface ImageUploadProps {
  imageUrl: string | null;
  setImageUrl: (url: string | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ imageUrl, setImageUrl }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex items-center gap-6">
      <div className="relative">
        <img
          src={imageUrl || `https://picsum.photos/seed/placeholder/200/200`}
          alt="Profile Preview"
          className="w-24 h-24 rounded-full object-cover border-2 border-dark-border"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold">Profile Picture</h3>
        <p className="text-sm text-dark-text-secondary mb-3">Upload a new photo.</p>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          className="hidden"
        />
        <button
          type="button"
          onClick={triggerFileInput}
          className="px-4 py-2 text-sm font-semibold text-white bg-brand-primary rounded-md hover:bg-brand-primary/90 transition-colors"
        >
          Choose Image
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
