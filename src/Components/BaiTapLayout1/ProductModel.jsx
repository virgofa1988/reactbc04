import React, { Component } from 'react'

export default class ProductModel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { sanPhamModal } = this.props
        return (
            <div>

                {/* Button trigger modal
                <button type="button" className="btn btn-success" >
                    Details...
  </button> */}
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{sanPhamModal.tenSP}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <img src={sanPhamModal.hinhAnh} width={300} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                {/* <button type="button" className="btn btn-primary">Save</button> */}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
