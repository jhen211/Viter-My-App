import React from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";


const ContactTable = ({
  isLoading,
  isFetching,
  error,
  dataContact,
  handleAdd,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Email Address</th>
          <th>Message</th>
          <th>Action</th>
        </thead>
        <tbody>
          {dataContact?.data.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.contact_fullname}</td>
                <td>{item.contact_email}</td>
                <td>{item.contact_message}</td>
                <td>
                  <div className="flex items-center justify-end mr-5 gap-x-3  ">
                    <button // 1ST STEP
                      type="button"
                      data-tooltip="Edit"
                      className="tooltip"
                      onClick={() => handleEdit(item)}
                    >
                      <FaPencil className="size-4 text-purple-400  " />
                    </button>
                    <button // 1ST STEP
                      type="button"
                      data-tooltip="Delete"
                      className="tooltip"
                      onClick={() => handleDelete(item)}
                    >
                      <FaTrash className="size-4 text-pink-500" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ContactTable;
