import React from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import CardTestimonials from "../../../../partials/CardTestimonials";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  return (
    <>
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client Testimonials
          </h2>

          {/* Testimonial Slider */}
          <div className="relative max-w-4xl mx-auto">
            {/* slides */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out "
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/*  1st */}
                <CardTestimonials
                  image={"./images/testimonials-1.webp"}
                  alt={"Sarah JOhnson"}
                  description={
                    "The team delivered our project ahead of schedule with exceptional quality. Our online sales increased by 120% within three months!"
                  }
                  name={"Sarah Johnson"}
                  position={"Marketing Director, TechCorp"}
                />

                {/* 2nd */}
                <CardTestimonials
                  image={"../images/testimonials-2.webp"}
                  alt={"Michael Chen Image"}
                  description={
                    "From design to deployment their attention to detail was impressive. They become true partners in our digital transformation journey."
                  }
                  name={"Michael Chen"}
                  position={"CEO, StartupHub"}
                />

                {/* 3rd */}
                <CardTestimonials
                  image={"../images/testimonials-3.webp"}
                  alt={"Emma Rodriguez Image"}
                  description={
                    "Their SEO strategy tripled our organic traffic in 6 months We've seen a dramatic improvement in lead quality and conversion rates."
                  }
                  name={"Emma Rodriguez"}
                  position={"CMO, Growth Solutions"}
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <HiOutlineChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <HiOutlineChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2].map((index) => (
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
        </div>
      </section>
    </>
  );
};

export default Testimonial;
