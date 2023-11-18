import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import { useEffect } from "react";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const COURSES_URL = `${API_BASE}/courses`;
  const [courses, setCourses] = useState([]);
  const URL = `${COURSES_URL}`;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  

  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(
      `${URL}/${courseId}`
    );
    setCourses(courses.filter(
      (c) => c._id !== courseId));
  };
  const updateCourse = async (courseId) => {
    const response = await axios.put(
      `${URL}/${courseId}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === courseId) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<Account />} />
            <Route path="Dashboard" element={<Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}/>} 
            />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="Inbox" element={<h1>Inbox</h1>} />
            <Route path="History" element={<h1>History</h1>} />
            <Route path="Studio" element={<h1>Studio</h1>} />
            <Route path="Commons" element={<h1>Commons</h1>} />
            <Route path="Help" element={<h1>Help</h1>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
