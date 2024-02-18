import React from 'react';


function Card(props) {
  let options = props.options;
let priceOptions = Object.keys(options);
  return (
    <div >
      <div className="card mt-4" style={{ width: '100%', background: '#1B1212', color: '#fff', borderRadius: '40px'}}>
        <img src={props.imgSrc} className="card-img-top" style={{height:"120px", objectFit:"fill" }} alt="Food" />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded"  >
              
            
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                )
              })}
            </select>
             <select className='m-2 h-100 bg-success rounded'>
              {
                priceOptions.map((data)=>{
                  return <option key ={data} value ={data}>{data}</option>
                })
              }
             </select>
            <div className="d-inline h-100 fs-5">
            Total price
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Card;
