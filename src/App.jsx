import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Homepage from './pages/Homepage.jsx';
import About from './pages/About.jsx';
import Admissions from './pages/Admissions.jsx';
import Contact from './pages/Contact.jsx';
import CourseShowCase from './pages/courseShowcase.jsx';
// ... other imports

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> {/* Layout wraps the child routes */}
        <Route index element={<Homepage />} />  {/* default page */}
        <Route path="learningPath" element={<About />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="contact" element={<Contact />} />
        <Route path="showCourse" element={<CourseShowCase/>}/>
      </Route>
    </Routes>
  );
}
