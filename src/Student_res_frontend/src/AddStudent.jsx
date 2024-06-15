import React, { useState } from 'react';
import { Student_res_backend } from 'declarations/Student_res_backend';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddStudent() {
  const [showForm, setShowForm] = useState(false);

  function handleButtonClick() {
    setShowForm(true);
  }

  function handleCloseForm(e) {
    // Close the form only if the user clicks outside the form content
    if (e.target.id === 'form-background') {
      setShowForm(false);
    }
  }

  async function AddStudentDet() {
    var StudentName = document.getElementById('stuName').value;
    var StuRollNo = document.getElementById('StuRollNo').value;

    if (StudentName !== "" && StuRollNo !== "") {
      var stuDet = {
        name: StudentName,
        rollNo: StuRollNo
      };
      var adding = await Student_res_backend.addstudent(stuDet);
      console.log(adding);
      toast.success('Successfully added', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.warn('Fill all the details', {
        position: "bottom-right",
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

  return (
    <div>
      <button onClick={handleButtonClick} id="AddNewStu">Add New Student</button>
      {showForm && (
        <div id="form-background" className="blur-background" onClick={handleCloseForm}>
          <div className="form-content">
            <div>
              <div>
                <label>New Student Name:</label>
                <input type="text" id="stuName" />
                <br /><br />
                <label>New Student Roll No:</label>
                <input type="text" id="StuRollNo" />
              </div>
            </div><br />
            <button onClick={AddStudentDet} id="AddBtn">Add</button>
          </div>
        </div>
      )}
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
}

export default AddStudent;
