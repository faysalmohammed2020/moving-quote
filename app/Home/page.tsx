import BlogSection from "@/components/blog";
import HeroSection from "@/components/Hero";
import MovingCalculator from "@/components/QuoteForm";
import ScrollForm from "@/components/ScrollingForm";
import ServiceSection from "@/components/service";
import SubscriptionSection from "@/components/subscription";
import TestimonialsSection from "@/components/testimonials";
import VideoSection from "@/components/video";




const page = () => {
  return (
    <>
    
    <HeroSection/>
    <ServiceSection/>

     <BlogSection/>
     <TestimonialsSection/>
     <VideoSection/>
     <SubscriptionSection/>
      
     
    </>
  );
};

export default page;
