'use client';
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase/client';

interface ContactDetails {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: ContactDetails = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactDetails>(initialFormData);
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase.from('contact_messages').insert(formData);

    if (error) {
      console.error(error);
      setStatus('error');
    } else {
      setStatus('success');
      setFormData(initialFormData);
    }
  };
  
  return (
    <div className="p-10">
      {status === 'success' && (
        <p className="text-center text-sm text-[#01D28E]">Message sent successfully! We'll get back to you soon.</p>
      )}
      {status === 'error' && (
        <p className="text-center text-sm text-red-600">Something went wrong. Please try again</p>
      )}
      
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-500">Name</label>
          <input
            className="w-[31.25rem] h-[3.125rem] border border-gray-300 rounded-lg px-4"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-500">E-Mail</label>
          <input className="w-[31.25rem] h-[3.125rem] border border-gray-300 rounded-lg px-4"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter E-Mail"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-500">Subject</label>
          <input className="w-[31.25rem] h-[3.125rem] border border-gray-300 rounded-lg px-4"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter Subject"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-500">Message</label>
          <textarea
            className="rounded-lg border border-gray-300 w-[31.25rem] px-4 py-4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            required
          />
        </div>
        <button
          className="w-[31.25rem] h-[3.125rem] rounded-lg text-white bg-[#DC3545] hover:text-[#DC3545] hover:bg-transparent hover:border transition-colors"
        >{status === 'loading' ? 'SENDING...' : 'SEND'}</button>
      </form>
    </div>
  )
}

export default ContactForm;