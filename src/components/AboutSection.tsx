import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { MapPin, Phone, Mail } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading title="About Me" subtitle="A glimpse into who I am" />
      <AnimatedSection>
        <div className="glass rounded-2xl p-8 md:p-12 hover-glow">
          <p className="text-foreground/90 text-lg leading-relaxed mb-8">
            I’m Faiyaz, a Full Stack Developer specializing in the MERN stack
            <span className="text-primary font-semibold">
              {" "}
              (React, Node.js, MongoDB){" "}
            </span>
            . I build scalable, production-ready applications with a strong
            focus on clean architecture, performance, and user experience.
            Currently working as an
            <span className="text-primary font-semibold">
              {" "}
              Associate Software Engineer{" "}
            </span>
            . I develop end-to-end systems — from responsive frontend interfaces
            to optimized backend APIs. I’ve handled complex database migrations,
            built modular backend architectures, and integrated AI-powered
            features into real-world applications. I enjoy solving structural
            problems, writing reusable code, and building products that scale.
          </p>
          {/* <p className="text-foreground/90 text-lg leading-relaxed mb-8">
            Full Stack Developer with experience in MERN stack development,
            currently working as
            <span className="text-primary font-semibold">
              {" "}
              Associate Software Engineer{" "}
            </span>
            at Indus Net Technologies. Proven expertise in ReactJS, Node.js,
            database optimization, and API development. Passionate about
            building scalable web applications with focus on performance and
            user experience. Strong fundamentals in OOPS and software design
            patterns.
          </p> */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" /> Kolkata, WB
            </span>
            <span className="flex items-center gap-2">
              <Phone size={16} className="text-primary" /> 9007045010
            </span>
            <span className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />{" "}
              smghulam.ghausfaiyaz19@gmail.com
            </span>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
