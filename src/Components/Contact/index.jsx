const Contact = () => {
  return (
    <section className="contact py-5" id="contact">
        <div className="container">
        <div className="row">
            <div className="col-lg-5 mr-lg-5 col-12">
            <div className="google-map w-100">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5968152052187!2d124.97976837477826!3d1.4178157613540294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870f7c1f834005%3A0x6c62f7fb8dedd08b!2sJasmine%202%20Dormitory%20(Klabat%20University)!5e0!3m2!1sen!2sid!4v1701615868470!5m2!1sen!2sid" width={400} height={300} frameBorder={0} style={{border: 0}} allowFullScreen />
            </div>
            <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
                <div className="contact-info-item">
                <h3 className="mb-3 text-white">Say hello</h3>
                <p className="footer-text mb-0">010 020 0960</p>
                <p><a href="mailto:hello@company.co">hello@company.co</a></p>
                </div>
                <ul className="social-links">
                <li><a href="#" className="uil uil-dribbble" data-toggle="tooltip" data-placement="left" title="Dribbble" /></li>
                <li><a href="#" className="uil uil-instagram" data-toggle="tooltip" data-placement="left" title="Instagram" /></li>
                <li><a href="#" className="uil uil-youtube" data-toggle="tooltip" data-placement="left" title="Youtube" /></li>
                </ul>
            </div>
            </div>
            <div className="col-lg-6 col-12">
            <div className="contact-form">
                <h2 className="mb-4">Interested to work together? Let's talk</h2>
                <form action method="get">
                <div className="row">
                    <div className="col-lg-6 col-12">
                    <input type="text" className="form-control" name="name" placeholder="Your Name" id="name" />
                    </div>
                    <div className="col-lg-6 col-12">
                    <input type="email" className="form-control" name="email" placeholder="Email" id="email" />
                    </div>
                    <div className="col-12">
                    <textarea name="message" rows={6} className="form-control" id="message" placeholder="Message" defaultValue={""} />
                    </div>
                    <div className="ml-lg-auto col-lg-5 col-12">
                    <input type="submit" className="form-control submit-btn" defaultValue="Send Button" />
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Contact