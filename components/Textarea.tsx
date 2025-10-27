
import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, id, value, ...props }) => {
  const charCount = (value as string)?.length || 0;
  
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label htmlFor={id} className="block text-sm font-medium text-dark-text-secondary">{label}</label>
        {props.maxLength && (
          <span className="text-sm text-dark-text-secondary">{charCount} / {props.maxLength}</span>
        )}
      </div>
      <textarea
        id={id}
        value={value}
        className="block w-full rounded-md border-0 p-3 bg-dark-bg/50 text-dark-text shadow-sm ring-1 ring-inset ring-dark-border placeholder:text-dark-text-secondary/50 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6 transition-all duration-200"
        {...props}
      />
    </div>
  );
};

export default Textarea;
