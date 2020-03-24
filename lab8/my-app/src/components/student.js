import React from "react";
import Courses from "./courses";
const Student = (props) =>{
    const enroll = props.enrolled
    const list = enroll.map((enrolled)=>{
        return <li>Student is is enrolled in <b>{enrolled}</b></li>
    })
    return <p> Student <b>{props.name}</b> with <b>{props.number}</b><br></br>
    {list}</p>;
};

export default Student;