import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const AstralisTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 leading-relaxed">
      {/* Decorative Header */}
      <div
        className="relative p-8 text-white"
        style={{ backgroundColor: accentColor }}
      >
        <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full"></div>
        <h1 className="text-4xl font-bold mb-2">
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-xl opacity-90">{data.personal_info?.job_title}</p>
      </div>

      <div className="flex">
        {/* Main Content */}
        <div className="w-2/3 p-8">
          {/* Professional Summary */}
          {data.professional_summary && (
            <section className="mb-8">
              <h2
                className="text-2xl font-semibold mb-4"
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
            <section className="mb-8">
              <h2
                className="text-2xl font-semibold mb-6"
                style={{ color: accentColor }}
              >
                Experience
              </h2>
              <div className="space-y-6">
                {data.experience.map((exp, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-1 bg-gray-300"></div>
                    <div className="flex-1">
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
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-1/3 p-8 bg-gray-50">
          {/* Contact Info */}
          <div className="mb-8">
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: accentColor }}
            >
              Details
            </h3>
            <div className="space-y-3 text-sm">
              {data.personal_info?.email && (
                <div className="flex items-center gap-2">
                  <Mail className="size-4" />
                  <span>{data.personal_info.email}</span>
                </div>
              )}
              {data.personal_info?.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="size-4" />
                  <span>{data.personal_info.phone}</span>
                </div>
              )}
              {data.personal_info?.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="size-4" />
                  <span>{data.personal_info.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <div className="mb-8">
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: accentColor }}
              >
                Skills
              </h3>
              <ul className="space-y-2">
                {data.skills.map((skill, index) => (
                  <li key={index} className="text-gray-700">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Education */}
          {data.education && data.education.length > 0 && (
            <div>
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: accentColor }}
              >
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-gray-700 text-sm">{edu.institution}</p>
                    <p className="text-gray-600 text-xs">
                      {formatDate(edu.graduation_date)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AstralisTemplate;
