'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ShieldCheck,
  Factory,
  Layers,
  Flame,
  Paintbrush,
  Boxes,
  ChevronRight,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Award,
  Truck,
  Sparkles,
} from 'lucide-react';
import { services, BUSINESS_INFO } from '@/lib/services';

const iconMap = {
  sove: ShieldCheck,
  mantolama: Layers,
  yalitim: Factory,
  eps: Boxes,
  tasyunu: Flame,
  dekoratif: Paintbrush,
} as const;

export default function HizmetlerPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const { scrollY } = useScroll();
  const yHeader = useTransform(scrollY, [0, 600], [0, 180]);
  const opacityHeader = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <main className="flex flex-col w-full bg-white overflow-x-hidden">
      {/* 1. PREMIUM HEADER — EXACT ABOUT & CONTACT PAGE DESIGN */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-40 lg:pb-32 bg-[#050B15] overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center lg:text-left">
          <motion.div
            style={{ y: yHeader, opacity: opacityHeader }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto lg:mx-0"
          >
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6 flex justify-center lg:justify-start">
              <ol className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-xs md:text-sm text-slate-300 backdrop-blur-md">
                <li>
                  <Link href="/" className="hover:text-brand-gold transition-colors">
                    Ana Sayfa
                  </Link>
                </li>
                <ChevronRight size={14} className="text-brand-gold/70 shrink-0" />
                <li className="text-brand-gold font-semibold">Hizmetlerimiz</li>
              </ol>
            </nav>

            {/* Luxury Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-brand-gold/20 via-brand-gold/10 to-transparent border border-brand-gold/30 text-brand-gold font-bold text-[11px] md:text-xs uppercase tracking-[0.2em] backdrop-blur-md shadow-[0_2px_15px_rgba(212,175,55,0.15)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
              Malatya Fabrikamız & Üretim Hizmetlerimiz
            </div>

            {/* H1 Heading with Golden Gradient */}
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 lg:mb-8 font-display leading-[1.08] tracking-tight">
              Malatya Söve İmalatı & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold bg-[length:200%_auto] animate-gradient">
                Yalıtım Hizmetlerimiz.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base md:text-xl leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
              Malatya 1. Organize Sanayi Bölgesi&apos;ndeki modern tesislerimizde CNC pencere sövesi,
              yüksek dansite EPS dış cephe mantolama levhası ve dekoratif cephe elemanları üretiyoruz.
              Aracısız, doğrudan fabrika fiyatıyla hizmetinizdeyiz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS BAR (FLOATING CARDS) */}
      <section className="pt-8 pb-12 md:pt-0 md:pb-20 md:-mt-14 lg:-mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: '300K+', unit: 'm²', label: 'Yıllık Üretim Kapasitesi', desc: 'Tam Otomasyonlu Tesis' },
              { value: 'TS EN', unit: '13163', label: 'TSE Belgeli Standart', desc: 'A Sınıfı Hammadde' },
              { value: '%100', unit: '', label: 'Doğrudan Fabrika Fiyatı', desc: 'Aracısız Toptan & Perakende' },
              { value: '20+', unit: 'Yıl', label: 'Sektörel Tecrübe', desc: 'Malatya & Bölge Lideri' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-5 sm:p-6 lg:p-7 rounded-2xl md:rounded-[28px] border border-slate-100 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-brand-gold/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy font-display">
                    {stat.value}
                    <span className="text-brand-gold text-lg sm:text-xl ml-1">{stat.unit}</span>
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-700 mt-1">{stat.label}</p>
                </div>
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-3">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PREMIUM SERVICES GRID */}
      <section className="py-12 md:py-20 bg-[#FAFAFB]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <div className="inline-flex items-center gap-3 text-brand-gold font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
              <span className="w-8 h-0.5 bg-brand-gold" />
              Üretim Portföyümüz
              <span className="w-8 h-0.5 bg-brand-gold" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy font-display leading-tight mb-4">
              İnşaat Projelerinize Özel <br className="hidden sm:inline" />
              <span className="text-brand-gold">Mühendislik Çözümleri</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
              Doğu ve Güneydoğu Anadolu&apos;nun en modern söve ve EPS yalıtım fabrikasında
              üretilen TSE belgeli ürünlerimizi ve uygulama çözümlerimizi keşfedin.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service, idx) => {
              const IconComponent = iconMap[service.iconKey];
              return (
                <motion.div
                  key={service.slug}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-[28px] lg:rounded-[36px] border border-slate-200/80 hover:border-brand-gold/50 shadow-sm hover:shadow-2xl transition-all duration-300 p-7 lg:p-9 flex flex-col justify-between overflow-hidden"
                >
                  {/* Background luxury gradient glow on hover */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-brand-gold/5 rounded-full blur-3xl group-hover:bg-brand-gold/15 transition-all pointer-events-none" />

                  <div>
                    {/* Top row: Icon & Badge */}
                    <div className="flex items-center justify-between gap-4 mb-7">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-[22px] bg-[#050B15] text-brand-gold flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                        <IconComponent size={28} />
                      </div>
                      <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/25">
                        {service.badgeLabel}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-brand-navy font-display group-hover:text-brand-gold transition-colors leading-tight mb-3">
                      {service.title.split('—')[0].trim()}
                    </h3>

                    {/* Subtitle / Description */}
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light mb-6">
                      {service.heroSubtitle.length > 150
                        ? `${service.heroSubtitle.substring(0, 150)}...`
                        : service.heroSubtitle}
                    </p>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.keywords.slice(0, 3).map((kw, kIdx) => (
                        <span
                          key={kIdx}
                          className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 font-medium"
                        >
                          <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="inline-flex items-center justify-between w-full pt-5 border-t border-slate-100 text-sm font-bold text-brand-navy group-hover:text-brand-gold transition-colors"
                  >
                    <span>Detaylı İncele & Teklif Al</span>
                    <span className="w-9 h-9 rounded-full bg-slate-50 group-hover:bg-brand-gold group-hover:text-brand-navy flex items-center justify-center transition-all group-hover:translate-x-1">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. PRODUCTION PROCESS — STORY & WORKFLOW */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text & Process Steps */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 text-brand-gold font-bold text-sm uppercase tracking-[0.2em]">
                <div className="w-10 h-0.5 bg-brand-gold" />
                Kalite ve Üretim Standartlarımız
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight font-display pl-6 relative">
                <span className="absolute left-0 top-0 w-1.5 h-full bg-brand-gold rounded-full" />
                Malatya 1. OSB&apos;de <br />
                Sıfır Hata, Maksimum Yalıtım.
              </h2>

              <p className="text-slate-600 text-base lg:text-lg leading-relaxed font-light">
                MRC Yalıtım Söve olarak her siparişi, mimari projenin gereksinimlerine göre
                bilgisayar destekli CNC makinelerinde milimetrik olarak işliyoruz. Akrilik polimer
                zırh kaplamayla dış ortam şartlarına 25+ yıl dayanıklı hale getiriyoruz.
              </p>

              {/* 4 Steps */}
              <div className="space-y-4 pt-2">
                {[
                  {
                    step: '01',
                    title: 'Proje & Metraj Analizi',
                    desc: 'Mimari çizimleriniz üzerinden en verimli söve ve mantolama metraj hesaplaması yapılır.',
                  },
                  {
                    step: '02',
                    title: 'CNC Milimetrik Kesim',
                    desc: 'Yüksek dansite EPS blokları son teknoloji otomasyonlu CNC tezgahlarında pürüzsüzce kesilir.',
                  },
                  {
                    step: '03',
                    title: 'Akrilik Polimer Zırhlama',
                    desc: 'Mikronize kalsit ve polimer harcıyla kaplanan profiller UV, don ve darbelere tam dayanıklı olur.',
                  },
                  {
                    step: '04',
                    title: 'Şantiyeye Hızlı Sevk',
                    desc: 'Malatya merkezli lojistik ağımızla çevre illere kırılma ve deformasyona karşı korumalı teslimat.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4 hover:bg-white hover:shadow-md transition-all group"
                  >
                    <span className="text-xl font-black text-brand-gold font-display shrink-0 w-8">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-brand-navy text-sm sm:text-base group-hover:text-brand-gold transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm mt-1 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Factory Image with Golden Accent Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mt-8 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none"
            >
              <div className="relative z-10 w-full aspect-[4/3] rounded-[32px] lg:rounded-[48px] overflow-hidden shadow-2xl border-[6px] lg:border-[10px] border-slate-100 bg-slate-900">
                <Image
                  src="/images/about-factory.jpg"
                  alt="MRC Yalıtım Söve Malatya Fabrikası Üretim Hattı"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute -top-3 -right-3 lg:-top-6 lg:-right-6 w-24 h-24 lg:w-36 lg:h-36 bg-brand-gold/80 rounded-2xl lg:rounded-[36px] -z-10 rotate-12 shadow-lg" />
              <div className="absolute -bottom-3 -left-3 lg:-bottom-6 lg:-left-6 w-24 h-24 lg:w-36 lg:h-36 bg-brand-navy rounded-2xl lg:rounded-[36px] -z-10 -rotate-6 shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. DIRECT FACTORY CTA — EXACT ABOUT & CONTACT PAGE FOOTER CTA */}
      <section className="py-12 md:py-16 bg-[#050B15] border-t border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-2">
            <p className="text-brand-gold font-bold text-xs uppercase tracking-[0.2em]">
              Doğrudan Fabrika Satış Hattı
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-display">
              Projeniz İçin Fabrikamızdan Hemen Teklif Alın
            </h3>
            <p className="text-slate-400 text-sm md:text-base">
              Malatya 1. OSB tesisimizden toptan fiyatlar, numune ve teknik destek için arayın.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-brand-gold text-brand-navy font-bold text-base md:text-lg hover:bg-white transition-colors shadow-lg active:scale-95 w-full sm:w-auto"
            >
              <Phone size={20} />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white/10 border border-white/15 text-white font-bold text-base hover:bg-white/20 transition-colors w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Teklif</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
