import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const AuroraTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 leading-relaxed">
      {/* Creative Header */}
      <header className="p-8 text-center relative">
        <div
          className="absolute top-4 left-8 w-4 h-4 rounded-full"
          style={{ backgroundColor: accentColor }}
        ></div>
        <div
          className="absolute top-8 right-12 w-3 h-3 rounded-full"
          style={{ backgroundColor: accentColor }}
        ></div>
        <div
          className="absolute bottom-4 left-16 w-2 h-2 rounded-full"
          style={{ backgroundColor: accentColor }}
        ></div>

        <h1 className="text-4xl font-bold mb-2">
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          {data.personal_info?.job_title}
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-gray-600">
          {data.personal_info?.email && <span>{data.personal_info.email}</span>}
          {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
          {data.personal_info?.location && (
            <span>{data.personal_info.location}</span>
          )}
        </div>
      </header>

      <div className="p-8">
        <div className="flex gap-8">
          {/* Left Column */}
          <div className="w-2/3">
            {/* Professional Summary */}
            {data.professional_summary && (
              <section className="mb-8">
                <h2
                  className="text-2xl font-semibold mb-4 flex items-center gap-2"
                  style={{ color: accentColor }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  ></div>
                  Summary
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {data.professional_summary}
                </p>
              </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
              <section className="mb-8">
                <h2
                  className="text-2xl font-semibold mb-6 flex items-center gap-2"
                  style={{ color: accentColor }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  ></div>
                  Experience
                </h2>
                <div className="space-y-6">
                  {data.experience.map((exp, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">
                          {exp.position}
                        </h3>
                        <span className="text-gray-600">
                          {formatDate(exp.start_date)} -{" "}
                          {exp.is_current
                            ? "Present"
                            : formatDate(exp.end_date)}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-2 font-medium">
                        {exp.company}
                      </p>
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
          </div>

          {/* Right Column */}
          <div className="w-1/3">
            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
              <section className="mb-8">
                <h2
                  className="text-2xl font-semibold mb-4 flex items-center gap-2"
                  style={{ color: accentColor }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  ></div>
                  Skills
                </h2>
                <div className="space-y-2">
                  {data.skills.map((skill, index) => (
                    <div key={index} className="text-gray-700">
                      • {skill}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Education */}
            {data.education && data.education.length > 0 && (
              <section>
                <h2
                  className="text-2xl font-semibold mb-4 flex items-center gap-2"
                  style={{ color: accentColor }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  ></div>
                  Education
                </h2>
                <div className="space-y-4">
                  {data.education.map((edu, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-sm">{edu.degree}</h3>
                      <p className="text-gray-700 text-sm">{edu.institution}</p>
                      <p className="text-gray-600 text-xs">
                        {formatDate(edu.graduation_date)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuroraTemplate;
