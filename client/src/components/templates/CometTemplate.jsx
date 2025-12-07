import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const CometTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 leading-relaxed">
      {/* Header with Photo */}
      <header
        className="flex items-center gap-6 p-8"
        style={{ backgroundColor: accentColor, color: "white" }}
      >
        {data.personal_info?.photo && (
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white">
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
          <p className="text-xl opacity-90 mb-3">
            {data.personal_info?.job_title}
          </p>
          <div className="flex flex-wrap gap-4 text-sm opacity-90">
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

      <div className="p-8">
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

        {/* Education & Skills Side by Side */}
        <div className="grid grid-cols-2 gap-8">
          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section>
              <h2
                className="text-2xl font-semibold mb-4"
                style={{ color: accentColor }}
              >
                Education
              </h2>
              <div className="space-y-4">
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

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <h2
                className="text-2xl font-semibold mb-4"
                style={{ color: accentColor }}
              >
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 rounded-full text-sm border"
                    style={{ borderColor: accentColor }}
                  >
                    {skill}
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

export default CometTemplate;
