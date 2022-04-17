import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleterOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



const Details = () => {
  return (
    <div className='container mt-3'>
      <h1>Welcome</h1>
      
      <Card sx={{ maxWidth: 6000 }}>
        <CardContent>
        <div className='add-btn text-end'>
            <button className='btn btn-primary mx-2'><CreateIcon /></button>
            <button className='btn btn-danger'><DeleterOutlineIcon /></button>
          </div>
          
          <div className='row'>
            <div className='left_view col-lg-6 col-md-6 col-12'>
              <img src="/profile.png" style={{ width: 50 }} alt="profile" />
              <h3 className='mt-3'>Company Name: <span >Wipro</span></h3>
              <h3 className='mt-3'>email id:<span >wipro@gmail.com</span></h3>
              <h3 className='mt-3'>City:<span >mumbai</span></h3>
            </div>
            <div className='right_view col-lg-6 col-md-6 col-12'>
              <h3 className='mt-5'>Company Number: <span >1234567890</span></h3>
              <h3 className='mt-3'>state:<span >maharashtra</span></h3>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Details