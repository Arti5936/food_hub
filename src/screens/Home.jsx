import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import Carousal from '../components/Carousal';

function Home() {
  const[search,setSearch]= useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    setFoodItems(response[0]);
    setFoodCat(response[1]);
  }

  useEffect(() => {
    const fetchData = async () => {
      await loadData();
    }

    fetchData();
  }, []);

  return (
    <div className='' style={{ "background": "#000000" }}>
      <div><Navbar /></div>
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
                            <div className="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{
                                  setSearch(e.target.value)
                                }} />
                               
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300x300/?burger" className="d-block w-100" alt="..." style={{filter:"brightness(30%"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <div className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{
                                  setSearch(e.target.value)
                                }} />
                               
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300x300/?pizza" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <div  className="d-flex">
                               
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{
                                  setSearch(e.target.value)
                                }} />
                            </div>
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
      <div className='container'>
        {foodCat.length !== 0 ?
          foodCat.map((data) => {
            return (
              <div  className='row mb-3 fs-10'>
                <div key={data._id} className="fs-2 m-3 text-light">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItems.length !== 0 ?
                  foodItems.filter((item) => item.CategoryName === data.CategoryName&&(item.name.toLowerCase().includes(search)))
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                          <Card foodName={filterItems.name} options={filterItems.options[0]} imgSrc = {filterItems.img}/>
                        </div>
                      );
                    })
                  : <div>no such data</div>
                }
              </div>
            );
          })
          : <div>No food categories available</div>
        }
        
      </div>
      <div><Footer /></div>
    </div>
  );
}

export default Home;
