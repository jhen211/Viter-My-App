import React from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import CardTestimonials from "../../../../partials/CardTestimonials";

const TestimonialsList = ({
  isLoading,
  isFetching,
  error,
  dataTestimonials,
  handleAdd,
  handleDelete,
  handleEdit,
  currentSlide,
  setCurrentSlide,
}) => {
  const prevTestimonialCountRef = React.useRef(0);

  React.useEffect(() => {
    const testimonialCount = dataTestimonials?.data?.length ?? 0;
    const prevTestimonialCount = prevTestimonialCountRef.current;

    if (testimonialCount === 0) {
      setCurrentSlide(0);
    } else if (currentSlide >= testimonialCount) {
      setCurrentSlide(testimonialCount - 1); // Adjust if current slide is out of bounds
    } else if (testimonialCount > prevTestimonialCount) {
      setCurrentSlide(testimonialCount - 1);
    }

    prevTestimonialCountRef.current = testimonialCount;
  }, [dataTestimonials?.data]); // Only re-run when dataTestimonials.data changes
  return (
    <>
      <div className="relative max-w-4xl mx-auto">
        {/* Slides */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {dataTestimonials?.data.map((item, key) => {
              return (
                <React.Fragment key={key}>
                  <CardTestimonials
                    item={item}
                    handleAdd={handleAdd}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                </React.Fragment>
              );
            })}
            {/* Testimonial 1 */}
            {/* <CardTestimonial
                  imageUrl={"/images/testimonials-1.webp"}
                  alt={"Sarah Johnson"}
                  testimony={`"The team delivered our project ahead schedule with exceptional quality. Our online sales increased by 120% within three months!"`}
                  name={"Sarah Johnson"}
                  position={"Marketing Director, TechCorp"}
                /> */}

            {/* Testimonial 2 */}
            {/* <CardTestimonial
                  imageUrl={"/images/testimonials-2.webp"}
                  alt={"Michael Chen"}
                  testimony={`"From design to deployment, their attention to detail was impressive. They became true partners in our digital transformation journey."`}
                  name={"Michael Chen"}
                  position={"CEO, StartupHub"}
                /> */}

            {/* Testimonial 3 */}
            {/* <CardTestimonial
                  imageUrl={"/images/testimonials-3.webp"}
                  alt={"  "}
                  testimony={`"Their SEO strategy tripled our organic traffic in 6 months. We've seen a dramatic improvement in lead quality and conversion rates."`}
                  name={"Emma Rodriguez"}
                  position={"CMO, GrowthSolutions"}
                /> */}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? dataTestimonials.count - 1 : prev - 1
            )
          }
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <HiOutlineChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === dataTestimonials.count - 1 ? 0 : prev + 1
            )
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <HiOutlineChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {dataTestimonials?.data.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialsList;
