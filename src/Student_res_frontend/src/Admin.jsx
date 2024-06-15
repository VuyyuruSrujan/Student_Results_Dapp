import { Student_res_backend } from 'declarations/Student_res_backend';
import { useState } from 'react';
import AddStudent from './AddStudent.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admin(){
  var [StudentNames , setStudentNames] = useState([]);
    const Names = async() =>{
   var result = await Student_res_backend.getAllParticipants();
    setStudentNames(result);
    // console.log(result);
    };
    for(var i=0;i<1;i++){
        Names();
    };

    async function SubmitMarks(rollNo){
      var maths = BigInt(document.getElementById(`math-${rollNo}`).value);
      var phy = BigInt(document.getElementById(`phy-${rollNo}`).value);
      var dbms = BigInt(document.getElementById(`dbms-${rollNo}`).value);
      var os = BigInt(document.getElementById(`os-${rollNo}`).value);

      console.log("rollNo",rollNo);
      var details = {
        rollNo : rollNo,
        marks :[maths,phy,dbms,os]
      };

      var result = await Student_res_backend.PushStudentMarks(details);
      console.log(result);
      toast.success('Marks entered Successfully', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };

    return(
        <div>
          <div id='PageCont'>
            <div>
              <h2 id="Instructions">Instructions:</h2>
              <ol>
                <li>First add the student <b>Name</b> and <b>Roll NO</b> of new student 👉 </li><br />
                <li>After adding the new student Refresh the page then enter marks for him in the below</li>
              </ol>
            </div>
              < AddStudent />
              <div id='details'>
                  <table>
                      <tr id="Subjects">
                          <th>Roll No</th>
                          <th>Name</th>
                          <th>Maths</th>
                          <th>Physics</th>
                          <th>DBMS</th>
                          <th>Operating system</th>
                      </tr>
                  </table>
                  {StudentNames.length == 0 ? null :(
                      StudentNames.map((StudentName,index) => (
                          <div key={index}>
                              {/* <hr />
                              <p>Name:{StudentName.name}</p>
                              <p>Roll No: {StudentName.rollNo} </p> */}
                              <table id="Data">
                                  <tr>
                                      <td id="stuName">{StudentName.rollNo}</td>
                                      <td>{StudentName.name}</td>
                                      <td><input type="Number" id={`math-${StudentName.rollNo}`} required /> </td>
                                      <td><input type="Number" id={`phy-${StudentName.rollNo}`} required /></td>
                                      <td><input type="Number" id={`dbms-${StudentName.rollNo}`} required /></td>
                                      <td><input type="Number" id={`os-${StudentName.rollNo}`} required /></td>
                                     <button onClick={() => SubmitMarks(StudentName.rollNo)} id='AdminStuBtn'>Submit</button>
                                  </tr>
                              </table>
                          </div>
                      ) )
                  ) }
              </div>
          </div>
          <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
        </div>
    );
};
export default Admin;

