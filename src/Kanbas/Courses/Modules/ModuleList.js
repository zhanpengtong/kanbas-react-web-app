import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect} from "react";
import {
  addModule, 
  deleteModule, 
  updateModule, 
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

import { findModulesForCourse, createModule } from "./client";


function ModuleList() {
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const dispatch = useDispatch();
  
  return (
    <ul className="list-group">
        <li className="list-group-item">
            <div className="float-end">
                <button class="btn btn-primary" onClick= {handleUpdateModule}> Update </button>

                <button class="btn btn-success" onClick={handleAddModule}> Add </button>
            </div>
            <div className="float-start">
                <div>
                    <input
                    className="form-control"
                    id="moduleTitle"
                    type="text"
                    placeholder="New Module Name"
                    value={module.name} 
                    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
                    }/>
                </div>
                <div>
                    <textarea value={module.description}
                    onChange={(e) => dispatch(setModule({...module, description: e.target.value }))
                    }/>
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