import React, { useState, useEffect } from "react"
import "./Attendance.css"

import APIEndpoints from "../../constants/APIEndpoints"

const Attendance = () => {
  const [semester, setsemester] = useState()
  const [department, setdepartment] = useState()
  const [feildOfStudy, setfeildOfStudy] = useState()
  const [fields, setFields] = useState([])
  const [departments, setDepartments] = useState([])
  const [semesters, setsemesters] = useState([])
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch(APIEndpoints.root + APIEndpoints.fieldOfStudy.getAll)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((data) => {
        setFields(data.content)
        setStudents(Array.from(new Set([...students, ...data.content])))
      })
      .then((data) => {
        const newList = [...students, ...data.content].filter(
          (obj, index, self) => index === self.findIndex((o) => o.id === obj.id)
        )
        setStudents(newList)
      })
  }, [])

  const setfield = (e) => {
    setDepartments([])
    setfeildOfStudy(e.target.value)
    const f = fields.find((item) => {
      return item.fieldName == e.target.value
    })
    fetch(APIEndpoints.root + APIEndpoints.fieldOfStudy.depratments(f.id))
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((data) => {
        setDepartments(data)
        let sem = []
        for (let i = 1; i <= data[0].semesters; i++) sem.push(i)
        setsemesters(sem)
      })
  }

  const setDep = (e) => {
    setdepartment(e)
    const d = departments.find((item) => {
      return item.departmentName == e
    })
    let sem = []
    for (let i = 1; i <= d.semesters; i++) sem.push(i)
    setsemesters(sem)
  }

  const handleFilterButton = () => {
    let requestParam = ""
    if (semester && department && feildOfStudy) {
      requestParam += `&semester=${semester == "همه" ? "%" : semester}`
      requestParam += `&department=${department == "همه" ? "%" : department}`
      requestParam += `&fieldOfStudy=${
        feildOfStudy == "همه" ? "%" : feildOfStudy
      }`
    }
  }

  return (
    <div className="attendance">
      {/* Here you can add Faculty */}
      <div className="attendance_faculty">
        <h2>حـاضـری مـربـوطـه را انـتخـاب نـمـایـد</h2>
        <div className="posts_management_boxes">
          <div className="post_mana_box">
            <label>پوهنحی</label>
            <select
              id="type"
              value={feildOfStudy}
              onChange={(e) => setfield(e)}
              defaultValue="هیچکدام"
            >
              <option>هیچکدام</option>
              {fields.map((item) => {
                return <option key={item.id}>{item.fieldName}</option>
              })}
            </select>
          </div>
          <div className="post_mana_box">
            <label>دیپارتمنت</label>
            <select
              id="type"
              value={department}
              onChange={(e) => setDep(e.target.value)}
              defaultValue="هیچکدام"
            >
              <option>هیچکدام</option>
              {departments.map((item) => {
                return <option key={item.id}>{item.departmentName}</option>
              })}
            </select>
          </div>
          <div className="post_mana_box">
            <label>سمستر</label>
            <select
              id="type"
              value={semester}
              onChange={(e) => setsemester(e.target.value)}
              defaultValue="هیچکدام"
            >
              <option>هیچکدام</option>
              {semesters.map((sem) => {
                return <option>{sem}</option>
              })}
            </select>
          </div>
        </div>
        <div className="attendance_faculty_btn posts_management_filter_btn">
          <button className="btn" onClick={handleFilterButton}>
            ارسال
          </button>
        </div>
      </div>

      {/* <div className="attendance_content"> */}
      {/* <div className="attendance_header">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>
          <span>13</span>
          <span>14</span>
          <span>15</span>
          <span>16</span>
          <span>17</span>
          <span>18</span>
          <span>19</span>
          <span>20</span>
          <span>21</span>
          <span>22</span>
          <span>23</span>
          <span>24</span>
          <span>25</span>
          <span>26</span>
          <span>27</span>
          <span>28</span>
          <span>29</span>
          <span>30</span>
        </div> */}

      <div className="attendance_students">
        {students?.map((student, index) => {
          return (
            <ul>
              <li>
                <span>{student?.name} </span>
                <span>{student?.lastname}</span>
              </li>
            </ul>
          )
        })}
      </div>
      {/* </div> */}
    </div>
  )
}

export default Attendance
