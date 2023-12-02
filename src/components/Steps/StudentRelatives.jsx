import React from "react"
import { useStateValue } from "../../context/StateProvider"
import "./Steps.css"
import { actionTypes } from "../../context/reducer"
import { t } from "i18next"

export const StudentRelatives = () => {
  const [{ studentRelations }, dispatch] = useStateValue()
  const handleInputChangeValue = (e, inputName) => {
    switch (inputName) {
      case "father.name": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            father: {
              ...studentRelations?.father,
              name: e.target.value,
              relationship: t("father"),
            },
          },
        })
        break
      }
      case "father.job": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            father: {
              ...studentRelations?.father,
              job: e.target.value,
            },
          },
        })
        break
      }
      case "father.jobLocation": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            father: {
              ...studentRelations?.father,
              jobLocation: e.target.value,
            },
          },
        })
        break
      }

      case "father.phoneNumber": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            father: {
              ...studentRelations?.father,
              phoneNumber: e.target.value,
            },
          },
        })
        break
      }
      case "uncle.name": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            uncle: {
              ...studentRelations?.uncle,
              name: e.target.value,
              relationship: t("studentPaternalUncle"),
            },
          },
        })
        break
      }
      case "uncle.job": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            uncle: {
              ...studentRelations?.uncle,
              job: e.target.value,
            },
          },
        })
        break
      }
      case "uncle.jobLocation": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            uncle: {
              ...studentRelations?.uncle,
              jobLocation: e.target.value,
            },
          },
        })
        break
      }
      case "uncle.phoneNumber": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            uncle: {
              ...studentRelations?.uncle,
              phoneNumber: e.target.value,
            },
          },
        })
        break
      }
      case "aunt.name": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            aunt: {
              ...studentRelations?.aunt,
              name: e.target.value,
              relationship: t("studentMaternalUncle"),
            },
          },
        })
        break
      }
      case "aunt.job": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            aunt: {
              ...studentRelations?.aunt,
              job: e.target.value,
            },
          },
        })
        break
      }
      case "aunt.jobLocation": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            aunt: {
              ...studentRelations?.aunt,
              jobLocation: e.target.value,
            },
          },
        })
        break
      }
      case "aunt.phoneNumber": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            aunt: {
              ...studentRelations?.aunt,
              phoneNumber: e.target.value,
            },
          },
        })
        break
      }
      case "brother.name": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            brother: {
              ...studentRelations?.brother,
              name: e.target.value,
              relationship: "brother",
            },
          },
        })
        break
      }
      case "brother.job": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            brother: {
              ...studentRelations?.brother,
              job: e.target.value,
            },
          },
        })
        break
      }
      case "brother.jobLocation": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            brother: {
              ...studentRelations?.brother,
              jobLocation: e.target.value,
            },
          },
        })
        break
      }
      case "brother.phoneNumber": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            brother: {
              ...studentRelations?.brother,
              phoneNumber: e.target.value,
            },
          },
        })
        break
      }
    }
  }
  return (
    <div className="form_details_student student_relatives left-to-right">
      <div className="add_student_stepper_title">
        <h3>{t("studentFather")}</h3>
      </div>
      <section className="build_boxes">
        <div className="build_box">
          <label>{t("name")}</label>
          <input
            type="text"
            value={studentRelations?.father?.name}
            onChange={(e) => handleInputChangeValue(e, "father.name")}
          />
        </div>

        <div className="build_box">
          <label>{t("duty")}</label>
          <input
            type="text"
            value={studentRelations?.father?.job}
            onChange={(e) => handleInputChangeValue(e, "father.job")}
          />
        </div>

        <div className="build_box">
          <label>{t("dutyLocation")}</label>
          <input
            type="text"
            value={studentRelations?.father?.jobLocation}
            onChange={(e) => handleInputChangeValue(e, "father.jobLocation")}
          />
        </div>

        <div className="build_box">
          <label>{t("contactNumber")}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            value={studentRelations?.father?.phoneNumber}
            onChange={(e) => handleInputChangeValue(e, "father.phoneNumber")}
          />
        </div>
      </section>

      <div className="add_student_stepper_title">
        <h3>{t("studentPaternalUncle")}</h3>
      </div>

      <section className="build_boxes">
        <div className="build_box">
          <label>{t("name")}</label>
          <input
            type="text"
            value={studentRelations?.uncle?.name}
            onChange={(e) => handleInputChangeValue(e, "uncle.name")}
          />
        </div>

        <div className="build_box">
          <label>{t("duty")}</label>
          <input
            type="text"
            value={studentRelations?.uncle?.job}
            onChange={(e) => handleInputChangeValue(e, "uncle.job")}
          />
        </div>

        <div className="build_box">
          <label>{t("dutyLocation")}</label>
          <input
            type="text"
            value={studentRelations?.uncle?.jobLocation}
            onChange={(e) => handleInputChangeValue(e, "uncle.jobLocation")}
          />
        </div>

        <div className="build_box">
          <label>{t("contactNumber")}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            value={studentRelations?.uncle?.phoneNumber}
            onChange={(e) => handleInputChangeValue(e, "uncle.phoneNumber")}
          />
        </div>
      </section>

      <div className="add_student_stepper_title">
        <h3>{t("studentMaternalUncle")}</h3>
      </div>

      <section className="build_boxes">
        <div className="build_box">
          <label>{t("name")}</label>
          <input
            type="text"
            value={studentRelations?.aunt?.name}
            onChange={(e) => handleInputChangeValue(e, "aunt.name")}
          />
        </div>

        <div className="build_box">
          <label>{t("duty")}</label>
          <input
            type="text"
            value={studentRelations?.aunt?.job}
            onChange={(e) => handleInputChangeValue(e, "aunt.job")}
          />
        </div>

        <div className="build_box">
          <label>{t("dutyLocation")}</label>
          <input
            type="text"
            value={studentRelations?.aunt?.jobLocation}
            onChange={(e) => handleInputChangeValue(e, "aunt.jobLocation")}
          />
        </div>

        <div className="build_box">
          <label>{t("contactNumber")}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            value={studentRelations?.aunt?.phoneNumber}
            onChange={(e) => handleInputChangeValue(e, "aunt.phoneNumber")}
          />
        </div>
      </section>

      <div className="add_student_stepper_title">
        <h3>{t("studentBrother")}</h3>
      </div>

      <section className="build_boxes">
        <div className="build_box">
          <label>{t("name")}</label>
          <input
            type="text"
            value={studentRelations?.brother?.name}
            onChange={(e) => handleInputChangeValue(e, "brother.name")}
          />
        </div>
        <div className="build_box">
          <label>{t("duty")}</label>
          <input
            type="text"
            value={studentRelations?.brother?.job}
            onChange={(e) => handleInputChangeValue(e, "brother.job")}
          />
        </div>
        <div className="build_box">
          <label>{t("dutyLocation")}</label>
          <input
            type="text"
            value={studentRelations?.brother?.jobLocation}
            onChange={(e) => handleInputChangeValue(e, "brother.jobLocation")}
          />
        </div>
        <div className="build_box">
          <label>{t("contactNumber")}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            value={studentRelations?.brother?.phoneNumber}
            onChange={(e) => handleInputChangeValue(e, "brother.phoneNumber")}
          />
        </div>
      </section>
    </div>
  )
}
