import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNav from "./Courses/Home/Navbar/kanbas";
import CourseNav from "./Courses/Home/Navbar/course";

function Kanbas() {
   return (
      <>
         <Nav />
         <div className="d-flex">
            <div className="d-none d-md-block">
               <KanbasNavigation />
            </div>
            <div style={{ flexGrow: 1 }}>
               <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account" element={<h1>Account</h1>} />
                  <Route path="Dashboard" element={<Dashboard />} />
                  <Route path="Courses/:courseId/*" element={<Courses />} />
                  <Route path="KanbasNav" element={<KanbasNav />} />
                  <Route path="CourseNav" element={<CourseNav />} />
               </Routes>
            </div>
         </div>
      </>
   );
}
export default Kanbas;