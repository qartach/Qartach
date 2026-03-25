export interface CalendarEvent {
  year?: number; // Year BCE (negative) or CE (positive)
  title: {
    en: string;
    fr: string;
    ar: string;
  };
  description: {
    en: string;
    fr: string;
    ar: string;
  };
  source: string;
  link?: string;
  category: 'punic' | 'roman' | 'islamic' | 'modern' | 'culture';
}

export const calendarData: Record<string, CalendarEvent> = {
  "01-03": {
    year: 1934,
    category: 'modern',
    title: {
      en: "First Arrest of Bourguiba",
      fr: "Première arrestation de Bourguiba",
      ar: "الاعتقال الأول لبورقيبة"
    },
    description: {
      en: "Habib Bourguiba and other nationalist leaders were arrested for the first time by French authorities.",
      fr: "Habib Bourguiba et d'autres leaders nationalistes sont arrêtés pour la première fois par les autorités françaises.",
      ar: "اعتقال الحبيب بورقيبة وقادة وطنيين آخرين لأول مرة من قبل السلطات الفرنسية."
    },
    source: "Tunisian National Archives",
    link: "https://en.wikipedia.org/wiki/Habib_Bourguiba"
  },
  "01-12": {
    year: 1974,
    category: 'modern',
    title: {
      en: "Djerba Declaration",
      fr: "Déclaration de Djerba",
      ar: "بيان جربة"
    },
    description: {
      en: "A short-lived agreement between Bourguiba and Gaddafi to merge Tunisia and Libya into the Arab Islamic Republic.",
      fr: "Un accord éphémère entre Bourguiba et Kadhafi pour fusionner la Tunisie et la Libye en une République Arabe Islamique.",
      ar: "اتفاق قصير الأمد بين بورقيبة والقذافي لدمج تونس وليبيا في الجمهورية العربية الإسلامية."
    },
    source: "Historical Records",
    link: "https://en.wikipedia.org/wiki/Arab_Islamic_Republic"
  },
  "01-14": {
    year: 2011,
    category: 'modern',
    title: {
      en: "Departure of Ben Ali",
      fr: "Départ de Ben Ali",
      ar: "رحيل بن علي"
    },
    description: {
      en: "President Zine El Abidine Ben Ali fled Tunisia, marking the climax of the Jasmine Revolution.",
      fr: "Le président Zine El Abidine Ben Ali fuit la Tunisie, marquant le point culminant de la Révolution de jasmin.",
      ar: "فرار الرئيس زين العابدين بن علي من تونس، إيذاناً بذروة ثورة الياسمين."
    },
    source: "Official Tunisian History",
    link: "https://en.wikipedia.org/wiki/Tunisian_Revolution"
  },
  "01-18": {
    year: 1952,
    category: 'modern',
    title: {
      en: "Start of the Armed Struggle",
      fr: "Début de la lutte armée",
      ar: "اندلاع الكفاح المسلح"
    },
    description: {
      en: "The arrest of Bourguiba and Neo-Destour leaders triggered the armed resistance against the French protectorate.",
      fr: "L'arrestation de Bourguiba et des leaders du Néo-Destour déclenche la résistance armée contre le protectorat français.",
      ar: "أدى اعتقال بورقيبة وقادة الحزب الحر الدستوري الجديد إلى اندلاع المقاومة المسلحة ضد الحماية الفرنسية."
    },
    source: "National Archives",
    link: "https://en.wikipedia.org/wiki/Habib_Bourguiba"
  },
  "01-22": {
    year: 1952,
    category: 'modern',
    title: {
      en: "Battle of Téboulba",
      fr: "Bataille de Téboulba",
      ar: "معركة طبلبة"
    },
    description: {
      en: "A violent clash between Tunisian demonstrators and French security forces in the Sahel region.",
      fr: "Un affrontement violent entre manifestants tunisiens et forces de sécurité françaises dans le Sahel.",
      ar: "اشتباك عنيف بين المتظاهرين التونسيين وقوات الأمن الفرنسية في منطقة الساحل."
    },
    source: "Historical Archives",
    link: "https://fr.wikipedia.org/wiki/Bataille_de_T%C3%A9boulba"
  },
  "01-26": {
    year: 1978,
    category: 'modern',
    title: {
      en: "Black Thursday",
      fr: "Jeudi Noir",
      ar: "الخميس الأسود"
    },
    description: {
      en: "A general strike called by the UGTT led to a bloody confrontation with the regime of Bourguiba.",
      fr: "Une grève générale lancée par l'UGTT a mené à une confrontation sanglante avec le régime de Bourguiba.",
      ar: "أدى إضراب عام دعا إليه الاتحاد العام التونسي للشغل إلى مواجهة دموية مع نظام بورقيبة."
    },
    source: "UGTT History",
    link: "https://en.wikipedia.org/wiki/1978_Tunisian_general_strike"
  },
  "02-04": {
    year: 1881,
    category: 'modern',
    title: {
      en: "Kroumirie Incident",
      fr: "Incident de la Kroumirie",
      ar: "حادثة الكرومير"
    },
    description: {
      en: "Clashes between Kroumir tribes and French forces in Algeria served as a pretext for the French invasion of Tunisia.",
      fr: "Des affrontements entre les tribus Kroumirs et les forces françaises en Algérie servent de prétexte à l'invasion française de la Tunisie.",
      ar: "اشتباكات بين قبائل الكرومير والقوات الفرنسية في الجزائر كانت ذريعة للغزو الفرنسي لتونس."
    },
    source: "Protectorate Records",
    link: "https://en.wikipedia.org/wiki/French_protectorate_of_Tunisia"
  },
  "02-08": {
    year: 1958,
    category: 'modern',
    title: {
      en: "Sakiet Sidi Youssef Bombing",
      fr: "Bombardement de Sakiet Sidi Youssef",
      ar: "أحداث ساقية سيدي يوسف"
    },
    description: {
      en: "French aviation bombed a Tunisian border village, killing dozens of civilians and sparking an international crisis.",
      fr: "L'aviation française bombarde un village frontalier tunisien, tuant des dizaines de civils et provoquant une crise internationale.",
      ar: "قصف الطيران الفرنسي قرية حدودية تونسية، مما أسفر عن مقتل العشرات من المدنيين وأثار أزمة دولية."
    },
    source: "Historical Archives",
    link: "https://en.wikipedia.org/wiki/Sakiet_Sidi_Youssef_bombing"
  },
  "02-17": {
    year: 1989,
    category: 'modern',
    title: {
      en: "Arab Maghreb Union Founded",
      fr: "Fondation de l'Union du Maghreb Arabe",
      ar: "تأسيس اتحاد المغرب العربي"
    },
    description: {
      en: "Tunisia joined Algeria, Libya, Mauritania, and Morocco in signing the treaty establishing the UMA.",
      fr: "La Tunisie rejoint l'Algérie, la Libye, la Mauritanie et le Maroc pour signer le traité établissant l'UMA.",
      ar: "انضمت تونس إلى الجزائر وليبيا وموريتانيا والمغرب في توقيع المعاهدة التأسيسية لاتحاد المغرب العربي."
    },
    source: "Diplomatic Records",
    link: "https://en.wikipedia.org/wiki/Arab_Maghreb_Union"
  },
  "03-02": {
    year: 1934,
    category: 'modern',
    title: {
      en: "Ksar Hellal Congress",
      fr: "Congrès de Ksar Hellal",
      ar: "مؤتمر قصر هلال"
    },
    description: {
      en: "The founding congress of the Neo-Destour party, led by Habib Bourguiba.",
      fr: "Le congrès fondateur du parti Néo-Destour, dirigé par Habib Bourguiba.",
      ar: "المؤتمر التأسيسي للحزب الحر الدستوري الجديد، بقيادة الحبيب بورقيبة."
    },
    source: "Neo-Destour Archives",
    link: "https://en.wikipedia.org/wiki/Neo_Destour"
  },
  "03-12": {
    year: 1956,
    category: 'modern',
    title: {
      en: "Independence Negotiations Begin",
      fr: "Début des négociations d'indépendance",
      ar: "بدء مفاوضات الاستقلال"
    },
    description: {
      en: "Formal talks began in Paris between the Tunisian delegation and the French government.",
      fr: "Début des pourparlers officiels à Paris entre la délégation tunisienne et le gouvernement français.",
      ar: "بدء المحادثات الرسمية في باريس بين الوفد التونسي والحكومة الفرنسية."
    },
    source: "Diplomatic History",
    link: "https://en.wikipedia.org/wiki/Tunisian_Independence_Day"
  },
  "03-20": {
    year: 1956,
    category: 'modern',
    title: {
      en: "Independence Day",
      fr: "Fête de l'Indépendance",
      ar: "عيد الاستقلال"
    },
    description: {
      en: "Tunisia officially regained its sovereignty from France.",
      fr: "La Tunisie retrouve officiellement sa souveraineté vis-à-vis de la France.",
      ar: "استعادت تونس رسمياً سيادتها من فرنسا."
    },
    source: "Official Tunisian Calendar",
    link: "https://en.wikipedia.org/wiki/Tunisian_Independence_Day"
  },
  "03-25": {
    year: 1956,
    category: 'modern',
    title: {
      en: "First Constituent Assembly Elections",
      fr: "Premières élections de l'Assemblée Constituante",
      ar: "أول انتخابات للمجلس القومي التأسيسي"
    },
    description: {
      en: "The first democratic elections in independent Tunisia to elect a Constituent Assembly.",
      fr: "Les premières élections démocratiques de la Tunisie indépendante pour élire une Assemblée Constituante.",
      ar: "أول انتخابات ديمقراطية في تونس المستقلة لانتخاب المجلس القومي التأسيسي."
    },
    source: "Electoral Records",
    link: "https://en.wikipedia.org/wiki/1956_Tunisian_Constituent_Assembly_election"
  },
  "04-06": {
    year: -46,
    category: 'roman',
    title: {
      en: "Battle of Thapsus",
      fr: "Bataille de Thapsus",
      ar: "معركة ثابسوس"
    },
    description: {
      en: "Julius Caesar defeated the forces of the Optimates and King Juba I of Numidia near modern-day Bekalta.",
      fr: "Jules César bat les forces des Optimates et du roi Juba Ier de Numidie près de l'actuelle Bekalta.",
      ar: "هزم يوليوس قيصر قوات النبلاء والملك يوبا الأول ملك نوميديا بالقرب من بقلطة الحالية."
    },
    source: "Roman History",
    link: "https://en.wikipedia.org/wiki/Battle_of_Thapsus"
  },
  "04-08": {
    year: 1938,
    category: 'modern',
    title: {
      en: "Eve of Martyrs' Day",
      fr: "Veille du Jour des Martyrs",
      ar: "عشية عيد الشهداء"
    },
    description: {
      en: "Massive demonstrations in Tunis led by Ali Belhouane demanding a 'Tunisian Parliament'.",
      fr: "Manifestations massives à Tunis menées par Ali Belhouane réclamant un 'Parlement tunisien'.",
      ar: "مظاهرات حاشدة في تونس بقيادة علي البلهوان تطالب بـ 'برلمان تونسي'."
    },
    source: "National Struggle History",
    link: "https://en.wikipedia.org/wiki/Martyrs%27_Day_(Tunisia)"
  },
  "04-09": {
    year: 1938,
    category: 'modern',
    title: {
      en: "Martyrs' Day",
      fr: "Jour des Martyrs",
      ar: "عيد الشهداء"
    },
    description: {
      en: "French troops fired on demonstrators in Tunis, resulting in dozens of deaths and the arrest of nationalist leaders.",
      fr: "Les troupes françaises tirent sur les manifestants à Tunis, faisant des dizaines de morts et entraînant l'arrestation des leaders nationalistes.",
      ar: "أطلقت القوات الفرنسية النار على المتظاهرين في تونس، مما أسفر عن سقوط عشرات القتلى واعتقال القادة الوطنيين."
    },
    source: "Official Tunisian Calendar",
    link: "https://en.wikipedia.org/wiki/Martyrs%27_Day_(Tunisia)"
  },
  "04-14": {
    year: 1938,
    category: 'modern',
    title: {
      en: "Arrest of Ali Belhouane",
      fr: "Arrestation d'Ali Belhouane",
      ar: "اعتقال علي البلهوان"
    },
    description: {
      en: "The arrest of the leader of the 1938 demonstrations, sparking further unrest.",
      fr: "L'arrestation du leader des manifestations de 1938, provoquant de nouveaux troubles.",
      ar: "اعتقال قائد مظاهرات 1938، مما أثار مزيداً من الاضطرابات."
    },
    source: "Historical Archives",
    link: "https://fr.wikipedia.org/wiki/Ali_Belhouane"
  },
  "05-07": {
    year: 1943,
    category: 'modern',
    title: {
      en: "Liberation of Tunis",
      fr: "Libération de Tunis",
      ar: "تحرير تونس"
    },
    description: {
      en: "Allied forces captured Tunis from Axis powers during World War II.",
      fr: "Les forces alliées prennent Tunis aux puissances de l'Axe pendant la Seconde Guerre mondiale.",
      ar: "استولت قوات الحلفاء على تونس من دول المحور خلال الحرب العالمية الثانية."
    },
    source: "WWII Records",
    link: "https://en.wikipedia.org/wiki/Tunisian_campaign"
  },
  "05-12": {
    year: 1881,
    category: 'modern',
    title: {
      en: "Treaty of Bardo",
      fr: "Traité du Bardo",
      ar: "معاهدة باردو"
    },
    description: {
      en: "The signing of the treaty that established the French protectorate over Tunisia.",
      fr: "La signature du traité qui établit le protectorat français sur la Tunisie.",
      ar: "توقيع المعاهدة التي أسست الحماية الفرنسية على تونس."
    },
    source: "Diplomatic History",
    link: "https://en.wikipedia.org/wiki/Treaty_of_Bardo"
  },
  "06-01": {
    year: 1955,
    category: 'modern',
    title: {
      en: "Victory Day / Bourguiba's Return",
      fr: "Fête de la Victoire / Retour de Bourguiba",
      ar: "عيد النصر / عودة بورقيبة"
    },
    description: {
      en: "Habib Bourguiba returned from exile after the recognition of internal autonomy.",
      fr: "Habib Bourguiba rentre d'exil après la reconnaissance de l'autonomie interne.",
      ar: "عاد الحبيب بورقيبة من المنفى بعد الاعتراف بالاستقلال الداخلي."
    },
    source: "Official Tunisian Calendar",
    link: "https://en.wikipedia.org/wiki/Habib_Bourguiba"
  },
  "06-08": {
    year: 1883,
    category: 'modern',
    title: {
      en: "Convention of La Marsa",
      fr: "Convention de la Marsa",
      ar: "اتفاقية المرسى"
    },
    description: {
      en: "A treaty reinforcing French control over Tunisian administration.",
      fr: "Un traité renforçant le contrôle français sur l'administration tunisienne.",
      ar: "معاهدة عززت السيطرة الفرنسية على الإدارة التونسية."
    },
    source: "Protectorate Records",
    link: "https://en.wikipedia.org/wiki/Convention_of_La_Marsa"
  },
  "06-21": {
    year: -217,
    category: 'punic',
    title: {
      en: "Battle of Lake Trasimene",
      fr: "Bataille du lac Trasimène",
      ar: "معركة بحيرة تراسمانيا"
    },
    description: {
      en: "One of the largest and most successful ambushes in military history, where Hannibal defeated the Romans.",
      fr: "L'une des embuscades les plus importantes et les plus réussies de l'histoire militaire, où Hannibal bat les Romains.",
      ar: "واحدة من أكبر وأنجح الكمائن في التاريخ العسكري، حيث هزم هانيبال الرومان."
    },
    source: "Livy",
    link: "https://en.wikipedia.org/wiki/Battle_of_Lake_Trasimene"
  },
  "06-24": {
    year: 1956,
    category: 'modern',
    title: {
      en: "Creation of the Tunisian Army",
      fr: "Création de l'Armée Tunisienne",
      ar: "بعث الجيش الوطني"
    },
    description: {
      en: "The official establishment of the Tunisian national armed forces.",
      fr: "L'établissement officiel des forces armées nationales tunisiennes.",
      ar: "التأسيس الرسمي للقوات المسلحة الوطنية التونسية."
    },
    source: "Ministry of Defense",
    link: "https://en.wikipedia.org/wiki/Tunisian_Armed_Forces"
  },
  "07-25": {
    year: 1957,
    category: 'modern',
    title: {
      en: "Republic Day",
      fr: "Fête de la République",
      ar: "عيد الجمهورية"
    },
    description: {
      en: "The Constituent Assembly abolished the monarchy and proclaimed the Republic, with Bourguiba as president.",
      fr: "L'Assemblée Constituante abolit la monarchie et proclame la République, avec Bourguiba comme président.",
      ar: "ألغى المجلس التأسيسي الملكية وأعلن الجمهورية، مع تعيين بورقيبة رئيساً لها."
    },
    source: "Official Tunisian Calendar",
    link: "https://en.wikipedia.org/wiki/Republic_Day_(Tunisia)"
  },
  "07-31": {
    year: 1954,
    category: 'modern',
    title: {
      en: "Carthage Speech",
      fr: "Discours de Carthage",
      ar: "خطاب قرطاج"
    },
    description: {
      en: "French PM Pierre Mendès France recognized Tunisia's right to internal autonomy in a historic speech.",
      fr: "Le Premier ministre français Pierre Mendès France reconnaît le droit de la Tunisie à l'autonomie interne dans un discours historique.",
      ar: "اعترف رئيس الوزراء الفرنسي بيير منديس فرانس بحق تونس في الاستقلال الداخلي في خطاب تاريخي."
    },
    source: "Historical Archives",
    link: "https://en.wikipedia.org/wiki/Pierre_Mend%C3%A8s_France"
  },
  "08-02": {
    year: -216,
    category: 'punic',
    title: {
      en: "Battle of Cannae",
      fr: "Bataille de Cannes",
      ar: "معركة كاناي"
    },
    description: {
      en: "Hannibal's tactical masterpiece, where he surrounded and destroyed a much larger Roman army.",
      fr: "Le chef-d'œuvre tactique d'Hannibal, où il encercle et détruit une armée romaine bien plus nombreuse.",
      ar: "تحفة هانيبال التكتيكية، حيث حاصر ودمر جيشاً رومانياً أكبر بكثير."
    },
    source: "Polybius",
    link: "https://en.wikipedia.org/wiki/Battle_of_Cannae"
  },
  "08-03": {
    year: 1903,
    category: 'modern',
    title: {
      en: "Birth of Habib Bourguiba",
      fr: "Naissance de Habib Bourguiba",
      ar: "ميلاد الحبيب بورقيبة"
    },
    description: {
      en: "The birth of the 'Supreme Combatant' and first president of the Republic in Monastir.",
      fr: "La naissance du 'Combattant Suprême' et premier président de la République à Monastir.",
      ar: "ميلاد 'المجاهد الأكبر' وأول رئيس للجمهورية في المنستير."
    },
    source: "Official Biography",
    link: "https://en.wikipedia.org/wiki/Habib_Bourguiba"
  },
  "08-05": {
    year: 1947,
    category: 'modern',
    title: {
      en: "Sfax General Strike",
      fr: "Grève générale de Sfax",
      ar: "إضراب صفاقس العام"
    },
    description: {
      en: "A bloody confrontation between workers and French forces in Sfax, resulting in 30 deaths.",
      fr: "Une confrontation sanglante entre ouvriers et forces françaises à Sfax, faisant 30 morts.",
      ar: "مواجهة دموية بين العمال والقوات الفرنسية في صفاقس، أسفرت عن سقوط 30 قتيلاً."
    },
    source: "UGTT History",
    link: "https://fr.wikipedia.org/wiki/Fusillade_du_5_ao%C3%BBt_1947_à_Sfax"
  },
  "08-13": {
    year: 1956,
    category: 'modern',
    title: {
      en: "Women's Day / CSP Promulgation",
      fr: "Fête de la Femme / Promulgation du CSP",
      ar: "عيد المرأة / صدور مجلة الأحوال الشخصية"
    },
    description: {
      en: "The Code of Personal Status was promulgated, revolutionizing women's rights in Tunisia.",
      fr: "Le Code du Statut Personnel est promulgué, révolutionnant les droits des femmes en Tunisie.",
      ar: "صدور مجلة الأحوال الشخصية، التي أحدثت ثورة في حقوق المرأة في تونس."
    },
    source: "Official Tunisian Calendar",
    link: "https://en.wikipedia.org/wiki/Code_of_Personal_Status_(Tunisia)"
  },
  "08-25": {
    year: 1270,
    category: 'islamic',
    title: {
      en: "Death of Saint Louis",
      fr: "Mort de Saint Louis",
      ar: "وفاة القديس لويس"
    },
    description: {
      en: "King Louis IX of France died of plague while besieging Tunis during the Eighth Crusade.",
      fr: "Le roi Louis IX de France meurt de la peste en assiégeant Tunis lors de la huitième croisade.",
      ar: "توفي الملك لويس التاسع ملك فرنسا بالطاعون أثناء حصار تونس خلال الحملة الصليبية الثامنة."
    },
    source: "Medieval Chronicles",
    link: "https://en.wikipedia.org/wiki/Louis_IX_of_France"
  },
  "09-03": {
    year: 1934,
    category: 'modern',
    title: {
      en: "Arrest of Neo-Destour Leaders",
      fr: "Arrestation des leaders du Néo-Destour",
      ar: "اعتقال قادة الحزب الحر الدستوري الجديد"
    },
    description: {
      en: "Bourguiba and his companions were arrested and sent to the Bordj le Boeuf camp in the desert.",
      fr: "Bourguiba et ses compagnons sont arrêtés et envoyés au camp de Bordj le Boeuf dans le désert.",
      ar: "اعتقال بورقيبة ورفاقه وإرسالهم إلى معتقل برج البوف في الصحراء."
    },
    source: "National Archives",
    link: "https://en.wikipedia.org/wiki/Habib_Bourguiba"
  },
  "09-22": {
    year: 698,
    category: 'islamic',
    title: {
      en: "Fall of Byzantine Carthage",
      fr: "Chute de la Carthage byzantine",
      ar: "سقوط قرطاج البيزنطية"
    },
    description: {
      en: "The Arab forces under Hassan ibn al-Nu'man captured Carthage, ending Byzantine rule.",
      fr: "Les forces arabes sous Hassan ibn al-Nu'man prennent Carthage, mettant fin à la domination byzantine.",
      ar: "استولت القوات العربية بقيادة حسان بن النعمان على قرطاج، منهية الحكم البيزنطي."
    },
    source: "Islamic History",
    link: "https://en.wikipedia.org/wiki/Battle_of_Carthage_(698)"
  },
  "10-01": {
    year: 1985,
    category: 'modern',
    title: {
      en: "Operation Wooden Leg",
      fr: "Opération Jambe de Bois",
      ar: "عملية الساق الخشبية"
    },
    description: {
      en: "Israeli air raid on the PLO headquarters in Hammam Chott, near Tunis.",
      fr: "Raid aérien israélien sur le quartier général de l'OLP à Hammam Chott, près de Tunis.",
      ar: "غارة جوية إسرائيلية على مقر منظمة التحرير الفلسطينية في حمام الشط، بالقرب من تونس."
    },
    source: "International News Archives",
    link: "https://en.wikipedia.org/wiki/Operation_Wooden_Leg"
  },
  "10-15": {
    year: 1963,
    category: 'modern',
    title: {
      en: "Evacuation Day",
      fr: "Fête de l'Évacuation",
      ar: "عيد الجلاء"
    },
    description: {
      en: "The last French soldier left the naval base of Bizerte, completing Tunisia's sovereignty.",
      fr: "Le dernier soldat français quitte la base navale de Bizerte, parachevant la souveraineté de la Tunisie.",
      ar: "رحيل آخر جندي فرنسي من قاعدة بنزرت البحرية، استكمالاً للسيادة التونسية."
    },
    source: "Official Tunisian Calendar",
    link: "https://en.wikipedia.org/wiki/Evacuation_Day_(Tunisia)"
  },
  "10-19": {
    year: -202,
    category: 'punic',
    title: {
      en: "Battle of Zama",
      fr: "Bataille de Zama",
      ar: "معركة زاما"
    },
    description: {
      en: "The decisive battle of the Second Punic War, where Scipio Africanus defeated Hannibal.",
      fr: "La bataille décisive de la seconde guerre punique, où Scipion l'Africain bat Hannibal.",
      ar: "المعركة الحاسمة في الحرب البونيقية الثانية، حيث هزم سكيبيو الأفريقي هانيبال."
    },
    source: "Polybius",
    link: "https://en.wikipedia.org/wiki/Battle_of_Zama"
  },
  "10-23": {
    year: 2011,
    category: 'modern',
    title: {
      en: "First Free Elections",
      fr: "Premières élections libres",
      ar: "أول انتخابات حرة"
    },
    description: {
      en: "Tunisians voted for the National Constituent Assembly in the first free elections after the revolution.",
      fr: "Les Tunisiens votent pour l'Assemblée Nationale Constituante lors des premières élections libres après la révolution.",
      ar: "صوت التونسيون لانتخاب المجلس الوطني التأسيسي في أول انتخابات حرة بعد الثورة."
    },
    source: "ISIE Records",
    link: "https://en.wikipedia.org/wiki/2011_Tunisian_Constituent_Assembly_election"
  },
  "11-07": {
    year: 1987,
    category: 'modern',
    title: {
      en: "Accession of Ben Ali",
      fr: "Accession de Ben Ali",
      ar: "تحول 7 نوفمبر"
    },
    description: {
      en: "Zine El Abidine Ben Ali deposed Habib Bourguiba in a medical coup.",
      fr: "Zine El Abidine Ben Ali dépose Habib Bourguiba lors d'un coup d'État médical.",
      ar: "أطاح زين العابدين بن علي بالحبيب بورقيبة في انقلاب طبي."
    },
    source: "Historical Archives",
    link: "https://en.wikipedia.org/wiki/1987_Tunisian_coup_d%27%C3%A9tat"
  },
  "11-12": {
    year: 1955,
    category: 'modern',
    title: {
      en: "Sfax Congress",
      fr: "Congرès de Sfax",
      ar: "مؤتمر صفاقس"
    },
    description: {
      en: "A decisive Neo-Destour congress where Bourguiba's line prevailed over Ben Youssef's.",
      fr: "Un congrès décisif du Néo-Destour où la ligne de Bourguiba l'emporte sur celle de Ben Youssef.",
      ar: "مؤتمر حاسم للحزب الحر الدستوري الجديد حيث انتصر خط بورقيبة على خط بن يوسف."
    },
    source: "Political History",
    link: "https://fr.wikipedia.org/wiki/Congrès_de_Sfax"
  },
  "12-05": {
    year: 1952,
    category: 'modern',
    title: {
      en: "Assassination of Farhat Hached",
      fr: "Assassinat de Farhat Hached",
      ar: "اغتيال فرحات حشاد"
    },
    description: {
      en: "The charismatic labor leader was assassinated by the 'Main Rouge', a French terrorist organization.",
      fr: "Le leader syndical charismatique est assassiné par la 'Main Rouge', une organisation terroriste française.",
      ar: "اغتيل الزعيم النقابي الكاريزمي على يد 'اليد الحمراء'، وهي منظمة إرهابية فرنسية."
    },
    source: "UGTT History",
    link: "https://en.wikipedia.org/wiki/Farhat_Hached"
  },
  "12-17": {
    year: 2010,
    category: 'modern',
    title: {
      en: "Start of the Revolution",
      fr: "Début de la Révolution",
      ar: "اندلاع الثورة"
    },
    description: {
      en: "Mohamed Bouazizi set himself on fire in Sidi Bouzid, sparking the Tunisian Revolution.",
      fr: "Mohamed Bouazizi s'immole par le feu à Sidi Bouzid, déclenchant la révolution tunisienne.",
      ar: "أضرم محمد البوعزيزي النار في نفسه في سيدي بوزيد، مما أشعل شرارة الثورة التونسية."
    },
    source: "Official Tunisian Calendar",
    link: "https://en.wikipedia.org/wiki/Tunisian_Revolution"
  },
  "12-18": {
    year: -218,
    category: 'punic',
    title: {
      en: "Battle of the Trebia",
      fr: "Bataille de la Trébie",
      ar: "معركة تريبيا"
    },
    description: {
      en: "Hannibal's first major victory against the Romans on Italian soil.",
      fr: "La première victoire majeure d'Hannibal contre les Romains sur le sol italien.",
      ar: "أول انتصار كبير لهانيبال ضد الرومان على الأراضي الإيطالية."
    },
    source: "Polybius",
    link: "https://en.wikipedia.org/wiki/Battle_of_the_Trebia"
  }
};

