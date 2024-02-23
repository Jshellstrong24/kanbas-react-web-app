import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css"

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            <input id="AssignmentSearch" placeholder="Search for Assignments" className="topButton" />

            <button className="topButton"><FaPlus /> Group</button>

            <button className="topButton"><FaPlus /> Assignment</button>

            <select className="topButton">
                <option>Edit Assignment Dates</option>
            </select>

            <select className="topButton">
                <option>Edit</option>
                <option>Speed Grader</option>
                <option>Duplicate</option>
                <option>Delete</option>
                <option>Move To...</option>
                <option>Send To...</option>
                <option>Copy To...</option>
                <option>Share to Commons</option>
            </select>

            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /> ASSIGNMENTS
                        <span className="float-end">
                            <div className="circleText">
                                40% of Total
                            </div>

                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">
                                <FaEllipsisV className="me-2" />
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;