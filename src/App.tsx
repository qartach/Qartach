import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Globe, 
  Info,
  History,
  Anchor,
  Shield,
  Sun,
  Clock,
  ExternalLink,
  Share2,
  Check,
  Search,
  Menu,
  X
} from 'lucide-react';
import { getEventForDate } from './data/calendarData';
import { cn } from './lib/utils';

type Language = 'en' | 'fr' | 'ar';

const MONTHS = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  fr: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
  ar: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
};

const UI_TEXT = {
  en: {
    title: "Carthage Eternal",
    subtitle: "A Daily Chronicle of Tunisia's History",
    source: "Historical Source",
    today: "Today",
    yearsAgo: "years ago",
    countdown: "Next anniversary in",
    days: "days",
    pickDate: "Select Date",
    bce: "BCE",
    ce: "CE",
    viewSource: "Explore Source",
    copyLink: "Share Event",
    copied: "Link Copied",
    categories: {
      punic: "Punic Era",
      roman: "Roman Era",
      islamic: "Islamic Era",
      modern: "Modern Era",
      culture: "Cultural Heritage"
    }
  },
  fr: {
    title: "Carthage Éternelle",
    subtitle: "Une Chronique Quotidienne de l'Histoire de Tunisie",
    source: "Source Historique",
    today: "Aujourd'hui",
    yearsAgo: "il y a des années",
    countdown: "Prochain anniversaire dans",
    days: "jours",
    pickDate: "Choisir une date",
    bce: "av. J.-C.",
    ce: "ap. J.-C.",
    viewSource: "Explorer la source",
    copyLink: "Partager l'événement",
    copied: "Lien copié",
    categories: {
      punic: "Ère Punique",
      roman: "Ère Romaine",
      islamic: "Ère Islamique",
      modern: "Ère Moderne",
      culture: "Patrimoine Culturel"
    }
  },
  ar: {
    title: "قرطاج الخالدة",
    subtitle: "يوميات تاريخية من تونس",
    source: "المصدر التاريخي",
    today: "اليوم",
    yearsAgo: "سنة مضت",
    countdown: "الذكرى القادمة خلال",
    days: "يوم",
    pickDate: "اختر تاريخاً",
    bce: "ق.م",
    ce: "م",
    viewSource: "عرض المصدر",
    copyLink: "مشاركة الحدث",
    copied: "تم النسخ",
    categories: {
      punic: "العهد البونيقي",
      roman: "العهد الروماني",
      islamic: "العهد الإسلامي",
      modern: "العهد الحديث",
      culture: "التراث الثقافي"
    }
  }
};

const CATEGORY_COLORS = {
  punic: "bg-[#663399] text-white",
  roman: "bg-[#8B0000] text-white",
  islamic: "bg-[#006400] text-white",
  modern: "bg-[#B22222] text-white",
  culture: "bg-[#DAA520] text-black"
};

