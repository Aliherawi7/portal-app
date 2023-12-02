import React, { useEffect, useState } from "react"
import "./Profile.css"
import { useNavigate, useParams } from "react-router-dom"
import { useStateValue } from "../../context/StateProvider"
import { actionTypes } from "../../context/reducer"
import useProtect from "../../Hooks/useProtect"
import Roles from "../../constants/Roles"
import MessageBox from "../../components/UI/MessageBox/MessageBox"
import ICONS from "../../constants/Icons"
import BackDrop from "../../components/UI/BackDrop/BackDrop"
import BtnTypes from "../../constants/BtnTypes"
import APIEndpoints from "../../constants/APIEndpoints"
import Button from "../../components/UI/Button/Button"
import ButtonLoading from "../../components/UI/Loading/ButtonLoading"
import { t } from "i18next"

const Profile = () => {
  const { id } = useParams()
  useProtect({ roles: [Roles.ADMIN, Roles.STUDENT], id: id })
  const [{ authentication }, dispatch] = useStateValue()
  const [student, setstudent] = useState({})
  const navigate = useNavigate()

  // State of All Modals
  const [showModal, setShowModal] = useState(false)
  const [removeModal, setremoveModal] = useState(false)
  const [lockOrUnlockModal, setlockOrUnlockModal] = useState(false)
  const [responseModal, setresponseModal] = useState({ msg: "" })
  const [loading, setloading] = useState(false)
  const showModalHandler = () => {
    setShowModal(true)
  }
  const modalCloseHandler = () => {
    setShowModal(false)
  }

  useEffect(() => {
    fetch(APIEndpoints.root + APIEndpoints.students.getStudent(id), {
      method: "GET",
      headers: {
        Authorization: "Bearer " + authentication.token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.status)
        }
      })
      .then((data) => {
        setstudent(data)
      })
      .catch(() => {
        if (id != authentication.userId) {
          navigate("/")
        }
      })
  }, [id])

  const logout = () => {
    if (id == authentication.userId) {
      localStorage.clear()
      dispatch({
        type: actionTypes.LOGOUT,
        payload: {},
      })
      navigate("/")
    }
  }

  const removeStudent = () => {
    fetch(APIEndpoints.root + APIEndpoints.students.deleteStudent(id), {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + authentication.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode == 200) {
          setloading(false)
          setresponseModal({
            msg: data.message,
            show: true,
            onClick: () => {
              navigate("/admin/students")
            },
          })
        }
      })
  }

  const lockOrUnlockStudentAccount = () => {
    setloading(true)
    setlockOrUnlockModal(false)
    const lockOrUnlockEndpoint = student.isEnable
      ? APIEndpoints.login.lock(id)
      : APIEndpoints.login.unlock(id)
    fetch(APIEndpoints.root + lockOrUnlockEndpoint, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + authentication.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode == 200) {
          setloading(false)
          setresponseModal({
            msg: data.message,
            show: true,
            onClick: () => setresponseModal({ msg: "", show: false }),
          })
          setstudent({ ...student, isEnable: !student.isEnable })
        }
      })
  }

  return (
    <div className="profile box_shadow fade_in box_shadow display_flex border_radius_8">
      <div className="profile_title display_flex align_items_center justify_content_center flex_direction_column">
        {/* User Profile Image */}
        <div className="user_profile_img display_flex align_items_center flex_direction_column">
          {(authentication.roles.includes(Roles.ADMIN) &&
            id != authentication?.userId) ||
            (authentication.roles.includes(Roles.STUDENT) &&
              id == authentication?.userId) ? (
            <img src={APIEndpoints.redirecter + student?.imageUrl} alt="user img" crossorigin="anonymous" />
          ) : null}

          {(authentication.roles.includes(Roles.ADMIN) &&
            id != authentication?.userId) ||
            (authentication.roles.includes(Roles.STUDENT) &&
              id == authentication?.userId) ? (
            <h1>
              {student?.studentPersonalInfo?.name}{" "}
              {student?.studentPersonalInfo?.lastName}
            </h1>
          ) : null}
        </div>
        {/* Profile Edit buttons */}
        <div className="student_profile_buttons display_flex align_items_center flex_direction_column">
          {authentication.roles.includes(Roles.ADMIN) &&
            authentication.userId != id && (
              <div className="delete_lock_buttons display_flex align_items_center justify_content_space_between">
                <Button
                  icon={ICONS.trash}
                  onClick={() => setremoveModal(true)}
                  text={t("delete")}
                />
                <Button
                  icon={student?.isEnable ? ICONS.lockFill : ICONS.unlock}
                  onClick={() => setlockOrUnlockModal(true)}
                  text={student?.isEnable ? t("disable") : t("enable")}
                />
              </div>
            )}

          <Button
            icon={ICONS.square}
            onClick={() => navigate("/reset-password/" + id)}
            text={t('changeEmailOrPassword')}
          />
          {authentication.roles.includes(Roles.ADMIN) &&
            authentication.userId != id && (
              <Button
                icon={ICONS.edit}
                text={t("updateInformation")}
                onClick={() => navigate("/admin/update-student/" + id)}
              />
            )}
          <Button
            icon={ICONS.logout}
            text={t("logout")}
            onClick={showModalHandler}
          />
        </div>

        {/* Message box for Enable or Not Enable */}
        <BackDrop
          show={lockOrUnlockModal}
          modalClose={() => setlockOrUnlockModal(false)}
        >
          {
            <MessageBox
              messageType="asking"
              firstBtn={{
                btnText: t("yes"),
                btnType: BtnTypes.danger,
                onClick: lockOrUnlockStudentAccount,
              }}
              secondBtn={{
                btnText: t("no"),
                onClick: () => setlockOrUnlockModal(false),
              }}
              message={
                student?.isEnable
                  ? t("disableMessage")
                  : t("enableMessage")
              }
              iconType={ICONS.asking}
            />
          }
        </BackDrop>

        {/* Message box for Delete Student */}
        <BackDrop show={removeModal} modalClose={() => setremoveModal(false)}>
          {
            <MessageBox
              messageType="asking"
              firstBtn={{
                btnText: t("yes"),
                btnType: BtnTypes.danger,
                onClick: removeStudent,
              }}
              secondBtn={{
                btnText: t("no"),
                onClick: () => setremoveModal(false),
              }}
              message={t("deleteStudentMessage")}
              iconType={ICONS.asking}
            />
          }
        </BackDrop>

        {/* Message box for Logout */}
        <BackDrop show={showModal} modalClose={modalCloseHandler}>
          {
            <MessageBox
              messageType="asking"
              firstBtn={{
                btnText: t("yes"),
                btnType: BtnTypes.danger,
                onClick: logout,
              }}
              secondBtn={{ btnText: t("no"), onClick: modalCloseHandler }}
              message={t("logoutMessage")}
              iconType={ICONS.asking}
            />
          }
        </BackDrop>
      </div>

      {/* Student Personal Information */}
      {(authentication.roles.includes(Roles.ADMIN) &&
        id != authentication?.userId) ||
        (authentication.roles.includes(Roles.STUDENT) &&
          id == authentication?.userId) ? (
        <div className="profile_details box_shadow">
          <div className="content_of_profile border_radius_8">
            <div className="content">
              <div className="content_boxes display_grid ">
                <div className="content_box">
                  <label>{t("name")}</label>
                  <p>{student?.studentPersonalInfo?.name}</p>
                </div>
                <div className="content_box">
                  <label>{t("lastName")}</label>
                  <p>{student?.studentPersonalInfo?.lastName}</p>
                </div>
                <div className="content_box">
                  <label>{t("fatherName")}</label>
                  <p>{student?.studentPersonalInfo?.fatherName}</p>
                </div>
                <div className="content_box">
                  <label>{t("contactNumber")}</label>
                  <p>{student?.studentPersonalInfo?.phoneNumber}</p>
                </div>
                <div className="content_box">
                  <label>{t("inclusionYear")}</label>
                  <p>{student?.studentPersonalInfo?.joinedDate}</p>
                </div>
                <div className="content_box">
                  <label>{t("department")}</label>
                  <p>{student?.studentPersonalInfo?.department}</p>
                </div>
                <div className="content_box">
                  <label>{t("year")}</label>
                  <p>{student?.studentPersonalInfo?.year}</p>
                </div>
                <div className="content_box">
                  <label>{t("semester")}</label>
                  <p>{student?.studentPersonalInfo?.semester}</p>
                </div>
                <div className="content_box profile_full_box">
                  <label>{t("email")}</label>
                  <p>{student?.studentPersonalInfo?.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <BackDrop show={responseModal.show} modalClose={null}>
        <MessageBox
          messageType="info"
          firstBtn={{
            btnText: t("confirm"),
            onClick: responseModal.onClick,
          }}
          message={responseModal.msg}
          iconType={ICONS.info}
        />
      </BackDrop>
      {loading && <ButtonLoading />}
    </div>
  )
}

export default Profile
