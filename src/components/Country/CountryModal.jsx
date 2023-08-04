import React from 'react'
// import "../../style/country.scss"
import * as Feather from 'react-icons/fi';

const CountryModal = ({ item, dataChange, save, close }) => {
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
                                <h1>Update Coutry</h1>
                                <div className="row mt-5">
                                    <div className="form-group col-6">
                                        <label htmlFor="name">Country Name</label>
                                        <input type="text"  onChange={(event) => dataChange(event)} className="form-control" id="name" placeholder="Enter Country Name" />
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
                                <button type="submit" className="btn btn-primary mt-5" onClick={save}>Submit</button>
                            </div>
                        </main>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CountryModal