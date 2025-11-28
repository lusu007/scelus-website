'use client';

import { useState, FormEvent } from 'react';

type ContactFormProps = {
  locale: string;
  translations: {
    name: string;
    email: string;
    subject: string;
    message: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    subjectRequired: string;
    messageRequired: string;
  };
};

export default function ContactForm({ locale, translations }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = translations.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = translations.emailRequired;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = translations.emailInvalid;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = translations.subjectRequired;
    }

    if (!formData.message.trim()) {
      newErrors.message = translations.messageRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // For now, we'll use mailto: as a fallback
      // In production, you can replace this with an API endpoint
      const mailtoLink = `mailto:hi@scelus.io?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          {translations.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-primary-light focus:outline-none focus:ring-primary-light sm:text-sm ${
            errors.name
              ? 'border-red-300'
              : 'border-gray-300'
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          {translations.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-primary-light focus:outline-none focus:ring-primary-light sm:text-sm ${
            errors.email
              ? 'border-red-300'
              : 'border-gray-300'
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700"
        >
          {translations.subject}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-primary-light focus:outline-none focus:ring-primary-light sm:text-sm ${
            errors.subject
              ? 'border-red-300'
              : 'border-gray-300'
          }`}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          {translations.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-primary-light focus:outline-none focus:ring-primary-light sm:text-sm ${
            errors.message
              ? 'border-red-300'
              : 'border-gray-300'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className="rounded-md bg-green-50 p-4">
          <p className="text-sm font-medium text-green-800">
            {translations.success}
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-md bg-red-50 p-4">
          <p className="text-sm font-medium text-red-800">
            {translations.error}
          </p>
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-primary-dark px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-6"
        >
          {isSubmitting ? translations.submitting : translations.submit}
        </button>
      </div>
    </form>
  );
}

