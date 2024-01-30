import React from "react";
import "./KiwiMall.css";

const KiwiMall = () => {
  return (
    <>
        <h1>Varidesk (Vari) Case Study </h1>
      <div className="row-kiwi-mall">
        <div className="column-kiwi-mall">
          <img src="ecommerce-shop-home.png" />
        </div>
        <div className="column-kiwi-mall">
          <img src="ecommerce-shop-details.png" />
        </div>
        <div className="column-kiwi-mall">
          <img src="ecommerce-shop-sign-in.png" />
        </div>
      </div>
      <div class="sidebar-kiwi-mall">
        <h3>Objective</h3>
        <p>
          KiwiMall caters to a diverse range of products, including appliances,
          clothing, and homeware. As the front-end manager and UX researcher,
          the goal was to ensure a user-friendly interface that not only
          showcased the variety of products but also focused on easibility,
          useability, and conversion elements essential for an Ecommerce
          website.
        </p>
        <h3>Technologies</h3>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Tailwind</li>
          <li>MongoDB</li>
         
        </ul>
      </div>
      <div className="main-text-area-kiwi-mall">
        <h2>Challenge & Results</h2>
        <p>
          The responsive front-end designed for KiwiMall encapsulated essential
          aspects of user experience: Easibility: The website provided a smooth
          and intuitive browsing experience, allowing users to effortlessly
          navigate through categories and products. Useability: The interface
          was designed with a focus on user interactions, ensuring that actions
          such as adding items to the cart, applying filters, and checking out
          were straightforward and efficient. Conversion Elements: Strategically
          placed call-to-action buttons, persuasive product descriptions, and an
          optimized checkout process were implemented to maximize conversion
          rates.
        </p>

        <p>
          Throughout the project, various technical skills were acquired and
          honed: React Hooks for Data Fetching: Leveraging React Hooks to fetch
          and manage data from MongoDB, ensuring real-time updates and a dynamic
          user experience. Tailwind CSS Mastery: Enhancing proficiency in
          Tailwind CSS for streamlined and efficient styling, leading to a
          cohesive and visually appealing interface. Responsive Development:
          Implementing responsive design principles to ensure a seamless
          experience across various devices and screen sizes, enhancing
          accessibility and user satisfaction. GitHub Collaboration: Learning
          effective collaboration within a team using GitHub, addressing and
          resolving merge conflicts, and maintaining version control for a
          smooth development process.
        </p>

        <p>
          Working on KiwiMall provided valuable insights into team dynamics,
          collaboration, and effective project management. GitHub was utilized
          to manage the codebase, handle collaboration seamlessly, and resolve
          any merge conflicts efficiently.
        </p>

        <p>
          KiwiMall stands as a testament to the successful application of
          technical skills and the implementation of user-centric design
          principles. The project not only enhanced the individual's technical
          expertise but also provided valuable insights into collaborative
          development practices and effective use of version control systems.
          Overall, KiwiMall serves as a comprehensive example of how the fusion
          of MERN stack technologies, Tailwind CSS, and user experience design
          can result in a high-quality Ecommerce platform.
        </p>

       
      </div>
    </>
  );
};

export default KiwiMall;
