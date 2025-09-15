const languageNames = {
  en: 'English',
  ta: 'தமிழ்',
  hi: 'हिंदी',
  ml: 'മലയാളം',
  te: 'తెలుగు'
};

const translations = {
  en: {
    title: "Netflix - Watch TV Shows, Movies and More",
    hero: {
      h1: "Unlimited movies, TV shows, and more",
      h2: "Watch anywhere. Cancel anytime.",
      p: "Ready to watch? Enter your email to create or restart your membership.",
      btn: "Get Started >",
      emailPlaceholder: "Email address"
    },
    trending: "Trending Now",
    topPicks: "Top Picks For You",
    features: {
      tv: {
        title: "Enjoy on your TV",
        desc: "Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
      },
      download: {
        title: "Download your shows to watch offline",
        desc: "Save your favorites easily and always have something to watch."
      },
      everywhere: {
        title: "Watch everywhere",
        desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
      },
      kids: {
        title: "Create profiles for kids",
        desc: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
      }
    },
    plans: {
      title: "Choose the plan that's right for you",
      basic: {
        name: "Basic",
        price: "₹199/month",
        features: ["HD quality", "1 screen at a time", "Download on 1 device"],
        btn: "Subscribe Now"
      },
      standard: {
        name: "Standard",
        price: "₹499/month",
        features: ["Full HD quality", "2 screens at a time", "Download on 2 devices"],
        btn: "Most Popular"
      },
      premium: {
        name: "Premium",
        price: "₹649/month",
        features: ["UHD 4K + HDR", "4 screens at a time", "Download on 4 devices"],
        btn: "Subscribe Now"
      },
      note: "HD/4K quality requires supported device and internet connection."
    },
    faq: {
      title: "Frequently Asked Questions",
      needHelp: "Need help?",
      whatIsNetflix: "What is Netflix?",
      whatIsNetflix_desc: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      howMuch: "How much does Netflix cost?",
      howMuch_desc: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
      where: "Where can I watch?",
      where_desc: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app.",
      howCancel: "How do I cancel?",
      howCancel_desc: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks.",
      whatWatch: "What can I watch on Netflix?",
      whatWatch_desc: "Watch TV shows and movies recommended for you, including award-winning Netflix Originals and all your favorite Netflix series and movies."
    },
    footer: {
      questions: "Questions? Call 000-800-040-1843",
      faq: "FAQ",
      helpCentre: "Help Centre",
      account: "Account",
      mediaCentre: "Media Centre",
      investor: "Investor Relations",
      jobs: "Jobs",
      waysToWatch: "Ways to Watch",
      terms: "Terms of Use",
      privacy: "Privacy",
      cookies: "Cookie Preferences",
      corporate: "Corporate Information",
      contactUs: "Contact Us",
      contact: "Contact Us"
    },
    signin: {
      title: "Sign In - Netflix",
      h1: "Sign In",
      btn: "Sign In",
      emailPlaceholder: "Email or phone number",
      passwordPlaceholder: "Password",
      forgot: "Forgot password?",
      new: "New to Netflix?",
      signup: "Sign up now"
    }
  },
  ta: {
    title: "நெட்ஃப்ளிக்ஸ் - டிவி ஷோக்கள், திரைப்படங்கள் மற்றும் அதற்கு மேல்",
    hero: {
      h1: "இல்லாமல் திரைப்படங்கள், டிவி ஷோக்கள் மற்றும் அதற்கு மேல்",
      h2: "எங்கும் பாருங்கள். எப்போது வேண்டுமானாலும் ரத்து செய்யுங்கள்.",
      p: "பார்க்க தயாரா? உங்கள் உறுப்பினரை உருவாக்க அல்லது மீண்டும் தொடங்க உங்கள் மின்னஞ்சலை உள்ளிடுங்கள்.",
      btn: "தொடங்குங்கள் >",
      emailPlaceholder: "மின்னஞ்சல் முகவரி"
    },
    trending: "Trending இப்போது",
    topPicks: "உங்களுக்கான Top Picks",
    features: {
      tv: {
        title: "உங்கள் டிவியில் அனுபவிக்கவும்",
        desc: "ஸ்மார்ட் டிவிகள், பிளேஸ்டேஷன், எக்ஸ்பாக்ஸ், க்ரோம்காஸ்ட், ஆப்பிள் டிவி, ப்ளூ-ரே பிளேயர்கள் மற்றும் அதற்கு மேல் பாருங்கள்."
      },
      download: {
        title: "ஆஃப்லைனில் பார்க்க உங்கள் ஷோக்களை பதிவிறக்கம் செய்யுங்கள்",
        desc: "உங்கள் விருப்பங்களை எளிதாக சேமிக்கவும் மற்றும் எப்போதும் ஏதாவது பார்க்க."
      },
      everywhere: {
        title: "எங்கும் பாருங்கள்",
        desc: "உங்கள் போன், டேப்லெட், லேப்டாப் மற்றும் டிவியில் இல்லாமல் திரைப்படங்கள் மற்றும் டிவி ஷோக்களை ஸ்ட்ரீம் செய்யுங்கள்."
      },
      kids: {
        title: "குழந்தைகளுக்கான சுயவிவரங்களை உருவாக்குங்கள்",
        desc: "அவர்களின் விருப்பமான கதாபாத்திரங்களுடன் குழந்தைகளை சாகசங்களுக்கு அனுப்புங்கள் - அவர்களுக்காகவே உருவாக்கப்பட்ட இடம், உங்கள் உறுப்பினருடன் இலவசம்."
      }
    },
    plans: {
      title: "உங்களுக்கு ஏற்ற திட்டத்தை தேர்ந்தெடுங்கள்",
      basic: {
        name: "அடிப்படை",
        price: "₹199/மாதம்",
        features: ["HD தரம்", "ஒரு நேரத்தில் 1 திரை", "1 சாதனத்தில் பதிவிறக்கம்"],
        btn: "இப்போது சந்தா பெறுங்கள்"
      },
      standard: {
        name: "மேலாண்மை",
        price: "₹499/மாதம்",
        features: ["முழு HD தரம்", "ஒரு நேரத்தில் 2 திரைகள்", "2 சாதனங்களில் பதிவிறக்கம்"],
        btn: "அதிகம் பிரபலமானது"
      },
      premium: {
        name: "பிரீமியம்",
        price: "₹649/மாதம்",
        features: ["UHD 4K + HDR", "ஒரு நேரத்தில் 4 திரைகள்", "4 சாதனங்களில் பதிவிறக்கம்"],
        btn: "இப்போது சந்தா பெறுங்கள்"
      },
      note: "HD/4K தரத்திற்கு ஆதரிக்கப்பட்ட சாதனம் மற்றும் இணைய இணைப்பு தேவை."
    },
    faq: {
      title: "பெரும்பாலும் கேட்கப்படும் கேள்விகள்",
      needHelp: "உதவி தேவையா?",
      whatIsNetflix: "நெட்ஃப்ளிக்ஸ் என்றால் என்ன?",
      whatIsNetflix_desc: "நெட்ஃப்ளிக்ஸ் ஒரு ஸ்ட்ரீமிங் சேவை, இது பல விருது வென்ற டிவி ஷோக்கள், திரைப்படங்கள், அனிமே, ஆவணப்படங்கள் மற்றும் ஆயிரக்கணக்கான இணைய இணைக்கப்பட்ட சாதனங்களில் அதற்கு மேல் வழங்குகிறது.",
      howMuch: "நெட்ஃப்ளிக்ஸ் செலவு எவ்வளவு?",
      howMuch_desc: "உங்கள் ஸ்மார்ட்போன், டேப்லெட், ஸ்மார்ட் டிவி, லேப்டாப் அல்லது ஸ்ட்ரீமிங் சாதனத்தில் நெட்ஃப்ளிக்ஸ் பாருங்கள், ஒரு நிலையான மாதாந்திர கட்டணத்திற்கு. திட்டங்கள் ₹149 முதல் ₹649 வரை ஒரு மாதம். கூடுதல் செலவுகள் இல்லை, ஒப்பந்தங்கள் இல்லை.",
      where: "நான் எங்கு பார்க்கலாம்?",
      where_desc: "எங்கும், எப்போதும், இல்லாமல் சாதனங்களில் பாருங்கள். உங்கள் நெட்ஃப்ளிக்ஸ் கணக்கில் சைன் இன் செய்து netflix.com இல் உங்கள் தனிப்பட்ட கணினியில் அல்லது நெட்ஃப்ளிக்ஸ் ஆப் வழங்கும் எந்த இணைய இணைக்கப்பட்ட சாதனத்திலும் உடனடியாக பாருங்கள்.",
      howCancel: "நான் எப்படி ரத்து செய்வது?",
      howCancel_desc: "நெட்ஃப்ளிக்ஸ் நெகிழ்வானது. எந்த பிரச்சனைக்குரிய ஒப்பந்தங்கள் இல்லை, எந்த பொறுப்புகள் இல்லை. நீங்கள் இரண்டு கிளிக் செய்து ஆன்லைனில் உங்கள் கணக்கை எளிதாக ரத்து செய்யலாம்.",
      whatWatch: "நெட்ஃப்ளிக்ஸில் நான் என்ன பார்க்கலாம்?",
      whatWatch_desc: "உங்களுக்கு பரிந்துரைக்கப்பட்ட டிவி ஷோக்கள் மற்றும் திரைப்படங்களை பாருங்கள், விருது வென்ற நெட்ஃப்ளிக்ஸ் ஆரிஜினல்கள் உட்பட மற்றும் உங்கள் அனைத்து விருப்பமான நெட்ஃப்ளிக்ஸ் தொடர்கள் மற்றும் திரைப்படங்கள்."
    },
    footer: {
      questions: "கேள்விகள்? 000-800-040-1843 அழைக்கவும்",
      faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
      helpCentre: "உதவி மையம்",
      account: "கணக்கு",
      mediaCentre: "மீடியா மையம்",
      investor: "முதலீட்டாளர் உறவுகள்",
      jobs: "வேலைகள்",
      waysToWatch: "பார்க்கும் வழிகள்",
      terms: "பயன்பாட்டு நிபந்தனைகள்",
      privacy: "தனியுரிமை",
      cookies: "குக்கி விருப்பங்கள்",
      corporate: "கார்ப்பரேட் தகவல்",
      contactUs: "எங்களை தொடர்பு கொள்ளுங்கள்",
      contact: "தொடர்பு கொள்ளுங்கள்"
    },
    signin: {
      title: "புக் இன் - நெட்ஃப்ளிக்ஸ்",
      h1: "புக் இன்",
      btn: "புக் இன்",
      emailPlaceholder: "மின்னஞ்சல் அல்லது தொலைபேசி எண்",
      passwordPlaceholder: "பாஸ்வர்ட்",
      forgot: "பாஸ்வர்ட் மறந்துவிட்டீர்களா?",
      new: "நெட்ஃப்ளிக்ஸ்க்கு புதியவரா?",
      signup: "இப்போது சைன் அப் செய்யுங்கள்"
    }
  },
  hi: {
    title: "नेटफ्लिक्स - टीवी शो, फिल्में और अधिक देखें",
    hero: {
      h1: "असीमित फिल्में, टीवी शो और अधिक",
      h2: "कहीं भी देखें। कभी भी रद्द करें।",
      p: "देखने के लिए तैयार? अपनी सदस्यता बनाने या पुनः शुरू करने के लिए अपना ईमेल दर्ज करें।",
      btn: "शुरू करें >",
      emailPlaceholder: "ईमेल पता"
    },
    trending: "ट्रेंडिंग नाउ",
    topPicks: "आपके लिए टॉप पिक्स",
    features: {
      tv: {
        title: "अपने टीवी पर आनंद लें",
        desc: "स्मार्ट टीवी, प्लेस्टेशन, एक्सबॉक्स, क्रोमकास्ट, एप्पल टीवी, ब्लू-रे प्लेयर्स और अधिक पर देखें।"
      },
      download: {
        title: "ऑफलाइन देखने के लिए अपने शो डाउनलोड करें",
        desc: "अपने पसंदीदा आसानी से बचाएं और हमेशा कुछ देखने को रखें।"
      },
      everywhere: {
        title: "हर जगह देखें",
        desc: "अपने फोन, टैबलेट, लैपटॉप और टीवी पर असीमित फिल्में और टीवी शो स्ट्रीम करें।"
      },
      kids: {
        title: "बच्चों के लिए प्रोफाइल बनाएं",
        desc: "अपने पसंदीदा पात्रों के साथ बच्चों को साहसिक कार्यों पर भेजें, उनके लिए विशेष स्थान—आपकी सदस्यता के साथ मुफ्त।"
      }
    },
    plans: {
      title: "आपके लिए सही प्लान चुनें",
      basic: {
        name: "बेसिक",
        price: "₹199/माह",
        features: ["एचडी क्वालिटी", "एक समय में 1 स्क्रीन", "1 डिवाइस पर डाउनलोड"],
        btn: "अभी सब्सक्राइब करें"
      },
      standard: {
        name: "स्टैंडर्ड",
        price: "₹499/माह",
        features: ["पूर्ण एचडी क्वालिटी", "एक समय में 2 स्क्रीन", "2 डिवाइस पर डाउनलोड"],
        btn: "सबसे लोकप्रिय"
      },
      premium: {
        name: "प्रीमियम",
        price: "₹649/माह",
        features: ["यूएचडी 4K + एचडीआर", "एक समय में 4 स्क्रीन", "4 डिवाइस पर डाउनलोड"],
        btn: "अभी सब्सक्राइब करें"
      },
      note: "एचडी/4K क्वालिटी के लिए समर्थित डिवाइस और इंटरनेट कनेक्शन की आवश्यकता है।"
    },
    faq: {
      title: "अक्सर पूछे जाने वाले प्रश्न",
      needHelp: "मदद चाहिए?",
      whatIsNetflix: "नेटफ्लिक्स क्या है?",
      whatIsNetflix_desc: "नेटफ्लिक्स एक स्ट्रीमिंग सेवा है जो हजारों इंटरनेट से जुड़े डिवाइस पर पुरस्कार विजेता टीवी शो, फिल्में, एनीमे, डॉक्यूमेंट्री और अधिक की विस्तृत विविधता प्रदान करती है।",
      howMuch: "नेटफ्लिक्स की लागत कितनी है?",
      howMuch_desc: "अपने स्मार्टफोन, टैबलेट, स्मार्ट टीवी, लैपटॉप या स्ट्रीमिंग डिवाइस पर नेटफ्लिक्स देखें, एक निश्चित मासिक शुल्क के लिए। योजनाएं ₹149 से ₹649 प्रति माह तक हैं। कोई अतिरिक्त लागत, कोई अनुबंध नहीं।",
      where: "मैं कहाँ देख सकता हूँ?",
      where_desc: "कहीं भी, कभी भी, असीमित डिवाइस पर देखें। नेटफ्लिक्स खाते से साइन इन करें और netflix.com पर तुरंत देखें या नेटफ्लिक्स ऐप प्रदान करने वाले किसी भी इंटरनेट से जुड़े डिवाइस पर।",
      howCancel: "मैं कैसे रद्द करूँ?",
      howCancel_desc: "नेटफ्लिक्स लचीला है। कोई परेशान करने वाले अनुबंध या प्रतिबद्धताएँ नहीं। आप दो क्लिक में ऑनलाइन अपना खाता रद्द कर सकते हैं।",
      whatWatch: "नेटफ्लिक्स पर मैं क्या देख सकता हूँ?",
      whatWatch_desc: "आपके लिए अनुशंसित टीवी शो और फिल्में देखें, जिसमें पुरस्कार विजेता नेटफ्लिक्स ओरिजिनल्स और आपकी सभी पसंदीदा नेटफ्लिक्स श्रृंखला और फिल्में शामिल हैं।"
    },
    footer: {
      questions: "प्रश्न? 000-800-040-1843 पर कॉल करें",
      faq: "सामान्य प्रश्न",
      helpCentre: "सहायता केंद्र",
      account: "खाता",
      mediaCentre: "मीडिया सेंटर",
      investor: "निवेशक संबंध",
      jobs: "नौकरियां",
      waysToWatch: "देखने के तरीके",
      terms: "उपयोग की शर्तें",
      privacy: "गोपनीयता",
      cookies: "कुकी वरीयताएं",
      corporate: "कॉर्पोरेट जानकारी",
      contactUs: "हमसे संपर्क करें",
      contact: "हमसे संपर्क करें"
    },
    signin: {
      title: "साइन इन - नेटफ्लिक्स",
      h1: "साइन इन",
      btn: "साइन इन",
      emailPlaceholder: "ईमेल या फोन नंबर",
      passwordPlaceholder: "पासवर्ड",
      forgot: "पासवर्ड भूल गए?",
      new: "नेटफ्लिक्स के नए?",
      signup: "अभी साइन अप करें"
    }
  },
  ml: {
    title: "നെറ്റ്‌ഫ്ലിക്സ് - ടിവി ഷോകൾ, സിനിമകൾ എന്നിവ കാണുക",
    hero: {
      h1: "അൺലിമിറ്റഡ് സിനിമകൾ, ടിവി ഷോകൾ, മറ്റു പലതും",
      h2: "എവിടെയും കാണുക. എപ്പോൾ വേണമെങ്കിലും റദ്ദാക്കുക.",
      p: "കാണാൻ തയ്യാറാണോ? നിങ്ങളുടെ അംഗത്വം സൃഷ്ടിക്കാനോ പുനരാരംഭിക്കാനോ നിങ്ങളുടെ ഇമെയിൽ നൽകുക.",
      btn: "ആരംഭിക്കുക >",
      emailPlaceholder: "ഇമെയിൽ വിലാസം"
    },
    trending: "ട്രെൻഡിങ് ഇപ്പോൾ",
    topPicks: "നിങ്ങൾക്കായുള്ള ടോപ് പിക്കുകൾ",
    features: {
      tv: {
        title: "നിങ്ങളുടെ ടിവിയിൽ ആസ്വദിക്കുക",
        desc: "സ്മാർട്ട് ടിവികൾ, പ്ലേസ്റ്റേഷൻ, എക്സ്ബോക്സ്, ക്രോംകാസ്റ്റ്, ആപ്പിൾ ടിവി, ബ്ലൂ-റേ പ്ലെയറുകൾ എന്നിവയിൽ കാണുക."
      },
      download: {
        title: "ഓഫ്‌ലൈനിൽ കാണാൻ നിങ്ങളുടെ ഷോകൾ ഡൗൺലോഡ് ചെയ്യുക",
        desc: "നിങ്ങളുടെ ഇഷ്ടങ്ങൾ എളുപ്പത്തിൽ സേവ് ചെയ്യുകയും എപ്പോഴും എന്തെങ്കിലും കാണാനുള്ളത് സൂക്ഷിക്കുക."
      },
      everywhere: {
        title: "എവിടെയും കാണുക",
        desc: "നിങ്ങളുടെ ഫോൺ, ടാബ്‌ലെറ്റ്, ലാപ്‌ടോപ്പ്, ടിവി എന്നിവയിൽ അൺലിമിറ്റഡ് സിനിമകളും ടിവി ഷോകളും സ്ട്രീം ചെയ്യുക."
      },
      kids: {
        title: "കുട്ടികൾക്കായി പ്രൊഫൈലുകൾ സൃഷ്ടിക്കുക",
        desc: "അവരുടെ പ്രിയപ്പെട്ട കഥാപാത്രങ്ങളോടൊപ്പം കുട്ടികളെ സാഹസികതകളിലേക്ക് അയയ്ക്കുക—അവർക്കായി പ്രത്യേകം ഉണ്ടാക്കിയ സ്ഥലം, നിങ്ങളുടെ അംഗത്വത്തോടൊപ്പം സൗജന്യം."
      }
    },
    plans: {
      title: "നിങ്ങൾക്ക് ശരിയായ പ്ലാൻ തിരഞ്ഞെടുക്കുക",
      basic: {
        name: "ബേസിക്",
        price: "₹199/മാസം",
        features: ["എച്ച്ഡി ഗുണനിലവാരം", "ഒരേസമയം 1 സ്ക്രീൻ", "1 ഉപകരണത്തിൽ ഡൗൺലോഡ്"],
        btn: "ഇപ്പോൾ സബ്സ്ക്രൈബ് ചെയ്യുക"
      },
      standard: {
        name: "സ്റ്റാൻഡേർഡ്",
        price: "₹499/മാസം",
        features: ["ഫുൾ എച്ച്ഡി ഗുണനിലവാരം", "ഒരേസമയം 2 സ്ക്രീനുകൾ", "2 ഉപകരണങ്ങളിൽ ഡൗൺലോഡ്"],
        btn: "ഏറ്റവും ജനപ്രിയം"
      },
      premium: {
        name: "പ്രീമിയം",
        price: "₹649/മാസം",
        features: ["യുഎച്ച്ഡി 4കെ + എച്ച്ഡിആർ", "ഒരേസമയം 4 സ്ക്രീനുകൾ", "4 ഉപകരണങ്ങളിൽ ഡൗൺലോഡ്"],
        btn: "ഇപ്പോൾ സബ്സ്ക്രൈബ് ചെയ്യുക"
      },
      note: "എച്ച്ഡി/4കെ ഗുണനിലവാരത്തിന് പിന്തുണയുള്ള ഉപകരണവും ഇന്റർനെറ്റ് കണക്ഷനും ആവശ്യമാണ്."
    },
    faq: {
      title: "പതിവായി ചോദിക്കപ്പെടുന്ന ചോദ്യങ്ങൾ",
      needHelp: "സഹായം വേണോ?",
      whatIsNetflix: "നെറ്റ്‌ഫ്ലിക്സ് എന്താണ്?",
      whatIsNetflix_desc: "നെറ്റ്‌ഫ്ലിക്സ് ഒരു സ്ട്രീമിങ് സേവനമാണ്, ഇത് സ്മാർട്ട് ടിവികൾ, പ്ലേസ്റ്റേഷൻ, എക്സ്ബോക്സ്, ക്രോംകാസ്റ്റ്, ആപ്പിൾ ടിവി, ബ്ലൂ-റേ പ്ലെയറുകൾ എന്നിവയിൽ വിവിധ പുരസ്കാരജേതാക്കളായ ടിവി ഷോകൾ, സിനിമകൾ, അനിമെ, ഡോക്യുമെന്ററികൾ എന്നിവ വാഗ്ദാനം ചെയ്യുന്നു.",
      howMuch: "നെറ്റ്‌ഫ്ലിക്സിന്റെ വില എത്രയാണ്?",
      howMuch_desc: "നിങ്ങളുടെ സ്മാർട്ട്‌ഫോൺ, ടാബ്‌ലെറ്റ്, സ്മാർട്ട് ടിവി, ലാപ്‌ടോപ്പ് അല്ലെങ്കിൽ സ്ട്രീമിങ് ഉപകരണത്തിൽ നെറ്റ്‌ഫ്ലിക്സ് കാണുക, ഒരു നിശ്ചിത മാസിക ഫീസിന്. പ്ലാനുകൾ ₹149 മുതൽ ₹649 വരെ ഒരു മാസം. അധിക ചെലവുകളില്ല, കരാറുകളില്ല.",
      where: "ഞാൻ എവിടെ കാണാം?",
      where_desc: "എവിടെയും, എപ്പോൾ വേണമെങ്കിലും, അൺലിമിറ്റഡ് ഉപകരണങ്ങളിൽ കാണുക. നിങ്ങളുടെ നെറ്റ്‌ഫ്ലിക്സ് അക്കൗണ്ടിൽ സൈൻ ഇൻ ചെയ്ത് netflix.com ൽ നിങ്ങളുടെ വ്യക്തിഗത കമ്പ്യൂട്ടറിലോ നെറ്റ്‌ഫ്ലിക്സ് ആപ്പ് വാഗ്ദാനം ചെയ്യുന്ന ഏതൊരു ഇന്റർനെറ്റ് കണക്റ്റഡ് ഉപകരണത്തിലോ ഉടൻ കാണുക.",
      howCancel: "ഞാൻ എങ്ങനെ റദ്ദാക്കാം?",
      howCancel_desc: "നെറ്റ്‌ഫ്ലിക്സ് വഴക്കമുള്ളതാണ്. ബുദ്ധിമുട്ടുള്ള കരാറുകളോ പ്രതിജ്ഞകളോ ഇല്ല. നിങ്ങൾ രണ്ട് ക്ലിക്കുകളിൽ ഓൺലൈനിൽ നിങ്ങളുടെ അക്കൗണ്ട് എളുപ്പത്തിൽ റദ്ദാക്കാം.",
      whatWatch: "നെറ്റ്‌ഫ്ലിക്സിൽ ഞാൻ എന്ത് കാണാം?",
      whatWatch_desc: "നിങ്ങൾക്കായി ശുപാർശ ചെയ്ത ടിവി ഷോകളും സിനിമകളും കാണുക, പുരസ്കാരജേതാക്കളായ നെറ്റ്‌ഫ്ലിക്സ് ഒറിജിനലുകളും നിങ്ങളുടെ എല്ലാ പ്രിയപ്പെട്ട നെറ്റ്‌ഫ്ലിക്സ് സീരീസുകളും സിനിമകളും ഉൾപ്പെടെ."
    },
    footer: {
      questions: "ചോദ്യങ്ങൾ? 000-800-040-1843 വിളിക്കുക",
      faq: "പതിവായി ചോദിക്കപ്പെടുന്ന ചോദ്യങ്ങൾ",
      helpCentre: "സഹായ കേന്ദ്രം",
      account: "അക്കൗണ്ട്",
      mediaCentre: "മീഡിയ സെന്റർ",
      investor: "നിക്ഷേപകർക്കുള്ള വിവരങ്ങൾ",
      jobs: "ജോലികൾ",
      waysToWatch: "കാണാനുള്ള മാർഗങ്ങൾ",
      terms: "ഉപയോഗ നിബന്ധനകൾ",
      privacy: "സ്വകാര്യത",
      cookies: "കുക്കി മുൻഗണനകൾ",
      corporate: "കോർപ്പറേറ്റ് വിവരങ്ങൾ",
      contactUs: "ഞങ്ങളെ സമീപിക്കുക",
      contact: "ഞങ്ങളെ സമീപിക്കുക"
    },
    signin: {
      title: "സൈൻ ഇൻ - നെറ്റ്‌ഫ്ലിക്സ്",
      h1: "സൈൻ ഇൻ",
      btn: "സൈൻ ഇൻ",
      emailPlaceholder: "ഇമെയിൽ അല്ലെങ്കിൽ ഫോൺ നമ്പർ",
      passwordPlaceholder: "പാസ്‌വേഡ്",
      forgot: "പാസ്‌വേഡ് മറന്നു?",
      new: "നെറ്റ്‌ഫ്ലിക്സിന് പുതിയത്?",
      signup: "ഇപ്പോൾ സൈൻ അപ്പ് ചെയ്യുക"
    }
  },
  te: {
    title: "నెట్‌ఫ్లిక్స్ - టీవీ షోలు, సినిమాలు మరియు మరిన్ని చూడండి",
    hero: {
      h1: "అన్‌లిమిటెడ్ సినిమాలు, టీవీ షోలు మరియు మరిన్ని",
      h2: "ఎక్కడైనా చూడండి. ఎప్పుడైనా రద్దు చేయండి.",
      p: "చూడటానికి సిద్ధంగా ఉన్నారా? మీ సభ్యత్వాన్ని సృష్టించడానికి లేదా మళ్లీ ప్రారంభించడానికి మీ ఈమెయిల్‌ను నమోదు చేయండి.",
      btn: "ప్రారంభించండి >",
      emailPlaceholder: "ఈమెయిల్ చిరునామా"
    },
    trending: "ట్రెండింగ్ ఇప్పుడు",
    topPicks: "మీకు టాప్ పిక్స్",
    features: {
      tv: {
        title: "మీ టీవీలో ఆస్వాదించండి",
        desc: "స్మార్ట్ టీవీలు, ప్లేస్‌స్టేషన్, ఎక్స్‌బాక్స్, క్రోమ్‌కాస్ట్, ఆపిల్ టీవీ, బ్లూ-రే ప్లేయర్లు మరియు మరిన్ని చూడండి."
      },
      download: {
        title: "ఆఫ్‌లైన్‌లో చూడటానికి మీ షోలను డౌన్‌లోడ్ చేయండి",
        desc: "మీ ఇష్టాలను సులభంగా సేవ్ చేయండి మరియు ఎల్లప్పుడూ ఏదో ఒకటి చూడటానికి ఉంచండి."
      },
      everywhere: {
        title: "ఎక్కడైనా చూడండి",
        desc: "మీ ఫోన్, టాబ్లెట్, ల్యాప్‌టాప్ మరియు టీవీలో అన్‌లిమిటెడ్ సినిమాలు మరియు టీవీ షోలను స్ట్రీమ్ చేయండి."
      },
      kids: {
        title: "పిల్లల కోసం ప్రొఫైల్స్‌ను సృష్టించండి",
        desc: "వారి ఇష్టమైన పాత్రలతో పిల్లలను సాహసాలకు పంపండి—వారి కోసం ప్రత్యేకంగా తయారు చేసిన స్థలం, మీ సభ్యత్వంతో ఉచితం."
      }
    },
    plans: {
      title: "మీకు సరిపడే ప్లాన్‌ను ఎంచుకోండి",
      basic: {
        name: "బేసిక్",
        price: "₹199/నెల",
        features: ["ఎచ్‌డి నాణ్యత", "ఒకేసారి 1 స్క్రీన్", "1 పరికరంపై డౌన్‌లోడ్"],
        btn: "ఇప్పుడు సబ్‌స్క్రైబ్ చేయండి"
      },
      standard: {
        name: "స్టాండర్డ్",
        price: "₹499/నెల",
        features: ["ఫుల్ ఎచ్‌డి నాణ్యత", "ఒకేసారి 2 స్క్రీన్‌లు", "2 పరికరాలపై డౌన్‌లోడ్"],
        btn: "అత్యంత ప్రసిద్ధి"
      },
      premium: {
        name: "ప్రీమియం",
        price: "₹649/నెల",
        features: ["యుఎచ్‌డి 4కే + ఎచ్‌డిఆర్", "ఒకేసారి 4 స్క్రీన్‌లు", "4 పరికరాలపై డౌన్‌లోడ్"],
        btn: "ఇప్పుడు సబ్‌స్క్రైబ్ చేయండి"
      },
      note: "ఎచ్‌డి/4కే నాణ్యతకు మద్దతు ఉన్న పరికరం మరియు ఇంటర్నెట్ కనెక్షన్ అవసరం."
    },
    faq: {
      title: "తరచుగా అడిగే ప్రశ్నలు",
      needHelp: "సహాయం కావాలా?",
      whatIsNetflix: "నెట్‌ఫ్లిక్స్ అంటే ఏమిటి?",
      whatIsNetflix_desc: "నెట్‌ఫ్లిక్స్ ఒక స్ట్రీమింగ్ సేవ, ఇది అవార్డు గెలిచిన టీవీ షోలు, సినిమాలు, యానిమే, డాక్యుమెంటరీలు మరియు వేలాది ఇంటర్నెట్ కనెక్టెడ్ డివైస్‌లపై మరిన్ని అందిస్తుంది.",
      howMuch: "నెట్‌ఫ్లిక్స్ ఖర్చు ఎంత?",
      howMuch_desc: "మీ స్మార్ట్‌ఫోన్, టాబ్లెట్, స్మార్ట్ టీవీ, ల్యాప్‌టాప్ లేదా స్ట్రీమింగ్ డివైస్‌పై నెట్‌ఫ్లిక్స్ చూడండి, ఒక నిర్దిష్ట నెలవారీ ఫీజు కోసం. ప్లాన్‌లు ₹149 నుండి ₹649 వరకు ఒక నెలకు. అదనపు ఖర్చులు లేవు, కాంట్రాక్టులు లేవు.",
      where: "నేను ఎక్కడ చూడగలను?",
      where_desc: "ఎక్కడైనా, ఎప్పుడైనా, అన్‌లిమిటెడ్ డివైస్‌లపై చూడండి. మీ నెట్‌ఫ్లిక్స్ అకౌంట్‌తో సైన్ ఇన్ చేసి netflix.com పై మీ పర్సనల్ కంప్యూటర్‌లో లేదా నెట్‌ఫ్లిక్స్ యాప్ అందించే ఏదైనా ఇంటర్నెట్ కనెక్టెడ్ డివైస్‌పై తక్షణం చూడండి.",
      howCancel: "నేను ఎలా రద్దు చేయాలి?",
      howCancel_desc: "నెట్‌ఫ్లిక్స్ ఫ్లెక్సిబుల్. ఇబ్బంది కాంట్రాక్టులు లేవు, కమిట్‌మెంట్‌లు లేవు. మీరు రెండు క్లిక్‌లలో ఆన్‌లైన్‌లో మీ అకౌంట్‌ను సులభంగా రద్దు చేయవచ్చు.",
      whatWatch: "నెట్‌ఫ్లిక్స్‌పై నేను ఏమి చూడగలను?",
      whatWatch_desc: "మీకు సిఫార్సు చేసిన టీవీ షోలు మరియు సినిమాలు చూడండి, అవార్డు గెలిచిన నెట్‌ఫ్లిక్స్ ఒరిజినల్స్ మరియు మీ అన్ని ఇష్టమైన నెట్‌ఫ్లిక్స్ సిరీస్‌లు మరియు సినిమాలు ఉన్నాయి."
    },
    footer: {
      questions: "ప్రశ్నలు? 000-800-040-1843కు కాల్ చేయండి",
      faq: "సాధారణ ప్రశ్నలు",
      helpCentre: "సహాయ కేంద్రం",
      account: "అకౌంట్",
      mediaCentre: "మీడియా సెంటర్",
      investor: "నివేశకుల సంబంధాలు",
      jobs: "ఉద్యోగాలు",
      waysToWatch: "చూడటానికి మార్గాలు",
      terms: "ఉపయోగించే షరతులు",
      privacy: "గోప్యత",
      cookies: "కుకీ ప్రాధాన్యతలు",
      corporate: "కార్పొరేట్ సమాచారం",
      contactUs: "మాకు సంప్రదించండి",
      contact: "మాకు సంప్రదించండి"
    },
    signin: {
      title: "సైన్ ఇన్ - నెట్‌ఫ్లిక్స్",
      h1: "సైన్ ఇన్",
      btn: "సైన్ ఇన్",
      emailPlaceholder: "ఈమెయిల్ లేదా ఫోన్ నంబర్",
      passwordPlaceholder: "పాస్‌వర్డ్",
      forgot: "పాస్‌వర్డ్ మర్చిపోయారా?",
      new: "నెట్‌ఫ్లిక్స్ కి కొత్తది?",
      signup: "ఇప్పుడు సైనప్ చేయండి"
    }
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function getTranslation(key) {
  if (!translations[currentLang]) {
    return translations.en[key] || '';
  }
  const keys = key.split('.');
  let value = translations[currentLang];
  for (let k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return '';
    }
  }
  return value || '';
}

function applyTranslations() {
  // Update document title
  document.title = getTranslation('title') || translations.en.title;

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = getTranslation(el.dataset.i18n);
    el.textContent = text;
  });

  // Update placeholders
  const emailInput = document.querySelector('input[type="email"]');
  if (emailInput) {
    emailInput.placeholder = getTranslation('signin.emailPlaceholder') || getTranslation('hero.emailPlaceholder') || 'Email address';
  }

  const passwordInput = document.querySelector('input[type="password"]');
  if (passwordInput) {
    passwordInput.placeholder = getTranslation('signin.passwordPlaceholder') || 'Password';
  }

  localStorage.setItem('lang', currentLang);
}

