import React from "react";
import { useParams, Routes, Route, Navigate } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { FaBars } from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Courses() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const COURSES_URL = `${API_BASE}/courses`;
  console.log("COURSES_URL", COURSES_URL);
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${COURSES_URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;<FaBars color="red" />&nbsp;&nbsp;&nbsp;&nbsp;
      <a style={{ color: 'red', marginLeft: '10px' }}>Courses {course.name}</a>
      <hr />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piaaza" element={<h2>Piaaza</h2>} />
            <Route path="Zoom Meetings" element={<h2>Zoom Meetings</h2>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Quizzes" element={<h2>Quizzes</h2>} />
            <Route path="Grades" element={<Grades/>} />
            <Route path="People" element={<h2>People</h2>} />
            <Route path="Panoptp Video" element={<h2>Panoptp Video</h2>} />
            <Route path="Discussions" element={<h2>Discussions</h2>} />
            <Route path="Announcements" element={<h2>Announcements</h2>} />
            <Route path="Pages" element={<h2>Pages</h2>} />
            <Route path="Files" element={<h2>Files</h2>} />
            <Route path="Rubrics" element={<h2>Rubrics</h2>} />
            <Route path="Outcomes" element={<h2>Outcomes</h2>} />
            <Route path="Collaborations" element={<h2>Collaborations</h2>} />
            <Route path="Syllabus" element={<h2>Syllabus</h2>} />
            <Route path="Settings" element={<h2>Settings</h2>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default Courses;