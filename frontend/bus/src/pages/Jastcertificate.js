import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Jastcertificate.css"; // Import custom CSS for additional styling

const Jastcertificate = () => {
    return (
    <div>
        <div className="cover-container">
            <img src="op_cover.png" className="img-fluid cover-image" alt="Cover" />
        </div>
   <div className="cert">
    <img src="CERTIFICATION.png" className="img-fluid cert-image" alt="Certification"/>
   </div>
   </div>
    );
}

export default Jastcertificate;
