import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const LunarTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white text-gray-800 leading-relaxed p-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-light mb-2 tracking-wide">
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-gray-600 mb-4">{data.personal_info?.job_title}</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          {data.personal_info?.email && <span>{data.personal_info.email}</span>}
          {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
          {data.personal_info?.location && (
            <span>{data.personal_info.location}</span>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {data.professional_summary && (
        <section className="mb-6 text-center">
          <p className="text-gray-700 leading-relaxed italic">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-6">
          <h2
            className="text-lg font-semibold mb-4 text-center border-b pb-2"
            style={{ borderColor: accentColor }}
          >
            Experience
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-medium">{exp.position}</h3>
                  <span className="text-sm text-gray-600">
                    {formatDate(exp.start_date)} -{" "}
                    {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{exp.company}</p>
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

      {/* Education & Skills */}
      <div className="grid grid-cols-2 gap-6">
        {/* Education */}
        {data.education && data.education.length > 0 && (
          <section>
            <h2
              className="text-lg font-semibold mb-3 text-center border-b pb-1"
              style={{ borderColor: accentColor }}
            >
              Education
            </h2>
            <div className="space-y-3 text-center">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-medium text-sm">{edu.degree}</h3>
                  <p className="text-gray-600 text-xs">{edu.institution}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <section>
            <h2
              className="text-lg font-semibold mb-3 text-center border-b pb-1"
              style={{ borderColor: accentColor }}
            >
              Skills
            </h2>
            <div className="text-center">
              {data.skills.map((skill, index) => (
                <div key={index} className="text-gray-700 text-sm">
                  • {skill}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default LunarTemplate;
