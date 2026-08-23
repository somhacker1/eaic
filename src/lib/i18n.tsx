import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const LANGUAGES = [
  { code: "so", label: "Soomaali", native: "Soomaali", flag: "🇸🇴" },
  { code: "am", label: "Amharic", native: "አማርኛ", flag: "🇪🇹" },
  { code: "om", label: "Afaan Oromoo", native: "Afaan Oromoo", flag: "🇪🇹" },
  { code: "ti", label: "Tigrinya", native: "ትግርኛ", flag: "🇪🇹" },
  { code: "aa", label: "Afar", native: "Qafar af", flag: "🇪🇹" },
  { code: "sid", label: "Sidama", native: "Sidaamu Afoo", flag: "🇪🇹" },
  { code: "en", label: "English", native: "English", flag: "🌍" },
] as const;

export type LangCode = (typeof LANGUAGES)[number]["code"];
export const DEFAULT_LANG: LangCode = "so";
const STORAGE_KEY = "eaic-lang";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.about": "About Us",
  "nav.programs": "Programs",
  "nav.enroll": "Enroll Now",
  "nav.apply": "Apply Now",
  "brand.tagline": "Our Difference is Quality",
  "gate.title": "Choose your language",
  "gate.subtitle": "Select the language you want to browse the college website in.",
  "gate.continue": "Continue",
  "gate.button": "Translate",

  "home.badge": "Jigjiga, Ethiopia",
  "home.title1": "Eastern Africa",
  "home.title2": "International College",
  "home.lead":
    "One of the leading centres of academic excellence in Ethiopia and the Somali Region — offering accredited postgraduate, undergraduate and diploma education.",
  "home.cta1": "Enroll Now",
  "home.cta2": "Explore Programs",
  "stats.students": "Students enrolled",
  "stats.programs": "Accredited programs",
  "stats.faculties": "Faculties",
  "stats.graduations": "Graduation classes",
  "partners.title": "Our Partners & Accreditors",
  "partners.sub":
    "We work with national and international institutions to keep our academic standards high.",
  "certs.title": "Master's Certificates",
  "certs.sub": "Official postgraduate credentials awarded by Eastern Africa International College.",
  "certs.all": "View all programs",
  "news.title": "University News",
  "news.sub": "Announcements, events and updates from the Jigjiga campus.",

  "about.title": "About the College",
  "about.lead":
    "Eastern Africa International College is a centre of academic excellence in Jigjiga, serving Ethiopia and the Somali Region with quality higher education.",
  "about.mission": "Our Mission",
  "about.missionText":
    "To deliver accessible, high quality higher education that prepares graduates for the needs of the region and the nation.",
  "about.vision": "Our Vision",
  "about.visionText":
    "To be recognised among the leading colleges in Ethiopia for teaching, research and community service.",
  "about.values": "Our Values",
  "about.valuesText": "Quality, integrity, inclusion, community service and lifelong learning.",
  "about.campus": "Our Campus",

  "programs.title1": "Faculties &",
  "programs.title2": "Programs",
  "programs.lead":
    "Accredited Master's, Bachelor's Degree and Diploma programs across seven faculties — taught by qualified academic staff at our Jigjiga campus.",
  "programs.faculties": "Our Faculties",
  "programs.quals": "Qualifications we award",
  "programs.qualsSub":
    "Official credential names as they appear on graduate certificates and transcripts.",
  "programs.masters": "Master's Degrees",
  "programs.degrees": "Bachelor's Degrees",
  "programs.diplomas": "Diplomas",
  "programs.found": "Found your program?",
  "programs.foundSub":
    "Submit your application and our admissions office will contact you within two working days.",

  "enroll.title": "Enroll Now",
  "enroll.lead":
    "Start your application for the current academic year. Registration is open for Master's, Degree and Diploma programs.",
  "enroll.steps": "Admission Steps",
  "enroll.requirements": "Entry Requirements",
  "enroll.form": "Application Form",
  "enroll.fullName": "Full name",
  "enroll.email": "Email",
  "enroll.phone": "Phone number",
  "enroll.program": "Program of interest",
  "enroll.level": "Study level",
  "enroll.message": "Message (optional)",
  "enroll.submit": "Submit Application",
  "enroll.success": "Application received. Our admissions office will contact you shortly.",

  "footer.explore": "Explore",
  "footer.contact": "Contact",
  "footer.about":
    "A leading centre of academic excellence in Jigjiga, serving Ethiopia and the Somali Region with quality higher education.",
  "footer.rights": "All rights reserved.",
};

