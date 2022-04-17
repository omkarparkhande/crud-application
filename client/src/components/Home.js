import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleterOutlineIcon from '@mui/icons-material/DeleteOutline';
const Home = () => {
    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2">
                    <button className="btn btn-primary">Add data</button>
                </div>

                <table class="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Number</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>wipro</td>
                            <td>wipro@gmail.com</td>
                            <td>2193939293</td>
                            <td className='d-flex justify-content-between'>
                                <button className='btn btn-success'><RemoveRedEyeIcon/></button>
                                <button className='btn btn-primary'><CreateIcon/></button>
                                <button className='btn btn-danger'><DeleterOutlineIcon/></button>    
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>infosyis</td>
                            <td>infosyis@gmail.com</td>
                            <td>2193939222</td>
                            <td className='d-flex justify-content-between'>
                            <button className='btn btn-success'><RemoveRedEyeIcon/></button>
                                <button className='btn btn-primary'><CreateIcon/></button>
                                <button className='btn btn-danger'><DeleterOutlineIcon/></button>   
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home