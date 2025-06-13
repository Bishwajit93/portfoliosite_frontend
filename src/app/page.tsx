'use client'
import Layout from '@/components/Layout'

export default function HomePage() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-6 p-4">
        <h1 className="text-4xl font-bold">Hi I am Bishwajit Karmaker</h1>
        <p className="text-gray-700">
          I am a masters student in Scientific Computing based in Berlin. My focus is on full stack development and scientific applications.
        </p>
        <p className="text-gray-600">
          My main tools are Django PostgreSQL and Next JS. I enjoy creating projects that solve real world problems and improve user experience. in my off time I do programming.
        </p>
        <p className="text-gray-600">
          I moved to Germany from Bangladesh in 2018. My background in mathematics supports my logical thinking and interest in technology.
        </p>
        <p className="text-gray-600">
          Please explore my projects and experience or get in touch through the contact page. 
        </p>
      </div>
    </Layout>
  )
}
