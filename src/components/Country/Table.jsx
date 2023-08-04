import React from 'react'
import * as Feather from 'react-icons/fi';

const TableCountry = ({ country, deleteCountry, setCountryItem, setModal }) => {
    return (
        <>

            <table className="table table-striped w-75 m-auto border mt-5 mb-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Country Name</th>
                        <th scope="col">Country Code</th>
                        <th scope="col">Phone Code</th>
                        <th scope="col">Languages</th>
                        <th scope="col">Currency</th>
                        <th scope="col">Commission</th>
                        <th scope="col">CRUD</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        country && country.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td >{item.name}</td>
                                <td >{item.code}</td>
                                <td >{item.phone_code}</td>
                                <td >{item.lang_arr}</td>
                                <td >{item.currency}</td>
                                <td >{item.commission}</td>
                                <td>
                                    <div className='d-flex gap-2 justify-content-center'>
                                        <button type="button" className="btn btn-outline-primary" onClick={() => {
                                            setCountryItem(prev => prev = item)
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



        </>
    )
}



const TableUsers = ({ users, deleteUser, setUserItem, setModal }) => {

    return (
        <>

            <table className="table table-striped w-75 m-auto border mt-5 mb-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">ID Country</th>
                        <th scope="col">ID Role</th>
                        <th scope="col">Email Status</th>
                        <th scope="col">Status</th>
                        <th scope="col">CRUD</th>
                    </tr>
                </thead>
                <tbody>


                    {
                       users.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td >{item.full_name}</td>
                                <td >{item.phone}</td>
                                <td >{item.idcountry}</td>
                                <td >{item.idrole}</td>
                                <td >{item.email_status}</td>
                                <td >{item.status}</td>
                                <td>
                                    <div className='d-flex gap-2 justify-content-center'>
                                        <button type="button" className="btn btn-outline-primary" onClick={() => {
                                            setUserItem(prev => prev = item)
                                            setModal(true)
                                        }}>
                                            <Feather.FiEdit size={20} color="inherit" />
                                        </button>

                                        <button type="button" className="btn btn-outline-danger" onClick={() => deleteUser(item.id)}>
                                            <Feather.FiMinusCircle size={20} color="inherit" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>



        </>
    )
}

export { TableCountry, TableUsers }