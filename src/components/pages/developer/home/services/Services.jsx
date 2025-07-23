import React from "react";
import CardServices from "../../../../partials/CardServices";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/function-general";
import { FaPlus } from "react-icons/fa";
import ModalAddServices from "./ModalAddServices";

const Services = () => {
  const [isModalServices, setIsModalServices] = React.useState(false);

  const {
    isLoading,
    isFetching,
    error,
    data: dataServices,
  } = useQueryData(
    `${apiVersion}/controllers/developer/web-services/web-services.php`,
    "get",
    "web-services"
  );

  const handleAdd = () => {
    setIsModalServices(true);
  };

  return (
    <>
      <section id="services" className="bg-gray-50 py-12 md:py-20">
        <div className="container">
          <div className="relative w-full">
            <div className="text-center mb-12">
              <h2 className="title">Our Web Services</h2>
              <p>
                Professional solutions tailored to boost your online presence
              </p>
            </div>
            <div className="absolute right-0 top-1/3">
              <div className="flex items-center gap-x-3">
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {dataServices?.data.map((item, key) => {
              return (
                <React.Fragment key={key}>
                  <CardServices item={item} />
                </React.Fragment>
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
        </div>
      </section>

      {isModalServices && <ModalAddServices setIsModal={setIsModalServices} />}
    </>
  );
};

export default Services;
