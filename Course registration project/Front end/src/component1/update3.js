import React, { useState } from 'react';
// import './post.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './put.css';
import './update3.css';

function Update1() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');
    const [email, setEmail] = useState('');
    const [roletobecome,setRoletobecome]=useState('')
 
  async function update(event) {
    event.preventDefault();
    try {
        await axios.put("http://localhost:8080/putbook",
            {

                id: id,
               name:name,
                age:age,
                course:course,
                email:email,
                roletobecome:roletobecome
            });
        alert("Successfully Update");
        setId();
        setName();
        setAge();
        setCourse();
        setEmail();
        setRoletobecome();


    }
    catch (err) {
        alert("update Failed");
    }
}

  return (
    <>
    
<section class="vh-100 bg-image"
  style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Update user details</h2>

              <form>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" value={id} onChange={(event) => setId(event.target.value)}/>
                  <label class="form-label" for="form3Example1cg">Id:</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example3cg" class="form-control form-control-lg" value={name} onChange={(event) => setName(event.target.value)}/>
                  <label class="form-label" for="form3Example3cg">Name:</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="number" id="form3Example4cg" class="form-control form-control-lg" value={age} onChange={(event) => setAge(event.target.value)}/>
                  <label class="form-label" for="form3Example4cg">Age:</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" class="form-control form-control-lg" value={course} onChange={(event) => setCourse(event.target.value)}/>
                  <label class="form-label" for="form3Example4cdg">Course:</label>
                </div>
                
                <div class="form-outline mb-4">
                  <input type="email" id="form3Example4cdg" class="form-control form-control-lg" value={email} onChange={(event) => setEmail(event.target.value)}/>
                  <label class="form-label" for="form3Example4cdg">Email:</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" class="form-control form-control-lg"  value={roletobecome} onChange={(event) => setRoletobecome(event.target.value)}/>
                  <label class="form-label" for="form3Example4cdg">Roletobecome:</label>
                </div>

                <div class="d-flex justify-content-center">
                  <button 
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" type="submit" onClick={update}>Update</button>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
    
  );
}

function Update2() {
    const [fit, setFit] = useState([]);
  
    function handleAddTelevision(fits) {
      setFit([...fit, fits]);
    }
  
    return (
      <div className='all'>
      <br/>
      <div className="container">
        {/* <h1 className="title">TELEVISION DETAILS</h1> */}
        <Update1 Form onAddTelevision={handleAddTelevision} />
  
      </div>
      <br/><br/>
      {/* <center>
      <Link to='/'>
                  <button type="submit" class="btn btn-primary" style={{padding
                  :'5px'}}
                  >Back</button>
              </Link></center> */}
      </div>
      
    );
  }

export default Update2;