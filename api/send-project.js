import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    const project = await request.json();

    if (
      !project.name ||
      !project.phone ||
      !project.description ||
      !project.address ||
      !project.city ||
      !project.zip ||
      !project.budget
    ) {
      return Response.json(
        {
          error:
            "Please complete all required project information.",
        },
        { status: 400 }
      );
    }

    const photoLinks =
      project.photos?.length > 0
        ? project.photos
            .map(
              (photo, index) => `
                <p style="margin: 0 0 8px;">
                  <a
                    href="${escapeHtml(photo.url)}"
                    target="_blank"
                    style="color: #b28a4a;"
                  >
                    View Project Photo ${index + 1}
                  </a>
                </p>
              `
            )
            .join("")
        : `<p style="color:#777;">No photos uploaded.</p>`;

    const emailHtml = `
      <div
        style="
          font-family: Arial, Helvetica, sans-serif;
          max-width: 680px;
          margin: 0 auto;
          background: #111111;
          color: #ffffff;
          padding: 40px;
        "
      >
        <p
          style="
            margin: 0 0 12px;
            font-size: 12px;
            letter-spacing: 2px;
            color: #b28a4a;
          "
        >
          NEW PROJECT REQUEST
        </p>

        <h1
          style="
            margin: 0 0 32px;
            font-size: 30px;
            font-weight: 500;
          "
        >
          ${escapeHtml(project.name)}
        </h1>

        <div style="margin-bottom: 32px;">
          <h2 style="font-size:18px;">Contact Information</h2>

          <p>
            <strong>Name:</strong>
            ${escapeHtml(project.name)}
          </p>

          <p>
            <strong>Phone:</strong>
            ${escapeHtml(project.phone)}
          </p>

          <p>
            <strong>Email:</strong>
            ${escapeHtml(project.email || "Not provided")}
          </p>

          <p>
            <strong>Preferred Contact:</strong>
            ${escapeHtml(project.contactPreference)}
          </p>
        </div>

        <div style="margin-bottom: 32px;">
          <h2 style="font-size:18px;">Project Details</h2>

          <p>
            <strong>Description:</strong><br />
            ${escapeHtml(project.description)}
          </p>

          <p>
            <strong>Approximate Dimensions:</strong>
            ${escapeHtml(project.dimensions || "Not provided")}
          </p>

          <p>
            <strong>Estimated Budget:</strong>
            ${escapeHtml(project.budget)}
          </p>
        </div>

        <div style="margin-bottom: 32px;">
          <h2 style="font-size:18px;">Project Location</h2>

          <p>
            ${escapeHtml(project.address)}<br />
            ${escapeHtml(project.city)},
            ${escapeHtml(project.zip)}
          </p>
        </div>

        <div>
          <h2 style="font-size:18px;">Project Photos</h2>

          ${photoLinks}
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Lincoln Website <onboarding@resend.dev>",

      to: ["alsewarihaneen@gmail.com"],

      subject: `New Project Request - ${project.name}`,

      /*
        If the customer provided an email,
        clicking Reply will reply to them.
      */
      replyTo: project.email || undefined,

      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          error:
            "The project was received, but the notification email could not be sent.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      emailId: data?.id,
    });
  } catch (error) {
    console.error(
      "Send project API error:",
      error
    );

    return Response.json(
      {
        error:
          "The project could not be submitted. Please try again.",
      },
      { status: 500 }
    );
  }
}