const so: Dict = {
  "nav.home": "Bogga Hore",
  "nav.about": "Ku Saabsan",
  "nav.programs": "Barnaamijyada",
  "nav.enroll": "Isdiiwaangeli",
  "nav.apply": "Codso Hadda",
  "brand.tagline": "Farqigeennu waa Tayada",
  "gate.title": "Dooro luqaddaada",
  "gate.subtitle": "Dooro luqadda aad ku rabto inaad ku aragto websaydka kulliyadda.",
  "gate.continue": "Sii wad",
  "gate.button": "Turjum",

  "home.badge": "Jigjiga, Itoobiya",
  "home.title1": "Eastern Africa",
  "home.title2": "International College",
  "home.lead":
    "Mid ka mid ah xarumaha ugu horreeya ee tayada waxbarashada ee Itoobiya iyo Deegaanka Soomaalida — waxaan bixinaa waxbarasho Master, Degree iyo Diploma oo la aqoonsan yahay.",
  "home.cta1": "Isdiiwaangeli",
  "home.cta2": "Eeg Barnaamijyada",
  "stats.students": "Arday diiwaangashan",
  "stats.programs": "Barnaamijyo la aqoonsan yahay",
  "stats.faculties": "Kulliyado",
  "stats.graduations": "Qalin-jabinno",
  "partners.title": "Iskaashatadeenna & Aqoonsiga",
  "partners.sub":
    "Waxaan la shaqeynaa hay'ado qaran iyo caalami ah si aan u ilaalino heerka waxbarashadeenna.",
  "certs.title": "Shahaadooyinka Master",
  "certs.sub": "Shahaadooyin rasmi ah oo ay bixiso Eastern Africa International College.",
  "certs.all": "Eeg dhammaan barnaamijyada",
  "news.title": "Wararka Kulliyadda",
  "news.sub": "Ogeysiisyo, munaasabado iyo warar ka socda xarunta Jigjiga.",

  "about.title": "Ku Saabsan Kulliyadda",
  "about.lead":
    "Eastern Africa International College waa xarun tayo waxbarasho oo ku taalla Jigjiga, u adeegta Itoobiya iyo Deegaanka Soomaalida.",
  "about.mission": "Himiladeenna",
  "about.missionText":
    "In aan bixino waxbarasho sare oo tayo leh oo diyaarisa ardayda u qalanta baahiyaha deegaanka iyo dalka.",
  "about.vision": "Aragtideenna",
  "about.visionText":
    "In laga aqoonsado kulliyadaha ugu horreeya Itoobiya waxbarid, cilmi-baaris iyo adeeg bulsho.",
  "about.values": "Qiyamkeenna",
  "about.valuesText": "Tayo, daacadnimo, wadajir, adeeg bulsho iyo waxbarasho joogto ah.",
  "about.campus": "Xarunteenna",

  "programs.title1": "Kulliyado &",
  "programs.title2": "Barnaamijyo",
  "programs.lead":
    "Barnaamijyo Master, Degree iyo Diploma ah oo la aqoonsan yahay oo ka socda toddoba kulliyadood — waxaa dhiga macalimiin xirfad leh oo ku sugan xarunta Jigjiga.",
  "programs.faculties": "Kulliyadaheenna",
  "programs.quals": "Shahaadooyinka aan bixinno",
  "programs.qualsSub": "Magacyada rasmiga ah ee ku qoran shahaadooyinka iyo transcript-yada.",
  "programs.masters": "Shahaadooyinka Master",
  "programs.degrees": "Shahaadooyinka Degree",
  "programs.diplomas": "Diploma",
  "programs.found": "Ma heshay barnaamijkaaga?",
  "programs.foundSub":
    "Soo gudbi codsigaaga, xafiiska diiwaangelintu wuu kula soo xiriiri doonaa labo maalmood gudahood.",

  "enroll.title": "Isdiiwaangeli",
  "enroll.lead":
    "Bilow codsigaaga sanad dugsiyeedka hadda. Diiwaangelinta way u furan tahay Master, Degree iyo Diploma.",
  "enroll.steps": "Talaabooyinka Diiwaangelinta",
  "enroll.requirements": "Shuruudaha Gelitaanka",
  "enroll.form": "Foomka Codsiga",
  "enroll.fullName": "Magaca oo saddexan",
  "enroll.email": "Iimayl",
  "enroll.phone": "Lambarka taleefanka",
  "enroll.program": "Barnaamijka aad rabto",
  "enroll.level": "Heerka waxbarasho",
  "enroll.message": "Fariin (ikhtiyaari)",
  "enroll.submit": "Gudbi Codsiga",
  "enroll.success": "Codsigaaga waa la helay. Xafiiska diiwaangelintu wuu kula soo xiriiri doonaa.",

  "footer.explore": "Sahan",
  "footer.contact": "Xiriir",
  "footer.about":
    "Xarun tayo waxbarasho oo ku taalla Jigjiga, u adeegta Itoobiya iyo Deegaanka Soomaalida.",
  "footer.rights": "Dhammaan xuquuqda way dhowran yihiin.",
};

