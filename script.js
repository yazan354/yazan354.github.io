
const languageToggle = document.getElementById("language-toggle");
const themeToggle = document.getElementById("theme-toggle");

const translations = {
  en: {
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    heroEyebrow: "CYBERSECURITY • GRC • INFORMATION SECURITY",
    heroGreeting: "Hi, I'm",
    heroRole: "Cybersecurity Graduate",
    heroDescription:
      "A cybersecurity graduate passionate about information security, governance, risk management, and compliance. I am eager to develop my skills and gain practical experience in the cybersecurity field.",
    viewProjects: "View My Projects",
    profileCaption: "Cybersecurity Graduate",
    openToWork: "Open to opportunities",
    aboutEyebrow: "GET TO KNOW ME",
    aboutTitle: "About Me",
    aboutText:
      "I am a recent cybersecurity graduate interested in information security, governance, risk, and compliance. Through my academic journey and graduation project, I have developed an interest in understanding security risks, improving security practices, and protecting organizational information. I am motivated to continue learning, gain hands-on experience, and contribute to a cybersecurity team.",
    skillsEyebrow: "MY KNOWLEDGE",
    skillsTitle: "Skills & Interests",
    skill1Title: "GRC Fundamentals",
    skill1Text: "Governance, risk, compliance, and security policies.",
    skill2Title: "Risk Management",
    skill2Text: "Understanding risk assessment and security controls.",
    skill3Title: "Information Security",
    skill3Text: "Security principles and protection of information assets.",
    skill4Title: "Continuous Learning",
    skill4Text: "Building practical knowledge through study and projects.",
    projectsEyebrow: "SELECTED WORK",
    projectsTitle: "Featured Project",
    graduationProject: "GRADUATION PROJECT",
    projectDescription:
      "My graduation project focused on a Governance, Risk, and Compliance platform. It reflects my interest in structured risk management, security governance, and helping organizations manage compliance in an organized way.",
    viewGithub: "Explore my GitHub",
    projectNote: "Visit my GitHub for available project code and details.",
    goalsEyebrow: "MY NEXT STEP",
    goalsTitle: "Career Goals",
    goalsText:
      "I am seeking entry-level opportunities and internships in cybersecurity, GRC, and information security. I want to strengthen my practical skills, learn from experienced professionals, and contribute to meaningful security projects.",
    contactEyebrow: "LET'S CONNECT",
    contactTitle: "Contact Me",
    contactDescription:
      "Feel free to connect with me about cybersecurity opportunities, projects, or professional networking.",
    emailLabel: "Email",
    footerText: "Cybersecurity, curiosity, and continuous learning."
  },

  ar: {
    navAbout: "نبذة عني",
    navSkills: "المهارات",
    navProjects: "المشاريع",
    navContact: "تواصل معي",
    heroEyebrow: "الأمن السيبراني • الحوكمة والمخاطر والامتثال",
    heroGreeting: "مرحباً، أنا",
    heroRole: "خريج أمن سيبراني",
    heroDescription:
      "خريج أمن سيبراني مهتم بأمن المعلومات والحوكمة وإدارة المخاطر والامتثال. أسعى إلى تطوير مهاراتي واكتساب الخبرة العملية في مجال الأمن السيبراني.",
    viewProjects: "استعرض مشاريعي",
    profileCaption: "خريج أمن سيبراني",
    openToWork: "متاح للفرص المهنية",
    aboutEyebrow: "تعرّف عليّ",
    aboutTitle: "نبذة عني",
    aboutText:
      "أنا خريج حديث في الأمن السيبراني ومهتم بأمن المعلومات والحوكمة والمخاطر والامتثال. خلال دراستي ومشروع تخرجي، طوّرت اهتماماً بفهم المخاطر الأمنية وتحسين الممارسات الأمنية وحماية معلومات المؤسسات. أتطلع إلى مواصلة التعلم واكتساب الخبرة العملية والمساهمة ضمن فريق متخصص بالأمن السيبراني.",
    skillsEyebrow: "معارفي",
    skillsTitle: "المهارات والاهتمامات",
    skill1Title: "أساسيات GRC",
    skill1Text: "الحوكمة والمخاطر والامتثال والسياسات الأمنية.",
    skill2Title: "إدارة المخاطر",
    skill2Text: "فهم تقييم المخاطر والضوابط الأمنية.",
    skill3Title: "أمن المعلومات",
    skill3Text: "مبادئ الأمن وحماية أصول المعلومات.",
    skill4Title: "التعلم المستمر",
    skill4Text: "بناء المعرفة العملية من خلال الدراسة والمشاريع.",
    projectsEyebrow: "أعمال مختارة",
    projectsTitle: "المشروع المميز",
    graduationProject: "مشروع التخرج",
    projectDescription:
      "ركز مشروع تخرجي على منصة للحوكمة والمخاطر والامتثال. ويعكس اهتمامي بإدارة المخاطر بشكل منظم وحوكمة الأمن ومساعدة المؤسسات على إدارة متطلبات الامتثال.",
    viewGithub: "استكشف حساب GitHub",
    projectNote: "يمكنك زيارة حسابي على GitHub للاطلاع على الشيفرة والتفاصيل المتاحة.",
    goalsEyebrow: "خطوتي القادمة",
    goalsTitle: "أهدافي المهنية",
    goalsText:
      "أبحث عن فرص للمبتدئين وتدريب عملي في الأمن السيبراني والحوكمة والمخاطر والامتثال وأمن المعلومات. أطمح إلى تعزيز مهاراتي العملية والتعلم من أصحاب الخبرة والمساهمة في مشاريع أمنية مفيدة.",
    contactEyebrow: "لنتواصل",
    contactTitle: "تواصل معي",
    contactDescription:
      "يسعدني التواصل بشأن فرص الأمن السيبراني أو المشاريع أو بناء العلاقات المهنية.",
    emailLabel: "البريد الإلكتروني",
    footerText: "الأمن السيبراني والفضول والتعلم المستمر."
  }
};

