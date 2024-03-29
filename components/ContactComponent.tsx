// MyComponent.jsx
import React from 'react';
import myImage from '../images/Ahmad.png';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import resume from '../images/resume.png';

function HomeComponent() {
  return (
    <div className='flex'>
        <div className=' justify-between align-middle content-center'>
            <div className='flex mx-24 mt-20 '>
                <img className="w-6 h-6" src={email.src} alt="email" />
                <a className='ml-4 text-blue-700 hover:underline' href= "mailto:ahmad.issa.yes@gmail.com">ahmad.issa.yes@gmail.com </a>
            </div>
            <div className='flex mx-24 mt-6 '>
                <img className="w-6 h-6" src={linkedin.src} alt="linkedin" />
                <a className='ml-4  text-blue-700 hover:underline' href= "https://www.linkedin.com/in/ahmad-issa-02l/">https://www.linkedin.com/in/ahmad-issa-02l/ </a>
            </div>
            <div className='flex mx-24 mt-6 '>
                <img className="w-6 h-6" src={github.src} alt="github" />
                <a className='ml-4  text-blue-700 hover:underline' href= "https://github.com/AhmadIssa02">https://github.com/AhmadIssa02 </a>
            </div>
            <div className='flex mx-24 mt-6 '>
                <img className="w-6 h-6" src={resume.src} alt="resume" />
                <a className='ml-4  text-blue-700 hover:underline' href="/resume.pdf" download> Download Resume </a>
            </div>
        </div>
        <img className="w-96 h-96 mr-24 " src={myImage.src} alt="myImage" />
     
        <div className='mb-44'></div>
    </div>
  );
}

export default HomeComponent;

