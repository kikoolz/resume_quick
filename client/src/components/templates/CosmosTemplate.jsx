import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const CosmosTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 leading-relaxed">
      {/* Header */}
      <header
        className="p-8 border-b-2 mb-6"
        style={{ borderColor: accentColor }}
      >
        <h1 className="text-3xl font-bold mb-2">
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          {data.personal_info?.job_title}
        </p>
        <div className="flex flex-wrap gap-6 text-gray-600">
          {data.personal_info?.email && <span>{data.personal_info.email}</span>}
          {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
          {data.personal_info?.location && (
            <span>{data.personal_info.location}</span>
          )}
        </div>
      </header>

      <div className="p-8">
        {/* Professional Summary */}
        {data.professional_summary && (
          <section className="mb-8">
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: accentColor }}
            >
              Professional Overview
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {data.professional_summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-8">
            <h2
              className="text-2xl font-semibold mb-6"
              style={{ color: accentColor }}
            >
              Career History
            </h2>
            <div className="space-y-8">
              {data.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-xl">{exp.position}</h3>
                      <p className="text-gray-700 text-lg font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-gray-600 font-medium">
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </span>
                  </div>
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

        {/* Education & Skills */}
        <div className="grid grid-cols-2 gap-8">
          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section>
              <h2
                className="text-2xl font-semibold mb-4"
                style={{ color: accentColor }}
              >
                Academic Background
              </h2>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    <p className="text-gray-700">{edu.institution}</p>
                    <p className="text-gray-600">
                      {formatDate(edu.graduation_date)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <h2
                className="text-2xl font-semibold mb-4"
                style={{ color: accentColor }}
              >
                Technical Proficiencies
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {data.skills.map((skill, index) => (
                  <div key={index} className="text-gray-700">
                    • {skill}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default CosmosTemplate;
