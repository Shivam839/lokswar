import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contactus from './pages/Contactus';
import Whatwedo from './pages/Whatwedo';
import Gallery from './pages/Gallery';
import Partners from './pages/Partners';
import Projects from './pages/Projects';
import AboutBackground from './components/AboutBackground';
import AboutIdeology from './components/AboutIdeology';
import AboutVisionObjective from './pages/AboutVisionObjective';
import AboutTeamTable from './components/AboutTeamTable';
import Media from './pages/Media';
import Blogs from './pages/Blogs';
import Becomevolunteer from './pages/Becomevolunteer';
import Becomedonor from './pages/Becomedonor';
import Fulltimeopportunity from './pages/Fulltimeopportunity';
import Fundingpartners from './pages/Fundingpartners';
import Documents from './pages/Documents';
import Ourtheme from './pages/Ourtheme';
import AnnualReports from './pages/AnnualReports';
import LegalDocuments from './pages/LegalDocuments';
import AppreciationLetters from './pages/AppreciationLetters';


function App() {

  return (
   <BrowserRouter>
 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contactus/>}/>
        <Route path="/resources/photos" element={<Gallery/>}/>
        <Route path="/resources/media" element={<Media/>}/>
        <Route path="/resources/blogs" element={<Blogs/>}/>
        <Route path="/resources/documents" element={<Documents/>}/>
        <Route path="/resources/documents/annual-reports" element={<AnnualReports/>}/>
        <Route path="/resources/documents/legal-documents" element={<LegalDocuments/>}/>
        <Route path="/appreciations-letter" element={<AppreciationLetters/>}/>
        <Route path="/our-programs" element={<Projects/>}/>
        <Route path="/about/background" element={<AboutBackground/>}/>
        <Route path="/about/ideology" element={<AboutIdeology/>}/>
        <Route path="/about/approach" element={<AboutVisionObjective/>}/>
        <Route path="/about/boardmembers" element={<AboutTeamTable/>}/>
        <Route path="/about/theme" element={<Ourtheme/>}/>
        <Route path="/get-involved/become-a-volunteer" element={<Becomevolunteer/>}/>
        <Route path="/get-involved/become-a-donor" element={<Becomedonor/>}/>
        <Route path="/get-involved/get-full-time-opportunity" element={<Fulltimeopportunity/>}/>
        <Route path="/our-partners/Collaboration-and-institutional-partner" element={<Partners/>}/>
        <Route path="/our-partners/funding-partner" element={<Fundingpartners/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
