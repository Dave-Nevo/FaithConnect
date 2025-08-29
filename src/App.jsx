import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PocastPg from './pages/PocastPg';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import SignUp from './pages/SignUp';
import LoginIn from './pages/LoginIn';
import Podcst1 from './pages/Podcst1';
import Podcst2 from './pages/Podcst2';
import Podcst3 from './pages/Podcst3';
import Books from './pages/Books';
import LandngDsh from './pages/LandngDsh';
import BooksDsh from './pages/BooksDsh';
import PodDsh from './pages/PodDsh';
import BlogDsh from './pages/BlogDsh';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcastPg" element={<PocastPg />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/loginIn" element={<LoginIn />} />
        <Route path="/podcst1" element={<Podcst1 />} />
        <Route path="/podcst2" element={<Podcst2 />} />
        <Route path="/podcst3" element={<Podcst3 />} />
        <Route path="/books" element={<Books />} />
        <Route path="/landngDsh" element={<LandngDsh />} />
        <Route path="/booksDsh" element={<BooksDsh />} />
        <Route path="/podDsh" element={<PodDsh/>} />
        <Route path='/blogDsh' element={<BlogDsh/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App