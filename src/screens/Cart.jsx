

import React from 'react';
import {useCart,useDispatch} from '../components/ContextReducer';
import ClearIcon from '@mui/icons-material/Clear';
function Cart() {
  let data = useCart();
  let dispatch = useDispatch();

  if(data.length===0){
return(<div>
<div className = "m-5 w-100 text-center fs-3">The cart is empty</div>

</div>)


  }
  let totalPrice = data.reduce((total,food)=>total+food.price,0)
  return (
    <div>
  <div className="container m-auto mt-5 table-responsive-sm table-responsive-md">
 <table className='table table-hover'>
<thead className="table table-hover">
<tr>
  <th scope = "col">#</th>
  <th scope = "col">Name</th>
  <th scope = "col">Quantity</th>
  <th scope = "col">Options</th>
  <th scope = "col">Amount</th>
  <th scope = "col">Amount</th>
</tr>


</thead>
<tbody>
{data.map((food,index)=>{
 <tr>
 <th scope="row">{index+1}</th>
 <td>{food.name}</td>
 <td>{food.qty}</td>
 <td>{food.size}</td>
 <td>{food.price}</td>
 <td ><button type="button" className="btn p-0"><ClearIcon  onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td>
 </tr>


})}
</tbody>
 </table>
 <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>

  </div>




    </div>
  )
}

export default Cart