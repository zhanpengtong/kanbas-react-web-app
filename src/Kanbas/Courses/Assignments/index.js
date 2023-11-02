import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {SlOptionsVertical} from "react-icons/sl";
import {AiFillCheckCircle} from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <div>
        <h2>Assignments for course {courseId}</h2>
        <div className="row">
            <div className="col-7">
                <input title="Type the name of the assignments to search for" placeholder="Search for Assignments" />
            </div>
            <div className="col-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button class="btn btn-light">+ Group</button>
                <Link to={'/Kanbas/Courses/RS101/Assignments/A101'} className="btn btn-danger">+ Assignment</Link>
                <button class="btn btn-light"><SlOptionsVertical className="wd-icon" /></button>
            </div>
        </div>
        <hr />
        <div>
            <div className="float-end">
                <button class="btn btn-success" onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}> Add </button>
                <button class="btn btn-primary" onClick={() => dispatch(updateAssignment(assignment))}> Update </button>
            </div>
            <div className="float-start">
                <div>
                    <input value={assignment.name} 
                    onChange={(e) => setAssignment({ ...assignment, name: e.target.value })}/>
                </div>
            </div>
        </div>
        <br /><br />
        <ul className="list-group">
          <li className="list-group-item">
            <div>
            {courseAssignments.map((assignment) => (
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="list-group-item">
                {assignment.title}
                <div className="float-end">
                  <button className="btn btn-danger" onClick={() => dispatch(deleteAssignment(assignment._id))}>Delete</button>
                  <button className="btn btn-warning" onClick={() => dispatch(setAssignment(assignment))}>Edit</button>
                </div>
              </Link>
            ))}
            </div>
          </li>
        </ul>
      </div>
    </ul>
  );
}
export default Assignments;