function updateLanguageButtons() {
  const langButtons = document.querySelectorAll('.lang');
  const langName = languageNames[currentLang] || languageNames.en;
  langButtons.forEach(button => {
    const img = button.querySelector('img') || document.createElement('img');
    if (!img.src) {
      img.src = 'arrow.png';
      img.height = '50';
      img.width = '50';
      img.alt = 'Language';
    }
    button.innerHTML = `${langName} `;
    button.appendChild(img);
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  updateLanguageButtons();
  applyTranslations();

  // Add event listeners to language dropdown items (works for both header and footer)
  document.querySelectorAll('.lang-dropdown li').forEach(li => {
    li.addEventListener('click', function(e) {
      e.stopPropagation();
      currentLang = this.dataset.lang;
      updateLanguageButtons();
      applyTranslations();
      // Optionally hide dropdown by removing hover effect temporarily
      const dropdown = this.closest('.lang-dropdown');
      dropdown.style.opacity = '0';
      dropdown.style.visibility = 'hidden';
      setTimeout(() => {
        dropdown.style.opacity = '';
        dropdown.style.visibility = '';
      }, 100);
    });
  });

  // Click outside to hide dropdowns
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.lang-container')) {
      document.querySelectorAll('.lang-dropdown').forEach(dd => {
        dd.style.opacity = '0';
        dd.style.visibility = 'hidden';
      });
    }
  });
});