// Helper to get event or fallback
export const getEventForDate = (month: number, day: number): CalendarEvent => {
  const key = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  if (calendarData[key]) return calendarData[key];
  
  // Fallback to a rotating set of significant but non-date-specific events
  const dayOfYear = (month - 1) * 31 + day;
  const genericEvents: CalendarEvent[] = [
    {
      year: 670,
      category: 'islamic',
      title: { en: "Foundation of Kairouan", fr: "Fondation de Kairouan", ar: "تأسيس القيروان" },
      description: { 
        en: "Uqba ibn Nafi founded the city of Kairouan, the first Islamic city in the Maghreb.",
        fr: "Oqba ibn Nafi a fondé la ville de Kairouan, la première ville islamique du Maghreb.",
        ar: "أسس عقبة بن نافع مدينة القيروان، أول مدينة إسلامية في المغرب العربي."
      },
      source: "Islamic History",
      link: "https://en.wikipedia.org/wiki/Kairouan"
    },
    {
      year: 1574,
      category: 'modern',
      title: { en: "Ottoman Conquest of Tunis", fr: "Conquête ottomane de Tunis", ar: "الفتح العثماني لتونس" },
      description: { 
        en: "The Ottomans definitively captured Tunis from the Spanish and Hafsids.",
        fr: "Les Ottomans ont définitivement pris Tunis aux Espagnols et aux Hafsides.",
        ar: "استولى العثمانيون نهائياً على تونس من الإسبان والحفصيين."
      },
      source: "Ottoman Archives",
      link: "https://en.wikipedia.org/wiki/Ottoman_Tunisia"
    },
    {
      year: 1229,
      category: 'islamic',
      title: { en: "Rise of the Hafsid Dynasty", fr: "Montée de la dynastie hafside", ar: "قيام الدولة الحفصية" },
      description: { 
        en: "The Hafsids declared independence from the Almohads, making Tunis their capital.",
        fr: "Les Hafsides ont déclaré leur indépendance vis-à-vis des Almohades, faisant de Tunis leur capitale.",
        ar: "أعلن الحفصيون استقلالهم عن الموحدين، وجعلوا تونس عاصمتهم."
      },
      source: "Medieval History",
      link: "https://en.wikipedia.org/wiki/Hafsid_dynasty"
    },
    {
      year: -814,
      category: 'punic',
      title: { en: "Carthaginian Maritime Supremacy", fr: "Suprématie maritime carthaginoise", ar: "السيادة البحرية القرطاجية" },
      description: { 
        en: "Carthage established itself as the dominant naval power in the Western Mediterranean.",
        fr: "Carthage s'est imposée comme la puissance navale dominante en Méditerranée occidentale.",
        ar: "فرضت قرطاج نفسها كقوة بحرية مهيمنة في غرب البحر الأبيض المتوسط."
      },
      source: "Ancient History",
      link: "https://en.wikipedia.org/wiki/Carthage"
    },
    {
      year: 1159,
      category: 'islamic',
      title: { en: "Almohad Conquest of Tunis", fr: "Conquête almohade de Tunis", ar: "الفتح الموحدي لتونس" },
      description: {
        en: "The Almohads captured Tunis, ending Norman occupation and uniting the Maghreb.",
        fr: "Les Almohades ont pris Tunis, mettant fin à l'occupation normande et unissant le Maghreb.",
        ar: "استولى الموحدون على تونس، منهين الاحتلال النورماندي وموحدين المغرب العربي."
      },
      source: "Medieval History",
      link: "https://en.wikipedia.org/wiki/Almohad_Caliphate"
    },
    {
      year: 1535,
      category: 'modern',
      title: { en: "Conquest of Tunis by Charles V", fr: "Conquête de Tunis par Charles Quint", ar: "فتح تونس من قبل شارل الخامس" },
      description: {
        en: "The Holy Roman Emperor Charles V captured Tunis from Barbarossa.",
        fr: "L'empereur Charles Quint a pris Tunis à Barberousse.",
        ar: "استولى الإمبراطور الروماني المقدس شارل الخامس على تونس من خير الدين بربروسا."
      },
      source: "Renaissance History",
      link: "https://en.wikipedia.org/wiki/Conquest_of_Tunis_(1535)"
    }
  ];
  
  return genericEvents[dayOfYear % genericEvents.length];
};
