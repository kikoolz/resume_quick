import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const NebularTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 leading-relaxed flex">
      {/* Left Sidebar */}
      <div className="w-1/3 p-6 bg-gray-50">
        {/* Contact */}
        <div className="mb-6">
          <h3
            className="text-lg font-semibold mb-3"
            style={{ color: accentColor }}
          >
            Contact
          </h3>
          <div className="space-y-2 text-sm">
            {data.personal_info?.email && <div>{data.personal_info.email}</div>}
            {data.personal_info?.phone && <div>{data.personal_info.phone}</div>}
            {data.personal_info?.location && (
              <div>{data.personal_info.location}</div>
            )}
          </div>
        </div>

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <div className="mb-6">
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: accentColor }}
            >
              Skills
            </h3>
            <div className="space-y-2">
              {data.skills.map((skill, index) => (
                <div key={index} className="text-sm text-gray-700">
                  • {skill}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-6">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-1">
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <p className="text-lg text-gray-600">
            {data.personal_info?.job_title}
          </p>
        </header>

        {/* Professional Summary */}
        {data.professional_summary && (
          <section className="mb-6">
            <h2
              className="text-xl font-semibold mb-3"
              style={{ color: accentColor }}
            >
              Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {data.professional_summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-6">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: accentColor }}
            >
              Experience
            </h2>
            <div className="space-y-4">
              {data.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold">{exp.position}</h3>
                    <span className="text-sm text-gray-600">
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">{exp.company}</p>
                  {exp.description && (
                    <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
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
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: accentColor }}
            >
              Education
            </h2>
            <div className="space-y-3">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-gray-700">{edu.institution}</p>
                  <p className="text-gray-600 text-sm">
                    {formatDate(edu.graduation_date)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default NebularTemplate;
