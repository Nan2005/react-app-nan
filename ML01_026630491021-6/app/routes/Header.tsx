import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="bg-gradient-to-r from-[#98c1d9] to-[#e0f7fa] text-gray-800 py-4 shadow-lg">
    <div className="container mx-auto flex justify-between items-center px-6">
      <h1 className="text-4xl font-extrabold">ร้านสัตว์</h1>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="text-lg font-medium hover:text-[#f0e68c] transition-colors duration-300">หน้าแรก</Link>
          </li>
          <li>
            <Link to="/MyPetList" className="text-lg font-medium hover:text-[#f0e68c] transition-colors duration-300">สัตว์ทั้งหมด</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
