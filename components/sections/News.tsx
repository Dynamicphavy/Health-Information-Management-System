import React from 'react';

interface Blog {
  image1: string;
  image2: string;
  name: string;
  date: string;
  topic: string;
}

const updates: Blog[] = [
  {
    image1: "",
    image2: "",
    name: "John Doe",
    date: "24 February, 2020",
    topic: "What every Athlete Needs To Know About Injury Recovery",
  },
  {
    image1: "",
    image2: "",
    name: "John Doe",
    date: "24 February, 2020",
    topic: "What every Athlete Needs To Know About Injury Recovery",
  },
  {
    image1: "",
    image2: "",
    name: "John Doe",
    date: "24 February, 2020",
    topic: "What every Athlete Needs To Know About Injury Recovery",
  },
]

const News = () => {
  return (
      <div className="w-full h-[56.25rem] flex flex-col justify-center items-center font-pop">
        <h3 className="text-[0.875rem] mt-5 text-[#01D28E] font-bold">NEWS & BLOG</h3>
        <h3 className="text-[2.188rem]">Latest news from our blog</h3>
        <div className="w-full h-[43.75rem] flex justify-center items-center gap-3">
          {updates.map((blog, index) => (
            <div key={index} className="w-[28.125rem] h-[37.5rem] flex flex-col gap-8">
              <div className="w-[28.125rem] h-[21.875rem] bg-green-600"></div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-yellow-600 rounded-full"></div>
                <div>
                  <h4 className="text-[#A5A8AB] text-[0.938rem]">Posted by {blog.name}</h4>
                  <p className="text-[#6C5CE7] text-[0.938rem]">{blog.date}</p>
                </div>
              </div>
              <p className="text-[1.25rem] font-bold">{blog.topic}</p>
            </div>
          ))}
        </div>
      </div>      
  )
}

export default News;