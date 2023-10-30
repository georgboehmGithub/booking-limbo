// TODO: Background image

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import BPMSlider from "./BPMSlider";
import Dropdown from "./Dropdown";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

type SearchOptionsForm = {
  genre: string;
  bpmRange: number[];
  eventType: "";
};

const SearchOptions: React.FC<{}> = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SearchOptionsForm>({
    defaultValues: {
      genre: "",
      bpmRange: [120, 150],
      eventType: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SearchOptionsForm> = (data) => {
    // NOTE: Planned for 1.0
    if (false) {
      console.log("Search options: ", data);
    } else {
      navigate("/user");
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <form>
          <div className="flex justify-center">
            <div className="p-4 w-2/5">
              <div className="mb-4 text-white">Genre</div>
              <Controller
                control={control}
                name={"genre"}
                render={({ field: { onChange, value } }) => {
                  return (
                    <input
                      className="w-full"
                      placeholder="Genre"
                      onChange={onChange}
                      value={value}
                    />
                  );
                }}
              />
            </div>
            <div className="p-4 w-2/5">
              <div className="mb-4 text-white">Beats per minute</div>
              <Controller
                control={control}
                name={"bpmRange"}
                render={({ field: { onChange, value } }) => {
                  return (
                    <BPMSlider onChange={onChange} value={value as number[]} />
                  );
                }}
              />
            </div>
            <div className="p-4 w-3/5">
              <div className="mb-4 text-white">Event type</div>
              <div>
                <Controller
                  control={control}
                  name={"eventType"}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <Dropdown
                        onChange={onChange}
                        value={value}
                        options={["opt1", "opt2", "opt3qwejnqwejnqjnwenjqwnje"]}
                      />
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="justify-center flex mt-10">
        <Button type="primary" text="Search" onClick={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
};

export default SearchOptions;
