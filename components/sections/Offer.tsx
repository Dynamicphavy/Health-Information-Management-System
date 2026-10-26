import React from 'react';

import {
  PersonStanding,
  Zap,
  HeartPulse,
  Hand,
  Activity,
  Move,
  type LucideIcon,
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: PersonStanding,
    title: "Spinal Manipulation",
    description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: Zap,
    title: "Electrotherapy",
    description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: HeartPulse,
    title: "Manual Lympahtic",
    description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: Hand,
    title: "Medical Acupuncture",
    description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: Activity,
    title: "Therapeutic Exercise",
    description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: Move,
    title: "Joint Mobilization",
    description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
]

const Offer = () => {
  return (
    <div className="w-full h-[53.125rem] flex flex-col justify-center items-center gap-3 font-pop">
      <h3 className="text-[0.875rem] mt-5 text-[#01D28E] font-bold">WE OFFER SERVICES</h3>
      <h3 className="text-[2.188rem]">Our Benefits</h3>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="w-[28.125rem] h-[18.75rem] flex gap-3">
              <div className="shrink-0">
                <div className="w-[3.125rem] h-[3.125rem] bg-white shadow-md flex justify-center items-center">
                  <Icon className="w-6 h-6 text-indigo-600" strokeWidth={1.5} />
                </div>
                <div className="w-[3.125rem] h-1 bg-indigo-600 mt-1" />
              </div>
              <div className="w-[23.75rem] h-[16.875rem] flex flex-col gap-4">
                <h4 className="text-[1.25rem] font-semibold">{service.title}</h4>
                <p className="text-[0.938rem] text-gray-500">{service.description}</p>
                <a className="text-gray-900 text-xs tracking-wide underline underline-offset-4 decoration-1 cursor-pointer hover:text-indigo-600">READ MORE</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Offer;