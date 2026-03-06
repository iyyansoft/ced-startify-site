// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import {

//   TypographyH4,
//   TypographyP,
// } from "@/components/ui/typography";

// import { faqs } from "@/data";

// export default function FAQSection() {
//   return (
//     <section id="faqs" className="py-8 px-8 lg:py-20">
//       <div className="container mx-auto">
      

//         <div className="mx-auto lg:max-w-screen-lg lg:px-20">
//           <Accordion type="single" collapsible>
//             {faqs.map((faq, index) => (
//               <AccordionItem value={`item-${index}`}>
//                 <AccordionTrigger>
//                   <TypographyH4 className="font-normal tracking-normal text-lg">
//                     {faq.question}
//                   </TypographyH4>
//                 </AccordionTrigger>
//                 <AccordionContent>
//                   <TypographyP>{faq.answer}</TypographyP>
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>
//       </div>
//     </section>
//   );
// }
