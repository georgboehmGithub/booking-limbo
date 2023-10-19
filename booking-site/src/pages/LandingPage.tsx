import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../Header';
import bannerImage from "../Banner.jpeg"
import Button from '../Button';
import TextArea from '../Textarea';
import SoundcloudPlayer from '../SoundcloudPlayer';
import { useNavigate } from "react-router-dom"

const LandingPage: React.FC<{}> = () => {
  const navigate = useNavigate()
  return (

    <div className="flex flex-col items-center content-center">
      <div className='border border-gray-300 max-w-3xl'>
        <Header pathToBannerImage={bannerImage} />
        <br></br>
        <p className='mx-4'>Ahoi! <br></br> Call me City Limbo. I am one of many Techno artists in Berlin. I created this website to get in touch with people and play heavy techno at your next event. <br></br><br></br></p>
        <p className='mx-4'>My latest Set on Soundcloud to get some idea of my style:</p>
        <br />
          <SoundcloudPlayer  linkStyles={{
            color: "#cccccc",
            textDecoration: "none"
          }} divStyle={{
            fontSize: '10px',
            color: '#cccccc',
            overflow: 'hidden',
            fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
            fontWeight: '100',
          }} />
        <br />
        <br />
        <p className='mx-4'>Send me a booking request and I'll contact you shortly!</p>
        <br />
        <br />
        <div className='flex flex-col items-center'>
        <Button onClick={() => navigate("booking")} text='Book now' color='blue' />
        </div>
      </div>
    </div>)
}

export default LandingPage
