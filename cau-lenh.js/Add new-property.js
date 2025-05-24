
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



//THÊM THUỘC TÍNH vào Object.
diemThi["Dao"]["Chieu cao"] = 1348; // Kiểu 1: ngoại vuông và dấu nháy. (Khuyên dùng)
console.log(diemThi);

diemThi.Hoa = 6; // Kiểu 2: objectname.tenThuocTinhMoi = <giatrigán>;
console.log(diemThi);


