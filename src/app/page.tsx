// import Button from "@/components/ui/Button";  // Update path if needed

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
//       <main className="p-10">
//         <Button variant="primary" size="md">
//           Click Me
//         </Button>
//       </main>
//     </div>
//   );
// }
import Navbar from "@/components/ui/Navbar";
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About'; // import About section
import Services from '@/components/sections/Services';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Pricing from '@/components/sections/PricingPlans';
import Contact from '@/components/sections/ContactForm';
import Footer from "@/components/ui/Footer";
import { templateData } from '@/data/template';


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="pt-16">
        <Hero hero={templateData.hero}/>
        <About about ={templateData.about}/> 
        <Services services = {templateData.services}/>
        <Gallery  gallery={templateData.gallery} />
        <Testimonials testimonials={templateData.testimonials}/>
        <WhyChooseUs  data = {templateData.whyChooseUs}/>
        <Pricing pricing={templateData.pricing}/>
        <Contact contact={templateData.contact} />
        <Footer footer ={templateData.footer}/>
        {/* other sections like Services, Gallery, Contact */}
      </main>
    </div>
  );
}
