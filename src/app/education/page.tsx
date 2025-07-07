'use client'

export default function EducationPage() {
  return (
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Education</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">TU Berlin</h2>
          <p>Master of Science in Scientific Computing</p>
          <p className="text-sm mt-1">
            Courses in numerical mathematics machine learning and optimization
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">BRAC University Dhaka</h2>
          <p>Bachelor of Science in Mathematics</p>
          <p className="text-sm mt-1">
            Completed in Bangladesh with focus on logic analysis and applied mathematics
          </p>
        </div>
      </div>
  )
}
