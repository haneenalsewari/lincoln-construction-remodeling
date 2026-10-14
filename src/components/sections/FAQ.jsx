import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const questions = [
  {
    question: "What areas do you serve?",
    answer:
      "Lincoln Construction & Remodeling is based in Richmond, Texas and generally serves homeowners within approximately 30 miles, including surrounding Greater Houston communities.",
  },
  {
    question: "What types of projects do you specialize in?",
    answer:
      "The primary focus is larger remodeling and renovation work, including bathrooms, kitchens, interior renovations, flooring, painting and finishes, and related construction work.",
  },
  {
    question: "Do you take small handyman jobs?",
    answer:
      "The business is primarily focused on larger remodeling and renovation projects rather than small standalone handyman repairs.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes. Project estimates are provided at no charge after the scope and project requirements have been reviewed.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. Lincoln Construction & Remodeling is insured.",
  },
  {
    question: "Is there a warranty on the work?",
    answer:
      "Yes. Workmanship warranty coverage is available. Specific warranty terms may depend on the project and will be discussed as part of the project agreement.",
  },
  {
    question: "Can I send photos before scheduling an estimate?",
    answer:
      "Yes. The Start a Project form allows you to upload photos of the existing space along with your project description, dimensions, location, and estimated budget.",
  },
  {
    question: "How long will my remodel take?",
    answer:
      "Project timelines depend on the scope, materials, existing conditions, and scheduling. A more accurate timeline can be discussed after the project has been reviewed.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq section-light">
      <div className="container">
        <p className="section-label">
          FREQUENTLY ASKED QUESTIONS
        </p>

        <div className="faq__heading">
          <h2>Questions before you get started?</h2>
        </div>

        <div className="faq__list">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`faq__item ${
                  isOpen ? "faq__item--open" : ""
                }`}
                key={item.question}
              >
                <button
                  className="faq__question"
                  type="button"
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? null : index
                    )
                  }
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>

                  {isOpen ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </button>

                {isOpen && (
                  <div className="faq__answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;