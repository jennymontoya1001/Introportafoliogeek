import React from 'react';

import {AboutS,Avatar,Img,Name,H2,Profession,Location} from  '../styled/AboutStyled'
import { Education } from './Education';

const About = () => {
    return(
        <AboutS>
            <div className="About-container">
                <Avatar>
                    <figure>
                        <Img src="https://res.cloudinary.com/duzf4vfki/image/upload/v1630271947/Clases/WhatsApp_Image_2021-08-28_at_10.26.49_AM_zy2rze.jpg" alt="Mi Avatar"/>
                    </figure>
                </Avatar>
                <Name>
                    <H2>Jenny Montoya</H2>
                </Name>
                <Profession>
                    <p>Instructora Academia Geek</p>
                </Profession>
                <Location>
                   <p>Medellín, Colombia</p>
                </Location>
                <div className="About-social">
                     Redes sociales
                </div>
            </div>
          
        </AboutS>
       
    )

}

export default About;



