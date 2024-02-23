import CourseNavigation from "../../Navigation"
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router";

function CourseNav() {
    const navigate = useNavigate();
    return (
        <>
        <div className="d-flex">
            <div >
                <CourseNavigation />
            </div>

            <div style={{ textAlign: "right" }}>
                <button onClick={() => navigate(-1)}>
                    <FaTimes style={{ fontSize: "50px" }}/>
                </button>
            </div>
        </div>
        </>
    )
}

export default CourseNav