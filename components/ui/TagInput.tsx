
import React, { useState } from 'react';

interface TagInputProps {
  label: string;
  tags: string[];
  setTags: (tags: string[]) => void;
  placeholder: string;
}

const TagInput: React.FC<TagInputProps> = ({ label, tags, setTags, placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const newTag = inputValue.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setInputValue('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div>
      <label className="block text-sm font-medium text-dark-text-secondary mb-2">{label}</label>
      <div className="flex flex-wrap items-center w-full rounded-md bg-dark-bg/50 p-2 ring-1 ring-inset ring-dark-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-brand-primary transition-all duration-200">
        {tags.map((tag, index) => (
          <span key={index} className="flex items-center gap-1 bg-brand-primary/80 text-white text-sm font-medium mr-2 mb-1 px-2.5 py-1 rounded-md">
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="ml-1 text-white/70 hover:text-white"
            >
              &times;
            </button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-grow bg-transparent border-0 focus:ring-0 text-dark-text p-1"
        />
      </div>
    </div>
  );
};

export default TagInput;
