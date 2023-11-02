import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
        <li className="list-group-item">
            <div className="float-end">
                <button class="btn btn-primary" onClick={() => dispatch(updateModule(module))}> Update </button>
                <button class="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}> Add </button>
            </div>
            <div className="float-start">
                <div>
                    <input value={module.name} 
                    onChange={(e) => setModule({ ...module, name: e.target.value })}/>
                </div>
                <div>
                    <textarea value={module.description}
                    onChange={(e) => setModule({...module, description: e.target.value })}/>
                </div>
            </div>
        </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <div className="float-end">
                <button class="btn btn-danger" onClick={() => dispatch(deleteModule(module._id))}> Delete </button>
                <button class="btn btn-success" onClick={() => dispatch(setModule(module))}> Edit </button>
            </div>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
            <p>{module._id}</p>
          </li>))}
    </ul>
  );
}
export default ModuleList;