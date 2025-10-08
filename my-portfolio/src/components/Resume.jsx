import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Resume() {
  // Scroll reveal for sliding up
  function ScrollRevealSection({ children, delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
      if (inView) controls.start("visible");
    }, [controls, inView]);

    const variants = {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    };

    return (
      <motion.article
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, delay }}
        className="card p-6 rounded-lg shadow-lg"
      >
        {children}
      </motion.article>
    );
  }

  return (
    <section className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Skills (top) and Education (bottom) */}
        <div className="flex flex-col gap-8 md:col-span-1">
          <ScrollRevealSection delay={0}>
            <h3 className="card-title text-xl font-bold mb-4">Skills</h3>
            <ul className="space-y-2 text-left">
              <li>
                <strong>Programming Languages: </strong> JavaScript, Java, CSS, HTML, Python, SQL
              </li>
              <li>
                <strong>Libraries: </strong> React, Angular, jQuery, Next, Node, Spring Boot, MaterialUI, Bootstrap, Tailwind
              </li>
              <li>
                <strong>Tools & Platforms: </strong> Git, Wordpress, Jira, MySQL, Jest, JUnit, Mockito, Jasmine
              </li>
              <li>
                <strong>Soft Skills: </strong> User-Centered Design, Problem Solving, Cross-Team Communication
              </li>
            </ul>
          </ScrollRevealSection>

          <ScrollRevealSection delay={0.2}>
            <h3 className="card-title text-xl font-bold mb-4">Education & Certifications</h3>
            <ul className="space-y-2 text-left">
              <li>
                B.S. GIT - Full-Stack Web Development (Expected Graduation: 05/2026) <strong>Arizona State University</strong>
              </li>
              <li>Software Engineering <strong>Flatiron School</strong></li>
              <li>Responsive Web Design <strong>FreeCodeCamp.org</strong></li>
              <li>React Fundamentals <strong>Epic React</strong></li>
            </ul>
          </ScrollRevealSection>
        </div>
        <div className="md:col-span-2">
        <ScrollRevealSection delay={0.1}>
          <h3 className="card-title text-xl font-bold mb-4">Work</h3>
          <div className="text-left space-y-4">
            <section>
              <h4 className="font-semibold">Full-Stack Developer</h4>
              <h5 className="italic mb-2">Freelance</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Implementing full-stack web applications for clients using React, WordPress, and Java, tailored for industry specific needs, employing responsive design strategies to ensure accessibility across devices.</li>
                <li>Developing a robust dental analytics platform that consolidates data from existing management systems, online reviews, and messaging tools into a unified MySQL-backed dashboard.</li>
                <li>Building interactive KPI dashboards in Angular, enabling clients to monitor metrics like patient retention, appointment trends, and revenue-performance gaps.</li>
              </ul>
            </section>
            <section>
              <h4 className="font-semibold">Junior Software Developer</h4>
              <h5 className="italic mb-2">iGrafx</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Collaborated with stakeholders and QA teams and participated in Agile ceremonies (daily stand-ups, sprint planning, retrospectives) to define precise user stories, aligning technical deliverables with business priorities.</li>
                <li>Engineered a Visio-to-BPMN migration tool for the platform, mapping over 50 diagram types to BPMN standards, reducing manual rework by 30%.</li>
                <li>Designed user-facing antivirus components using React and Material-UI, resulting in a 25% decrease in support tickets related to file validation transparency.</li>
                <li>Wrote unit and integration tests with over 90% code coverage using JUnit, Mockito, and Jasmine, helping maintain product stability and high development velocity.</li>
              </ul>
            </section>
          </div>
        </ScrollRevealSection>
        </div>
      </div>
    </section>
  );
}