const am: Dict = {
  "nav.home": "መነሻ",
  "nav.about": "ስለ እኛ",
  "nav.programs": "ፕሮግራሞች",
  "nav.enroll": "አሁን ይመዝገቡ",
  "nav.apply": "አሁን ያመልክቱ",
  "brand.tagline": "ልዩነታችን ጥራት ነው",
  "gate.title": "ቋንቋዎን ይምረጡ",
  "gate.subtitle": "ድረ-ገጹን ማየት የሚፈልጉበትን ቋንቋ ይምረጡ።",
  "gate.continue": "ቀጥል",
  "gate.button": "ተርጉም",

  "home.badge": "ጅግጅጋ፣ ኢትዮጵያ",
  "home.title1": "ኢስተርን አፍሪካ",
  "home.title2": "ኢንተርናሽናል ኮሌጅ",
  "home.lead":
    "በኢትዮጵያ እና በሶማሌ ክልል ከሚገኙ ግንባር ቀደም የትምህርት ጥራት ማዕከላት አንዱ — በማስተርስ፣ በዲግሪ እና በዲፕሎማ እውቅና ያለው ትምህርት እንሰጣለን።",
  "home.cta1": "አሁን ይመዝገቡ",
  "home.cta2": "ፕሮግራሞችን ይመልከቱ",
  "stats.students": "የተመዘገቡ ተማሪዎች",
  "stats.programs": "እውቅና ያላቸው ፕሮግራሞች",
  "stats.faculties": "ፋኩልቲዎች",
  "stats.graduations": "የምረቃ ዙሮች",
  "partners.title": "አጋሮቻችን እና እውቅና ሰጪዎች",
  "partners.sub": "የትምህርት ጥራታችንን ለመጠበቅ ከአገር አቀፍ እና ዓለም አቀፍ ተቋማት ጋር እንሰራለን።",
  "certs.title": "የማስተርስ ሰርተፊኬቶች",
  "certs.sub": "በኢስተርን አፍሪካ ኢንተርናሽናል ኮሌጅ የሚሰጡ ኦፊሴላዊ የድህረ ምረቃ ሰርተፊኬቶች።",
  "certs.all": "ሁሉንም ፕሮግራሞች ይመልከቱ",
  "news.title": "የኮሌጅ ዜናዎች",
  "news.sub": "ከጅግጅጋ ካምፓስ ማስታወቂያዎች፣ ዝግጅቶች እና ዜናዎች።",

  "about.title": "ስለ ኮሌጁ",
  "about.lead":
    "ኢስተርን አፍሪካ ኢንተርናሽናል ኮሌጅ በጅግጅጋ የሚገኝ የትምህርት ጥራት ማዕከል ሲሆን ለኢትዮጵያ እና ለሶማሌ ክልል አገልግሎት ይሰጣል።",
  "about.mission": "ተልዕኮአችን",
  "about.missionText": "ለክልሉና ለሀገሪቱ ፍላጎት የሚመጥኑ ምሩቃንን የሚያዘጋጅ ጥራት ያለው ከፍተኛ ትምህርት መስጠት።",
  "about.vision": "ራዕያችን",
  "about.visionText": "በማስተማር፣ በምርምር እና በማህበረሰብ አገልግሎት በኢትዮጵያ ግንባር ቀደም ኮሌጅ መሆን።",
  "about.values": "እሴቶቻችን",
  "about.valuesText": "ጥራት፣ ታማኝነት፣ አካታችነት፣ የማህበረሰብ አገልግሎት እና ቀጣይ ትምህርት።",
  "about.campus": "ካምፓሳችን",

  "programs.title1": "ፋኩልቲዎች እና",
  "programs.title2": "ፕሮግራሞች",
  "programs.lead":
    "በሰባት ፋኩልቲዎች የሚሰጡ እውቅና ያላቸው የማስተርስ፣ የዲግሪ እና የዲፕሎማ ፕሮግራሞች — በጅግጅጋ ካምፓሳችን በብቁ መምህራን ይሰጣሉ።",
  "programs.faculties": "ፋኩልቲዎቻችን",
  "programs.quals": "የምንሰጣቸው ሰርተፊኬቶች",
  "programs.qualsSub": "በሰርተፊኬቶች እና በትራንስክሪፕቶች ላይ የሚገኙ ኦፊሴላዊ ስሞች።",
  "programs.masters": "የማስተርስ ዲግሪዎች",
  "programs.degrees": "የባችለር ዲግሪዎች",
  "programs.diplomas": "ዲፕሎማዎች",
  "programs.found": "ፕሮግራምዎን አገኙ?",
  "programs.foundSub": "ማመልከቻዎን ያስገቡ፤ የምዝገባ ጽ/ቤታችን በሁለት የስራ ቀናት ውስጥ ያገኝዎታል።",

  "enroll.title": "አሁን ይመዝገቡ",
  "enroll.lead": "ለዘንድሮው የትምህርት ዘመን ማመልከቻዎን ይጀምሩ። ምዝገባ ለማስተርስ፣ ለዲግሪ እና ለዲፕሎማ ክፍት ነው።",
  "enroll.steps": "የምዝገባ ደረጃዎች",
  "enroll.requirements": "የመግቢያ መስፈርቶች",
  "enroll.form": "የማመልከቻ ቅጽ",
  "enroll.fullName": "ሙሉ ስም",
  "enroll.email": "ኢሜይል",
  "enroll.phone": "ስልክ ቁጥር",
  "enroll.program": "የሚፈልጉት ፕሮግራም",
  "enroll.level": "የትምህርት ደረጃ",
  "enroll.message": "መልእክት (አማራጭ)",
  "enroll.submit": "ማመልከቻ ላክ",
  "enroll.success": "ማመልከቻዎ ደርሶናል። የምዝገባ ጽ/ቤታችን በቅርቡ ያገኝዎታል።",

  "footer.explore": "ዳስስ",
  "footer.contact": "አግኙን",
  "footer.about": "በጅግጅጋ የሚገኝ የትምህርት ጥራት ማዕከል፤ ለኢትዮጵያ እና ለሶማሌ ክልል አገልግሎት ይሰጣል።",
  "footer.rights": "መብቱ በህግ የተጠበቀ ነው።",
};

