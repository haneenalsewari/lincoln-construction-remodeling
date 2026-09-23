import { useEffect, useState } from "react";
import { Upload, X } from "lucide-react";

const budgetOptions = [
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
];

const MAX_PHOTOS = 6;
const MAX_FILE_SIZE = 10 * 1024 * 1024;

const allowedTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
];

function ProjectForm() {
  const [budget, setBudget] = useState("");
  const [photos, setPhotos] = useState([]);
  const [photoError, setPhotoError] = useState("");
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cloudName =
    import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  const uploadPreset =
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  useEffect(() => {
    return () => {
      photos.forEach((photo) => {
        URL.revokeObjectURL(photo.preview);
      });
    };
  }, [photos]);

  const validateForm = (form) => {
    const data = new FormData(form);

    const errors = {};

    const name = data.get("name")?.trim() || "";
    const phone = data.get("phone")?.trim() || "";
    const email = data.get("email")?.trim() || "";
    const description =
      data.get("description")?.trim() || "";
    const address =
      data.get("address")?.trim() || "";
    const city = data.get("city")?.trim() || "";
    const zip = data.get("zip")?.trim() || "";

    const phoneDigits = phone.replace(/\D/g, "");

    if (description.length < 10) {
      errors.description =
        "Please give us a little more detail about the work you need done.";
    }

    if (address.length < 5) {
      errors.address =
        "Please enter the project street address.";
    }

    if (city.length < 2) {
      errors.city =
        "Please enter the project city.";
    }

    if (!/^\d{5}(-\d{4})?$/.test(zip)) {
      errors.zip =
        "Please enter a valid ZIP code.";
    }

    if (!budget) {
      errors.budget =
        "Please select an estimated project budget.";
    }

    if (photos.length === 0) {
      errors.photos =
        "Please upload at least one photo of the project area.";
    }

    if (name.length < 2) {
      errors.name =
        "Please enter your name.";
    }

    if (
      phoneDigits.length !== 10 &&
      !(
        phoneDigits.length === 11 &&
        phoneDigits.startsWith("1")
      )
    ) {
      errors.phone =
        "Please enter a valid 10-digit phone number.";
    }

    if (
      email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      errors.email =
        "Please enter a valid email address.";
    }

    return errors;
  };

  const focusFirstError = (errors) => {
    const firstField = Object.keys(errors)[0];

    if (!firstField) return;

    if (firstField === "budget") {
      document
        .querySelector(".budget-grid")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

      return;
    }

    if (firstField === "photos") {
      document
        .querySelector(".upload-box")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

      return;
    }

    const field = document.querySelector(
      `[name="${firstField}"]`
    );

    field?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    setTimeout(() => {
      field?.focus();
    }, 400);
  };

  const handlePhotoChange = (event) => {
    const selectedFiles = Array.from(
      event.target.files
    );

    setPhotoError("");

    setFieldErrors((current) => ({
      ...current,
      photos: "",
    }));

    if (
      photos.length + selectedFiles.length >
      MAX_PHOTOS
    ) {
      setPhotoError(
        `You can upload up to ${MAX_PHOTOS} photos.`
      );

      event.target.value = "";
      return;
    }

    const validPhotos = [];

    for (const file of selectedFiles) {
      const extension = file.name
        .split(".")
        .pop()
        ?.toLowerCase();

      const allowedExtension = [
        "jpg",
        "jpeg",
        "png",
        "webp",
        "heic",
        "heif",
      ].includes(extension);

      if (
        !allowedTypes.includes(file.type) &&
        !allowedExtension
      ) {
        setPhotoError(
          `${file.name} is not a supported image format. Please use JPG, PNG, WebP, or HEIC.`
        );

        event.target.value = "";
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        setPhotoError(
          `${file.name} is larger than 10 MB.`
        );

        event.target.value = "";
        return;
      }

      validPhotos.push({
        file,
        preview: URL.createObjectURL(file),
      });
    }

    setPhotos((currentPhotos) => [
      ...currentPhotos,
      ...validPhotos,
    ]);

    event.target.value = "";
  };

  const removePhoto = (indexToRemove) => {
    setPhotos((currentPhotos) => {
      const photoToRemove =
        currentPhotos[indexToRemove];

      if (photoToRemove) {
        URL.revokeObjectURL(
          photoToRemove.preview
        );
      }

      return currentPhotos.filter(
        (_, index) => index !== indexToRemove
      );
    });

    setPhotoError("");
  };

  const uploadPhotoToCloudinary = async (
    photo
  ) => {
    const data = new FormData();

    data.append("file", photo.file);
    data.append(
      "upload_preset",
      uploadPreset
    );

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => null);

      throw new Error(
        errorData?.error?.message ||
          "A photo could not be uploaded."
      );
    }

    const result = await response.json();

    return {
      url: result.secure_url,
      publicId: result.public_id,
      originalFilename:
        result.original_filename,
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;

    setFormError("");
    setSuccessMessage("");
    setFieldErrors({});

    const errors = validateForm(form);

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);

      setFormError(
        "Please correct the highlighted information before submitting."
      );

      focusFirstError(errors);

      return;
    }

    if (!cloudName || !uploadPreset) {
      console.error(
        "Missing Cloudinary environment variables."
      );

      setFormError(
        "The photo upload service is temporarily unavailable. Please try again later."
      );

      return;
    }

    setIsSubmitting(true);

    try {
      const uploadedPhotos =
        await Promise.all(
          photos.map((photo) =>
            uploadPhotoToCloudinary(photo)
          )
        );

      const formData = new FormData(form);

      const projectData = {
        description:
          formData.get("description")?.trim(),
        dimensions:
          formData.get("dimensions")?.trim(),
        address:
          formData.get("address")?.trim(),
        city:
          formData.get("city")?.trim(),
        zip:
          formData.get("zip")?.trim(),
        budget,
        name:
          formData.get("name")?.trim(),
        phone:
          formData.get("phone")?.trim(),
        email:
          formData.get("email")?.trim(),
        contactPreference:
          formData.get(
            "contactPreference"
          ),
        photos: uploadedPhotos,
      };

      const response = await fetch(
        "/api/send-project",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            projectData
          ),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Your project could not be submitted."
        );
      }

      setSuccessMessage(
        "Thank you. Your project request has been received. We’ll be in touch soon."
      );

      form.reset();
      setBudget("");

      photos.forEach((photo) => {
        URL.revokeObjectURL(
          photo.preview
        );
      });

      setPhotos([]);
      setFieldErrors({});
    } catch (error) {
      console.error(
        "Project submission error:",
        error
      );

      let friendlyMessage =
        "Something went wrong while submitting your project. Please try again.";

      const message =
        error.message?.toLowerCase() || "";

      if (message.includes("upload")) {
        friendlyMessage =
          "One or more photos could not be uploaded. Please check your internet connection and try again.";
      }

      if (
        message.includes("file size") ||
        message.includes("too large")
      ) {
        friendlyMessage =
          "One of the selected photos is too large. Please use photos smaller than 10 MB.";
      }

      if (
        message.includes("format") ||
        message.includes("unsupported")
      ) {
        friendlyMessage =
          "One of the selected photos is not a supported image type. Please use JPG, PNG, WebP, or HEIC.";
      }

      if (
        message.includes("email") ||
        message.includes("notification")
      ) {
        friendlyMessage =
          "Your project could not be sent right now. Please try again in a moment.";
      }

      setFormError(friendlyMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="project-form-section"
      id="start-project"
    >
      <div className="container project-form-container">
        <div className="project-form-heading">
          <p className="section-label section-label--light">
            START A PROJECT
          </p>

          <h2>
            Ready to transform your space?
          </h2>

          <p>
            Tell us about your project and
            upload photos of the existing
            space.
          </p>
        </div>

        <form
          className="project-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="form-section">
            <span className="form-step">
              01
            </span>

            <div className="form-section__content">
              <h3>Your project</h3>

              <label>
                What would you like done?

                <textarea
                  name="description"
                  required
                  minLength={10}
                  placeholder="Describe the project, what you would like changed, and the result you're looking for."
                  className={
                    fieldErrors.description
                      ? "field-error"
                      : ""
                  }
                />

                {fieldErrors.description && (
                  <span className="field-error-message">
                    {
                      fieldErrors.description
                    }
                  </span>
                )}
              </label>

              <label>
                Approximate dimensions

                <input
                  type="text"
                  name="dimensions"
                  placeholder="Optional"
                />
              </label>

              <label className="upload-box">
                <Upload size={26} />

                <strong>
                  Upload project photos
                </strong>

                <span>
                  Up to 6 photos · 10 MB
                  maximum per photo
                </span>

                <input
                  type="file"
                  name="photos"
                  accept=".jpg,.jpeg,.png,.webp,.heic,.heif,image/jpeg,image/png,image/webp,image/heic,image/heif"
                  multiple
                  onChange={
                    handlePhotoChange
                  }
                />
              </label>

              {fieldErrors.photos && (
                <p className="field-error-message">
                  {fieldErrors.photos}
                </p>
              )}

              {photoError && (
                <p className="form-message form-message--error">
                  {photoError}
                </p>
              )}

              {photos.length > 0 && (
                <>
                  <div className="photo-preview-grid">
                    {photos.map(
                      (photo, index) => (
                        <div
                          className="photo-preview"
                          key={`${photo.file.name}-${index}`}
                        >
                          <img
                            src={photo.preview}
                            alt={`Selected project photo ${
                              index + 1
                            }`}
                          />

                          <button
                            type="button"
                            className="photo-preview__remove"
                            onClick={() =>
                              removePhoto(
                                index
                              )
                            }
                            aria-label={`Remove ${photo.file.name}`}
                          >
                            <X size={16} />
                          </button>
                        </div>
                      )
                    )}
                  </div>

                  <p className="photo-count">
                    {photos.length} of{" "}
                    {MAX_PHOTOS} photos
                    selected
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="form-section">
            <span className="form-step">
              02
            </span>

            <div className="form-section__content">
              <h3>Project location</h3>

              <label>
                Street address

                <input
                  type="text"
                  name="address"
                  required
                  minLength={5}
                  autoComplete="street-address"
                  className={
                    fieldErrors.address
                      ? "field-error"
                      : ""
                  }
                />

                {fieldErrors.address && (
                  <span className="field-error-message">
                    {fieldErrors.address}
                  </span>
                )}
              </label>

              <div className="form-row">
                <label>
                  City

                  <input
                    type="text"
                    name="city"
                    required
                    minLength={2}
                    autoComplete="address-level2"
                    className={
                      fieldErrors.city
                        ? "field-error"
                        : ""
                    }
                  />

                  {fieldErrors.city && (
                    <span className="field-error-message">
                      {fieldErrors.city}
                    </span>
                  )}
                </label>

                <label>
                  ZIP code

                  <input
                    type="text"
                    name="zip"
                    required
                    inputMode="numeric"
                    autoComplete="postal-code"
                    maxLength={10}
                    className={
                      fieldErrors.zip
                        ? "field-error"
                        : ""
                    }
                  />

                  {fieldErrors.zip && (
                    <span className="field-error-message">
                      {fieldErrors.zip}
                    </span>
                  )}
                </label>
              </div>
            </div>
          </div>

          <div className="form-section">
            <span className="form-step">
              03
            </span>

            <div className="form-section__content">
              <h3>
                Estimated project budget
              </h3>

              <div className="budget-grid">
                {budgetOptions.map(
                  (option) => (
                    <button
                      type="button"
                      key={option}
                      className={`budget-option ${
                        budget === option
                          ? "budget-option--active"
                          : ""
                      }`}
                      onClick={() => {
                        setBudget(option);

                        setFieldErrors(
                          (current) => ({
                            ...current,
                            budget: "",
                          })
                        );
                      }}
                    >
                      {option}
                    </button>
                  )
                )}
              </div>

              {fieldErrors.budget && (
                <p className="field-error-message">
                  {fieldErrors.budget}
                </p>
              )}

              <input
                type="hidden"
                name="budget"
                value={budget}
              />
            </div>
          </div>

          <div className="form-section">
            <span className="form-step">
              04
            </span>

            <div className="form-section__content">
              <h3>Your information</h3>

              <div className="form-row">
                <label>
                  Name

                  <input
                    type="text"
                    name="name"
                    required
                    minLength={2}
                    autoComplete="name"
                    className={
                      fieldErrors.name
                        ? "field-error"
                        : ""
                    }
                  />

                  {fieldErrors.name && (
                    <span className="field-error-message">
                      {fieldErrors.name}
                    </span>
                  )}
                </label>

                <label>
                  Phone

                  <input
                    type="tel"
                    name="phone"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="713-555-1234"
                    className={
                      fieldErrors.phone
                        ? "field-error"
                        : ""
                    }
                  />

                  {fieldErrors.phone && (
                    <span className="field-error-message">
                      {fieldErrors.phone}
                    </span>
                  )}
                </label>
              </div>

              <label>
                Email

                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Optional"
                  className={
                    fieldErrors.email
                      ? "field-error"
                      : ""
                  }
                />

                {fieldErrors.email && (
                  <span className="field-error-message">
                    {fieldErrors.email}
                  </span>
                )}
              </label>

              <label>
                Preferred contact

                <select
                  name="contactPreference"
                  defaultValue="text"
                >
                  <option value="text">
                    Text
                  </option>

                  <option value="call">
                    Call
                  </option>

                  <option value="either">
                    Either
                  </option>
                </select>
              </label>

              {formError && (
                <p className="form-message form-message--error">
                  {formError}
                </p>
              )}

              {successMessage && (
                <p className="form-message form-message--success">
                  {successMessage}
                </p>
              )}

              <button
                className="button button--submit"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Submit Project"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ProjectForm;