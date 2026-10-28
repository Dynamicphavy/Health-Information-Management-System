'use client'
import React, { useState } from 'react';
// import { supabase } from '../../supabaseClient';

interface Details {
  full_name: string;
  email: string;
  service: string;
  date: string;
  time: string;
}

const initialFormData: Details = {
  full_name: '',
  email: '',
  service: '',
  date: '',
  time: '',
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const AppointCard = () => {
  const [formData, setFormData] = useState<Details>(initialFormData);
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const { error } = await supabase.from('appointments').insert(formData);
    
    if (error) {
      console.error(error);
      setStatus('error');
    } else {
      setStatus('success');
      setFormData(initialFormData);
    }
  };
  
  return (
    <div className="w-[37.5rem] h-[40.625rem] bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col p-10 gap-6">
      <h1 className="text-center text-3xl">Book an Appointment</h1>

      {status === 'success' && (
        <p className="text-center text-sm text-[#01D28E]">Appointment booked successfully! We'll be in touch soon.</p>
      )}
      {status === 'error' && (
        <p className="text-center text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
      
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-400">Full Name</label>
          <input
            className="w-[31.25rem] h-[3.125rem] border border-gray-300 rounded-lg px-4"
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-400">Email Address</label>
          <input
            className="w-[31.25rem] h-[3.125rem] border border-gray-300 rounded-lg px-4"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-400">Select Service</label>
          <select
            className="w-[31.25rem] h-[3.125rem] rounded-lg border border-gray-300"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Choose a Service</option>
            <option value="Consultation">Consultation</option>
            <option value="General Checkup">General Checkup</option>
          </select>
        </div>
        <div className="w-[31.25rem] h-[6.25rem] flex justify-center items-center gap-5">
          <div className="w-[15.625rem] h-[4.375rem] flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">Date</label>
            <input
              className="h-[2.5rem] rounded-lg p-2 border border-gray-300"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-[15.625rem] h-[4.375rem] flex flex-col gap-2">  
            <label className="text-sm font-medium text-gray-400">Time</label>
            <input
              className="h-[2.5rem] rounded-lg p-2 border border-gray-300"
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-[31.25rem] h-[3.125rem] rounded-lg text-white bg-[#01D28E] hover:text-[#01D28E] hover:bg-transparent hover:border transition-colors"
        >{status === 'loading' ? 'BOOKING...' : 'CONFIRM APPOINTMENT'}</button>
      </form>
    </div>
  )
}

export default AppointCard;