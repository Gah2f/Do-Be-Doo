import React from 'react'
import './footer.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
function Footer() {
  const today =new Date();
  return (
    <div className='footer'>
        <p>Copy right &copy; {today.getFullYear()}</p>

        <div className="social-icons">

          <a href="https://github.com/Gah2f" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
          <a href="www.linkedin.com/in/nebiyu-d-nebiyeleul-a85302224" target="_blank">
      <i class="fab fa-linkedin-in"></i>
    </a>
        <a href="https://x.com/NebiyuD07161952?t=sRptwXFf9LlcBeSMeRcA4g&s=09" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer