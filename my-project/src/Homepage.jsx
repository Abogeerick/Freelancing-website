import React from "react";
import Header from "./Header";

function Homepage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <section className="hero bg-gray-200 p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to FreelanceSite</h1>
          <p className="text-lg">Find the best freelancers or projects that match your skills.</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Get Started</button>
        </section>
        
        <section className="project-types my-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Types of Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-6 shadow rounded">
              <h3 className="text-2xl font-bold mb-2">Fixed Project</h3>
              <p>Using the Milestone Payment System to release fixed amounts of money.</p>
            </div>
            <div className="bg-white p-6 shadow rounded">
              <h3 className="text-2xl font-bold mb-2">Hourly Project</h3>
              <p>Have an hourly rate that is regularly paid through invoices.</p>
            </div>
            <div className="bg-white p-6 shadow rounded">
              <h3 className="text-2xl font-bold mb-2">HireMe Project</h3>
              <p>Started by the employer hiring a specific freelancer through the HireMe Program.</p>
            </div>
            <div className="bg-white p-6 shadow rounded">
              <h3 className="text-2xl font-bold mb-2">Local Jobs</h3>
              <p>Projects focused on local work with a fixed location.</p>
            </div>
          </div>
        </section>
        
        <section className="features grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
          <div className="feature bg-white p-6 shadow rounded">
            <h2 className="text-2xl font-bold mb-2">Create Projects</h2>
            <p>Post your project and find skilled freelancers to get the job done.</p>
          </div>
          <div className="feature bg-white p-6 shadow rounded">
            <h2 className="text-2xl font-bold mb-2">Bid on Projects</h2>
            <p>Browse projects and place your bids to secure work.</p>
          </div>
          <div className="feature bg-white p-6 shadow rounded">
            <h2 className="text-2xl font-bold mb-2">Manage Projects</h2>
            <p>Keep track of your projects and milestones effortlessly.</p>
          </div>
        </section>
        
        <section className="steps-to-create bg-gray-100 p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">How to Create a Project</h2>
          <ol className="list-decimal list-inside">
            <li><strong>Title:</strong> A name for the project.</li>
            <li><strong>Description:</strong> Details and steps to complete the project.</li>
            <li><strong>Skills:</strong> Define the required skills for the project.</li>
            <li><strong>How to Pay:</strong> Choose between fixed amount or hourly rate.</li>
            <li><strong>Budget:</strong> Estimate the budget for the project.</li>
            <li><strong>Upgrades (optional):</strong> Additional paid features to enhance the experience.</li>
          </ol>
        </section>
        
        <section className="testimonials bg-gray-100 p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg italic">"FreelanceSite has transformed the way I find work and manage my projects!" - Happy Freelancer</p>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 FreelanceSite. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Homepage;
