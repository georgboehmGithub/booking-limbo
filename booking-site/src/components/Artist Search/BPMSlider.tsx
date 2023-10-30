import { Slider } from "@mui/material";

type Props = { onChange: () => void; value: number[] };

const BPMSlider: React.FC<Props> = ({ onChange, value }) => {
  return (
    <div>
      <Slider min={80} max={200} step={10} onChange={onChange} value={value} />
      <div className="text-white">{`${value[0]} - ${value[1]} bpm`}</div>
    </div>
  );
};

export default BPMSlider;
