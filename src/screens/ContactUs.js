import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <div className="header-image">
                <div className="header-image-content">
                    <h1 className="header-image-heading">Contact <span>Us</span></h1>
                </div>
            </div>
            {/* End Header Image */}
            <div className="container">
                <div className="contactus-content">
                    <p>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the 
                        visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
                        as a placeholder before final copy is available.
                    </p>
                    <div className="contactus-content-hr"></div>
                </div>
                <div className="contact-form">
                    <div className="contact-form-container">
                        <form>
                            <div class="form-row mb-3">
                                <div class="col">
                                    <label for="exampleFormControlTextarea1">Name</label>
                                    <input type="text" class="form-control"/>
                                </div>
                                <div class="col">
                                    <label for="exampleFormControlTextarea1">E-mail</label>
                                    <input type="text" class="form-control"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Messege</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <div className="form_submit">
                                <input type="submit" value="Submit" className="form-submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
