import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionSection() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1" className="space-y-8 mt-4">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          What services does 404 Studio offer?
        </AccordionTrigger>
        <AccordionContent>
          <p>
            We specialize in creating stunning digital experiences including
            custom websites, interactive dashboards, web applications, and UI/UX
            design. Our team brings creative vision and technical expertise to
            every project.
          </p>
          <p>
            Whether you need a modern landing page, a complex admin dashboard,
            or a full-scale web application, we craft solutions tailored to your
            specific needs and brand identity.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          How long does a typical project take?
        </AccordionTrigger>
        <AccordionContent>
          <p>
            Project timelines vary based on scope and complexity. A simple
            landing page typically takes 1-2 weeks, while a custom dashboard or
            web application can take 4-8 weeks or more.
          </p>
          <p>
            We provide detailed timeline estimates during our initial
            consultation and keep you updated throughout the development process
            with regular milestones and demos.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          What is your design and development process?
        </AccordionTrigger>
        <AccordionContent>
          <p>
            We follow a collaborative approach starting with discovery and
            research, followed by wireframing and design mockups. Once approved,
            we move into development with iterative reviews to ensure the final
            product exceeds expectations.
          </p>
          <p>
            Throughout the process, you'll have full visibility with regular
            check-ins, design previews, and staging environments to review
            progress before launch.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>
          Do you provide ongoing support and maintenance?
        </AccordionTrigger>
        <AccordionContent>
          <p>
            Yes! We offer flexible maintenance packages to keep your website or
            dashboard running smoothly. This includes updates, bug fixes,
            performance optimization, and feature enhancements as your needs
            evolve.
          </p>
          <p>
            We also provide training and documentation so your team can manage
            day-to-day content updates independently if preferred.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>What technologies do you work with?</AccordionTrigger>
        <AccordionContent>
          <p>
            We leverage modern, cutting-edge technologies including React,
            Next.js, Node.js, and various databases and APIs. Our tech stack is
            chosen based on your project requirements to ensure optimal
            performance and scalability.
          </p>
          <p>
            We prioritize creating responsive, fast-loading, and SEO-friendly
            solutions that work seamlessly across all devices and browsers.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>
          How do you handle pricing and payments?
        </AccordionTrigger>
        <AccordionContent>
          <p>
            We provide transparent, project-based pricing with no hidden fees.
            After our initial consultation, you'll receive a detailed proposal
            outlining scope, timeline, and costs.
          </p>
          <p>
            Payment is typically structured in milestones: 50% upfront to begin
            work, 25% at the midpoint review, and 25% upon final delivery. We
            accept various payment methods for your convenience.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <AccordionTrigger>
          Can you help with branding and design strategy?
        </AccordionTrigger>
        <AccordionContent>
          <p>
            Absolutely! Our creative team can help develop your brand identity,
            create design systems, and craft a cohesive visual strategy that
            resonates with your target audience.
          </p>
          <p>
            From color palettes and typography to logo design and brand
            guidelines, we ensure every element of your digital presence tells a
            consistent and compelling story.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-8">
        <AccordionTrigger>
          How do I get started with 404 Studio?
        </AccordionTrigger>
        <AccordionContent>
          <p>
            Getting started is easy! Simply reach out through our contact form
            or email us with details about your project. We'll schedule a free
            consultation to discuss your vision, goals, and requirements.
          </p>
          <p>
            From there, we'll provide a tailored proposal and roadmap. Once
            approved, we'll kick off your project and begin bringing your ideas
            to life!
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
