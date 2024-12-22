// import Image from "next/image";

// const blogs = [
//     {
//       title: 'Freight Transport',
//       description:
//         'Our Freight Transport services provide reliable and efficient solutions for moving goods across regions. With a fleet of modern vehicles and experienced drivers, we ensure timely deliveries and secure handling of your cargo. Whether it’s small parcels or large shipments, our team is equipped to manage diverse logistics requirements with precision and care.',
//       image: '/image/truck.png', // Replace with the actual path to your image
//     },
//     {
//       title: 'Warehousing',
//       description:
//         'Our state-of-the-art Warehousing facilities offer secure and scalable storage solutions tailored to your business needs. With climate-controlled environments, real-time inventory tracking, and easy access, we ensure your goods are always in perfect condition and ready for distribution. Let us handle your storage requirements with the utmost efficiency.',
//       image: '/image/truck.jpg', // Replace with the actual path to your image
//     },
//     {
//       title: 'Supply Chain Solutions',
//       description:
//         'Streamline your operations with our comprehensive Supply Chain Solutions. From procurement to distribution, we provide end-to-end services that enhance efficiency and reduce costs. Our experts leverage cutting-edge technology to optimize logistics, ensuring a seamless supply chain for your business growth.',
//       image: '/image/truck.png', // Replace with the actual path to your image
//     },

//     {
//         title: 'Freight Transport',
//         description:
//           'Our Freight Transport services provide reliable and efficient solutions for moving goods across regions. With a fleet of modern vehicles and experienced drivers, we ensure timely deliveries and secure handling of your cargo. Whether it’s small parcels or large shipments, our team is equipped to manage diverse logistics requirements with precision and care.',
//         image: '/image/truck.png', // Replace with the actual path to your image
//       },
//       {
//         title: 'Warehousing',
//         description:
//           'Our state-of-the-art Warehousing facilities offer secure and scalable storage solutions tailored to your business needs. With climate-controlled environments, real-time inventory tracking, and easy access, we ensure your goods are always in perfect condition and ready for distribution. Let us handle your storage requirements with the utmost efficiency.',
//         image: '/image/truck.jpg', // Replace with the actual path to your image
//       },
//       {
//         title: 'Supply Chain Solutions',
//         description:
//           'Streamline your operations with our comprehensive Supply Chain Solutions. From procurement to distribution, we provide end-to-end services that enhance efficiency and reduce costs. Our experts leverage cutting-edge technology to optimize logistics, ensuring a seamless supply chain for your business growth.',
//         image: '/image/truck.png', // Replace with the actual path to your image
//       },
//   ];
  
//   const BlogSection = () => {
//     return (
//       <section className="py-16 bg-white">
//         <h2 className="text-3xl font-bold text-center mb-10">Blogs</h2>
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//           {blogs.map((blog, index) => (
//             <div key={index} className="border p-6 text-center shadow rounded">
//               <Image
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full h-40 object-cover rounded mb-4"
//                 width={500}
//                 height={500}
//               />
//               <h3 className="text-xl font-bold mb-4">{blog.title}</h3>
//               <p className="text-gray-700">{blog.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   };
  
//   export default BlogSection;


import Image from 'next/image';

const blogs = [
  {
    title: 'Freight Transport',
    description:
      'Our Freight Transport services provide reliable and efficient solutions for moving goods across regions. With a fleet of modern vehicles and experienced drivers, we ensure timely deliveries and secure handling of your cargo. Whether it’s small parcels or large shipments, our team is equipped to manage diverse logistics requirements with precision and care.',
    image: '/image/truck.png',
  },
  {
    title: 'Warehousing',
    description:
      'Our state-of-the-art Warehousing facilities offer secure and scalable storage solutions tailored to your business needs. With climate-controlled environments, real-time inventory tracking, and easy access, we ensure your goods are always in perfect condition and ready for distribution. Let us handle your storage requirements with the utmost efficiency.',
    image: '/image/truck.png',
  },
  {
    title: 'Supply Chain Solutions',
    description:
      'Streamline your operations with our comprehensive Supply Chain Solutions. From procurement to distribution, we provide end-to-end services that enhance efficiency and reduce costs. Our experts leverage cutting-edge technology to optimize logistics, ensuring a seamless supply chain for your business growth.',
    image: '/image/truck.png',
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Blogs</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border border-gray-700 bg-gray-900 p-6 text-center shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
              width={500}
              height={500}
            />
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">{blog.title}</h3>
            <p className="text-gray-300 mb-6">{blog.description.slice(0, 100)}...</p>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
