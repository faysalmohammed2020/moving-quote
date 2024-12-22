const HeroSection = () => {
    return (
      <section className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/image/truck.png)' }}>
        <div className="bg-black bg-opacity-50 text-white text-center py-60">
          <h1 className="text-4xl font-bold">Where Efficiency Meets Excellence</h1>
          <p className="mt-4">Your Gateway to Seamless Logistics</p>
          <button className="mt-6 bg-[#F9AC1E] px-6 py-2 rounded">Get Free Quotes</button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;