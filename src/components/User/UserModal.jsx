import React from 'react'
// import "../../style/country.scss"
import * as Feather from 'react-icons/fi';

const UserModal = ({ item, countries, rollar, dataChange, save, close }) => {
    const { name = "salom",
        commission = 4.5,
        currency = "",
        phone_code = "",
        lang_arr = "",
        code = "" } = item


    return (
        <>
            <div className="modalCustom"  >
                <div className="modal-content contentModal">
                    <div className="headerModal ">
                        <button type="button" className="closeModal" onClick={() => close()} data-dismiss="modal" aria-label="Close">
                            <Feather.FiXCircle size={25} />
                        </button>
                    </div>
                    <div className="modal-body body">
                        <main role="main" className="flex-shrink-0">
                            <div className="container">
                                <h1>Update User: {item.phone}</h1>
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
                                                rollar.map((role, index) => (
                                                    <option value={role.id} key={index}>{role.role}</option>
                                                ))
                                            }
                                        </select>
                                    </div>


                                </div>
                                <button type="submit" className="btn btn-primary mt-5" onClick={save}>Submit</button>
                            </div>
                        </main>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UserModal