const om: Dict = {
  "nav.home": "Fuula Duraa",
  "nav.about": "Waa'ee Keenya",
  "nav.programs": "Sagantaalee",
  "nav.enroll": "Amma Galmaa'i",
  "nav.apply": "Amma Iyyadhu",
  "brand.tagline": "Garaagarummaan Keenya Qulqullina",
  "gate.title": "Afaan kee filadhu",
  "gate.subtitle": "Afaan itti marsariitii kolleejjii ilaaluu barbaaddu filadhu.",
  "gate.continue": "Itti fufi",
  "gate.button": "Hiiki",

  "home.badge": "Jigjigaa, Itoophiyaa",
  "home.title1": "Eastern Africa",
  "home.title2": "International College",
  "home.lead":
    "Giddugaloota qulqullina barnootaa Itoophiyaa fi Naannoo Somaalee keessaa isa tokko — barnoota Maastarsii, Digrii fi Diploomaa beekamtii qabu ni kennina.",
  "home.cta1": "Amma Galmaa'i",
  "home.cta2": "Sagantaalee Ilaali",
  "stats.students": "Barattoota galmaa'an",
  "stats.programs": "Sagantaalee beekamtii qaban",
  "stats.faculties": "Faakaaltiiwwan",
  "stats.graduations": "Eebbawwan",
  "partners.title": "Michoota fi Beekamtii Kennitoota",
  "partners.sub":
    "Sadarkaa barnootaa keenya eeguuf dhaabbilee biyyaalessaa fi idil-addunyaa waliin hojjenna.",
  "certs.title": "Ragaalee Maastarsii",
  "certs.sub": "Ragaalee digrii lammaffaa kan Eastern Africa International College kennu.",
  "certs.all": "Sagantaalee hunda ilaali",
  "news.title": "Oduu Kolleejjii",
  "news.sub": "Beeksisa, taateewwan fi odeeffannoo mooraa Jigjigaa.",

  "about.title": "Waa'ee Kolleejjii",
  "about.lead":
    "Eastern Africa International College giddugala qulqullina barnootaa Jigjigaa keessatti argamuu fi Itoophiyaa fi Naannoo Somaalee tajaajiluudha.",
  "about.mission": "Ergama Keenya",
  "about.missionText":
    "Barnoota olaanaa qulqullina qabu kennuudhaan eebbifamtoota fedhii naannoo fi biyyaa guutan qopheessuu.",
  "about.vision": "Mul'ata Keenya",
  "about.visionText": "Barsiisuun, qorannoon fi tajaajila hawaasaa Itoophiyaatti dursaa ta'uu.",
  "about.values": "Duudhaalee Keenya",
  "about.valuesText": "Qulqullina, amanamummaa, hammatamummaa, tajaajila hawaasaa fi barnoota itti fufaa.",
  "about.campus": "Mooraa Keenya",

  "programs.title1": "Faakaaltiiwwan fi",
  "programs.title2": "Sagantaalee",
  "programs.lead":
    "Sagantaalee Maastarsii, Digrii fi Diploomaa beekamtii qaban faakaaltii torbaan — mooraa Jigjigaatti barsiisota ogummaa qabaniin kennama.",
  "programs.faculties": "Faakaaltiiwwan Keenya",
  "programs.quals": "Ragaalee kenninu",
  "programs.qualsSub": "Maqaawwan sirrii akka ragaalee fi transkiriiptii irratti mul'atan.",
  "programs.masters": "Digrii Maastarsii",
  "programs.degrees": "Digrii Baachileerii",
  "programs.diplomas": "Diploomaa",
  "programs.found": "Sagantaa kee argatteertaa?",
  "programs.foundSub":
    "Iyyannoo kee galchi, waajjirri galmee guyyaa hojii lamaa keessatti si quunnama.",

  "enroll.title": "Amma Galmaa'i",
  "enroll.lead":
    "Iyyannoo kee waggaa barnootaa ammaatiif jalqabi. Galmeen Maastarsii, Digrii fi Diploomaaf banaadha.",
  "enroll.steps": "Tarkaanfiilee Galmee",
  "enroll.requirements": "Ulaagaalee Galmee",
  "enroll.form": "Unka Iyyannoo",
  "enroll.fullName": "Maqaa guutuu",
  "enroll.email": "Imeelii",
  "enroll.phone": "Lakkoofsa bilbilaa",
  "enroll.program": "Sagantaa barbaaddu",
  "enroll.level": "Sadarkaa barnootaa",
  "enroll.message": "Ergaa (filannoo)",
  "enroll.submit": "Iyyannoo Ergi",
  "enroll.success": "Iyyannoon kee nu gahe. Waajjirri galmee dhiyootti si quunnama.",

  "footer.explore": "Sakatta'i",
  "footer.contact": "Quunnamtii",
  "footer.about":
    "Giddugala qulqullina barnootaa Jigjigaa keessatti argamu, Itoophiyaa fi Naannoo Somaalee tajaajilu.",
  "footer.rights": "Mirgi hundi seeraan kan eegamedha.",
};

