import React from 'react';

function Carousal() {
    return (
        <div>
            <style>
                {`
                    .carousel-item img {
                        max-height: 400px; /* Adjust the max-height as needed */
                        object-fit: cover;
                    }
                `}
            </style>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/300x300/?pastry"  className="d-block w-100" alt="..."  style={{filter:"brightness(30%"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300x300/?burger" className="d-block w-100" alt="..." style={{filter:"brightness(30%"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300x300/?pizza" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div> 
    )
}

export default Carousal;
