import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-[#f7fafd] py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4 lg:px-8">
        {/* Left Section: Headline & CTA */}
        <div className="flex-1">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full">
              AI-Powered HR Analytics
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Predict Employee <span className="text-blue-600">Churn</span> Before
            It Happens
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-xl">
            Leverage advanced machine learning to identify at-risk employees and
            take proactive measures to improve retention rates across your
            organization.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 cursor-pointer py-3 rounded-lg shadow transition flex items-center gap-2">
              Get Started
              <span className="ml-1">&#8594;</span>
            </button>
          </div>
        </div>

        {/* Right Section: Churn Risk Dashboard */}
        <div className="flex-1 w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative">
            <span className="absolute top-4 right-6 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">
              3 High Risk
            </span>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Churn Risk Dashboard
            </h2>
            {/* Risk Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <div className="bg-green-50 rounded-lg p-4 flex flex-col items-center">
                <span className="text-3xl font-bold text-green-600">127</span>
                <span className="text-sm text-green-700 font-semibold">
                  Low Risk
                </span>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 flex flex-col items-center">
                <span className="text-3xl font-bold text-yellow-600">23</span>
                <span className="text-sm text-yellow-700 font-semibold">
                  Medium Risk
                </span>
              </div>
              <div className="bg-red-50 rounded-lg p-4 flex flex-col items-center">
                <span className="text-3xl font-bold text-red-600">8</span>
                <span className="text-sm text-red-700 font-semibold">
                  High Risk
                </span>
              </div>
            </div>
            {/* High Risk Employees */}
            <div className="flex flex-col gap-3">
              <div className="bg-red-50 rounded-xl flex items-center justify-between p-4 border border-red-100">
                <div className="flex items-center gap-3">
                  <span className="bg-red-400 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    JS
                  </span>
                  <div>
                    <div className="text-base font-semibold text-gray-900">
                      Nirmal Munasinghe
                    </div>
                    <div className="text-sm text-gray-500">
                      Senior Developer
                    </div>
                  </div>
                </div>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  94% Risk
                </span>
              </div>
              <div className="bg-yellow-50 rounded-xl flex items-center justify-between p-4 border border-yellow-100">
                <div className="flex items-center gap-3">
                  <span className="bg-yellow-400 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    AD
                  </span>
                  <div>
                    <div className="text-base font-semibold text-gray-900">
                      Shanuli Perera
                    </div>
                    <div className="text-sm text-gray-500">Product Manager</div>
                  </div>
                </div>
                <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  67% Risk
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
