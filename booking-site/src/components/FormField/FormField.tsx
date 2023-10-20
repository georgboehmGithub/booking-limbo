import classNames from "classnames";
import { Controller, Control } from "react-hook-form";

import DatePicker from "react-datepicker";

import Asterisk from "./Asterisk";
import { BOOKING_TIMESLOTS } from "../../constants/BOOKING";
import { BookingPageForm } from "../../pages/BookingPage";

type FormFieldProps = {
  informationType: keyof BookingPageForm;
  required: boolean;
  control: Control<BookingPageForm, any>;
};

const FormField: React.FC<FormFieldProps> = ({
  informationType,
  required,
  control,
}) => {
  return (
    <div className="border rounded-lg border-gray-300 h-1/4 p-4 mb-4 bg-white">
      <div className="flex flex-row">
        <p className="font-medium">{informationType}</p>
        <Asterisk required={required} informationType={informationType} />
      </div>
      <div
        className={classNames("py-2", {
          "w-1/2": informationType !== "message",
          "w-full": informationType === "message",
        })}
      >
        <Controller
          control={control}
          name={informationType}
          render={({ field: { onChange, value } }) => {
            if (informationType === "date") {
              return (
                <DatePicker
                  className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none"
                  onChange={onChange}
                  selected={value as Date}
                  placeholderText="date"
                />
              );
            } else if (informationType === "message") {
              return (
                <textarea
                  className="border resize-none border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none"
                  onChange={onChange}
                  value={value as string}
                />
              );
            } else if (informationType === "time") {
              return (
                <select
                  name="times"
                  value={value as string}
                  id="times"
                  onChange={onChange}
                  className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none"
                >
                  {BOOKING_TIMESLOTS.map((timeslot, index) => (
                    <option key={index} value={timeslot}>
                      {timeslot}
                    </option>
                  ))}
                </select>
              );
            } else {
              return (
                <input
                  className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none"
                  onChange={onChange}
                  value={value as string}
                  placeholder={informationType}
                />
              );
            }
          }}
        />
      </div>
    </div>
  );
};

export default FormField;
