import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_boxes">
        <div className="footer_box first_footer_box">
          <h1>موسسسه تحصیلات عالی هریوا</h1>
          <p>
            مؤسسه تحصیلات عالی هریوا در سال 1393 در حوزه غرب کشور در ولایت هرات
            شروع به فعالیت نموده و تا کنون تمام تلاش خویش برای ارایه آموزش های
            معیاری و اکادمیک مینماید.
          </p>
        </div>
        <div className="footer_box second_footer_box">
          <div class="box_info">
            <i class="bi bi-geo-alt"></i>
            <div>
              <h1>مکان</h1>
              <p>آب بخش بادمرغان، فردوسی 15، جاده شرقی بادمرغان</p>
            </div>
          </div>
          <div class="box_info">
            <i class="bi bi-envelope"></i>
            <div>
              <h1>ایمیل</h1>
              <p>info@hariwa.edu.af</p>
            </div>
          </div>
          <div class="box_info">
            <i class="bi bi-phone"></i>
            <div>
              <h1>تماس</h1>
              <p className="call_number">0799 600 344</p>
            </div>
          </div>
        </div>
        <div className="footer_box third_footer_box">
          <Link to="/">خانه</Link>
          <Link to="/">کامپیوتر ساینس</Link>
          <Link to="/">حقوق و علوم سیاسی</Link>
          <Link to="/">ستوماتالوژی</Link>
        </div>
      </div>
      {/* !CopyRight */}
      <div class="copyright">
        <div class="credits">
          <p>حق کاپی محفوظ است &copy; 2023 هریوا</p>
          <p>
            ارایه شده توسط
            <a href="https://github.com/maroufebrahimi" title="_blank">
              <span> </span>MaroufEbrahimi
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
