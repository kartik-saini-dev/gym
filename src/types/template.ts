// ======= ICONS =======
export type WhyChooseUsIcon =
  | "HiUserGroup"
  | "HiBadgeCheck"
  | "HiLightningBolt"
  | "HiCurrencyDollar"
  | "HiSupport";

// ======= HERO =======
export type Hero = {
  title: string;
  subtitle: string;
  images: string[];
  callToActionText?: string;
  callToActionLink?: string;
};

// ======= ABOUT =======
export type Highlight = {
  label: string;
};

export type About = {
  title: string;
  subtitle: string;
  whatWeDo: string;
  whyChooseUs: string;
  ownerName: string;
  ownerPhoto: string;
  highlights: Highlight[];
  callToActionText?: string;
};

// ======= SERVICES =======
export type ServiceItem = {
  name: string;
  description: string;
  image: string;
  price?: string;
};

export type Services = {
  title: string;
  subtitle: string;
  items: ServiceItem[];
};

// ======= GALLERY =======
export type Gallery = {
  title: string;
  subtitle: string;
  images: string[];
};

// ======= TESTIMONIALS =======
export type TestimonialItem = {
  name: string;
  photo: string;
  rating: number;
  review: string;
};

export type Testimonials = {
  title: string;
  subtitle: string;
  items: TestimonialItem[];
};

// ======= WHY CHOOSE US =======
export type WhyChooseUsItem = {
  icon: WhyChooseUsIcon;
  title: string;
  description: string;
};

export type WhyChooseUs = {
  title: string;
  subtitle: string;
  items: WhyChooseUsItem[];
};

// ======= PRICING =======
export type PricingPlan = {
  title: string;
  price: string;
  features: string[];
};

export type Pricing = {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
};

// ======= CONTACT =======
export type ContactHours = {
  mondayToSaturday: string;
  sunday: string;
};

export type Contact = {
  title: string;
  subtitle: string;
  phone: string;
  whatsapp?: string;
  email: string;
  address: string;
  mapEmbed?: string;
  hours: ContactHours;
};

// ======= FOOTER =======
export type QuickLink = {
  label: string;
  href: string;
};

export type FooterContact = {
  address: string;
  phone: string;
  email: string;
  hours: string;
};

export type FooterSocial = {
  facebook?: string;
  instagram?: string;
  whatsapp?: string;
};

export type Footer = {
  title: string;
  description: string;
  contact: FooterContact;
  quickLinks: QuickLink[];
  social: FooterSocial;
};

// ======= FULL TEMPLATE DATA =======
export type TemplateData = {
  name: string;
  tagline: string;
  logo: string;
  hero: Hero;
  about: About;
  services: Services;
  gallery: Gallery;
  testimonials: Testimonials;
  whyChooseUs: WhyChooseUs;
  pricing: Pricing;
  contact: Contact;
  footer: Footer;
};
