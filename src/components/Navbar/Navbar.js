import React, { useState, useContext } from "react"
import { Link, useResolvedPath, useMatch } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import LOGO from "../../assets/img/logo.png"
import "./Navbar.css"

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

const Navbar = ({ activeNav, navActiveHandler }) => {
  const authContext = useContext(AuthContext)

  return (
    <div className={`navbar ${activeNav && "active_nav_right"}`}>
      <div className="toggle_header_navbar">
        <div className="toggle_header_icon" onClick={navActiveHandler}>
          {activeNav ? (
            <i className="bi bi-chevron-left"></i>
          ) : (
            <i className="bi bi-chevron-right"></i>
          )}
        </div>
      </div>

      <Link to="/" className="logo">
        <img src={LOGO} alt="logo" className="logo_img" />
        <h3>هریوا</h3>
      </Link>

      <div className="navbar_menu">
        <ul className="navbar_content">
          <CustomeLinks to="/" title="خانه">
            <i className="bi bi-house-door"></i>
            <span>خانه</span>
          </CustomeLinks>
          {authContext.isAuth ? (
            <CustomeLinks to="/posts" title="پست ها">
              <i className="bi bi-collection"></i>
              <span>پست ها</span>
            </CustomeLinks>
          ) : null}
          <div className="navbar__title open__navbar">
            <li className="navbar__item">
              <i className="bi bi-gear"></i>
              <span>ادمین پنل</span>
              <i className="bi bi-chevron-down btn_toggle"></i>
            </li>
          </div>
        </ul>
        <div className="navbar__dropdown">
          <CustomeLinks to="/admin/addstudent" title="اضافه کردن">
            <i className="bi bi-person-plus"></i>
            <span>شاگرد جدید</span>
          </CustomeLinks>
          <CustomeLinks to="/students" title="محصلین">
            <i className="bi bi-people"></i>
            <span>محصلین</span>
          </CustomeLinks>
          <CustomeLinks to="/admin/deletestudent" title="حذف محصل">
            <i className="bi bi-person-dash"></i>
            <span>حذف محصل</span>
          </CustomeLinks>
          <CustomeLinks to="/admin/newpost" title="محتوا جدید">
            <i className="bi bi-file-earmark-plus"></i>
            <span>محتوای جدید</span>
          </CustomeLinks>
          <CustomeLinks to="/admin/universityinfo" title="محتوا جدید">
            <i className="bi bi-files"></i>
            <span>معلومات دانشگاه</span>
          </CustomeLinks>
        </div>
      </div>
    </div>
  )
}

export default Navbar
