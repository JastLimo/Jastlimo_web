import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    mobileNo: '',
    dateOfJourney: '',
    sourceStation: '',
    destinationStation: '',
    numberOfSeats: '',
    preferredBusType: '',
    preferredSeatingType: '',
    preferredSeating: '',
    agreedTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className="vh-100 bg-image" style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{borderRadius: "15px"}}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">JASTLIMO X SeatSeller</h2>

                  <form onSubmit={handleSubmit}>

                    <div className="form-outline mb-4">
                      <input type="email" id="email" name="email" className="form-control form-control-lg" value={formData.email} onChange={handleChange} required />
                      <label className="form-label" htmlFor="email">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" id="name" name="name" className="form-control form-control-lg" value={formData.name} onChange={handleChange} required />
                      <label className="form-label" htmlFor="name">Name Of Passenger</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="tel" id="mobileNo" name="mobileNo" className="form-control form-control-lg" value={formData.mobileNo} onChange={handleChange} required />
                      <label className="form-label" htmlFor="mobileNo">Mobile No</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="date" id="dateOfJourney" name="dateOfJourney" className="form-control form-control-lg" value={formData.dateOfJourney} onChange={handleChange} required />
                      <label className="form-label" htmlFor="dateOfJourney">Date Of Journey</label>
                    </div>

         

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" id="agreedTerms" name="agreedTerms" checked={formData.agreedTerms} onChange={handleChange} required />
                      <label className="form-check-label" htmlFor="agreedTerms">
                        I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Submit</button>
                    </div>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