const ti: Dict = {
  "nav.home": "መእተዊ",
  "nav.about": "ብዛዕባና",
  "nav.programs": "መደባት",
  "nav.enroll": "ሕጂ ተመዝገብ",
  "nav.apply": "ሕጂ ኣመልክት",
  "brand.tagline": "ፍልልይና ብቕዓት እዩ",
  "gate.title": "ቋንቋኹም ምረጹ",
  "gate.subtitle": "ነቲ መርበብ ሓበሬታ ክትርእዩሉ እትደልዩ ቋንቋ ምረጹ።",
  "gate.continue": "ቀጽል",
  "gate.button": "ተርጉም",

  "home.badge": "ጅግጅጋ፣ ኢትዮጵያ",
  "home.title1": "ኢስተርን ኣፍሪካ",
  "home.title2": "ኢንተርናሽናል ኮለጅ",
  "home.lead":
    "ኣብ ኢትዮጵያን ሶማሊ ክልልን ካብ ዝለዓሉ ማእከላት ትምህርቲ ሓደ — ማስተርስ፣ ዲግሪን ዲፕሎማን ዝሓቖፈ ብቑዕ ትምህርቲ ንህብ።",
  "home.cta1": "ሕጂ ተመዝገብ",
  "home.cta2": "መደባት ርአ",
  "stats.students": "ዝተመዝገቡ ተማሃሮ",
  "stats.programs": "ዕውቅና ዘለዎም መደባት",
  "stats.faculties": "ፋኩልቲታት",
  "stats.graduations": "ምረቓታት",
  "partners.title": "መሻርኽትናን ዕውቅና ወሃብትን",
  "partners.sub": "ብቕዓት ትምህርትና ንምሕላው ምስ ሃገራውን ዓለምለኻውን ትካላት ንሰርሕ።",
  "certs.title": "ናይ ማስተርስ ሰርተፊኬታት",
  "certs.sub": "ብኢስተርን ኣፍሪካ ኢንተርናሽናል ኮለጅ ዝወሃቡ ወግዓዊ ሰርተፊኬታት።",
  "certs.all": "ኩሎም መደባት ርአ",
  "news.title": "ዜናታት ኮለጅ",
  "news.sub": "መግለጺታት፣ ፍጻመታትን ሓበሬታን ካብ ጅግጅጋ ካምፓስ።",

  "about.title": "ብዛዕባ ኮለጅ",
  "about.lead":
    "ኢስተርን ኣፍሪካ ኢንተርናሽናል ኮለጅ ኣብ ጅግጅጋ ዝርከብ ማእከል ብቕዓት ትምህርቲ ኮይኑ ንኢትዮጵያን ሶማሊ ክልልን የገልግል።",
  "about.mission": "ተልእኾና",
  "about.missionText": "ንድሌት ከባቢን ሃገርን ዘማልኡ ምሩቓት ዘዳሉ ብቑዕ ላዕለዋይ ትምህርቲ ምሃብ።",
  "about.vision": "ራእይና",
  "about.visionText": "ብምምሃር፣ ብምርምርን ማሕበረሰብ ኣገልግሎትን ኣብ ኢትዮጵያ ቅድሚት ምዃን።",
  "about.values": "ክብርታትና",
  "about.valuesText": "ብቕዓት፣ ተኣማንነት፣ ሓቛፍነት፣ ማሕበረሰብ ኣገልግሎትን ቀጻሊ ትምህርትን።",
  "about.campus": "ካምፓስና",

  "programs.title1": "ፋኩልቲታትን",
  "programs.title2": "መደባትን",
  "programs.lead": "ኣብ ሸውዓተ ፋኩልቲታት ዝወሃቡ ብቑዓት ማስተርስ፣ ዲግሪን ዲፕሎማን መደባት።",
  "programs.faculties": "ፋኩልቲታትና",
  "programs.quals": "እንህቦም ሰርተፊኬታት",
  "programs.qualsSub": "ኣብ ሰርተፊኬታትን ትራንስክሪፕትን ዝርከቡ ወግዓዊ ስማት።",
  "programs.masters": "ማስተርስ ዲግሪታት",
  "programs.degrees": "ባችለር ዲግሪታት",
  "programs.diplomas": "ዲፕሎማታት",
  "programs.found": "መደብካ ረኺብካ?",
  "programs.foundSub": "መመልከቲኻ ኣቕርብ፤ ቤት ጽሕፈት ምዝገባ ኣብ ክልተ ናይ ስራሕ መዓልቲ ክረኽበካ እዩ።",

  "enroll.title": "ሕጂ ተመዝገብ",
  "enroll.lead": "ንህሉው ዓመተ ትምህርቲ መመልከቲኻ ጀምር። ምዝገባ ንማስተርስ፣ ዲግሪን ዲፕሎማን ክፉት እዩ።",
  "enroll.steps": "ስጉምትታት ምዝገባ",
  "enroll.requirements": "ናይ መእተዊ መስፈርታት",
  "enroll.form": "ቅጥዒ መመልከቲ",
  "enroll.fullName": "ምሉእ ስም",
  "enroll.email": "ኢመይል",
  "enroll.phone": "ቁጽሪ ስልኪ",
  "enroll.program": "ትደልዮ መደብ",
  "enroll.level": "ደረጃ ትምህርቲ",
  "enroll.message": "መልእኽቲ (ብምርጫ)",
  "enroll.submit": "መመልከቲ ስደድ",
  "enroll.success": "መመልከቲኻ በጺሑና። ቤት ጽሕፈት ምዝገባ ኣብ ቀረባ ክረኽበካ እዩ።",

  "footer.explore": "ኣሰስ",
  "footer.contact": "ርክብ",
  "footer.about": "ኣብ ጅግጅጋ ዝርከብ ማእከል ብቕዓት ትምህርቲ፤ ንኢትዮጵያን ሶማሊ ክልልን የገልግል።",
  "footer.rights": "ኩሉ መሰል ዝተሓለወ እዩ።",
};

