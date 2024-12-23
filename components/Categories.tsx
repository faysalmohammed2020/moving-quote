// components/Categories.tsx

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { placeData } from "@/app/data/placeData";



const Categories = () => {
  return (
    <div className="container mx-auto mt-12 px-4">
    <h2 className="text-4xl font-bold text-center text-white mb-8">State Categories</h2>

    <Accordion type="single" collapsible className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {placeData.map((item) => (
        <AccordionItem key={item.id} value={`item-${item.id}`} className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
          <AccordionTrigger className="text-yellow-500 font-bold">{item.name}</AccordionTrigger>
          <AccordionContent className="text-white mt-2">
            <p>
              <strong>State ID:</strong> {item.id}
            </p>
            <p>
              <strong>Name:</strong> {item.name}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);
};

export default Categories;
