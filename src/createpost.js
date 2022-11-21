import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './createpost.css'
import { styled, Box, TextareaAutosize,Typography  } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
function Createpost() {
    const Image = styled(Box)`
    width: 100%;
    background: url(https://www.makerstations.io/content/images/2022/03/olja-lobkis-studygram-04.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; object-fir:cover;
`;
const Textarea = styled(TextareaAutosize)`
    width: 95%;
    margin-left:40px;
    margin-right:30px;
    margin-top: 10px;
    font-size: 18px;
`;
const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;
  return (
    <div>
    <div className='banner'>
    <Image>
    <Heading>PEN DOWN YOUR THOUGHTS</Heading>
    </Image>
    </div>
    
    <form className='forms'>
    <label  htmlFor="fileinput">
    <div>
    <Add fontSize="large" color="action" />
</div>
    </label>
    <br/>
    <input className='forms-inp' type="file" id="fileinput"></input>
    <input className='inpu1' type="text" placeholder='Title'></input>
    <button type="button" className="butn">PUBLISH</button>
    </form>
    <Textarea rowsMin={5}
    placeholder="Tell your story..."
    name='description'/>
    </div>
  )
}

export default Createpost
