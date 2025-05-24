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
let truyCap = diemThi; console.log(truyCap); // Truy cập thông qua khai báo một biếng với object giá trị của biến








