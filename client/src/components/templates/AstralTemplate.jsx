import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const AstralTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 leading-relaxed">
      {/* Header with Photo */}
      <header
        className="flex items-center gap-6 p-8 border-b-2"
        style={{ borderColor: accentColor }}
      >
        {data.personal_info?.photo && (
          <div
            className="w-24 h-24 rounded-full overflow-hidden border-2"
            style={{ borderColor: accentColor }}
          >
            <img
              src={data.personal_info.photo}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-1">
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <p className="text-xl text-gray-600 mb-3">
            {data.personal_info?.job_title}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {data.personal_info?.email && (
              <span>{data.personal_info.email}</span>
            )}
            {data.personal_info?.phone && (
              <span>{data.personal_info.phone}</span>
            )}
            {data.personal_info?.location && (
              <span>{data.personal_info.location}</span>
            )}
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Column */}
        <div className="w-2/3 p-8">
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
                    <p className="text-gray-700 mb-2 font-medium">
                      {exp.company}
                    </p>
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
        </div>

        {/* Right Column */}
        <div className="w-1/3 p-8 bg-gray-50">
          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section className="mb-6">
              <h3
                className="text-lg font-semibold mb-3"
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
            </section>
          )}

          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section className="mb-6">
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: accentColor }}
              >
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-sm">{edu.degree}</h4>
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
  );
};

export default AstralTemplate;
