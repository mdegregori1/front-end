import React from "react";
import CreateStudentForm from "../components/CreateStudentForm";
import styled from "styled-components";


const CreateSection = styled.div`
background-color: #E5E8E8;
height:100vh; 
margin-top: -1.3rem ;
`;


export const CreateStudent = () => {
    return (
        <CreateSection>
            <CreateStudentForm/>
        </CreateSection>
    )
}

export default CreateStudent