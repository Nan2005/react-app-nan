import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

// ข้อมูลตัวอย่างของสัตว์เลี้ยง
const pets = [
  {
    id: 1,
    name: 'ออร์แกน',
    type: 'สุนัข',
    birthDate: '2020-05-15',
    gender: 'ชาย',
    owner: 'อาเธอร์',
    ownerEmail: 'Arthur@example.com',
    image: 'public/สุนัข.png',
    description: 'สุนัขไซบีเรียน ฮัสกี้เป็นหนึ่งในสายพันธุ์ที่เก่าแก่ที่สุดในโลก'
  },
  {
    id: 2,
    name: 'คริสตัล',
    type: 'แมว',
    birthDate: '2021-03-22',
    gender: 'หญิง',
    owner: 'เดซี่',
    ownerEmail: 'Daisy@example.com',
    image: 'public/แมว.jpg',
    description: 'มีขนฟูหนานุ่ม หน้าตากลมโตเหมือนดอกกุหลาบ'
  },
  {
    id: 3,
    name: 'แจ็กกี้',
    type: 'กระรอก',
    birthDate: '2022-07-10',
    gender: 'ชาย',
    owner: 'คาโร',
    ownerEmail: 'carol@example.com',
    image: 'public/กระรอก.jpg',
    description: 'กระรอกเป็นสัตว์ ตัวเล็ก น่ารัก และน่าจะเลี้ยงง่าย'
  }
];

const MyPetList: React.FC = () => {
  const [selectedPet, setSelectedPet] = useState<any>(null); // สถานะสำหรับเก็บสัตว์เลี้ยงที่เลือก

  const handlePetClick = (pet: typeof pets[number]) => {
    setSelectedPet(pet); // ตั้งค่าสัตว์เลี้ยงที่เลือก
  };

  const handleCloseDetails = () => {
    setSelectedPet(null); // ปิดรายละเอียดเมื่อคลิกปุ่มปิด
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">My Pet List</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">รูปภาพ</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชื่อ</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชนิด</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">วันเกิด</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">เพศ</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชื่อเจ้าของ</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">อีเมล</th>
              </tr>
            </thead>
            <tbody>
              {pets.map(pet => (
                <tr key={pet.id} className="border-b cursor-pointer hover:bg-gray-50" onClick={() => handlePetClick(pet)}>
                  <td className="px-4 py-2">
                    <img src={pet.image} alt={pet.name} className="w-24 h-24 object-cover rounded-md" />
                  </td>
                  <td className="px-4 py-2 text-sm font-medium text-gray-900">{pet.name}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">{pet.type}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">{new Date(pet.birthDate).toLocaleDateString()}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">{pet.gender}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">{pet.owner}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">{pet.ownerEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* แสดงรายละเอียดของสัตว์เลี้ยงที่เลือก */}
        {selectedPet && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h2 className="text-xl font-bold mb-2">Pet Details</h2>
              <img src={selectedPet.image} alt={selectedPet.name} className="w-full h-48 object-cover mb-4 rounded-md shadow-sm" />
              <p><strong>ชื่อ:</strong> {selectedPet.name}</p>
              <p><strong>ชนิด:</strong> {selectedPet.type}</p>
              <p><strong>วันเกิด:</strong> {new Date(selectedPet.birthDate).toLocaleDateString()}</p>
              <p><strong>เพศ:</strong> {selectedPet.gender}</p>
              <p><strong>ชื่อเจ้าของ:</strong> {selectedPet.owner}</p>
              <p><strong>อีเมล:</strong> {selectedPet.ownerEmail}</p>
              <p><strong>รายละเอียด:</strong> {selectedPet.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleCloseDetails}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MyPetList;
