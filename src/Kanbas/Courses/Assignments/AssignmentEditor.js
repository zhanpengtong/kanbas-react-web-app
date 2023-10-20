import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { SlOptionsVertical } from "react-icons/sl";
import { AiFillCheckCircle } from "react-icons/ai";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <a style={{ color: 'green' }}> <AiFillCheckCircle className="wd-icon" /> Published </a>&nbsp;&nbsp;
        <button><SlOptionsVertical className="wd-icon" /></button>
      </div>
      <hr />
      <h2>Assignment Name</h2>
      <input value={assignment.title}
             className="form-control mb-2" />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light">Cancel</Link>
        <button onClick={handleSave} className="btn btn-danger me-2">Save</button>
      </div>
    </div>
  );
}
export default AssignmentEditor;

