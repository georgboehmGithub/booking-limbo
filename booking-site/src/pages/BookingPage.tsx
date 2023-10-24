import Button from "../components/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import bannerImage from "../Banner.jpeg";
import "react-dropdown/style.css";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import CloseModal from "../components/CloseModal";
import FormField from "../components/FormField/FormField";
import Header from "../components/Header";
import Banner from "../components/Banner";

export type BookingPageForm = {
  name: string;
  phoneNumber: string;
  date: Date;
  time: string;
  message: string;
};

const BookingPage: React.FC<{}> = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookingPageForm>({
    defaultValues: {
      name: "",
      phoneNumber: "",
      date: undefined,
      time: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<BookingPageForm> = (data) => {
    if (process.env.REACT_APP_BOOKING_API_URL) {
      setIsLoading(true);
      axios
        .post(process.env.REACT_APP_BOOKING_API_URL, data)
        .then(() => {
          setIsModalOpen(true);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(
            "Encountered the following error while sending data to backend: ",
            error
          );
        });
    } else {
      throw new Error("REACT_APP_BOOKING_API_URL not set!");
    }
  };

  return (
    <div className="flex flex-col mt-14" id="bookingPageId">
      <Header />
      <div className="flex justify-center items-center h-full flex-grow ">
        <div className="max-w-3xl w-full">
          <div className="mb-4">
            <Banner pathToBannerImage={bannerImage} />
          </div>
          <form>
            <div className="flex-grow flex flex-col">
              <div className="flex-1">
                <FormField
                  control={control}
                  informationType="name"
                  required={true}
                />
                <FormField
                  control={control}
                  informationType="phoneNumber"
                  required={false}
                />
                <FormField
                  control={control}
                  informationType="date"
                  required={true}
                />
                <FormField
                  control={control}
                  informationType="time"
                  required={true}
                />
                <FormField
                  control={control}
                  informationType="message"
                  required={false}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              {!isLoading ? (
                <Button
                  onClick={handleSubmit(onSubmit)}
                  type="primary"
                  text="Book Now"
                />
              ) : (
                <SyncLoader color="blue" size={8} loading={true} />
              )}
            </div>
          </form>
        </div>
        <CloseModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          message="Thank you for your booking! An email has been sent to me. I will contact
          you shortly."
        />
      </div>
    </div>
  );
};

export default BookingPage;
