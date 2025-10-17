import React from "react";

function Support() {
  return (
    <div>


      {/* Section - Split half screen */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12 items-center">
        {/* Left side - Paragraph */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Why Your Support Matters</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every donation you make directly impacts the lives of those in need.
            Together, we can provide education, healthcare, and opportunities to
            underprivileged communities. Your support ensures a brighter future
            and stronger society.  
          </p>
        </div>

        {/* Right side - Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">Get Involved</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Support content */}
      <div className="p-8 space-y-12">
        {/* Section 2 - Three columns */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <img
              src="/images/support1.png"
              alt="Education Support"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-600">
              Help us provide educational resources to underprivileged children.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <img
              src="/images/support2.png"
              alt="Healthcare Support"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
            <p className="text-gray-600">
              Support healthcare initiatives for those in need of medical aid.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <img
              src="/images/support3.png"
              alt="Community Development"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">
              Contribute towards building stronger and sustainable communities.
            </p>
          </div>
        </section>

        {/* Section 3 - Big call to action */}
        <section className="text-center bg-green-100 py-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Be the Change</h2>
          <p className="text-lg text-gray-700 mb-6">
            Every contribution, big or small, helps us move closer to our
            mission.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition">
            Donate Now
          </button>
        </section>
      </div>
    </div>
  );
}

export default Support;
