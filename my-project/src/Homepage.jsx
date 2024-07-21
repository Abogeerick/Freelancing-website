import React from "react";
import { Link } from "react-router-dom";


function Homepage (){
    return(
        <main className="container mx-auto p-4">
          {/* <Header /> */}
          <section className="hero bg-gray-200 p-8 text-center">
            <h1 className="text-4xl font-bold mb-4"> Welcome to FreelanceSite</h1>
            <p className="text-lg">Find the best freelancers or projects that match your skills.</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-950">Get Started</button>
          </section>
          <section className="features grid grid-cols-1 md:grid-cols-3 gap-8 my-8 ">
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
          <section className="testimonials bg-gray-100 p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg italic">"FreelanceSite has transformed the way I find work and manage my projects!" - Happy Freelancer</p>
          </section>
        </main>
    )
}

export default Homepage