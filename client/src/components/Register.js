import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {

    const [inpval, setINP] = useState({
        name: "",
        number: "",
        email: "",
        logo: "",
        state: "",
        city: "",
        desc: "",
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval)=>{
            return {
                ...preval,
                [name]:value
            }
        })
    }
    return (
        <div className='container'>
            <NavLink to="/">Home</NavLink>
            <form className='mt-4'>
                <div className='row'>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Company Name</label>
                        <input type="text" value={inpval.name} onChange={setdata} name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Contact Number</label>
                        <input type="number" value={inpval.number} onChange={setdata} name='number' class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Contact Email</label>
                        <input type="email" value={inpval.email} onChange={setdata} name='email' class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">State</label>
                        <input type="text" value={inpval.state} onChange={setdata} name='state' class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">City</label>
                        <input type="text" value={inpval.city} onChange={setdata} name='city' class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="formFile" class="form-label">Default file input example</label>
                        <input class="form-control" type="file" id="formFile"/>
                    </div>

                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Company Description</label>
                        <textarea value={inpval.desc} onChange={setdata} name="desc" className='form-control' id="" cols="30" rows="5"></textarea>

                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>


        </div>
    )
}

export default Register