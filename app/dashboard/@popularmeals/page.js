import { meals } from "@/app/data/meals";
import { div } from "motion/react-client";
export default function popularmeals() {
  return (

    <div className="flex flex-col mt-2 md:mt-8 gap-4 md:gap-6">

      <div className="flex justify-between mx-2 mx-7">
        <div className="text-2xl text-blue-950">{meals[27].name}</div>
        <div className="text-2xl text-blue-950">{meals[27].likes}</div>
      </div>
      <div className="flex justify-between mx-2 mx-7">
        <div className="text-2xl text-blue-950">{meals[7].name}</div>
        <div className="text-2xl text-blue-950">{meals[7].likes}</div>
      </div>
      <div className="flex justify-between mx-2 mx-7">
        <div className="text-2xl text-blue-950">{meals[21].name}</div>
        <div className="text-2xl text-blue-950">{meals[21].likes}</div>
      </div>
    </div>
  );
}
