import { Link } from 'react-router-dom';

function First(){

    return(
        <div>
            <center>
                <div>
                    <h2 id='heads'>Are you a Student or Faculty??</h2>
                </div>
                <div id='FButtons'>
                <Link to="/student" style={{ textDecoration: 'none' }}><button id='StuBtn'>Student</button></Link>
                <Link to="/admin" style={{ textDecoration: 'none' }}><button id='AdminBtn'>Admin</button></Link>
                </div>
            </center>
        </div>
    );

};

export default First;