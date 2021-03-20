// Khởi tạo giá trị ban đầu của store
const stateGioHang = {
    gioHang: [{
        maSP: 1, tenSP: 'Iphone X', soLuong: 1, giaBan: 1000, hinhAnh: "./img/sp_iphoneX.pgn"
    }]
}

export const GioHangReducer = (state = stateGioHang, action) => {
    return { ...state }
}