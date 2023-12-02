import React from "react"
import "./FormControl.css"
import { t } from "i18next"

const FormControl = ({ handleNextStep, currentStep, steps, isFinished }) => {
  return (
    <div className="button_control display_flex align_items_center justify_content_space_around">
      {/* back button */}
      {currentStep === steps.length - 1 && isFinished ? null : (
        <button onClick={() => handleNextStep("back")} className="back_btn btn">
          {t("back")}
        </button>
      )}

      {/* next button */}
      {currentStep === steps.length - 2 ? (
        <button onClick={() => handleNextStep("next")} className="back_btn btn">
          {t("confirmAndSend")}
        </button>
      ) : currentStep === steps.length - 1 && isFinished ? (
        <button onClick={() => handleNextStep("next")} className="back_btn btn">
          {t("finish")}
        </button>
      ) : currentStep < steps.length - 1 ? (
        <button onClick={() => handleNextStep("next")} className="back_btn btn">
          {t("next")}
        </button>
      ) : null}
    </div>
  )
}

export default FormControl
