import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {SlOptionsVertical} from "react-icons/sl";
import {AiFillCheckCircle} from "react-icons/ai";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <div className="row">
          <div className="col-7">
              <input title="Type the name of the assignments to search for" placeholder="Search for Assignments" />
          </div>
          <div className="col-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button>+ Group</button>
              <button style={{ backgroundColor: 'red', color: 'white' }}>+ Assignment</button>
              <button><SlOptionsVertical className="wd-icon" /></button>
          </div>
      </div>
      <hr />
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;