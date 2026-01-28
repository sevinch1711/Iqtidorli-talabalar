
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center space-x-4 mb-6 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-sm border border-slate-100 group-hover:shadow-md transition-all duration-300">
                <img src="https://i.postimg.cc/8z0NfR9y/photo-2025-02-12-16-11-20.jpg" alt="O'zXIA Logo" className="w-10 h-10 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#0A1F44] tracking-tight leading-tight uppercase">
                  O'zXIA Iqtidorli talabalar
                </span>
                <span className="text-lg font-bold text-[#0A1F44] tracking-tight leading-tight uppercase">
                  bilan ishlash bo'limi
                </span>
              </div>
            </Link>
            <p className="text-[#64748B] max-w-sm leading-relaxed mt-4">
              O'zbekiston Xalqaro Islomshunoslik Akademiyasi Iqtidorli talabalar bilan ishlash bo'limi. Biz talabalarimizning ilmiy va ijodiy salohiyatini ro'yobga chiqarishga yordam beramiz.
            </p>
          </div>
          <div>
            <h4 className="text-[#0A1F44] font-semibold mb-6">Bo'limlar</h4>
            <ul className="space-y-4 text-sm text-[#64748B]">
              <li><Link to="/about" className="hover:text-[#0A84FF] transition-colors">Biz haqimizda</Link></li>
              <li><Link to="/scholarships" className="hover:text-[#0A84FF] transition-colors">Stipendiyalar</Link></li>
              <li><Link to="/achievements" className="hover:text-[#0A84FF] transition-colors">Yutuqlar</Link></li>
              <li><Link to="/news" className="hover:text-[#0A84FF] transition-colors">Yangiliklar</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#0A1F44] font-semibold mb-6">Bog'lanish</h4>
            <ul className="space-y-4 text-sm text-[#64748B]">
              <li>Toshkent sh., Abdulla Qodiriy ko'chasi, 11-uy</li>
              <li>+998 (71) 244-00-00</li>
              <li>iqtidori@iiau.uz</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 text-[#64748B] text-xs">
          <p>© 2024 O'zXIA Iqtidorli talabalar bo'limi. Barcha huquqlar himoyalangan.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#0A84FF]">Telegram</a>
            <a href="#" className="hover:text-[#0A84FF]">Instagram</a>
            <a href="#" className="hover:text-[#0A84FF]">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
