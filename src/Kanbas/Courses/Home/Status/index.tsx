import "./index.css"
import { FaBan, FaCheckCircle, FaFile, FaArrowCircleRight, FaCrosshairs, FaChartBar, FaBullhorn, FaRegBell } from "react-icons/fa";

function HomeStatus() {
    return (
        <>
            <h4>Course Status</h4>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <button className="button tbl-button">
                                <FaBan /> UnPublish</button>
                        </td>
                        <td>
                            <button className="button tbl-button">
                                <FaCheckCircle /> Published</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br></br >
            <button className="sideButton">
                <FaFile /> Import Existing Content
            </button>
            <br></br >
            <button className="sideButton">
                <FaArrowCircleRight /> Import From Commons
            </button>
            <br></br>
            <button className="sideButton">
                <FaCrosshairs /> Choose Home Page
            </button>
            <br></br >
            <button className="sideButton">
                <FaChartBar /> View Course Stream
            </button>
            <br></br >
            <button className="sideButton">
                <FaBullhorn /> New Announcement
            </button>
            <br></br >
            <button className="sideButton">
                <FaChartBar /> New Analytics
            </button>
            <br></br>
            <button className="sideButton">
                <FaRegBell /> View Course Notifications
            </button>

            <h4>To Do:</h4>
            <hr></hr>

            <h4>Coming Up:</h4>
            <hr></hr>
        </>

    )
}

export default HomeStatus