const aa: Dict = {
  "nav.home": "Qaran Saaku",
  "nav.about": "Nee Birtah",
  "nav.programs": "Baritwa",
  "nav.enroll": "Asaaku Culul",
  "nav.apply": "Asaaku Esser",
  "brand.tagline": "Ni baxxaqqi kinni qulqulli",
  "gate.title": "Afkat dooritay",
  "gate.subtitle": "Kolleej websaayt elle table faxxa afa doorit.",
  "gate.continue": "Cathaay",
  "gate.button": "Tarjum",

  "home.badge": "Jigjiga, Itiyoophiya",
  "home.title1": "Eastern Africa",
  "home.title2": "International College",
  "home.lead":
    "Itiyoophiya kee Somaali Rakaakayak addah tamah qulqulli barnoota xaagoo — Maastars, Digrii kee Diploomaa neh tanim.",
  "home.cta1": "Asaaku Culul",
  "home.cta2": "Baritwa Wag",
  "stats.students": "Cululte barittoola",
  "stats.programs": "Aysemmeqe baritwa",
  "stats.faculties": "Faakaaltiwa",
  "stats.graduations": "Eebbaawa",
  "partners.title": "Ni kataysiisa kee aysemmeqewa",
  "partners.sub": "Ni barnoota qulqulli dacrisaanamkeh biyyaale kee addunyaale dhaabbaatal taama abna.",
  "certs.title": "Maastars sertifikeetwa",
  "certs.sub": "Eastern Africa International College tacem sertifikeetwa.",
  "certs.all": "Inkih baritwa wag",
  "news.title": "Kolleej Xaagu",
  "news.sub": "Jigjiga kaampasak yan xaagu kee taamoomi.",

  "about.title": "Kolleejih birtah",
  "about.lead":
    "Eastern Africa International College Jigjigal tan barnoota qulqulli xaagoo, Itiyoophiya kee Somaali Rakaakay taamitta.",
  "about.mission": "Ni Missiyon",
  "about.missionText": "Qulqulli-le qaran barnoota acuwuk rakaakay kee baaxo faxxi elle qambaalta.",
  "about.vision": "Ni Wagsis",
  "about.visionText": "Barsiisiyyaa, qorannoo kee bulsho taamah Itiyoophiyal naharat yaniih.",
  "about.values": "Ni Qimaadwa",
  "about.valuesText": "Qulqulli, amaanat, inkih kataysiis, bulsho taama kee barnoota cathaanam.",
  "about.campus": "Ni Kaampas",

  "programs.title1": "Faakaaltiwa kee",
  "programs.title2": "Baritwa",
  "programs.lead": "Malcina faakaaltil tan Maastars, Digrii kee Diploomaa baritwa.",
  "programs.faculties": "Ni Faakaaltiwa",
  "programs.quals": "Nanu naceem sertifikeetwa",
  "programs.qualsSub": "Sertifikeet kee transkiriipt bagul yan qunxaane migaaqwa.",
  "programs.masters": "Maastars Digriiwa",
  "programs.degrees": "Baachiler Digriiwa",
  "programs.diplomas": "Diploomaawa",
  "programs.found": "Ku barnoota geytee?",
  "programs.foundSub": "Ku esserit rub, culuk biiro nammay taama ayrol koo xaagitele.",

  "enroll.title": "Asaaku Culul",
  "enroll.lead": "Aadan barnoota sanatah ku esserit qimbis. Culuk Maastars, Digrii kee Diploomaah fakkinta.",
  "enroll.steps": "Culuk Gititte",
  "enroll.requirements": "Culuk Faxximwa",
  "enroll.form": "Esserit Foorm",
  "enroll.fullName": "Duudda migaq",
  "enroll.email": "Iimeel",
  "enroll.phone": "Telefoon loowo",
  "enroll.program": "Faxxa barnoota",
  "enroll.level": "Barnoota darajat",
  "enroll.message": "Farmo (doorit)",
  "enroll.submit": "Esserit Rub",
  "enroll.success": "Ku esserit neh gufte. Culuk biiro sissikuk koo xaagitele.",

  "footer.explore": "Wag",
  "footer.contact": "Xaagitto",
  "footer.about": "Jigjigal tan barnoota qulqulli xaagoo, Itiyoophiya kee Somaali Rakaakay taamitta.",
  "footer.rights": "Inkih cakki dacrisimeh.",
};

