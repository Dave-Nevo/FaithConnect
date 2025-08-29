import React from "react";
// import { Calendar } from '@coreui/react-pro' 
import Calendar from 'react-calendar';
import LeftBooks from "../components/LeftBooks.jsx";
import CenterBook from "../components/CenterBook.jsx";
const BooksDsh = () => {
  return (
    <div>
      <div class="h-screen bg-white p-2 sm:p-3">
        <div class="h-full bg-gray-100 rounded-lg sm:rounded-2xl shadow-2xl overflow-hidden flex">
          <div class="flex flex-1 min-h-0">
            <LeftBooks />
            <div class="flex-1 p-6 sm:p-8 overflow-y-hidden hide-scrollbar ">
              <CenterBook />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDsh;
