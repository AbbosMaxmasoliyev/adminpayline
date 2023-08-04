import React, { useEffect, useState } from 'react'
import * as Feather from 'react-icons/fi';
import CountryModal from './CountryModal';
import {TableCountry} from './Table';
import Navbar from '../Navbar';

const Country = () => {
    const [country, setCountry] = useState(false)
    const [countryItem, setCountryItem] = useState({})
    const [modal, setModal] = useState(false)
    const [sendChange, setSend] = useState(false)

    const [data, setData] = useState({})

    async function Run() {
        await fetch('https://bear-payline-server-87da0985e77c.herokuapp.com/api/country/get/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCountry(data)
                console.log(data);
            });
    }
    const save = (id) => {
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

    useEffect(() => {

        Run()
        table()

    }, [sendChange])



    function table() {
        return <TableCountry country={country} setModal={setModal} setCountryItem={setCountryItem} deleteCountry={deleteCountry} />
    }


    const dataChange = (event) => {
        let { value, id } = event.target

        if (id == "commission") {
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

    function deleteCountry(id) {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow',
            mode: "cors"
        };

        fetch(`https://bear-payline-server-87da0985e77c.herokuapp.com/api/country/delete/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        Run()
    }


    function send() {
        if (Object.keys(data).every((item) => item !== "")) {

            console.log(JSON.stringify(data));

            fetch("https://bear-payline-server-87da0985e77c.herokuapp.com/api/country/add", {
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


    return (
        <div>
            <div className="container pt-4 pb-4">
                <Navbar/>
            </div>

            <main role="main" className="flex-shrink-0">
                <div className="container">
                    <h1>Create New Coutry</h1>
                    <div className="row mt-5">
                        <div className="form-group col-6">
                            <label htmlFor="name">Country Name</label>
                            <input type="text" onChange={(event) => dataChange(event)} className="form-control" id="name" placeholder="Enter Country Name" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="code">Code</label>
                            <input type="text" onChange={(event) => dataChange(event)} className="form-control" id="code" placeholder="Enter Country Code" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="form-group col-6">
                            <label htmlFor="phone_code">Phone code</label>
                            <input type="text" onChange={(event) => dataChange(event)} className="form-control" id="phone_code" placeholder="Enter Country Phone Code" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="name">Languages</label>
                            <input type="text" onChange={(event) => dataChange(event)} className="form-control" id="lang_arr" placeholder="Enter Languages" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="form-group col-6">
                            <label htmlFor="currency">Currency</label>
                            <input type="text" onChange={(event) => dataChange(event)} className="form-control" id="currency" placeholder="Enter currency" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="commission">Comission</label>
                            <input type="number" onChange={(event) => dataChange(event)} className="form-control" id="commission" placeholder="Enter commission" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-5" onClick={send}>Submit</button>
                </div>
            </main>

            {
                modal ? <CountryModal item={countryItem} close={() => setModal(false)} dataChange={(e) => dataChange(e)} save={() => save(countryItem.id)} /> : null
            }
            {
                country ? table() : <div>
                    <img src={require("../../images/Spinner-1s-200px.svg").default} alt="" />
                </div>
            }
        </div >
    )
}

export default Country