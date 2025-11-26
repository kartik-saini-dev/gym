import { TemplateData } from "@/types/template";

export const templateData: TemplateData = {
  // ======= BASIC INFO =======
  name: "FitZone Gym",
  tagline: "Transform Your Body, Transform Your Life",
  logo: "/logo.png",

  // ======= HERO SECTION =======
  hero: {
    title: "Get Stronger • Fitter • Better",
    subtitle: "Join the best fitness community with certified trainers and modern equipment.",
    images: ["/gym1.jpg", "/gym2.jpg", "/gym3.jpg", "/gym4.jpg"],
    callToActionText: "Join Now",
    callToActionLink: "/contact",
  },

  // ======= ABOUT SECTION =======
  about: {
    title: "About FitZone",
    subtitle: "Your fitness journey starts here",
    whatWeDo:
      "We help you achieve your dream physique through personalized training programs, strength conditioning, and nutrition guidance.",
    whyChooseUs:
      "We provide world-class equipment, expert coaches, and a friendly environment to keep you motivated.",
    ownerName: "Rahul Verma",
    ownerPhoto: "/owner.jpg",
    highlights: [
      { label: "Certified Trainers" },
      { label: "Modern Equipment" },
      { label: "Personalized Programs" },
      { label: "24×7 Support" },
    ],
    callToActionText: "Start Training",
  },

  // ======= SERVICES SECTION =======
  services: {
    title: "Our Fitness Services",
    subtitle: "Choose from a variety of training programs",
    items: [
      {
        name: "Strength Training",
        description: "Build muscle mass and gain strength with professional guidance.",
        image: "/services/strength.jpg",
        price: "₹1500/month",
      },
      {
        name: "Weight Loss Program",
        description: "Scientifically designed workouts to burn fat effectively.",
        image: "/services/weightloss.jpg",
          price: "₹2000/month",
      },
      {
        name: "CrossFit Training",
        description: "High-intensity functional movements for total fitness.",
        image: "/services/crossfit.jpg",
        price: "₹2500/month",
      },
      {
        name: "Personal Trainer",
        description: "One-on-one training tailored to your goals.",
        image: "/services/personaltrainer.jpg",
        price: "₹5000/month",
      },
    ],
  },

  // ======= GALLERY SECTION =======
  gallery: {
    title: "Gym Gallery",
    subtitle: "A glimpse of our facility and fitness community",
    images: [
      "/gallery/gallery1.png",
      "/gallery/gallery2.jpg",
      "/gallery/gallery3.jpg",
      "/gallery/gallery4.jpg",
      "/gallery/gallery5.jpg",
      "/gallery/gallery6.jpg",
    ],
  },

  // ======= TESTIMONIALS SECTION =======
  testimonials: {
    title: "What Our Members Say",
    subtitle: "Real stories. Real transformation.",
    items: [
      {
        name: "Amit Sharma",
        photo: "/testimonials/person1.jpg",
        rating: 5,
        review:
          "Best gym in the area. Trainers are extremely supportive and helped me transform in 6 months!",
      },
      {
        name: "Priya Singh",
        photo: "/testimonials/person2.jpg",
        rating: 4,
        review:
          "Amazing atmosphere and modern equipment. I enjoy coming here every day!",
      },
    ],
  },

  // ======= WHY CHOOSE US SECTION =======
  whyChooseUs: {
    title: "Why Choose FitZone?",
    subtitle: "We bring everything you need for your fitness transformation",
    items: [
      {
        icon: "HiUserGroup",
        title: "Certified Trainers",
        description: "Train with experienced and certified fitness experts.",
      },
      {
        icon: "HiBadgeCheck",
        title: "Modern Equipment",
        description: "State-of-the-art gym machines and training tools.",
      },
      {
        icon: "HiLightningBolt",
        title: "High-Intensity Workouts",
        description: "Programs designed to boost your endurance and stamina.",
      },
      {
        icon: "HiCurrencyDollar",
        title: "Affordable Memberships",
        description: "Flexible and budget-friendly gym plans.",
      },
    ],
  },

  // ======= PRICING SECTION =======
  pricing: {
    title: "Membership Plans",
    subtitle: "Choose the plan that suits your fitness goals",
    plans: [
      {
        title: "Basic Plan",
        price: "₹999/month",
        features: ["Gym Access", "Locker Facility", "Open Gym"],
      },
      {
        title: "Standard Plan",
        price: "₹1999/month",
        features: ["Gym Access", "Trainer Support", "Diet Plan", "Group Classes"],
      },
      {
        title: "Premium Plan",
        price: "₹2999/month",
        features: [
          "Everything in Standard",
          "Personal Trainer",
          "Progress Tracking",
          "Exclusive Zone Access",
        ],
      },
    ],
  },

  // ======= CONTACT SECTION =======
  contact: {
    title: "Join the Fitness Revolution",
    subtitle: "Contact us for memberships and inquiries",
    phone: "+91 9876543210",
    whatsapp: "9876543210",
    email: "contact@fitzone.com",
    address: "Sector 22, Chandigarh, India",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!...",
    hours: {
      mondayToSaturday: "5:00 AM - 10:00 PM",
      sunday: "6:00 AM - 8:00 PM",
    },
  },

  // ======= FOOTER =======
  footer: {
    title: "FitZone Gym",
    description: "Transform your fitness journey with the best trainers and equipment.",

    contact: {
      address: "Sector 22, Chandigarh, India",
      phone: "+91 9876543210",
      email: "contact@fitzone.com",
      hours: "Mon–Sun: 5 AM – 10 PM",
    },

    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],

    social: {
      facebook: "https://facebook.com/",
      instagram: "https://instagram.com/",
      whatsapp: "https://wa.me/9876543210",
    },
  },
};
