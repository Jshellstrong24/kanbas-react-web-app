import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    // const [moduleList, setModuleList] = useState<any[]>(modules);
    // const [module, setModule] = useState({
    //   _id: "New Number",
    // name: "New Module",
    //description: "New Description",
    //course: courseId,
    //});
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();
    /*
    const addModule = (module: any) => {
        const newModule = {
            ...module,
            _id: new Date().getTime().toString()
        };
        const newModuleList = [newModule, ...moduleList];
        setModuleList(newModuleList);
    };
    const deleteModule = (moduleId: string) => {
        const newModuleList = moduleList.filter(
            (module) => module._id !== moduleId);
        setModuleList(newModuleList);
    };
    const updateModule = () => {
        const newModuleList = moduleList.map((m) => {
            if (m._id === module._id) {
                return module;
            } else {
                return m;
            }
        });
        setModuleList(newModuleList);
    };
*/



    return (
        <>
            {/* <!-- Add buttons here --> */}
            <div style={{ textAlign: "left" }}>
                <button className="button">Collapse All</button>
                <button className="button" style={{ width: "auto", display: "inline-block" }}>View Progress</button>
                <select className="button">
                    <option>Publish All</option>
                    <option>Publish All Modules and Items</option>
                    <option>Publish Modules only</option>
                    <option>UnPublish All Modules</option>
                </select>
                <button className="btn btn-danger">+ Module</button>
            </div>
            <hr></hr>
            <ul className="list-group wd-modules">

                <li className="list-group-item" style={{ padding: "6px" }}>
                    <input className="input" value={module.name}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))
                        } />
                    <br />
                    <textarea className="textarea" value={module.description}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, description: e.target.value }))
                        } />
                    <br />
                    <button onClick={() => dispatch(updateModule(module))} className="button">
                        Update
                    </button>
                    <button onClick={() => dispatch(addModule({ ...module, course: courseId }))} className="button">
                        Add
                    </button>
                </li>

                {moduleList.filter((module) => module.course === courseId).map((module, index) => (
                    <li key={index}
                        className="list-group-item"
                        onClick={() => setSelectedModule(module)}>
                        <div>
                            <FaEllipsisV className="me-2" />
                            {module.name}
                            <button className="button" onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>
                            <button className="btn btn-danger button" onClick={() => dispatch(deleteModule(module._id))}>
                                Delete
                            </button>

                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaPlusCircle className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                            </span>
                        </div>
                        {selectedModule._id === module._id && (
                            <ul className="list-group">
                                {module.lessons?.map((lesson: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
                                    <li className="list-group-item" key={index}>
                                        <FaEllipsisV className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                                            <FaCheckCircle className="text-success" />
                                            <FaEllipsisV className="ms-2" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;