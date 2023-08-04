import React, { useEffect, useState } from 'react'
import { TableUsers } from '../Country/Table'
import UserModal from './UserModal'
import Navbar from '../Navbar'








const Users = () => {

    const [users, setUsers] = useState()
    const [countryItem, setCountryItem] = useState({})
    const [modal, setModal] = useState(false)
    const [sendChange, setSend] = useState(false)

    const [data, setData] = useState({})


    let [countries, setCountries] = useState([])
    let [roles, setRoles] = useState([])


    useEffect(() => {
        fetch("https://bear-payline-server-87da0985e77c.herokuapp.com/api/country/get/all")
            .then(res => res.json())
            .then(data => {
                setCountries(data)
            })

        fetch("https://bear-payline-server-87da0985e77c.herokuapp.com/api/role/get/all")
            .then(res => res.json())
            .then(data => {
                setRoles(data)
            })
    }, [])


    const Table = () => {
        console.log("table");
        return (<TableUsers users={users} setModal={setModal} setUserItem={setCountryItem} deleteUser={deleteUser} />)
    }
    async function Run() {
        await fetch('https://bear-payline-server-87da0985e77c.herokuapp.com/api/user/get/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUsers(data)
                console.log(data);
            });
    }



    const save = (id) => {
        console.log(countryItem.id);
        console.log(JSON.stringify(data));
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
            mode: "cors"
        };

        fetch(`https://bear-payline-server-87da0985e77c.herokuapp.com/api/country/uptade/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        setSend(prev => prev = !prev)

    }





    const dataChange = (event) => {
        let { value, id } = event.target

        console.log(id);
        if (id == "idcountry" && id == "idrole") {
            setData(prev => {
                return {
                    ...prev,
                    [id]: parseFloat(value)
                }
            })
        } else {
            setData(prev => {
                return {
                    ...prev,
                    [id]: value
                }
            })
        }


    }

    function deleteUser(id) {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow',
            mode: "cors"
        };

        fetch(`https://bear-payline-server-87da0985e77c.herokuapp.com/api/user/delete/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result) {
                    Run()
                    setSend(prev => !prev)

                }
            })
            .catch(error => console.log('error', error));
    }


    function send() {
        if (Object.keys(data).every((item) => item !== "")) {
            console.log(data);
            fetch("https://bear-payline-server-87da0985e77c.herokuapp.com/api/user/add", {
                method: 'POST',
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),

            }).then(res => res.json()).then(data => {
                if (!data.error) {
                    alert("Ma'lumotlar to'g'ri kiritildi")
                    Run()
                    setSend(prev => prev = !prev)
                }
            })

        }
    }


    useEffect(() => {

        Run(setUsers)
        Table()
        console.log(sendChange);

    }, [sendChange])


    return (
        <div>
            <div className="container pt-4 pb-4">
                <Navbar/>
            </div>

            <main role="main" className="flex-shrink-0">
                <div className="container">
                    <h1>Create New User</h1>
                    <div className="row mt-5">
                        <div className="form-group col-6">
                            <label htmlFor="full_name">Full Name</label>
                            <input type="text" onChange={(event) => dataChange(event)} className="form-control" id="full_name" placeholder="Full Name" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" onChange={(event) => dataChange(event)} className="form-control" id="phone" placeholder="Enter Country Code" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="form-group col-6">
                            <label htmlFor="address">Address</label>
                            <input type="text" onChange={(event) => dataChange(event)} className="form-control" id="address" placeholder="Enter User Address" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="idcountry">Country</label>
                            <select onChange={(event) => dataChange(event)} className="form-control" id="idcountry"  >
                                <option >Select Country</option>
                                {
                                    countries.map((country, index) => (
                                        <option value={country.id} key={index}>{country.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="form-group col-6">
                            <label htmlFor="idrole">Role Id</label>
                            <select onChange={(event) => dataChange(event)} className="form-control" id="idrole" >
                                <option >Select Role</option>
                                {
                                    roles.map((role, index) => (
                                        <option value={role.id} key={index}>{role.role}</option>
                                    ))
                                }
                            </select>
                        </div>


                    </div>
                    <button type="submit" className="btn btn-primary mt-5" onClick={send}>Submit</button>
                </div>
            </main>

            {
                modal ? <UserModal countries={countries} rollar={roles} item={countryItem} close={() => setModal(false)} dataChange={(e) => dataChange(e)} save={() => save(countryItem.id)} /> : null
            }
            {
                users ? Table() : <div>
                    <img src={require("../../images/Spinner-1s-200px.svg").default} alt="" />
                </div>
            }
        </div >
    )
}

export default Users