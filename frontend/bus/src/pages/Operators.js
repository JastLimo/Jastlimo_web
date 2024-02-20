import React from "react";

const Operators = () => {
    // const operators = [
    //     "logos/1.png",
    //     "logos/2.png",
    //     "logos/3.png",
    //     "logos/4.png",
    //     "logos/5.png",
    //     "logos/6.png",
    //     "logos/7.png",
    //     "logos/8.png",
    //     "logos/9.png",
    //     "logos/10.png",
    //     "logos/11.png",
    //     "logos/12.png",
    //     "logos/13.png",
    //     "logos/14.png",
    //     "logos/15.png",
    //     "logos/16.png",
    //     "logos/17.png",
    //     "logos/18.png",
    //     "logos/19.png",
    //     "logos/21.png",
    //     "logos/22.png",
    //     "logos/23.png",
    // ]

    //instead of writing like a noob write code  like this, pls dont be a noob sanjeev
    const operators = Array.from({ length: 23},(_,index) => `logos/${index + 1}.png`)
    return (
        <div>
            <div className="cover-photo">
                <img src="op_cover.png" alt="cover pic" />
            </div>
            <div className="container">

                <h1>Operators</h1>
            </div>
            <div id="corouselExampleFade" class ="carousel slide corousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                
            </div>

            </div>
            <div className="container">
                <div className="row-op-logo">
                    {operators.map((logo, index) => (
                        <div key={index} className="col-md-3">
                            <img src={logo} alt={`Operator ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Operators;
