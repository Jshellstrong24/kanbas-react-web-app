import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3, HiArrowRight } from "react-icons/hi2";
import "../styles.css";
import "./index.css";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import HomeScreen from "./Home/screen";
import Assignments from "./Assignments";

function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    let location = useLocation().pathname.split("/").splice(4)
    return (
        <div>
            <h4>
                <div className="course-header" >
                    <HiMiniBars3 /> {course?._id} {course?.name}
                </div>
                <div style={{ display: "inline-block" }}>
                    {location.map(location => <> <HiArrowRight />  {location} </>)}
                </div>
            </h4>

            <hr />
            <div className="d-none d-md-block">
                <CourseNavigation />
            </div>
            <div
                className="overflow-y-scroll courseBody bottom-0 end-0"
                style={{ left: "220px", top: "150px" }} >

                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<HomeScreen />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Piazza" element={<h1>Piazza</h1>} />
                    <Route path="Assignments" element={<Assignments/>} />
                    <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                    <Route path="Grades" element={<h1>Grades</h1>} />
                </Routes>

            </div>

        </div>
    );
}
export default Courses;