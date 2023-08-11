import { useSelector, useNavigate } from "react-redux/";

const View = () => {
  const navigate = useNavigate();
  const patient = useSelector((state) => state.patient);
  console.log(patient);

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
          <span>{patient.id}</span>
        </div>
        <div className="flex items-start justify-start">
          <span>Name</span>
          <span>{patient.name}</span>
        </div>
        <div className="flex items-start justify-start">
          <span>Age</span>
          <span>{patient.age}</span>
        </div>
        <div className="flex items-start justify-start">
          <span>Sex</span>
          <span>{patient.sex}</span>
        </div>
        <div className="flex items-start justify-start">
          <span>Phone</span>
          <span>{patient.phone}</span>
        </div>
        <div className="flex items-start justify-start">
          <span>Email</span>
          <span>{patient.email}</span>
        </div>
      </div>
    </div>
  );
};

export default View;
