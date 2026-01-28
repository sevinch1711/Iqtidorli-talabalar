
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

const Scholarships: React.FC = () => {
  const [selectedGrant, setSelectedGrant] = useState<any>(null);

  const grants = [
    {
      id: 1,
      title: "O'zbekiston Respublikasi Prezidenti stipendiyasi",
      type: "Davlat miqyosida",
      description: "Bakalavriatning oxirgi bosqich talabalari uchun eng nufuzli davlat mukofoti.",
      icon: "🏆",
      details: {
        requirements: [
          "O'quv fanlari bo'yicha o'zlashtirish ko'rsatkichi 85 ball va undan yuqori bo'lishi",
          "Kamida 2 ta xalqaro yoki respublika miqyosidagi ilmiy maqola",
          "C1 darajadagi xalqaro til sertifikati (IELTS 7.0+)",
          "Jamoat ishlaridagi faol ishtirok"
        ],
        benefits: "Bazaviy hisoblash miqdorining 10 baravari miqdorida oylik to'lov va magistraturaga imtihonsiz kirish huquqi.",
        deadline: "Har yili sentyabr oyi"
      }
    },
    {
      id: 2,
      title: "Navoiy nomidagi davlat stipendiyasi",
      type: "Ijtimoiy-gumanitar yo'nalish",
      description: "O'zbek tili va adabiyoti, islomshunoslik va dinshunoslik yo'nalishlari uchun.",
      icon: "📜",
      details: {
        requirements: [
          "Bakalavriatning 3 yoki 4-bosqich talabasi bo'lish",
          "O'zbek tarixi va adabiyotini mukammal bilish",
          "Ilmiy to'garaklarda faol ishtirok etish",
          "A'lo baholarda o'qish"
        ],
        benefits: "Maxsus stipendiya miqdori va kelajakda magistraturaga kirishda qo'shimcha imtiyozlar.",
        deadline: "Sentyabr-Oktyabr"
      }
    },
    {
      id: 3,
      title: "Akademiya iqtidorli talabalar granti",
      type: "Ichki imkoniyat",
      description: "Akademiyamiz tomonidan eng faol va tashabbuskor talabalarni qo'llab-quvvatlash jamg'armasi.",
      icon: "🕌",
      details: {
        requirements: [
          "Akademiya ichki reytingida yuqori o'rin",
          "Ijtimoiy loyihalarda faollik",
          "Xulq-atvori namunali bo'lishi"
        ],
        benefits: "Bir martalik yoki semestr davomida qo'shimcha moliyaviy rag'batlantirish.",
        deadline: "Har semestr yakunida"
      }
    },
    {
      id: 4,
      title: "Islom taraqqiqot banki stipendiyasi",
      type: "Xalqaro hamkorlik",
      description: "Xalqaro miqyosdagi ta'lim va tadqiqot loyihalarini moliyalashtirish dasturi.",
      icon: "🌐",
      details: {
        requirements: [
          "ITB a'zo davlatlar fuqarosi bo'lish",
          "Muhandislik, tibbiyot yoki islom iqtisodiyoti yo'nalishida o'qish",
          "Ingliz tilini yaxshi bilish"
        ],
        benefits: "O'qish xarajatlarini to'liq qoplash va oylik yashash xarajatlari uchun to'lov.",
        deadline: "Fevral-Mart oylari"
      }
    }
  ];

  return (
    <div className="pt-56 pb-40 bg-white min-h-screen selection:bg-[#0A84FF]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center md:text-left"
        >
          <div className="inline-block px-6 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-[#0A84FF] text-[11px] font-black uppercase tracking-[0.5em] mb-14">
            Talabalarga Imkoniyatlar
          </div>
          <h1 className="text-7xl md:text-9xl font-playfair font-bold text-[#0A1F44] tracking-tighter leading-[0.85] mb-14">
            Akademik <br /> <span className="italic font-light text-slate-200">mukofotlar.</span>
          </h1>
          <p className="text-3xl text-[#64748B] font-light max-w-4xl leading-relaxed">
            Biz sizning akademik yutuqlaringizni qadrlaymiz va rivojlanishingiz uchun barcha moliyaviy va huquqiy imkoniyatlarni taqdim etamiz.
          </p>
        </motion.div>
      </section>

      {/* Hero Image - UPDATED FOR RELIABILITY */}
      <section className="max-w-7xl mx-auto px-6 mb-56">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative aspect-[21/9] rounded-[100px] overflow-hidden border-[16px] border-white shadow-3xl bg-slate-100"
        >
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=90&w=2400" 
            className="w-full h-full object-cover" 
            alt="Academy Grand Library" 
          />
          <div className="absolute inset-0 bg-[#0A1F44]/25" />
        </motion.div>
      </section>

      {/* Grants Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {grants.map((grant, idx) => (
            <motion.div
              key={grant.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1 }}
              className="p-20 bg-slate-50 rounded-[80px] transition-all duration-700 hover:bg-white hover:shadow-3xl hover:-translate-y-4 group border border-transparent hover:border-[#0A84FF]/10"
            >
              <div className="text-7xl mb-12 group-hover:scale-110 transition-transform duration-500">{grant.icon}</div>
              <span className="text-[#0A84FF] font-black text-[12px] uppercase tracking-[0.5em] mb-8 block">{grant.type}</span>
              <h3 className="text-5xl font-playfair font-bold text-[#0A1F44] mb-10 leading-tight">{grant.title}</h3>
              <p className="text-2xl text-[#64748B] font-light leading-relaxed mb-16">{grant.description}</p>
              <button 
                onClick={() => setSelectedGrant(grant)}
                className="flex items-center space-x-6 text-[#0A1F44] font-bold group-hover:text-[#0A84FF] transition-all duration-300"
              >
                <span className="uppercase text-xs tracking-[0.4em] border-b-2 border-transparent group-hover:border-[#0A84FF] pb-1">Batafsil ma'lumot</span>
                <svg className="w-8 h-8 transform group-hover:translate-x-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detail Modal */}
      <Modal 
        isOpen={!!selectedGrant} 
        onClose={() => setSelectedGrant(null)} 
        title={selectedGrant?.title || "Dastur tafsilotlari"}
      >
        <div className="space-y-12">
          <div className="bg-slate-50 rounded-[40px] p-12">
            <h4 className="text-xs font-black uppercase tracking-[0.5em] text-[#0A84FF] mb-10">Asosiy Talablar</h4>
            <ul className="space-y-6">
              {selectedGrant?.details.requirements.map((req: string, i: number) => (
                <li key={i} className="flex items-start space-x-6 text-[#475569] text-xl font-light leading-snug">
                  <div className="w-3 h-3 rounded-full bg-[#0A84FF] mt-3.5 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-100">
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-[0.5em] text-[#0A84FF]">Ariza topshirish muddati</h4>
              <p className="text-4xl font-playfair font-bold text-[#0A1F44]">{selectedGrant?.details.deadline}</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-[0.5em] text-[#0A84FF]">Taqdim etiladigan imtiyoz</h4>
              <p className="text-slate-600 font-light text-xl leading-relaxed">{selectedGrant?.details.benefits}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Scholarships;
