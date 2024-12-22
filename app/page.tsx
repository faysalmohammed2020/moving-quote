import BlogSection from "@/components/Home/blog";
import HeroSection from "@/components/Home/Hero";
import ServiceSection from "@/components/Home/service";
import SubscriptionSection from "@/components/Home/subscription";
import TestimonialsSection from "@/components/Home/testimonials";
import VideoSection from "@/components/Home/video";



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
