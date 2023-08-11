import { useSelector, useNavigate } from "react-redux";
import { useState } from "react";

const Edit = () => {
  const navigate = useNavigate();
  const patient = useSelector((state) => state.patient);
  console.log(patient);

  const [value, setValue] = useState({
    name: "",
    age: "",
    sex: "",
    phone: "",
    email: "",
  });
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="self-start">
        <button className="" onClick={navigate(-1)}>
          Back
        </button>
      </div>
      <div className="">
        <div className="flex items-start justify-start">
          <span>Id</span>
          <input className="w-[36rem] h-[2rem]" placeholder="id" disabled />
        </div>
        <div className="flex items-start justify-start">
          <span>Name</span>
          <input
            className="w-[36rem] h-[2rem]"
            placeholder="id"
            onChange={(e) => setValue(...value, e.target.value)}
          />
        </div>
        <div className="flex items-start justify-start">
          <span>Age</span>
          <input
            className="w-[36rem] h-[2rem]"
            placeholder="id"
            onChange={(e) => setValue(...value, e.target.value)}
          />
        </div>
        <div className="flex items-start justify-start">
          <span>Sex</span>
          <input
            className="w-[36rem] h-[2rem]"
            placeholder="id"
            onChange={(e) => setValue(...value, e.target.value)}
          />
        </div>
        <div className="flex items-start justify-start">
          <span>Phone</span>
          <input
            className="w-[36rem] h-[2rem]"
            placeholder="id"
            onChange={(e) => setValue(...value, e.target.value)}
          />
        </div>
        <div className="flex items-start justify-start">
          <span>Email</span>
          <input
            className="w-[36rem] h-[2rem]"
            placeholder="id"
            onChange={(e) => setValue(...value, e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Edit;
