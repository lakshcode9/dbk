import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  id,
  error,
  ...props
}) => {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        id={id}
        {...props}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-offset-2 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

export const FormTextarea: React.FC<
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> & {
    label: string;
    error?: string;
  }
> = ({ label, id, error, ...props }) => {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <textarea
        id={id}
        {...props}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-offset-2 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};