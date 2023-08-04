import React from 'react'
// import "../../style/country.scss"
import * as Feather from 'react-icons/fi';

const RoleModal = ({ item, dataChange, save, close }) => {
    const { role, licence } = item


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
                                <h1>Update Role: {role}</h1>
                                <div className="row mt-5">
                                    <div className="form-group col-6">
                                        <label htmlFor="role">Role</label>
                                        <input type="text"  onChange={(event) => dataChange(event)} className="form-control" id="role" placeholder="Enter Country Name" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="licence">Licence</label>
                                        <input type="text" onChange={(event) => dataChange(event)} className="form-control" id="licence" placeholder="Enter Country Code" />
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

export default RoleModal