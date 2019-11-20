import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
// import {fetchAssignments} from "../actions" 

const CardsWrapperDiv = styled.div`

`

const AssignmentCardDiv = styled.div`

`

const AssignmentNameH2 = styled.h2`

`

const AssignmentDeadlineH3 = styled.h3`

`

const AssignmentList = (props) => {
   const [assignmentList, setAssignmentList] = useState([]);
   console.log({ assignmentList })
   console.log('student card props', props)
   useEffect(() => {
      const id = props.match.params.id
      axiosWithAuth()
         .get(`https://better-professor-back-end.herokuapp.com/projects/students/${id}`)
         .then(re => {
            console.log({ re })
            setAssignmentList([...assignmentList, ...re.data])
         })
         .catch(error => {
            console.log(error.message)
         })

   }, [props.match.params.id])

   const sendMessage = () => {
      const id = props.match.params.id
      props.history.push(`/message/${id}`)

   }

const deleteAssignment = event => {
   const id = event.target.value
   console.log('props.match.params', props.match.params);
   axiosWithAuth()
   .delete(`https://better-professor-back-end.herokuapp.com/projects/${id}`)
   .then(res => {
       console.log('deleted assignment ', res);
   })
   .catch(err => console.log(err.response));
   }



   return (
      <CardsWrapperDiv>Assignments List
         {assignmentList.map(item => {
         return (
            <AssignmentCardDiv key={item.id}>
               <AssignmentNameH2>{item.project_name}</AssignmentNameH2>
               <AssignmentDeadlineH3>Deadline: {item.deadline}</AssignmentDeadlineH3>
               <button>Edit</button>
               <button value={item.id} onClick={deleteAssignment}>Erase</button>
               <button onClick={sendMessage}>Send Message</button>
            </AssignmentCardDiv>
         )
      })}
      </CardsWrapperDiv>
   )
}

export default AssignmentList;

// const mapStateToProps = state => {
//    return {
//       assignments: state.assignments,
//       isFetching: state.isFetching
//    }
// }


// export default connect(
//    mapStateToProps,
//    {fetchAssignments}

// )(AssignmentList)

