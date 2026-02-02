
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLoader from '../components/PageLoader';
import { fetchFromStrapi, getStrapiMedia, blocksToText } from '../lib/strapi';

const DepartmentTalented: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const res = await fetchFromStrapi('/iqtidorli-bolims?populate=*');
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
          <div className="absolute inset-0 bg-[#0A1F44]/80 z-10" />
          <img 
            src={getStrapiMedia(data?.single_rasm) || "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2400"} 
            className="w-full h-full object-cover" 
            alt="Academy Background" 
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-7xl">
          <h1 className="text-5xl md:text-8xl lg:text-[7vw] font-playfair font-bold text-white leading-tight tracking-tighter mb-12">
            Iqtidorli yoshlar <br /> <span className="text-[#D4AF37] italic font-light">Markazi.</span>
          </h1>
        </div>
      </section>

      {data && (
        <section className="py-24 md:py-48 px-6 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
             <div className="prose prose-slate max-w-none text-2xl font-playfair italic text-[#0A1F44]/70 leading-relaxed">
               {blocksToText(data.matn)}
             </div>
             <div className="bg-white p-12 rounded-[60px] border border-slate-50 shadow-sm">
                <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] block mb-8">Asosiy Vazifa:</span>
                <p className="text-xl text-slate-500 leading-relaxed italic">"{data.vazifa}"</p>
                {data.nizom && (
                  <a href={getStrapiMedia(data.nizom)} target="_blank" className="mt-12 inline-flex items-center gap-4 px-10 py-5 bg-[#0A1F44] text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#D4AF37] transition-all">
                    Nizomni yuklab olish
                  </a>
                )}
             </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default DepartmentTalented;
