
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import { StaffMember } from '../types';

const About: React.FC = () => {
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);

  const staffMembers: StaffMember[] = [
    {
      id: 1,
      name: "Dildora G'ulomova",
      position: "Bo'lim boshlig'i",
      receptionTime: "Dushanba-Juma, 14:00 - 17:00",
      phone: "+998 (71) 244-00-00",
      email: "d.gulomova@iiau.uz",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600",
      bio: "Dildora G'ulomova ko'p yillardan buyon talabalar bilan ishlash va iqtidorli yoshlarni qo'llab-quvvatlash sohasida faoliyat yuritadi. Uning boshchiligida bo'lim ko'plab xalqaro loyihalarni amalga oshirdi.",
      education: "O'zbekiston Milliy Universiteti, Filologiya fakulteti doktori."
    },
    {
      id: 2,
      name: "Otabek Shermatov",
      position: "Bosh mutaxassis",
      receptionTime: "Seshanba-Payshanba, 10:00 - 13:00",
      phone: "+998 (71) 244-00-01",
      email: "o.shermatov@iiau.uz",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600",
      bio: "Otabek Shermatov ilmiy-tadqiqot ishlarini tashkil etish va monitoring qilish bo'yicha mutaxassis. Talabalarning ilmiy salohiyatini oshirish bo'yicha maxsus seminarlar o'tkazadi.",
      education: "O'zbekiston Xalqaro Islom Akademiyasi, Islomshunoslik magistri."
    },
    {
      id: 3,
      name: "Nilufar Rahimova",
      position: "Uslubchi",
      receptionTime: "Chorshanba, 15:00 - 18:00",
      phone: "+998 (71) 244-00-02",
      email: "n.rahimova@iiau.uz",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600",
      bio: "Nilufar Rahimova o'quv-uslubiy qo'llanmalar tayyorlash va iqtidorli talabalar bazasini shakllantirish uchun mas'ul. U ijodiy tanlovlar tashkilotchisidir.",
      education: "Toshkent Davlat Pedagogika Universiteti, Pedagogika va psixologiya mutaxassisi."
    },
    {
      id: 4,
      name: "Sardor Azimov",
      position: "Katta inspektor",
      receptionTime: "Juma, 09:00 - 12:00",
      phone: "+998 (71) 244-00-03",
      email: "s.azimov@iiau.uz",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
      bio: "Sardor Azimov talabalar intizomi va jamoat ishlari bilan shug'ullanadi. Akademiya yoshlar ittifoqi bilan yaqin hamkorlikda ish olib boradi.",
      education: "Jahon Iqtisodiyoti va Diplomatiya Universiteti, Xalqaro huquq bakalavri."
    }
  ];

  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1F44]/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2400" 
            className="w-full h-full object-cover" 
            alt="Academy Background" 
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.8em]">Missiyamiz</span>
          </motion.div>
          <h1 className="text-7xl md:text-[10vw] font-playfair font-bold text-white leading-none tracking-tighter mb-16">
            Ilm-fan va <br /> <span className="text-[#D4AF37] italic font-light">Ma'rifat.</span>
          </h1>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link to="/leaders" className="px-14 py-6 bg-[#D4AF37] text-[#0A1F44] rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
              Talaba Liderlar
            </Link>
            <Link to="/" className="px-14 py-6 bg-transparent border border-white/30 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#0A1F44] transition-all">
              Bosh sahifa
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-48 px-8 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.6em] mb-12 block">Asosiy Maqsad</span>
          <p className="text-4xl md:text-5xl font-playfair italic text-[#0A1F44] leading-relaxed mb-12">
            "Bizning bo'lim iqtidorli yoshlarni aniqlash, ularni har tomonlama qo'llab-quvvatlash va milliy g'urur ruhida tarbiyalashni o'z oldiga oliy maqsad qilgan."
          </p>
          <p className="text-xl text-slate-500 font-light max-w-3xl mx-auto leading-loose">
            Akademiyamizning iqtidorli talabalari — bu yurtimizning intellektual salohiyatini belgilab beruvchi kuch. Biz har bir iqtidor egasiga o'z qanotlarini yozishi uchun zarur bo'lgan barcha imkoniyatlarni yaratib berishga tayyormiz.
          </p>
        </motion.div>
      </section>

      {/* Staff Section */}
      <section className="py-48 px-8 max-w-[1400px] mx-auto bg-white rounded-[100px] shadow-sm mb-48 border border-slate-50">
        <div className="text-center mb-32">
          <span className="text-[10px] font-black text-[#0A84FF] uppercase tracking-[0.8em] block mb-6">Ma'muriy jamoa</span>
          <h2 className="text-5xl md:text-7xl font-playfair font-bold text-[#0A1F44]">Bo'lim xodimlari</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {staffMembers.map((staff) => (
            <motion.div
              key={staff.id}
              whileHover={{ y: -15 }}
              onClick={() => setSelectedStaff(staff)}
              className="group cursor-pointer text-center"
            >
              <div className="aspect-[3/4] rounded-[60px] overflow-hidden mb-8 border border-slate-100 shadow-xl grayscale group-hover:grayscale-0 transition-all duration-1000">
                <img src={staff.image} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt={staff.name} />
              </div>
              <h4 className="text-2xl font-playfair font-bold text-[#0A1F44] mb-2">{staff.name}</h4>
              <p className="text-[#D4AF37] text-[9px] font-black uppercase tracking-widest">{staff.position}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Modal isOpen={!!selectedStaff} onClose={() => setSelectedStaff(null)} title="Xodim Ma'lumotlari">
        {selectedStaff && (
          <div className="p-10 md:px-14 md:pb-14">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-12">
              <div className="md:col-span-5">
                <div className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl border-8 border-[#F8FAFF]">
                  <img src={selectedStaff.image} className="w-full h-full object-cover" alt={selectedStaff.name} />
                </div>
              </div>
              <div className="md:col-span-7 pt-6">
                <h2 className="text-4xl font-playfair font-bold text-[#0A1F44] mb-2">{selectedStaff.name}</h2>
                <p className="text-[#0A84FF] text-[10px] font-black uppercase tracking-[0.2em] mb-10">{selectedStaff.position}</p>
                
                <div className="bg-[#F8FAFF] p-8 rounded-[30px] mb-8">
                  <span className="text-[#0A84FF] text-[9px] font-black uppercase tracking-widest block mb-4">Biografiya:</span>
                  <p className="text-lg font-playfair italic text-[#0A1F44]/70 leading-relaxed">
                    "{selectedStaff.bio}"
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-2">Ma'lumoti:</span>
                  <p className="text-[#0A1F44] font-medium text-lg">{selectedStaff.education}</p>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-2">Qabul vaqtlari:</span>
                      <p className="text-[#0A1F44] font-bold">{selectedStaff.receptionTime}</p>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-2">Telefon:</span>
                      <a href={`tel:${selectedStaff.phone}`} className="text-[#0A1F44] font-bold hover:text-[#D4AF37] transition-colors">{selectedStaff.phone}</a>
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-2">Email:</span>
                    <a href={`mailto:${selectedStaff.email}`} className="text-[#0A1F44] font-bold hover:text-[#D4AF37] transition-colors">{selectedStaff.email}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default About;
