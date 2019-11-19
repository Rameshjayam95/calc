//import React from 'react';
import React,{Component} from 'react';


class List extends React.Component {
    render(){
        return(
         <div className="container">
       <form>
     <table>
       <thead>
       <tr>
         <td>
         <td>City</td>
         <select value="test">
        <option value="Ford">Portland</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
        </select>
         </td>
         <td>
         <td>Construction</td>
           <select value="test">
        <option value="Ford">Portland</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
        </select>
         </td>



        <input value="display" type="button" name="display"></input>
       </tr>
       </thead>

       <thead>
             <tr>
                    <th>Id</th>
                    <th>Policy</th>
                    <th>Value type</th>
                    <th>Display type</th>
                    <th>Action</th>
             </tr>
   </thead>
     <tbody>
                     <tr class="odd">
                     <td>21</td>
                     <td>Parking Ratio</td>
                     <td>literal</td>
                     <td>Slider</td>
                     <td><a href="/admin/config/system/calculator/policy-data-edit?policy_id=21">Edit</a></td>
                 </tr>
                     <tr class="even">
                     <td>25</td>
                     <td>Urban Street Design</td>
                     <td>percentage</td>
                     <td>Boolean</td>
                     <td><a href="/admin/config/system/calculator/policy-data-edit?policy_id=25">Edit</a></td>
                 </tr>
                     <tr class="odd">
                     <td>23</td>
                     <td>Open Space Requirements</td>
                     <td>percentage</td>
                     <td>Slider</td>
                     <td><a href="/admin/config/system/calculator/policy-data-edit?policy_id=23">Edit</a></td>
                 </tr>
                     <tr class="even">
                     <td>24</td>
                     <td>Tax Abatement</td>
                     <td>percentage</td>
                     <td>Slider</td>
                     <td><a href="/admin/config/system/calculator/policy-data-edit?policy_id=24">Edit</a></td>
                 </tr>
                     <tr class="odd">
                     <td>28</td>
                     <td>Annual Property Tax Increase</td>
                     <td>percentage</td>
                     <td>Slider</td>
                     <td><a href="/admin/config/system/calculator/policy-data-edit?policy_id=28">Edit</a></td>
                 </tr>
                     <tr class="even">
                     <td>27</td>
                     <td>Rezoning and Variances</td>
                     <td>integer</td>
                     <td>Slider</td>
                     <td><a href="/admin/config/system/calculator/policy-data-edit?policy_id=27">Edit</a></td>
                 </tr>
                     <tr class="odd">
                     <td>26</td>
                     <td>City Permitting</td>
                     <td>integer</td>
                     <td>Slider</td>
                     <td><a href="/admin/config/system/calculator/policy-data-edit?policy_id=26">Edit</a></td>
                 </tr>
                     <tr class="even">
                     <td>19</td>
                     <td>County Inspection and Permitting</td>
                     <td>literal</td>
                     <td>Slider</td>
                     <td><a href="/admin/config/system/calculator/policy-data-edit?policy_id=19">Edit</a></td>
                 </tr>
                     <tr class="odd">
                     <td>97</td>
                     <td>Inspection Fees</td>
                     <td>literal</td>
                     <td>Slider</td>
                     <td><a href="/admin/config/system/calculator/policy-data-edit?policy_id=97">Edit</a></td>
                 </tr>
                     <tr class="even">
                     <td>18</td>
                     <td>TOD Material Requirements</td>
                     <td>literal</td>
                     <td>Boolean</td>
                     <td><a href="/admin/config/system/calculator/policy-data-edit?policy_id=18">Edit</a></td>
                 </tr>
         </tbody>

     </table>


       </form>
     </div>
        );
    }
}
class Create extends React.Component {
  render(){
   return (
      <div><button type="button"> create </button>
     <List />
     </div>
   );

  }
}


export default Create;



/**<header>
<h3> City</h3>
  <div class="dropdown">
   <select value="test">
<option value="Ford">Portland</option>
<option value="Volvo">Volvo</option>
<option value="Fiat">Fiat</option>
</select>
</div>
<h3> Construction</h3>
<div class="dropdown">
<select value="test">
<option value="Ford">Portland</option>
<option value="Volvo">Volvo</option>
<option value="Fiat">Fiat</option>
</select>
</div>
</header>**/
