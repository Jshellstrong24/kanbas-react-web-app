import Home from "."
import HomeStatus from "./Status"
import "../Modules/index.css"
import { Link } from "react-router-dom";

function HomeScreen() {
    return (
        <>
            <div className="d-block d-md-none">
                <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                    <div className="container-fluid">
                    <Link className="navbar-brand" to={`/Kanbas/KanbasNav`}>Kanbas Navigation</Link>
                    <Link className="navbar-brand" to={`/Kanbas/CourseNav`}>Course Navigation</Link>
                    </div>
                </nav>
            </div>
            <div className="d-flex">
                
                <div className="flex-fill" style={{ marginRight: "20px" }}>
                    <Home />
                </div>

                <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: "250px", marginLeft: "20px;" }}>
                    <HomeStatus />
                </div>
            </div>
        </>
    );
}

export default HomeScreen;