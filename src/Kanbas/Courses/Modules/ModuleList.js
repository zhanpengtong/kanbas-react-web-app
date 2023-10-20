import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {SlOptionsVertical} from "react-icons/sl";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button>Collapse All</button>
        <button>View Progress</button>
        <button>Publish All</button>
        <button style={{ backgroundColor: 'red', color: 'white' }}>+ Modules</button>
        <button><SlOptionsVertical className="wd-icon" /></button>
      </div>
      <hr />
      <div className="list-group">
            <div className="list-group-item">
                <strong>Week 0 - INTRO</strong>
                <div className="list-group">
                    <div className="list-group-item">LEARNING OBJECTIVES</div>
                    <div className="list-group-item">Introduction to the course</div>
                    <div className="list-group-item">Learn what is Web Development</div>
                    <div className="list-group-item">Creating a development environment</div>
                    <div className="list-group-item">Creating a Web Application</div>
                    <div className="list-group-item">Getting started with the 1st assignment</div>
                </div>
                <div className="list-group">
                    <div className="list-group-item">READING</div>
                    <div className="list-group-item">Full Stack Developer - Chapter 1 - Introduction</div>
                    <div className="list-group-item">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</div>
                </div>
                <div className="list-group">
                    <div className="list-group-item">SLIDES</div>
                    <a href="#" className="list-group-item">Introduction to Web Development Links to an external site.</a>
                    <a href="#" className="list-group-item">Creating an HTTP server with Node.js Links to an external site.</a>
                    <a href="#" className="list-group-item">Creating a React Application Links to an external site.</a>
                </div>
            </div>
            
            <div className="list-group-item">
                <strong>Week 1 - HTML</strong>
                <div className="list-group">
                    <div className="list-group-item">LEARNING OBJECTIVES</div>
                    <div className="list-group-item">Learn how to create user interfaces with HTML</div>
                    <div className="list-group-item">Keep working on assignment 1</div>
                    <div className="list-group-item">Deploy the assignment to Netlify</div>
                </div>
                <div className="list-group">
                    <div className="list-group-item">READING</div>
                    <div className="list-group-item">Full Stack Developer - Chapter 1 - Introduction</div>
                    <div className="list-group-item">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</div>
                </div>
            </div>
        </div>

    </div>
  );
}
export default ModuleList;


