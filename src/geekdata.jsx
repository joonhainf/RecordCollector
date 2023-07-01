import React from 'react'
import JsonData from './storehere.json'
 function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.name}</td>
                    <td>{info.age}</td>
                    <td>{info.occupation}</td>
                    <td>{info.company}</td>
                    <td>{info.educationLevel}</td>
                    <td>{info.university}</td>
                    <td>{info.salary}</td>
                    <td>{info.location}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Occupation</th>
                    <th>Company</th>
                    <th>Education Level</th>
                    <th>University</th>
                    <th>Salary</th>
                    <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default JsonDataDisplay;