import React, { useState } from "react"
import "./FacultiesSections.css"

// دیدگاه و مأموریت پوهنحی مربوطه
const ViewPoint = ({ viewPoint, mission }) => {
  const [showTab, setShowTab] = useState(1)

  const handleTabs = (index) => setShowTab(index)

  return (
    <div className="view_point">
      <div className="faculties_sections_title">
        <h2>دیدگاه و مأموریت</h2>
      </div>

      <div className="view_point_tabHeader tab_header">
        <ul>
          <li
            className={showTab === 1 ? "active_tab" : ""}
            onClick={() => handleTabs(1)}
          >
            <span>دیدگاه</span>
          </li>
          <li
            className={showTab === 2 ? "active_tab" : ""}
            onClick={() => handleTabs(2)}
          >
            <span>مأموریت</span>
          </li>
        </ul>
      </div>

      <div className="view_point_contents faculties_tabHeader_contents">
        <div
          className={
            showTab === 1
              ? "tab_header_display active_content box_shadow"
              : "tab_header_display"
          }
        >
          <p>{viewPoint}</p>
        </div>
        <div
          className={
            showTab === 2
              ? "tab_header_display active_content box_shadow"
              : "tab_header_display"
          }
        >
          <p>{mission}</p>
        </div>
      </div>
    </div>
  )
}

export default ViewPoint
