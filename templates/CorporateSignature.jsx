import React from 'react';

const CorporateSignature = () => {
  return (
    <div className="font-sans max-w-2xl mx-auto p-6 bg-white">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Hodge Luke</h1>
        <p className="text-gray-600 italic">"Connecting People to Digital Intelligence"</p>
      </div>

      <div className="border-t border-blue-200 mb-6"></div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">Derrick Hodge</h2>
        <p className="text-gray-600 font-medium mb-4">Founder & CEO</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
          <div>
            <p className="mb-2">
              <span className="font-medium">Address:</span><br />
              5460 Franklin St<br />
              Hilliard, OH 43026<br />
              United States
            </p>
          </div>
          <div>
            <p className="mb-2">
              <span className="font-medium">Contact:</span><br />
              Office: +1 (380) 213-8745<br />
              Direct: +1 (614) 407-4920
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm">
        <p className="text-gray-700 mb-3">
          Advancing business with the latest digital technology and thinking. At Hodge Luke, we stand at the forefront of the digital revolution, guiding businesses through the labyrinth of emerging technologies.
        </p>
        <p className="text-gray-700">
          Our team of seasoned experts is dedicated to unlocking the latent potential within your business, leveraging cutting-edge digital tools that scale with your vision.
        </p>
      </div>

      <div className="border-t border-gray-200 my-6"></div>

      <div className="text-center text-sm text-gray-500">
        <p className="mb-4">This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed.</p>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="text-blue-500 hover:text-blue-600">
          <span className="sr-only">LinkedIn</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-600">
          <span className="sr-only">Twitter</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CorporateSignature;