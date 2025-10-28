import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  // FIX: Use React.JSX.Element type.
  icon?: React.JSX.Element;
  prefix?: string;
}

const Input: React.FC<InputProps> = ({ label, id, icon, prefix, ...props }) => {
  return (
    <div>
      {label && <label htmlFor={id} className="block text-sm font-medium text-dark-text-secondary mb-2">{label}</label>}
      <div className="relative">
        {(icon || prefix) && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-dark-text-secondary sm:text-sm">{icon || prefix}</span>
          </div>
        )}
        <input
          id={id}
          className={`
            block w-full rounded-md border-0 py-2.5 bg-dark-bg/50
            text-dark-text shadow-sm ring-1 ring-inset ring-dark-border 
            placeholder:text-dark-text-secondary/50 focus:ring-2 focus:ring-inset focus:ring-brand-primary 
            sm:text-sm sm:leading-6 transition-all duration-200
            ${(icon || prefix) ? 'pl-10' : 'pl-3'}
          `}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;