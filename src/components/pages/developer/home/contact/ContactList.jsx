import React from "react";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const ContactList = ({
  isLoading,
  isFetching,
  error,
  dataContact,
  handleAdd,
  handleEdit,
  handleDelete,
}) => {
  const prevContactCountRef = React.useRef(0);

  React.useEffect(() => {
    const contactCount = dataContacts?.data?.length ?? 0;
    const prevContactCount = prevContactCountRef.current;

    if (contactCount === 0) {
      setCurrentSlide(0);
    } else if (currentSlide >= contactCount) {
      setCurrentSlide(contactCount - 1); // Adjust if current slide is out of bounds
    } else if (contactCount > prevContactCount) {
      setCurrentSlide(contactCount - 1);
    }

    prevContactCountRef.current = contactCount;
  }, [dataContacts?.data]); // Only re-run when dataContacts.data changes
  return (
    <>
      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentSlide((prev) =>
            prev === 0 ? dataContact.count - 1 : prev - 1
          )
        }
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <HiOutlineChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button
        onClick={() =>
          setCurrentSlide((prev) =>
            prev === dataContact.count - 1 ? 0 : prev + 1
          )
        }
        className="absolute right-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <HiOutlineChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {dataContact?.data.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default ServicesList;
