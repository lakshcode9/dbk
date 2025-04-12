import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Building2, ChevronDown, ChevronUp, Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface JobPosting {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const jobPostings: JobPosting[] = [
  // Travel & Tours
  {
    id: 1,
    title: "Senior Travel Consultant",
    department: "Travel & Tours",
    location: "Himachal Pradesh",
    type: "Full-time",
    experience: "3-5 years",
    description: "We're seeking an experienced travel consultant to join our growing team. The ideal candidate will have extensive knowledge of domestic and international travel planning.",
    requirements: [
      "Bachelor's degree in Tourism or related field",
      "3-5 years experience in travel consulting",
      "Strong knowledge of travel booking systems",
      "Excellent communication and customer service skills",
      "Fluency in English and Hindi"
    ],
    responsibilities: [
      "Design and customize travel packages for clients",
      "Manage client relationships and handle inquiries",
      "Coordinate with travel partners and vendors",
      "Ensure customer satisfaction throughout the travel experience",
      "Stay updated with travel trends and destinations"
    ]
  },
  // Construction
  {
    id: 2,
    title: "Project Manager - Construction",
    department: "Construction",
    location: "Himachal Pradesh",
    type: "Full-time",
    experience: "5-8 years",
    description: "Looking for an experienced construction project manager to oversee multiple construction projects across the region.",
    requirements: [
      "Bachelor's degree in Civil Engineering or Construction Management",
      "5-8 years of construction project management experience",
      "PMP certification preferred",
      "Strong knowledge of construction methods and regulations",
      "Experience with project management software"
    ],
    responsibilities: [
      "Oversee all aspects of construction projects",
      "Manage project budgets and timelines",
      "Coordinate with contractors and suppliers",
      "Ensure compliance with safety regulations",
      "Report project progress to stakeholders"
    ]
  },
  // Research & Development
  {
    id: 3,
    title: "Research Analyst",
    department: "Research & Development",
    location: "Himachal Pradesh",
    type: "Full-time",
    experience: "2-4 years",
    description: "Seeking a detail-oriented research analyst to conduct market research and analysis across various industries.",
    requirements: [
      "Master's degree in Business Analytics, Economics, or related field",
      "2-4 years experience in research and analysis",
      "Strong analytical and statistical skills",
      "Proficiency in data analysis tools",
      "Excellent report writing skills"
    ],
    responsibilities: [
      "Conduct market research and analysis",
      "Prepare comprehensive research reports",
      "Analyze industry trends and patterns",
      "Present findings to stakeholders",
      "Develop research methodologies"
    ]
  },
  // Transport
  {
    id: 4,
    title: "Fleet Operations Manager",
    department: "Transport",
    location: "Himachal Pradesh",
    type: "Full-time",
    experience: "4-6 years",
    description: "We're looking for a fleet operations manager to oversee our growing transport operations and optimize fleet performance.",
    requirements: [
      "Bachelor's degree in Logistics or related field",
      "4-6 years experience in fleet management",
      "Strong knowledge of transportation regulations",
      "Experience with fleet management software",
      "Excellent organizational skills"
    ],
    responsibilities: [
      "Manage fleet operations and maintenance",
      "Optimize routes and schedules",
      "Ensure compliance with transportation regulations",
      "Coordinate with drivers and maintenance team",
      "Monitor fleet performance metrics"
    ]
  }
];

const Careers = () => {
  const navigate = useNavigate();
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');

  const departments = ['All', 'Travel & Tours', 'Construction', 'Research & Development', 'Transport'];

  const filteredJobs = selectedDepartment === 'All' 
    ? jobPostings 
    : jobPostings.filter(job => job.department === selectedDepartment);

  const handleApply = (job: JobPosting) => {
    localStorage.setItem('selectedJob', JSON.stringify({
      title: `Job Application: ${job.title}`,
      department: job.department,
      jobDetails: job
    }));
    toast.success('Please fill out the contact form to submit your application');
    setTimeout(() => {
      navigate('/contact');
    }, 2000);
  };

  return (
    <div className="bg-gray-50 py-16">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Career Opportunities</h1>
          <p className="text-gray-600">Join our team and be part of something extraordinary</p>
        </div>

        {/* Department Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setSelectedDepartment(department)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedDepartment === department
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {department}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Building2 className="h-4 w-4 mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {expandedJob === job.id ? (
                      <ChevronUp className="h-6 w-6" />
                    ) : (
                      <ChevronDown className="h-6 w-6" />
                    )}
                  </button>
                </div>

                {expandedJob === job.id && (
                  <div className="mt-6 space-y-6">
                    <div>
                      <p className="text-gray-600">{job.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Responsibilities</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        {job.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => handleApply(job)}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      Apply Now
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Jobs Found */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No job openings found for this department.</p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Don't see the right position?</h2>
          <p className="text-gray-600 mb-6">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Contact Us
            <Send className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;