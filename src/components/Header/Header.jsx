import React from "react"
import { useNavigate } from "react-router-dom"
import "./Header.css"
import { useStateValue } from "../../context/StateProvider"
import ICONS from "../../constants/Icons"
import { t } from "i18next"
import APIEndpoints from "../../constants/APIEndpoints"
import { Link, useResolvedPath, useMatch } from "react-router-dom"
import LangBox from "./langBox/LangBox"
const Header = ({ isDark, darkModeHandler }) => {
  const navigate = useNavigate()
  const [{ authentication }, dispatch] = useStateValue()
  return (
    <div className="header display_flex align_items_center justify_content_space_between">
      <LangBox />
      <div
        className="dark_mode_toggle header_box_size cursor_pointer border_radius_50 background_color_transparent display_flex"
        onClick={darkModeHandler}
        title="تغییر تم"
      >
        {isDark ? (
          <i className={ICONS.brightnessHigh}></i>
        ) : (
          <i className={ICONS.moon}></i>
        )}
      </div>

      {!authentication?.isAuthenticated ? (
        <div
          className="dark_mode_toggle header_box_size cursor_pointer border_radius_50 background_color_transparent display_flex"
          onClick={() => navigate("/login")}
        >
          {t("login")}
        </div>
      ) : <Link
        to={"/profile/" + authentication.userId}
        className="nav_profile display_flex align_items_center justify_content_center flex_direction_column"
      >
        <div className="user_profile display_flex">
          <div className="user_profile_img_container header_box_size display_flex">
            <img
              src={authentication.imageUrl ? APIEndpoints.redirecter + authentication.imageUrl : "/public/img/favicon.png"}
              className="user_profile_img"
              alt="user_image"
              crossOrigin="anonymous"
            />
          </div>
          <p className="text_color">
            {authentication.name} {authentication.lastname}
          </p>
        </div>
      </Link>
      }
    </div>
  )
}

export default Header
