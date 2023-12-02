import React, { useState } from "react"
import { Link, useResolvedPath, useMatch } from "react-router-dom"
import "./Navbar.css"
import { useStateValue } from "../../context/StateProvider"
import logo from "../../assets/img/logo.png"
import lowIcon from "../../assets/img/faculties/low-icon.png"
import dentistryIcon from "../../assets/img/faculties/dentistry-icon.png"
import ICONS from "../../constants/Icons"
import APIEndpoints from "../../constants/APIEndpoints"

import { t } from "i18next"
const CustomeLinks = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

const Navbar = () => {
  const [{ authentication }, dispatch] = useStateValue()
  const [activeFaculties, setActiveFaculties] = useState(false)
  const [activeAdminPanel, setActiveAdminPanel] = useState(false)
  const [activeNav, setActiveNav] = useState(false)
  const facultiesHandler = () => setActiveFaculties(!activeFaculties)
  const adminPanelHandler = () => setActiveAdminPanel(!activeAdminPanel)
  const navActiveHandler = () => setActiveNav(!activeNav)

  return (
    <div className={`navbar ${activeNav && "active_nav_right"}`}>
      <div className="toggle_header_navbar">
        <div
          className="toggle_header_icon display_flex align_items_center justify_content_center"
          onClick={navActiveHandler}
        >
          {activeNav ? (
            <i className={`${ICONS.list} text_color cursor_pointer`}></i>
          ) : (
            <i
              className={`${ICONS.cross} text_color cursor_pointer`}
            ></i>
          )}
        </div>
      </div>

      <div className="navbar_menu">
        <ul className="navbar_content">
          <CustomeLinks to="/" title={t('home')}>
            <i className={ICONS.door}></i>
            <span>{t('home')}</span>
          </CustomeLinks>
          {authentication?.roles?.includes("STUDENT") ? (
            <CustomeLinks to="/posts" title={t('posts')}>
              <i className={ICONS.collection}></i>
              <span>{t('posts')}</span>
            </CustomeLinks>
          ) : null}

          {/* Links of Faculties */}
          <div className="faculties_menu">
            <div className="menu_container">
              <div className="navbar__title open__navbar display_flex">
                <div className="navbar__item display_flex align_items_center">
                  <div className="navbar_item_title display_flex align_items_center">
                    <i className={ICONS.mortarboard}></i>
                    <span>{t("fieldOfStudy")}</span>
                  </div>
                  <div >
                    {activeFaculties ? (
                      <i className={`${ICONS.chevronDown} btn_toggle`}></i>
                    ) : (
                      <i className={`${ICONS.chevronRight} btn_toggle`}></i>
                    )}
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                onClick={facultiesHandler}
                className="drop_menu_button outline_none cursor_pointer"
                title={t("fieldOfStudy")}
              />
              <ul className="navbar__dropdown">
                <CustomeLinks to="faculties/0" title="کامپیوتر ساینس">
                  <i className={ICONS.window}></i>
                  <span>کامپیوتر ساینس</span>
                </CustomeLinks>
                <CustomeLinks to="faculties/1" title="طب دندان">
                  <img src={dentistryIcon} />
                  <span>طب دندان</span>
                </CustomeLinks>
                <CustomeLinks to="faculties/2" title="حقوق وعلوم سیاسی">
                  <img src={lowIcon} />
                  <span>حقوق</span>
                </CustomeLinks>
              </ul>
            </div>
          </div>

          {authentication?.roles?.includes("ADMIN") ? (
            <div className="admin_menu menu_container">
              <div className="navbar__title open__navbar display_flex">
                <div className="navbar__item display_flex align_items_center">
                  <div className="navbar_item_title display_flex align_items_center">
                    <i className={ICONS.dashboard}></i>
                    <span>{t("dashboard")}</span>
                  </div>
                  <div className="open_navbar_icon">
                    {activeAdminPanel ? (
                      <i className={`${ICONS.chevronDown} btn_toggle`}></i>
                    ) : (
                      <i className={`${ICONS.chevronRight} btn_toggle`}></i>
                    )}
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                onClick={adminPanelHandler}
                className="drop_menu_button outline_none cursor_pointer"
                title={t("dashboard")}
              />
              <ul className="navbar__dropdown admin_navbar__dropdown ">
                <CustomeLinks to="/admin/students" title={t('students')}>
                  <i className={ICONS.people}></i>
                  <span>{t('students')}</span>
                </CustomeLinks>

                <CustomeLinks to="/admin/post-management" title={t("posts")}>
                  <i className={ICONS.files}></i>
                  <span>{t("posts")}</span>
                </CustomeLinks>
                <CustomeLinks to="/admin/teachers" title={t("teachers")}>
                  <i className={ICONS.peopleّّFill}></i>
                  <span>{t('teachers')}</span>
                </CustomeLinks>
                <CustomeLinks to="/admin/attendance-sheet" title={t("attendances")}>
                  <i className={ICONS.calendar}></i>
                  <span>{t("attendances")}</span>
                </CustomeLinks>
                <CustomeLinks to="/admin/timetable" title={t("schedules")}>
                  <i className={ICONS.table}></i>
                  <span>{t("schedules")}</span>
                </CustomeLinks>
              </ul>
            </div>
          ) : (
            ""
          )}

          <CustomeLinks to="/about" title="درباره">
            <i className={ICONS.building}></i>
            <span>{t("about")}</span>
          </CustomeLinks>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
