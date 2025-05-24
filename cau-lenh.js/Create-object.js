/*
Cú pháp: 
const oject_name = {"property_name1": value1 , 
                    "property_name2": value2,
                     .....
                   }
*/

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




// TRUY CẬP: Nên xài cú pháp: <tenObject>["<tên thuộc tính>"]
console.log(diemThi); //Truy cập toan bộ object
console.log(diemThi["Dao"]); //Truy cập thuộc tính cấp 1 trong object
console.log(diemThi["Dao"]["Tuoi"]); //Truy cập thuộc tính cấp tiếp theo
let truyCap = diemThi; console.log(truyCap); // Gán object thành giá trị của một biến khác





//THÊM THUỘC TÍNH vào Object.
diemThi["Hang"] = 5; // Kiểu 1: ngoại vuông và dấu nháy. (Khuyên dùng)
console.log(diemThi);

diemThi.Hoa = 6; // Kiểu 2: objectname.tenThuocTinhMoi = <giatrigán>;
console.log(diemThi);

//XÓA thuộc tính khỏi Object
delete diemThi["Tuan"];
console.log(diemThi);


// SỬA GIÁ TRỊ của thuộc tính
diemThi["Linh"] = 10; //Kieu1
console.log(diemThi);

diemThi.Hoa = 5; //Kieu 2
console.log(diemThi);







