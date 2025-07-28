import React from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import CardTestimonials from "../../../../partials/CardTestimonials";
import { FaList, FaPlus, FaTable, FaTrash } from "react-icons/fa";
import ModalAddTestimonials from "./ModalAddTestimonials";
import useQueryData from "../../../../custom-hooks/useQueryData";

import { FaPencil } from "react-icons/fa6";
import ModalDeleteTestimonials from "./ModalDeleteTestimonials";
import TestimonialsList from "./TestimonialsList";
import TestimonialsTable from "./TestimonialsTable";
import { apiVersion } from "../../../../helpers/function-general";

const Testimonials = () => {
  const [isModalTestimonials, setIsModalTestimonials] = React.useState(false);
  const [isDeleteTestimonials, setIsDeleteTestimonials] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState();
  const [isTable, setIsTable] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [item, setItem] = React.useState();

  const {
    isLoading,
    isFetching,
    error,
    data: dataTestimonials,
  } = useQueryData(
    `${apiVersion}/controllers/developer/testimonials/testimonials.php`,
    "get",
    "testimonials"
  );

  console.log(isTable);

  const handleToggleTable = () => {
    setIsTable(!isTable);
  };

  const handleAdd = () => {
    setIsModalTestimonials(true);
  };

  const handleEdit = (item) => {
    setItemEdit(item);
    // console.log(item);
    setIsModalTestimonials(true);
  };

  const handleDelete = (item) => {
    setItemEdit(item);
    setIsDeleteTestimonials(true);
  };

  return (
    <>
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative w-full">
            <div className="text-center mb-12">
              <h2 className="title">Client Testimonials</h2>
            </div>
            <div className="absolute right-0 top-1/3">
              <div className="flex items-center gap-x-3">
                {/* UI */}
                <button
                  className="flex items-center gap-2 hover:underline hover:text-primary"
                  type="button"
                  onClick={handleToggleTable} //step 2 in update
                >
                  {isTable == true ? (
                    <>
                      <FaList className="size-3" />
                      List
                    </>
                  ) : (
                    <>
                      <FaTable className="size-3" />
                      Table
                    </>
                  )}
                </button>
                <button
                  className="flex items-center gap-2 hover:underline hover:text-primary"
                  type="button"
                  onClick={handleAdd}
                >
                  <FaPlus className="size-3" />
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* DELETE */}
          {isTable == true ? (
            <>
              <TestimonialsTable
                isLoading={isLoading}
                isFetching={isFetching}
                error={error}
                dataTestimonials={dataTestimonials}
                handleAdd={handleAdd}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </>
          ) : (
            <TestimonialsList
              isLoading={isLoading}
              isFetching={isFetching}
              error={error}
              dataTestimonials={dataTestimonials}
              handleAdd={handleAdd}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          )}

          {/* Testimonial Slider */}
          <div className="relative max-w-4xl mx-auto">
            {/* slides */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out "
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {dataTestimonials?.data.map((item, key) => {
                  return <CardTestimonials item={item} key={key} />;
                })}
                <div className="absolute top-5 right-5 ">
                  <button // 1ST STEP
                    type="button"
                    data-tooltip="Edit"
                    className="tooltip text-white"
                    onClick={() => handleEdit(item)}
                  >
                    <FaPencil className="p-1 bg-primary rounded-full" />
                  </button>
                  <button // 1ST STEP
                    type="button"
                    data-tooltip="Delete"
                    className="tooltip text-red-600"
                    onClick={() => handleDelete(item)}
                  >
                    <FaTrash className="p-1 bg-primary rounded-full" />
                  </button>
                </div>
                {/*  1st */}
                {/* <CardTestimonials
                  image={"./images/testimonials-1.webp"}
                  alt={"Sarah JOhnson"}
                  description={
                    "The team delivered our project ahead of schedule with exceptional quality. Our online sales increased by 120% within three months!"
                  }
                  name={"Sarah Johnson"}
                  position={"Marketing Director, TechCorp"}
                /> */}

                {/* 2nd */}
                {/* <CardTestimonials
                  image={"../images/testimonials-2.webp"}
                  alt={"Michael Chen Image"}
                  description={
                    "From design to deployment their attention to detail was impressive. They become true partners in our digital transformation journey."
                  }
                  name={"Michael Chen"}
                  position={"CEO, StartupHub"}
                /> */}

                {/* 3rd */}
                {/* <CardTestimonials
                  image={"../images/testimonials-3.webp"}
                  alt={"Emma Rodriguez Image"}
                  description={
                    "Their SEO strategy tripled our organic traffic in 6 months We've seen a dramatic improvement in lead quality and conversion rates."
                  }
                  name={"Emma Rodriguez"}
                  position={"CMO, Growth Solutions"}
                /> */}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev === 0 ? 5 : prev - 1))
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <HiOutlineChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev === 5 ? 0 : prev + 1))
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
        {isModalTestimonials && (
          <ModalAddTestimonials
            setIsModal={setIsModalTestimonials}
            itemEdit={itemEdit}
          />
        )}
        {/* DELETE STEP 11 -> testimonials.php */}
        {isDeleteTestimonials && (
          <ModalDeleteTestimonials
            setModalDelete={setIsDeleteTestimonials}
            mySqlEndpoint={`${apiVersion}/controllers/developer/testimonials/testimonials.php?id=${itemEdit.testimonials_aid}`}
            queryKey="testimonials"
          />
        )}
      </section>
    </>
  );
};

export default Testimonials;
