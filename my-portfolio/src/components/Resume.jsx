
export default function Resume() {
  return (
      <section>
        <article className="card bg-[var(--mustard)] w-96">
          <h3 className="card-title">Skills</h3>
          <ul className="card-body text-left">
            <li><strong>Programming Languages: </strong> JavaScript, Java, CSS, HTML, Python, SQL </li>
          <li><strong>Libraries: </strong> React, Angular, jQuery, Next, Node, Spring Boot, MaterialUI, Bootstrap, Tailwind </li>
          <li><strong>Tools & Platforms: </strong> Git, Wordpress, Jira, MySQL, Jest, JUnit, Mockito, Jasmine </li>
          <li><strong>Soft Skills: </strong> User-Centered Design, Problem Solving, Cross-Team Communication </li>
          </ul>
        </article>
        <article className="card bg-[var(--olive)] w-96">
          <h3 className="card-title">Work</h3>
          <div className="card-body text-left">
              <h4> Full-Stack Developer </h4>
              <h5> Freelance </h5>
              <ul> 
                  <li> Implementing full-stack web applications for clients using React, WordPress, and Java, tailored for industry specific needs, employing responsive design strategies to ensure accessibility across devices. </li>
                  <li> Developing a robust dental analytics platform that consolidates data from existing management systems, online reviews, and messaging tools into a unified MySQL-backed dashboard. </li>
                  <li> Building interactive KPI dashboards in Angular, enabling clients to monitor metrics like patient retention, appointment trends, and revenue-performance gaps. </li>
              </ul>
              <h4> Junior Software Developer </h4>
              <h5> iGrafx </h5>
                  <h4> Full-Stack Developer </h4>
              <h5> Freelance </h5>
              <ul> 
                  <li> Collaborated with stakeholders and QA teams and participated in Agile ceremonies (daily stand-ups, sprint planning, retrospectives) to define precise user stories, aligning technical deliverables with business priorities. </li>
                  <li> Engineered a Visio-to-BPMN migration tool for the platform, mapping over 50 diagram types to BPMN standards, reducing manual rework by 30%.</li>
                  <li> Designed user-facing antivirus components using React and Material-UI, resulting in a 25% decrease in support tickets related to file validation transparency.</li>
                  <li> Wrote unit and integration tests with over 90% code coverage using JUnit, Mockito, and Jasmine, helping maintain product stability and high development velocity.</li>
              </ul>
          </div>
          </article>
          <article className="card bg-[var(--terra)] w-96">
          <h3 className="card-title">Education & Certifications</h3>
          <ul className="card-body text-left">
                <li>B.S. GIT - Full-Stack Web Development (Expected Graduation: 05/2026) <strong>Arizona State University</strong></li>
                <li>Software Engineering <strong> Flatiron School </strong> </li>
                <li>Responsive Web Design <strong> FreeCodeCamp.org</strong></li>
                <li>React Fundamentals <strong> Epic React </strong></li>
              </ul>
        </article>
      </section>
  );
}