export default function App() {
  const [date, setDate] = useState(new Date());
  const [lang, setLang] = useState<Language>('ar'); // Default to Arabic for qartach.com feel
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentMonth = date.getMonth();
  const currentDay = date.getDate();
  const event = useMemo(() => getEventForDate(currentMonth + 1, currentDay), [currentMonth, currentDay]);

  const yearsAgo = useMemo(() => {
    if (!event.year) return null;
    const currentYear = new Date().getFullYear();
    return currentYear - event.year;
  }, [event.year]);

  const countdown = useMemo(() => {
    const now = new Date();
    const nextAnniversary = new Date(now.getFullYear(), currentMonth, currentDay);
    if (nextAnniversary < now) {
      nextAnniversary.setFullYear(now.getFullYear() + 1);
    }
    const diffTime = Math.abs(nextAnniversary.getTime() - now.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }, [currentMonth, currentDay]);

  const nextDay = () => {
    const next = new Date(date);
    next.setDate(date.getDate() + 1);
    setDate(next);
  };

  const prevDay = () => {
    const prev = new Date(date);
    prev.setDate(date.getDate() - 1);
    setDate(prev);
  };

  const copyToClipboard = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('m', (currentMonth + 1).toString());
    url.searchParams.set('d', currentDay.toString());
    navigator.clipboard.writeText(url.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const m = params.get('m');
    const d = params.get('d');
    if (m && d) {
      const newDate = new Date();
      newDate.setMonth(parseInt(m) - 1);
      newDate.setDate(parseInt(d));
      setDate(newDate);
    }
  }, []);

  const isRTL = lang === 'ar';

  return (
    <div className="min-h-screen bg-[#FDFCFB] p-4 md:p-12 flex items-center justify-center punic-grid">
      {/* Main Widget Card */}
      <div className={cn(
        "w-full max-w-2xl bg-white border border-[#E5E7EB] shadow-2xl rounded-3xl overflow-hidden flex flex-col transition-all duration-500",
        isRTL ? "font-tajawal text-right" : "font-cormorant text-left"
      )} dir={isRTL ? "rtl" : "ltr"}>
        
        {/* Top Navigation / Header */}
        <div className="p-6 border-b border-[#F3F4F6] flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full tyrian-gradient flex items-center justify-center text-white shadow-lg">
              <Anchor className="w-6 h-6" />
            </div>
            <div>
              <h1 className={cn(
                "text-2xl font-bold tracking-tight text-[#1A1A1A]",
                isRTL ? "font-reem" : "font-cormorant"
              )}>
                {UI_TEXT[lang].title}
              </h1>
              <p className="text-xs text-[#6B7280] font-medium uppercase tracking-widest">
                {UI_TEXT[lang].subtitle}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {(['en', 'fr', 'ar'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 border",
                  lang === l 
                    ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" 
                    : "bg-white text-[#4B5563] border-[#E5E7EB] hover:bg-[#F9FAFB]"
                )}
              >
                {l === 'ar' ? 'العربية' : l === 'fr' ? 'Français' : 'English'}
              </button>
            ))}
          </div>
        </div>

        {/* Date Control Bar */}
        <div className="px-6 py-4 bg-[#F9FAFB] border-b border-[#F3F4F6] flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button 
              onClick={prevDay}
              className="p-2 rounded-full hover:bg-white hover:shadow-md transition-all text-[#4B5563]"
            >
              <ChevronLeft className={cn("w-5 h-5", isRTL && "rotate-180")} />
            </button>
            
            <button 
              onClick={() => setIsPickerOpen(!isPickerOpen)}
              className="px-4 py-2 bg-white rounded-full shadow-sm border border-[#E5E7EB] flex items-center gap-2 text-sm font-bold text-[#1A1A1A] hover:shadow-md transition-all"
            >
              <CalendarIcon className="w-4 h-4 text-[#663399]" />
              {currentDay} {MONTHS[lang][currentMonth]}
            </button>

            <button 
              onClick={nextDay}
              className="p-2 rounded-full hover:bg-white hover:shadow-md transition-all text-[#4B5563]"
            >
              <ChevronRight className={cn("w-5 h-5", isRTL && "rotate-180")} />
            </button>
          </div>

          <button 
            onClick={() => setDate(new Date())}
            className="text-xs font-bold text-[#663399] hover:underline"
          >
            {UI_TEXT[lang].today}
          </button>
        </div>

        {/* Date Picker Overlay */}
        <AnimatePresence>
          {isPickerOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white border-b border-[#E5E7EB] p-6 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                  {isRTL ? "الشهر" : "Month"}
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {MONTHS[lang].map((m, idx) => (
                    <button
                      key={m}
                      onClick={() => {
                        const newDate = new Date(date);
                        newDate.setMonth(idx);
                        setDate(newDate);
                      }}
                      className={cn(
                        "text-[10px] font-bold py-2 px-1 rounded-lg border transition-all",
                        currentMonth === idx 
                          ? "bg-[#663399] text-white border-[#663399]" 
                          : "bg-white text-[#4B5563] border-[#E5E7EB] hover:border-[#663399]"
                      )}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                  {isRTL ? "اليوم" : "Day"}
                </h4>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 31 }).map((_, d) => (
                    <button
                      key={d}
                      onClick={() => {
                        const newDate = new Date(date);
                        newDate.setDate(d + 1);
                        setDate(newDate);
                        setIsPickerOpen(false);
                      }}
                      className={cn(
                        "text-[10px] font-bold w-full aspect-square flex items-center justify-center rounded-lg border transition-all",
                        currentDay === d + 1 
                          ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" 
                          : "bg-white text-[#4B5563] border-[#E5E7EB] hover:border-[#1A1A1A]"
                      )}
                    >
                      {d + 1}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content Area */}
        <div className="flex-1 p-8 md:p-12 relative overflow-hidden">
          {/* Background Decorative Element */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 opacity-[0.03] pointer-events-none">
            <Anchor className="w-full h-full" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentMonth}-${currentDay}-${lang}`}
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? -20 : 20 }}
              className="space-y-8"
            >
              {/* Category & Era Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <span className={cn(
                  "px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm",
                  CATEGORY_COLORS[event.category]
                )}>
                  {UI_TEXT[lang].categories[event.category]}
                </span>
                <span className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  {event.year ? (event.year < 0 ? UI_TEXT[lang].bce : UI_TEXT[lang].ce) : "Historical Era"}
                </span>
              </div>

              {/* Year Display */}
              <div className="relative">
                <h2 className={cn(
                  "text-8xl md:text-9xl font-black tracking-tighter text-[#1A1A1A] opacity-[0.05] absolute -top-10 left-0 select-none",
                  isRTL ? "right-0 left-auto" : "left-0"
                )}>
                  {event.year ? Math.abs(event.year) : "???"}
                </h2>
                <div className="relative pt-4">
                  <h3 className={cn(
                    "text-3xl md:text-4xl font-bold leading-tight text-[#1A1A1A]",
                    isRTL ? "font-reem" : "font-cormorant"
                  )}>
                    {event.title[lang]}
                  </h3>
                  {event.year && (
                    <p className="text-xl font-medium text-[#663399] mt-2">
                      {Math.abs(event.year)} {event.year < 0 ? UI_TEXT[lang].bce : UI_TEXT[lang].ce}
                    </p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#663399]/20 rounded-full" />
                <p className={cn(
                  "text-lg md:text-xl leading-relaxed text-[#4B5563] pl-6 italic",
                  isRTL ? "pr-6 pl-0 border-r-4 border-l-0 border-[#663399]/20" : "pl-6 border-l-4 border-r-0 border-[#663399]/20"
                )}>
                  {event.description[lang]}
                </p>
              </div>

              {/* Interactive Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-[#F3F4F6] group hover:shadow-lg transition-all">
                  <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-2 flex items-center gap-2">
                    <History className="w-3 h-3" />
                    {UI_TEXT[lang].yearsAgo}
                  </p>
                  <p className="text-3xl font-black text-[#1A1A1A] tracking-tighter">
                    {yearsAgo?.toLocaleString()}
                  </p>
                </div>
                <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-[#F3F4F6] group hover:shadow-lg transition-all">
                  <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    {UI_TEXT[lang].countdown}
                  </p>
                  <p className="text-3xl font-black text-[#1A1A1A] tracking-tighter">
                    {countdown} <span className="text-sm font-bold text-[#6B7280]">{UI_TEXT[lang].days}</span>
                  </p>
                </div>
              </div>

              {/* Source Section */}
              <div className="pt-8 border-t border-[#F3F4F6] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#F3F4F6] rounded-lg">
                    <Info className="w-4 h-4 text-[#6B7280]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest">
                      {UI_TEXT[lang].source}
                    </p>
                    <p className="text-sm font-medium text-[#4B5563]">
                      {event.source}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 w-full md:w-auto">
                  {event.link && (
                    <a 
                      href={event.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none px-6 py-2.5 bg-white border border-[#E5E7EB] rounded-xl text-xs font-bold text-[#1A1A1A] hover:bg-[#F9FAFB] hover:shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      {UI_TEXT[lang].viewSource}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <button 
                    onClick={copyToClipboard}
                    className="flex-1 md:flex-none px-6 py-2.5 bg-[#1A1A1A] text-white rounded-xl text-xs font-bold hover:bg-[#333] hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {copied ? <Check className="w-3 h-3" /> : <Share2 className="w-3 h-3" />}
                    {copied ? UI_TEXT[lang].copied : UI_TEXT[lang].copyLink}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-[#F9FAFB] border-t border-[#F3F4F6] flex justify-center items-center gap-4 opacity-40">
          <Shield className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Carthago Servanda Est</span>
          <Shield className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
