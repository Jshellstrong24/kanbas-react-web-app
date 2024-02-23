import { useNavigate } from "react-router";
import KanbasNavigation from "../../../Navigation"
import { FaTimes } from "react-icons/fa";

function KanbasNav() {
    const navigate = useNavigate();
    return (
        <>
        <div className="d-flex">
            <div >
                <KanbasNavigation />
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

export default KanbasNav