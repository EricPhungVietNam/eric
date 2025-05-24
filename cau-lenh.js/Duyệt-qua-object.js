// KHOI TAO: tạo một object, tạo object lồng object
const diemThi = {
    "Lan": 5,
    "Linh": 6,
    "Tuan": 5,
    "Dao": {
        "Tuoi": 13,
        "Gioitinh": "nam"
    }
}

// Duyệt qua object bằng vòng lặp for-in
for (let duyetPhanTu in diemThi) {
    console.log(duyetPhanTu + ": ", diemThi[duyetPhanTu]);
}

