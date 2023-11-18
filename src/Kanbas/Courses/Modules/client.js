import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const MODULES_URL = `${API_BASE}/modules`;
const COURSES_URL = `${API_BASE}/courses`;
// const COURSES_URL = "http://localhost:4000/api/courses";
// const MODULES_URL = "http://localhost:4000/api/modules";

export const createModule = async (courseId, module) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/modules`,
        module
    );
    return response.data;
    };
    

export const addModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const findModulesForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};

export const updateModule = async (moduleId, module) => {
  const response = await axios.put(`${MODULES_URL}/${moduleId}`, module);
  return response.data;
};

export const deleteModule = async (moduleId) => {
  const response = await axios
    .delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};
