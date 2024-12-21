const testimonials = [
    {
      name: 'John Doe',
      feedback:
        'Excellent service and great support! Their attention to detail and commitment to delivering on time is outstanding.',
    },
    {
      name: 'Jane Smith',
      feedback:
        'Reliable and professional logistics company. They’ve been a key partner in streamlining our operations.',
    },
    {
      name: 'Alex Johnson',
      feedback:
        'Truly exceptional! The team goes above and beyond to ensure customer satisfaction. Highly recommended.',
    },
  ];
  
  const TestimonialsSection = () => {
    return (
      <section className="py-16 bg-black text-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          What Our Clients Say
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-300 italic mb-6">"{testimonial.feedback}"</p>
              <p className="text-yellow-400 font-bold text-lg">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TestimonialsSection;
  