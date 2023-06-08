import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './styles.css';
import { v4 as uuidv4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

uuidv4();


const DataTable = () => {

    const [items, setItems] = useState([])

    const addItems = (name, studentid, dob, email) => {
        if(!name || !studentid || !dob || !email)
        {
            toast.warning('Please fill in all data !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else{
            setItems([...items, { id: items.length + 1, name: name, studentid: studentid, dob: dob, email: email }])
        console.log(items)
        toast.success('Added Items Successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
        }
        
    }

    const deletedItems = (id) => {
        setItems(items.filter(item => item.id !== id))
        toast.success('Deleted Items successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var studentid = document.getElementById("studentid").value;
        var dob = document.getElementById("dob").value;
        var email = document.getElementById("email").value;
        addItems(name, studentid, dob, email)

    }


    return (
        <div>
            <form onSubmit={handleSubmit} className='TableForm'>
                <div className='TableForm_div'>
                    <input id='studentid' className='TableForm_input' type="number" placeholder='MSSV'></input>
                    <input id='name' className='TableForm_input' type="text" placeholder='Ho va Ten'></input>
                </div>
                <div className='TableForm_div'>
                    <input id='dob' className='TableForm_input' type="date" placeholder='Ngay sinh'></input>
                    <input id='email' className='TableForm_input' type="email" placeholder='Email'></input>
                </div>
                <div className='TableForm_submit'>
                    <button type="submit" className='TableForm_button'>Them</button>
                </div>


            </form>
            <table className='TableData'>
                <tbody>
                    <tr className='TableData_style'>
                        <th className='TableData_style' >STT</th>
                        <th className='TableData_style' >MSSV</th>
                        <th className='TableData_style' >Ngay sinh</th>
                        <th className='TableData_style' >Ho va Ten</th>
                        <th className='TableData_style' >Email</th>
                    </tr>

                    {items.map((item) => {
                        return (
                            <tr key={uuidv4()} className='TableData_style' >
                                <th className='TableData_style' >{item.id}</th>
                                <th className='TableData_style' >{item.studentid}</th>
                                <th className='TableData_style' >{item.dob}</th>
                                <th className='TableData_style' >{item.name}</th>
                                <th className='TableData_style' >{item.email}</th>
                                <th>
                                    <button onClick={() => deletedItems(item.id)}>Delete</button>
                                </th>
                            </tr>
                        )
                    })}

                </tbody>

            </table>
            <ToastContainer />
        </div>

    )
}

export default DataTable;