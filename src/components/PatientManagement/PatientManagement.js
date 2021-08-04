import React, { useReducer, useRef } from 'react';
import '../../App.css';
import { AiFillDelete } from 'react-icons/ai';
import { patientReducer, patientState } from '../../reducer/patientReducer';

const PatientManagement = () => {
    const nameRef = useRef()
    const [state, dispatch] = useReducer(patientReducer, patientState);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patients.length + 1
        })
        nameRef.current.value = '';
    }
    return (
        <div className="App-header">
            <h1>Patient Management:{state.patients.length} </h1>
            <div style={{ height: '300px', overflow: 'scroll' }}>
                {
                    state.patients.map(pt => <div
                        style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '20px', boxShadow: '1px 1px 5px black', marginTop: '10px', padding: '10px', width: "500px" }}
                        key={pt.id}
                        className="row" >
                        <div className="col-1">
                            {pt.id}.
                        </div>
                        <div className="col-10">

                            {pt.name}
                        </div>
                        <div className="col-1">
                            <button className="btn btn-danger" onClick={() => dispatch({ type: 'REMOVE_PATIENT', id: pt.id })}><AiFillDelete style={{ color: 'white', fontSize: '25px' }} /></button>
                        </div>
                    </div>)
                }
            </div>
            
            <form className="mt-3" style={{outline:"none",borderRadius:'100px'}} onSubmit={handleSubmit} action="">
                <input style={{ outline: "none", borderRadius: '100px' }} ref={nameRef} type="text" />
            </form>
            
        </div>
    );
};

export default PatientManagement;