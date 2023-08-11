import { createSlice } from "@reduxjs/toolkit";
import { PatientData } from "../utils/data";

const initialState = {
  id: "",
  name: "",
  age: "",
  sex: "",
  phone: "",
};

export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    addPatient: (state, action) => {
      const { id, name, age, sex, phone } = action.payload;
    },
    editPatient: (state, action) => {
      const { id, name, age, sex, phone } = action.payload;

      const existingPatient = PatientData.find((patient) => patient.id === id);

      if (existingPatient) {
        existingPatient.id = id;
        existingPatient.name = name;
        existingPatient.age = age;
        existingPatient.sex = sex;
        existingPatient.phone = phone;
      }
      return existingPatient;
    },
    deletePatient: (state, action) => {
      const { id } = action.payload;
      const existingPatient = PatientData.filter(
        (patient) => patient.id !== id
      );
      return existingPatient;
    },
  },
});
