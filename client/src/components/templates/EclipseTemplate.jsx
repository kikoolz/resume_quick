import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const EclipseTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed">
      {/* Header */}
      <header className="text-center mb-8">
        <p className="text-lg font-semibold mb-2 text-gray-600">
          {data.personal_info?.job_title}
        </p>
        <h1 className="text-4xl font-bold mb-4">
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <div className="flex flex-wrap justify-center gap-6 text-gray-600">
          {data.personal_info?.email && <span>{data.personal_info.email}</span>}
          {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
          {data.personal_info?.location && (
            <span>{data.personal_info.location}</span>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {data.professional_summary && (
        <section className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Summary</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <span className="text-gray-600">
                    {formatDate(exp.start_date)} -{" "}
                    {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>
                <p className="text-lg text-gray-700 mb-3">{exp.company}</p>
                {exp.description && (
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-gray-700">{edu.institution}</p>
                </div>
                <span className="text-gray-600">
                  {formatDate(edu.graduation_date)}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-100 rounded text-gray-700"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default EclipseTemplate;
