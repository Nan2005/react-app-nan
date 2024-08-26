import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Index: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h1 className="text-2xl font-bold mb-4">ข้อมูลส่วนตัว</h1>
          <ul className="space-y-4">
            <li>
              <strong className="font-semibold">ชื่อ-นามสกุล:</strong> กสินา สร้อยพวงนาค
            </li>
            <li>
              <strong className="font-semibold">รหัสนักศึกษา:</strong> 026630491021-6
            </li>
            <li>
              <strong className="font-semibold">Email:</strong> kasina.soi@rmutto.ac.th
            </li>
            <li>
              <strong className="font-semibold">เบอร์:</strong> +66 881 995 084
            </li>
          </ul>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
