import React, { useEffect, useState } from 'react'
import * as Feather from 'react-icons/fi';
import RoleModal from './RoleModal';
import Navbar from '../Navbar';



let initialData = {


}


const Role = () => {
    const [country, setRole] = useState(false)
    const [roleItem, setRoleItem] = useState({})
    const [modal, setModal] = useState(false)
    const [sendChange, setSend] = useState(false)


    const save = (id) => {
        console.log(data);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://bear-payline-server-87da0985e77c.herokuapp.com/api/role/uptade/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        setSend(prev => prev = !prev)
    }

    useEffect(() => {


        Run();
    }, [sendChange])

    const [data, setData] = useState(initialData)


    const dataChange = (event) => {
        let { value, id } = event.target


        setData(prev => {
            return {
                ...prev,
                [id]: value
            }
        })
        console.log(data);
    }

    function deleteCountry(id) {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow',
            mode: "cors"
        };

        fetch(`https://bear-payline-server-87da0985e77c.herokuapp.com/api/role/delete/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        Run()
    }


    function send() {
        if (Object.keys(data).every((item) => item !== "")) {

            console.log(JSON.stringify(data));

            fetch("https://bear-payline-server-87da0985e77c.herokuapp.com/api/role/add", {
                method: 'POST',
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),

            }).then(res => res.json()).then(data => {
                if (!data.error) {
                    alert("Ma'lumotlar to'g'ri kiritildi")
                }
            })
        }
    }

    function Run() {
        fetch('https://bear-payline-server-87da0985e77c.herokuapp.com/api/role/get/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setRole(data)
            });
        console.log(country);
    }



    return (
        <div>
            <div className="container pt-4 pb-4">
                <Navbar/>
            </div>

            <main role="main" className="flex-shrink-0">
                <div className="container">
                    <h1>Create New Role</h1>
                    <div className="row mt-5">
                        <div className="form-group col-6">
                            <label htmlFor="role">Role</label>
                            <input type="text" onChange={(event) => dataChange(event)} className="form-control" id="role" placeholder="Enter Role" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="licence">Code</label>
                            <input type="text" onChange={(event) => dataChange(event)} className="form-control" id="licence" placeholder="Enter Licence" />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-5" onClick={send}>Submit</button>
                </div>
            </main>

            {
                modal ? <RoleModal item={roleItem} close={() => setModal(false)} save={() => save(roleItem.id)} dataChange={(e) => dataChange(e)} /> : null
            }
            {
                country ?
                    <table className="table table-striped w-75 m-auto border mt-5 mb-5">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Role</th>
                                <th scope="col">Licence</th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                country.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td >{item.role}</td>
                                        <td >{item.licence}</td>
                                        <td>
                                            <div className='d-flex gap-2 justify-content-center'>
                                                <button type="button" className="btn btn-outline-primary" onClick={() => {
                                                    setRoleItem(prev => prev = item)
                                                    setModal(true)
                                                }}>
                                                    <Feather.FiEdit size={20} color="inherit" />
                                                </button>

                                                <button type="button" className="btn btn-outline-danger" onClick={() => deleteCountry(item.id)}>
                                                    <Feather.FiMinusCircle size={20} color="inherit" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>

                    : <div>
                        <img src={require("../../images/Spinner-1s-200px.svg").default} alt="" />
                    </div>
            }
        </div >
    )
}

export default Role