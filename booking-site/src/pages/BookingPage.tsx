import Button from "../Button"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import axios from 'axios';
// import TextArea from "../Textarea";
import DatePicker from "react-datepicker"
import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css";
import FormField from "../FormField";
import Modal from 'react-modal';
import { useState } from "react";

type BookingPageForm = {
    name: string,
    phoneNumber: string,
    date: Date,
    time: string
    message: string
}

const BookingPage: React.FC<{}> = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    // TODO: Export somewhere else
    const timeslots = [
        "18:00 h", "19:00 h", "20:00 h", "21:00 h", "22:00 h", "23:00 h", "00:00 h", "01:00 h", "02:00 h"
    ];

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<BookingPageForm>({
        defaultValues: {
            name: "",
            phoneNumber: "",
            date: undefined,
            time: timeslots[4],
            message: ""
        }
    })

    const onSubmit: SubmitHandler<BookingPageForm> = (data) => {
        if (process.env.REACT_APP_BOOKING_API_URL) {
            axios
            .post(process.env.REACT_APP_BOOKING_API_URL, data) // Use axios.post to send JSON data
            .then(() => {
                console.log("Sent to backend successfully with data: ", data)
                setIsModalOpen(true)
            })
            .catch((error) => {
                console.error("Encountered the following error while sending data to backend: ", error);
            });
        } else {
            throw new Error("REACT_APP_BOOKING_API_URL not set!")
        }
    }

    // TODO: Make these shitty Controllers into reusable components and understand what the onChange and render do
    return (
        <div className="p-[20px] w-full h-full bg-blue-100 flex flex-col items-center" id="bookingPageId">
            <form className="flex flex-col items-center">
                <div className="mb-4">
                    <FormField informationType="Name" required={true} >
                        <input className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none" placeholder="name" {...register("name")}></input>
                    </FormField>
                </div>
                <div className="mb-4">
                    <FormField informationType="Phone number" required={false} >
                        <input className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none" placeholder="phone number" {...register("phoneNumber")}></input>
                    </FormField>
                </div>
                <div className="mb-4">
                    <FormField informationType="Date" required={true}>
                        <Controller
                            control={control}
                            name="date"
                            render={({ field: { onChange, value } }) => (
                                <DatePicker className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none" onChange={onChange} placeholderText="date" selected={value} />
                            )}
                        />
                    </FormField>
                </div>
                <div className="mb-4">
                    <FormField informationType="Time" required={true} >
                        <Controller
                            control={control}
                            name="time"
                            render={({ field: { onChange, value } }) => (
                                <select name="times" value={value} id="times" onChange={onChange} className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none">
                                    {timeslots.map((timeslot, index) => (
                                        <option key={index} value={timeslot}>{timeslot}</option>
                                    )
                                    )}
                                </select>
                            )}
                        />
                    </FormField>
                </div>
                <div className="mb-4">
                    <FormField informationType="Message" required={false}>
                        <textarea {...register("message")} className="border resize-none border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none" />
                    </FormField>
                </div>
                <Button onClick={handleSubmit(onSubmit)} color="blue" text="Book Now" />
                <Modal isOpen={isModalOpen}
                style={
                    {
                        content: {
                            top: '50%',
                            width: "600px",
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)', // Center both horizontally and vertically
                        }
                    }
                }
                >
                <p className="mb-4">Thank you for your booking! An email has been sent to me. I will contact you shortly.</p>
                <Button onClick={() => {setIsModalOpen(false)}} color="red" text="Close"/>
                </Modal>
            </form>
        </div>
    )
}

export default BookingPage
