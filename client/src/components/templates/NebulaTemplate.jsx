import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const NebulaTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-5xl mx-auto bg-white text-gray-800 leading-relaxed">
      {/* Split Header */}
      <div className="flex">
        <div className="w-2/5 p-8 bg-gray-50">
          <h1 className="text-3xl font-bold mb-2">
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {data.personal_info?.job_title}
          </p>

          <div className="space-y-3">
            {data.personal_info?.email && (
              <div className="flex items-center gap-2">
                <Mail className="size-4" />
                <span className="text-sm">{data.personal_info.email}</span>
              </div>
            )}
            {data.personal_info?.phone && (
              <div className="flex items-center gap-2">
                <Phone className="size-4" />
                <span className="text-sm">{data.personal_info.phone}</span>
              </div>
            )}
            {data.personal_info?.location && (
              <div className="flex items-center gap-2">
                <MapPin className="size-4" />
                <span className="text-sm">{data.personal_info.location}</span>
              </div>
            )}
          </div>
        </div>

        <div className="w-3/5 p-8">
          {/* Professional Summary */}
          {data.professional_summary && (
            <section className="mb-6">
              <h2
                className="text-xl font-semibold mb-3"
                style={{ color: accentColor }}
              >
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {data.professional_summary}
              </p>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section className="mb-6">
              <h2
                className="text-xl font-semibold mb-3"
                style={{ color: accentColor }}
              >
                Core Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-700"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Experience & Education */}
      <div className="p-8">
        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-8">
            <h2
              className="text-2xl font-semibold mb-6"
              style={{ color: accentColor }}
            >
              Work Experience
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-4 pl-4"
                  style={{ borderColor: accentColor }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{exp.position}</h3>
                    <span className="text-gray-600">
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
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

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: accentColor }}
            >
              Education
            </h2>
            <div className="grid grid-cols-2 gap-6">
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

export default NebulaTemplate;
