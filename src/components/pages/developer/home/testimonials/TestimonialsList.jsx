import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import CardTestimonials from "../../../../partials/CardTestimonials";

const TestimonialsList = ({
  isLoading,
  isFetching,
  error,
  dataServices,
  handleAdd,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {dataServices?.data.map((item, key) => {
          return (
            <div key={key} className="relative">
              <div className="absolute top-5 right-3">
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
              <CardTestimonials item={item} />
            </div>
          );
        })}

        {/* 1st card */}
        {/* <CardServices
              image={"../images/card-icon-web-development.webp"}
              alt={"Web Development Image"}
              title={"Web Development"}
              description={
                " Custom websites built with modern frameworks like Next.js and  React for optimal performance."
              }
              btn={"View Packages"}
            /> */}
        {/* 2nd card */}
        {/* <CardServices
              image={"../images/card-icon-ui-ux-design.webp"}
              alt={"UI/UX Design Image"}
              title={"UI/UX Design"}
              description={
                "Beautiful interfaces designed to convert visitors with strategic  user experience flows."
              }
              btn={"See Portfolio"}
            /> */}

        {/* 3rd card */}
        {/* <CardServices
              image={"../images/card-icon-seo-optimization.webp"}
              alt={"SEO Optimization Image"}
              title={"SEO Optimization"}
              description={
                "Increase your visibility on search engines with our data-driven SEO strategies."
              }
              btn={"Get Audit"}
            /> */}
      </div>
    </>
  );
};

export default TestimonialsList;