let currentLanguage = "en";

function setLanguage(language) {
  currentLanguage = language;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.dir = language === "ar" ? "rtl" : "ltr";

  languageToggle.textContent = language === "en" ? "عربي" : "English";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translatedText = translations[language][key];

    if (translatedText) {
      element.textContent = translatedText;
    }
  });
}

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "ar" : "en");
});

function setTheme(isLight) {
  document.body.classList.toggle("light-theme", isLight);
  themeToggle.textContent = isLight ? "☾" : "☀";

  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
}

themeToggle.addEventListener("click", () => {
  const isCurrentlyLight = document.body.classList.contains("light-theme");
  setTheme(!isCurrentlyLight);
});

document.getElementById("current-year").textContent =
  new Date().getFullYear();

setLanguage("en");
setTheme(false);





const messageForm = document.getElementById("message-form");
const formStatus = document.getElementById("form-status");

if (messageForm && formStatus) {
  messageForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const button = messageForm.querySelector(
      'button[type="submit"]'
    );

    button.disabled = true;
    button.textContent = "Sending...";
    formStatus.hidden = true;

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/yazankalbouneh19@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            Object.fromEntries(new FormData(messageForm))
          )
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || result.error ||
          `Request failed (${response.status})`
        );
      }

      formStatus.textContent =
        "Thank you! Your message has been sent successfully.";
      formStatus.style.color = "var(--accent)";
      formStatus.hidden = false;

      messageForm.reset();

    } catch (error) {
      console.error("Contact form error:", error);

      formStatus.textContent =
        "Message failed: " + error.message;
      formStatus.style.color = "#ff6b6b";
      formStatus.hidden = false;

    } finally {
      button.disabled = false;
      button.textContent = "Send Message";
    }
  });
}

