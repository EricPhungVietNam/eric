
// KHOI TAO: tạo một object, tạo object lồng oject
const diemThi = {
    "Lan": 5,
    "Linh": 6,
    "Tuan": 5,
    "Dao": {
        "Tuoi": 13,
        "Gioitinh": "nam"
    }
}

//XÓA thuộc tính khỏi Object
delete diemThi["Dao"]["Tuoi"];
console.log(diemThi);

delete diemThi["Tuan"];
console.log(diemThi);






