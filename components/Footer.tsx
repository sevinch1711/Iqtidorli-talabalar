
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const logoUrl = "https://lh3.googleusercontent.com/d/1lOQ8BI09iEXoI3DZD2tOoyn16hssFpT5";

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center space-x-4 mb-6 group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm border border-slate-100 group-hover:shadow-md transition-all duration-300 p-0">
                <img src={logoUrl} alt="O'zXIA TIJ Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#0A1F44] tracking-tight leading-tight uppercase">
                  O'zXIA Talabalar
                </span>
                <span className="text-lg font-bold text-[#D4AF37] tracking-tight leading-tight uppercase">
                  Ilmiy Jamiyati
                </span>
              </div>
            </Link>
            <p className="text-[#64748B] max-w-sm leading-relaxed mt-4 italic font-light">
              "O'zbekiston Xalqaro Islomshunoslik Akademiyasi Talabalar Ilmiy Jamiyati. Biz yosh olimlarni birlashtiramiz va ularning intellektual salohiyatini global darajaga ko'taramiz."
            </p>
          </div>
          <div>
            <h4 className="text-[#0A1F44] font-semibold mb-6">Bo'limlar</h4>
            <ul className="space-y-4 text-sm text-[#64748B]">
              <li><Link to="/faoliyat/talabalar" className="hover:text-[#D4AF37] transition-colors">Talabalar bo'limi</Link></li>
              <li><Link to="/scholarships" className="hover:text-[#D4AF37] transition-colors">Stipendiyalar</Link></li>
              <li><Link to="/achievements" className="hover:text-[#D4AF37] transition-colors">Yutuqlar</Link></li>
              <li><Link to="/news" className="hover:text-[#D4AF37] transition-colors">Yangiliklar</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#0A1F44] font-semibold mb-6">Bog'lanish</h4>
            <ul className="space-y-4 text-sm text-[#64748B]">
              <li>Toshkent sh., Abdulla Qodiriy ko'chasi, 11-uy</li>
              <li>+998 (71) 244-00-00</li>
              <li>tij@iiau.uz</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 text-[#64748B] text-xs">
          <div className="flex flex-col gap-1">
            <p>© 2026 O'zbekiston Xalqaro Islomshunoslik Akademiyasi. Barcha huquqlar himoyalangan.</p>
            <p className="text-[#D4AF37] font-semibold tracking-widest uppercase text-[10px] mt-2">Created by Sevinch Jovliyeva</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#D4AF37]">Telegram</a>
            <a href="#" className="hover:text-[#D4AF37]">Instagram</a>
            <a href="#" className="hover:text-[#D4AF37]">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
