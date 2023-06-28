import MailIcon from "/src/assets/contact-mail.png"
import "./ContactModal.css"


function ContactModal({eventHandle}) {
  return (
    <div className='contact-container'>
            <div className='contact-header'>
              <h2>Contact Us</h2>
              <img src={MailIcon} alt='mailbox' />
            </div>
             <p>Feel free to contact us if you have any questions. <br/>Looking forward to hear from you.</p>
            <div className='contact-form-container'>
              <div className='form-container-1'>
                <p>Name</p>
                <input type="text" placeholder='Enter Your Name' required/>
                <p>Phone Number</p>
                <input type="tel" placeholder='(248) 434-5508'required/>
                <p>Are you a...</p>
                <select>
                   <option value="option1">Student</option>
                    <option value="option2">Parent/Guardian</option>
                    <option value="option3">Admission Advisor</option>
                    <option value="option4">Property Manager</option>
                    <option value="option5">Other</option>
                </select>
              </div>
              <div className='form-container-2'>
                <p>Email</p>
                <input type="text" placeholder='Enter Your Email Address' required/>
                <p>Message</p>
                <textarea placeholder='Enter Your Message' required/>
                <button onClick={eventHandle} type="submit">Submit</button>
              </div>
            </div>
          </div>
  )
}

export default ContactModal
