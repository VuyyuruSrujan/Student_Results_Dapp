
import { Student_res_backend } from 'declarations/Student_res_backend';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Student(){
 var [Marks , setMarks] = useState([]);
 var [Name , setName] = useState([]);
    async function GetResult(){
        var rollNo = document.getElementById('rollNo').value;
        var result = await Student_res_backend.getMarksById(rollNo);
        var name = await Student_res_backend.getStudentDetById(rollNo);
        console.log(result);
        console.log(name);
        setMarks(result);
        setName(name);
        if(result == ""){
            toast.error('Enter a valid roll no', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }
    return(
        <div>
            <center><h2>Enter your Roll Number to check your Result</h2>
            <p id="Note"><b>Note:</b>Enter you number in capital letters</p><br />
            <div id="AdNumber">
                <label>Admission Number:</label>
                <input type="Text" placeholder="Enter your Roll Number" id="rollNo" required /><br /><br />
                <button onClick={GetResult} id="GetResultBtn">Get Result</button>
            </div>
            <div id="ResultData">
                <div>
                    {Name.length == 0 ? null :(
                        Name.map((StuName , index) => (
                            <div key={index}>
                                <p>Name:<b>{StuName.name.toString()}</b></p>
                                <p>RollNo: {StuName.rollNo}</p>
                            </div>
                        ) )
                    )}
                </div>
                <div>
                    {Marks.length == 0 ? null:(
                        Marks.map((subMark,index) =>(
                            <div key={index}>
                                <table>
                                    <tr>
                                        <th>SUBJECTS</th>
                                        <th>MARKS</th>
                                        <th>Status</th>
                                    </tr>
                                    <tr>
                                        <td>Maths</td>
                                        <td>{Number(subMark.marks[0].toString())}</td>
                                        <td>{Number(subMark.marks[0].toString()) > 40 ? 'PASS' : 'FAIL'}</td>
                                    </tr>
                                    <tr>
                                        <td>Physics</td>
                                        <td>{subMark.marks[1].toString()}</td>
                                        <td>{Number(subMark.marks[1].toString()) > 40 ? 'PASS' : 'FAIL'}</td>
                                    </tr>
                                    <tr>
                                        <td>DBMS</td>
                                        <td>{subMark.marks[2].toString()}</td>
                                        <td>{Number(subMark.marks[2].toString()) > 40 ? 'PASS' : 'FAIL'}</td>
                                    </tr>
                                    <tr>
                                        <td>Operating system</td>
                                        <td>{subMark.marks[3].toString()}</td>
                                        <td>{Number(subMark.marks[3].toString()) > 40 ? 'PASS' : 'FAIL'}</td>
                                    </tr>
                                    <br />
                                    <tr>
                                        <td>Grand Total</td>
                                        <td> {Number(subMark.marks[0].toString())+Number(subMark.marks[1].toString())+
                                        Number(subMark.marks[2].toString())+Number(subMark.marks[3].toString())} </td>
                                    </tr>
                                </table>
                            </div>
                        ))
                    )}
                </div>

            </div>
            </center>
            <ToastContainer
                position="top-right"
                autoClose={2000}
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
export default Student;