const sid: Dict = {
  "nav.home": "Umi Qoola",
  "nav.about": "Ninke Daafira",
  "nav.programs": "Pirogiraamme",
  "nav.enroll": "Xaa Borreessi",
  "nav.apply": "Xaa Xa'mi",
  "brand.tagline": "Baxxinke Danchimmaati",
  "gate.title": "Afookki doori",
  "gate.subtitle": "Koleejjete websaayte laa'ate hasi'rootto afoo doori.",
  "gate.continue": "Albisi",
  "gate.button": "Tirgami",

  "home.badge": "Jigjiga, Itiyoophiya",
  "home.title1": "Eastern Africa",
  "home.title2": "International College",
  "home.lead":
    "Itiyoophiyaranna Somaale Gobbara noo danchu rosu bayicho giddo mitte — Maastarsi, Digirii nna Diploomu roso uyineemmo.",
  "home.cta1": "Xaa Borreessi",
  "home.cta2": "Pirogiraamme Lai",
  "stats.students": "Borreessantino rosaano",
  "stats.programs": "Ammanantino pirogiraamme",
  "stats.faculties": "Faakaaltete",
  "stats.graduations": "Eebbuwa",
  "partners.title": "Ninke Kaa'laanonna Ammanaano",
  "partners.sub": "Rosunke danchimma agarate gobbaranna alame dirijjitubba ledo loonseemmo.",
  "certs.title": "Maastarsete Sertifikeete",
  "certs.sub": "Eastern Africa International College uyitanno gara ikkitino sertifikeete.",
  "certs.all": "Baala pirogiraamme lai",
  "news.title": "Koleejjete Xaadooshshe",
  "news.sub": "Jigjiga kaampasinni xaadooshshenna assooshshe.",

  "about.title": "Koleejjete Daafira",
  "about.lead":
    "Eastern Africa International College Jigjiga giddo noo danchu rosu bayichooti, Itiyoophiyaranna Somaale Gobbara loosanno.",
  "about.mission": "Ninke Loosaancho",
  "about.missionText": "Gobbaranna qooxeessu hasatto guwisanno danchu aliidi roso uyate.",
  "about.vision": "Ninke Lao",
  "about.visionText": "Rosiisi, xiinxallonna manniwiini loosinni Itiyoophiya giddo umi ikka.",
  "about.values": "Ninke Ayirrinye",
  "about.valuesText": "Danchimma, ammanamummo, baalu ledo ikka, manniwiini loosanna rosu albinye.",
  "about.campus": "Ninke Kaampase",

  "programs.title1": "Faakaaltetenna",
  "programs.title2": "Pirogiraamme",
  "programs.lead": "Lamalu faakaalte giddo noo Maastarsi, Digirii nna Diploomu pirogiraamme.",
  "programs.faculties": "Ninke Faakaaltete",
  "programs.quals": "Uyineemmo sertifikeete",
  "programs.qualsSub": "Sertifikeetenna transkiripte aana noo gara ikkitino su'muwa.",
  "programs.masters": "Maastarsi Digirii",
  "programs.degrees": "Baachileri Digirii",
  "programs.diplomas": "Diploomu",
  "programs.found": "Pirogiraamekki afiratto?",
  "programs.foundSub": "Xa'motokki soyi, borreessate biiro lame loosu barrira koo xa'manno.",

  "enroll.title": "Xaa Borreessi",
  "enroll.lead": "Xaa noo rosu diri xa'mo hanafi. Borreessu Maastarsi, Digirii nna Diploomuraati.",
  "enroll.steps": "Borreessate Qaafo",
  "enroll.requirements": "Eote Hasiisannore",
  "enroll.form": "Xa'mote Foormi",
  "enroll.fullName": "Woy'nootto su'ma",
  "enroll.email": "Iimeeli",
  "enroll.phone": "Bilbilu kiiro",
  "enroll.program": "Hasi'rootto pirogiraame",
  "enroll.level": "Rosu deerra",
  "enroll.message": "Sokka (doorshi)",
  "enroll.submit": "Xa'mo Soyi",
  "enroll.success": "Xa'motokki adhinoommo. Borreessate biiro muli barra koo xa'manno.",

  "footer.explore": "Bui",
  "footer.contact": "Xaadooshshe",
  "footer.about": "Jigjiga giddo noo danchu rosu bayicho, Itiyoophiyaranna Somaale Gobbara loosanno.",
  "footer.rights": "Baalu qoosso agarantinoho.",
};

const dictionaries: Record<LangCode, Dict> = { so, am, om, ti, aa, sid, en };

type Ctx = {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  t: (key: string) => string;
  chosen: boolean;
  confirm: (l: LangCode) => void;
  openPicker: () => void;
  pickerOpen: boolean;
  closePicker: () => void;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(DEFAULT_LANG);
  const [chosen, setChosen] = useState(true);
  const [pickerOpen, setPickerOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as LangCode | null;
    if (stored && stored in dictionaries) {
      setLangState(stored);
    } else {
      setChosen(false);
      setPickerOpen(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: LangCode) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const confirm = useCallback(
    (l: LangCode) => {
      setLang(l);
      setChosen(true);
      setPickerOpen(false);
    },
    [setLang],
  );

  const t = useCallback(
    (key: string) => dictionaries[lang][key] ?? en[key] ?? key,
    [lang],
  );

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t,
      chosen,
      confirm,
      openPicker: () => setPickerOpen(true),
      closePicker: () => setPickerOpen(false),
      pickerOpen,
    }),
    [lang, setLang, t, chosen, confirm, pickerOpen],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used inside LanguageProvider");
  return ctx;
}
