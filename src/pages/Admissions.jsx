import React from 'react';

const forms = [
  {
    name: 'Application Form',
    url: 'https://www.zenfratech.edu/forms/application.pdf'
  },
  {
    name: 'Fee Structure',
    url: 'https://www.zenfratech.edu/forms/fee-structure.pdf'
  },
  {
    name: 'School Policies',
    url: 'https://www.zenfratech.edu/forms/school-policies.pdf'
  }
];

export default function Admissions() {
  return (
    <section aria-label="Admissions Information">
      {/* MISSION */}
      <section className="mt-10 mb-12 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Step Into the Future with Zenfratech
        </h1>
        <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-100">
          The world is powered by tech — and Zenfratech is where future innovators are born.  
          We don’t just teach, we **train minds to think, build, and create**.  
          Our hands-on, project-driven tutorials are designed to spark curiosity, boost confidence,  
          and turn learners into problem-solvers ready for the real world.  
          Whether you’re just getting started or ready to level up, we’ll meet you where you are and help you grow.
        </p>
      </section>

      <h1 tabIndex={-1} className="text-center text-2xl font-semibold mb-4">
        Join Our Class — Let’s Build the Future Together
      </h1>
      <p className="max-w-2xl mx-auto mb-6 text-center text-lg leading-relaxed">
        Ready to kickstart your learning journey with us?  
        Getting started is simple — follow these steps and you’ll be on your way to mastering the skills of tomorrow.
      </p>

      <ol className="max-w-2xl mx-auto mb-10 text-left text-base leading-relaxed list-decimal list-inside">
        <li>Download and fill out the <strong>Application Form</strong>.</li>
        <li>Submit your form and required documents to our admissions team.</li>
        <li>Attend a quick interview or orientation session.</li>
        <li>Complete your payment as outlined in the <strong>Fee Structure</strong>.</li>
        <li>Get your official welcome kit and start your Zenfratech journey 🚀.</li>
      </ol>

      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-3">Download Forms</h2>
        <ul className="list-none p-0">
          {forms.map((form) => (
            <li key={form.name} className="mb-2">
              <a
                href={form.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-400 underline hover:text-blue-900"
                aria-label={`Download ${form.name}`}
              >
                {form.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
