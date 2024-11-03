import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
import {FaHourglassStart} from "react-icons/fa";
import "../css/Academic.css";
import NIT from "../components/media/NIT.jpeg";
import JNV from "../components/media/JNV.png";
import SJIS from "../components/media/SJIS.jpeg";

function Academics() {
  return (
    <section className="aca">
    <div className="col-md-8 mx-auto container" id="education">
      <h5> Academic Journey</h5>
      <VerticalTimeline>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2D3748" }}
          contentArrowStyle={{ borderRight: "7px solid  #2D3748" }}
          iconStyle={{ background: "#171923", color: "#fff" }}
          icon={<MdSchool />}
          >  

          <img src={NIT} className="institute" alt="nit" />
          <h5 className="vertical-timeline-element-title"> B.tech (IT) </h5>
          <h5 className="vertical-timeline-element-subtitle">
            NIT Raipur (2021 - 2025)
          </h5>
          <small className="result">8.43 CPI (6th sem)</small>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2D3748" }}
          contentArrowStyle={{ borderRight: "7px solid  #2D3748" }}
          iconStyle={{ background: "#171923", color: "#fff" }}
          icon={<MdSchool />}
          >

          <img src={SJIS} className="institute" alt="nit" />
          <h5 className="vertical-timeline-element-title"> CBSE - 12th </h5>
          <h5 className="vertical-timeline-element-subtitle">
            Satyameva Jayate International School
          </h5>
          <small className="result">Percentage : 95.60% </small>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2D3748" }}
          contentArrowStyle={{ borderRight: "7px solid  #2D3748" }}
          iconStyle={{ background: "#171923", color: "#fff" }}
          icon={<MdSchool />}
          >

          <img src={JNV} className="institute" alt="nit" />
          <h5 className="vertical-timeline-element-title"> CBSE - 10th </h5>
          <h5 className="vertical-timeline-element-subtitle">
            JNV Gandhinagar
          </h5>
          <small className="result">Percentage : 91.00% </small>
        </VerticalTimelineElement>

       <VerticalTimelineElement
       className="vertical-timeline-element--no-children"
       iconStyle={{ background: "#171923", color: "#fff" }}
       icon={<FaHourglassStart/>}>
       </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
    </section>
  );
}
export default Academics;
