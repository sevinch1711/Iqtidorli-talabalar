
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLoader from '../components/PageLoader';
import { fetchFromStrapi, getStrapiMedia, blocksToText } from '../lib/strapi';

const DepartmentScientific: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const res = await fetchFromStrapi('/ilmiy-bolims?populate=*');
      if (res && res.length > 0) setData(res[0]);
      setIsLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      <PageLoader isLoading={isLoading} />
      
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1F44]/85 z-10" />
          <img 
            src={getStrapiMedia(data?.single_rasm) || "https://cdn.uza.uz/2022/04/09/17/15/w0lSF2OLgwJS8Zep8e2NDXJUHB30wMo2_front.jpg"} 
            className="w-full h-full object-cover" 
            alt="Scientific" 
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-7xl">
          <h1 className="text-5xl md:text-8xl lg:text-[7vw] font-playfair font-bold text-white leading-tight tracking-tighter mb-12">
            Ilm-fan va <br /> <span className="text-[#0A84FF] italic font-light">Innovatsiya.</span>
          </h1>
        </div>
      </section>

      {data && (
        <section className="py-24 md:py-48 px-6 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
             <div className="prose prose-slate max-w-none text-2xl font-playfair italic text-[#0A1F44]/70 leading-relaxed">
               {blocksToText(data.matn)}
             </div>
             <div className="bg-[#F8FAFF] p-12 rounded-[60px] border border-slate-50">
                <span className="text-[#0A84FF] text-[10px] font-black uppercase tracking-[0.4em] block mb-8">Strategik Vazifa:</span>
                <p className="text-xl text-[#0A1F44]/60 leading-relaxed italic">"{data.vazifa}"</p>
                {data.nizom && (
                  <a href={getStrapiMedia(data.nizom)} target="_blank" className="mt-12 inline-flex items-center gap-4 px-10 py-5 bg-[#0A84FF] text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#0A1F44] transition-all">
                    Ilmiy Nizomni yuklash
                  </a>
                )}
             </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default DepartmentScientific;
