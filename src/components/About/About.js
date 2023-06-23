import React from 'react';
import "./About.css";
import Terminal from "./Terminal";
import {SiCodechef} from 'react-icons/si';
import {SiLeetcode} from 'react-icons/si';
import {BsGithub} from 'react-icons/bs';
let colors = ["rgb(0,255,164)", "rgb(166,104,255)", "#27C93F"];

export default function About() {

    function aboutMeText() {
        return <div>
            <p className='para'>
                <span style={{color: colors[0]}}> tanmaypatel %  </span>  nano ~/aboutTanmay
            </p>
            
            <p className='para'><span style={{color: colors[0]}}>aboutTanmay <span
                style={{color: colors[2]}}> (main) </span> $ </span>
                I am a frontend developer with a strong passion for data structures 
                and problem-solving on platforms like LeetCode. 
                My portfolio showcases visually appealing web projects, 
                highlighting my proficiency in HTML, CSS, and JavaScript, 
                along with frameworks like React. 
            <br/> I am also passionate football and cricket fan, and I am looking to integrate my technical skills with these sports through relevant projects.

            </p>

            <p className='para'>
                <span style={{color: colors[0]}}> tanmaypatel % </span> cd /Profiles<br/>
                <span style={{color: colors[0]}}> tanmaypatel/Profiles % </span> ls
            </p>
            <div className='coding_profiles'>
                <a href='https://leetcode.com/tanmey/' target='_block'className='ids'> Leetcode </a>    
                <a href='https://www.codechef.com/users/tonikroos' target='_block' className='ids' > Codechef </a>
                <a href='https://github.com/iamtanmay07' target='_block' className='ids'> Github </a>
            </div>
        </div>
    }

    // function skillsText() {
        //     <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
        //     </p>
        //     <p><span style={{color: info.baseColor}}>skills/tools <span
        //         className={Style.green}>(main)</span> $</span> ls</p>
        //     <p style={{color: info.baseColor}}> Proficient With</p>
        //     <ul className={Style.skills}>
        //         {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
        //     </ul>
        //     <p style={{color: info.baseColor}}> Exposed To</p>
        //     <ul className={Style.skills}>
        //         {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
        //     </ul>
        // </>;
    // }

    // function miscText() {
    //     return <>
    //         <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
    //             hobbies/interests</p>
    //         <p><span style={{color: info.baseColor}}>hobbies/interests <span
    //             className={Style.green}>(main)</span> $</span> ls</p>
    //         <ul>
    //             {info.hobbies.map((hobby, index) => (
    //                 <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
    //             ))}
    //         </ul>
    //     </>;
    // }

    return (
        <div className='about'>
            <Terminal text={aboutMeText()} className='content'/>
            {/* <Terminal text={skillsText()} className='content'/> */}
            {/* <Terminal text={miscText()}/>  */}
        </div>
    )
}