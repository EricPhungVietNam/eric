# <font color="**Green**">MARKDOWN</font>

Nguồn: https://www.markdownguide.org/cheat-sheet/



<br>
<br>

# Tạo file
+ <tên file>.md



# Chú ý
- Cách dòng phù hợp
- Viết comment trên markdown:
  - Cú pháp: `[nội dung comment]: #`
  - Comment phải nằm giữa hai dòng trống, tức enter đầu và enter cuối comment.
  - Comment tất nhiên sẽ k hiển thị trên màn hình chạy.


Ví dụ:

Here's a paragraph that will be visible.

[This is a comment that will be hidden.]: # 

And here's another paragraph that's visible.







# Horizontal Rules (đường kẻ ngang trang)
> Để tạo một đường kẻ ngang, hãy sử dụng ba hoặc nhiều dấu hoa thị (***), dấu gạch ngang (---) hoặc dấu gạch dưới (___) trên một dòng riêng lẻ. <br>

Kết quả:

***

---

_________________





# Heading
- # Title level 1
- ## Title level 2
- ### Title level 3
- #### Tittle level 4
- ##### Tittle level 5
- ###### Tittle level 6







# Paraghraphs (chia đoạn)
Dùng khoảng cách dòng để chia đoạn. (Enter hai lần)

Đoạn văn này tách biệt đoạn trên bằng một dòng trống.






# Line Break (xuống dòng)
Cách 1: Đặt `<br>` ở cuối câu để xuống dòng.<br> Dòng thứ hai.<br>







# Text Fortmat
- Chữ đậm: **`**Đây là cú pháp**`**
- Chữ nghiêng: *`*Đây là cú pháp*`*
- Đậm và nghiêng: ***`***Đây là cú pháp***`***
- Gạch ngang: ~~The world is flat.~~ `~~Đây là cú pháp~~`
- subscript: H<sub>2</sub>O . `Cú pháp: H<sub>2</sub>O`
- Superscript: X<sup>2</sup> . `Cú pháp: X<sup>2</sup>`
- Underline:  <ins>will be underlined</ins>. Cú pháp: `<ins>chữ muốn áp dụng</ins>`
- Color: <font color="red">This text is red!</font>. Cú pháp: `<font color="red">chữ muốn tô</font>`
- Link: xem phần link
- Align-center: Cú pháp: `<center>chữ muốn áp dụng</center>`
- &nbsp;&nbsp;&nbsp;&nbsp; Tab keyboard. Cú pháp: `&nbsp;&nbsp;&nbsp;&nbsp; đoạn text`
- Code: xem phần code




# Blockquotes (câu trích dẫn)
> `Đặt dấu > ở đầu câu để tạo câu trích dẫn`.
>
> Xuống dòng trong trích dẫn.

> `Lồng trích dẫn vào trích dẫn: Đặt dấu >> ở đầu câu muốn lồng`.
>> Giới tính:
>> - Nam
>> - Nữ










# List (Đánh đầu dòng)
> Để tạo danh sách không có thứ tự, hãy thêm dấu gạch ngang (-), dấu sao (*) hoặc dấu cộng (+) trước các mục dòng. Thụt lề một hoặc nhiều mục để tạo danh sách lồng nhau.
>


Kiểu symbol: dùng dấu * hoặc - hoặc + 
- Dùng dấu gạch ngang
- Dùng dấu ngang



* Dùng dấu hoa thị
* Dùng dấu hoa thị


+ Dùng dấu cộng
+ Dùng dấu cộng <br>


- Cấp 1: đánh dấu đầu dòng
  - Cấp 2: thụt vào 2 lần
  - Cấp 2: thụt vào 2 lần

> Để tạo danh sách có thứ tự, hãy thêm các mục dòng có số theo sau là dấu chấm. Các số không nhất thiết phải theo thứ tự số, nhưng danh sách phải bắt đầu bằng số một.


Kiểu số:

1. Cấp 1
2. Cấp 1
   1. Cấp 2: Thụt vào 3 lần
   2. Cấp 2: Thụt vào 3 lần
4. Third item


> Kết hợp số và dấu
1. First item
2. Second item
3. Third item
- Indented item
    - Indented item
4. Fourth item









# Task List

[x] Write the press release <br>
[ ] Update the website<br>
[ ] Contact the media<br>











# Code Blocks (kiểu code)
Các khối mã thường được thụt lề bốn khoảng trắng hoặc một tab. <br>
Khi chúng nằm trong danh sách, hãy thụt lề chúng tám khoảng trắng hoặc hai tab. Vi dụ: <br>

1. Open the file.
2. Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3. Update the title to match the name of your website.








# Code (câu code)
> Để biểu thị một từ hoặc cụm từ dưới dạng mã, hãy đặt nó trong 2 xiêng (``) .

- Đây là đoạn code: `let a = c; console.log(a)`

> Trường hợp code có dấu nháy xiêng, ta đặt toàn bộ dòng code bên trong 4 xiêng (````).

- Đây là code trong code ``let a = c; console.log(`Giá trị của a là: ${a}`)``


> Syntax Highlighting
> Cú pháp: `(```json {code}```)` Note: Không tính dấu ()


```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```









# Images (Hình ảnh)
> Hiển thị hình: `![Nội dung Thông báo khi hình k truy xuất được](url của hình trên mạng)`

Vi dụ:


1. Open the file containing the Linux mascot.
2. Marvel at its beauty.

    ![Nội dungThông báo khi hình k truy xuất được](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXeCQhDtN_BNlWTqPZ5jgyGepp_iuZi3lMw&s)

3. Close the file.













# VIDEO
> Cú pháp: `[![Nội dungThông báo khi video k truy xuất được](URL của hình)](url của video)`

Ví dụ:

[![Phim hoạt hình TOM](https://img.youtube.com/vi/YOUTUBE-ID/0.jpg)](https://www.youtube.com/watch?v=8wbH3GvmwPU)











# Link
> Để tạo link, sử dụng cú pháp: `[Đoạn text cần gắn link](dán url vào đây)`
>
> Khi nhấp vào, trang sẽ mở đè trên trang hiện tại
>>Ví dụ: My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

> Loại mở trong tab trình duyệt mới: `<a href ="nhập url" target = "_blank">nhập text muốn gắn link</a>`
>>Ví dụ: <a href="https://www.markdownguide.org" target="_blank">Learn Markdown!</a>

> Tạo link đơn giản bằng cách dán url.
>> Ví dụ: http://www.example.com


> Hủy tính năng link của một URL: đặt trong 2 nháy xiêng
>> ví dụ: `http://www.example.com`











# Tables
>Để thêm một bảng, hãy sử dụng ba hoặc nhiều dấu gạch nối (---) để tạo tiêu đề của mỗi cột và sử dụng dấu ống (|) để phân tách từng cột. Để tương thích, bạn cũng nên thêm một dấu ống ở mỗi đầu của hàng

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

<br>

> Alignment: Bạn có thể căn chỉnh văn bản trong các cột sang trái, phải hoặc giữa bằng cách thêm dấu hai chấm (:) vào bên trái, bên phải hoặc cả hai bên dấu gạch nối trong hàng tiêu đề.<br>



| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |











# SYMBOLS
> Xem thêm tại: https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references

Copyright (©): => Cú pháp: `&copy;` => Kq: &copy; <br>
Registered trademark (®): =>Cú pháp: `&reg;` => Kq: &reg; <br>
Trademark (™) => Cú pháp: `&trade` => Kq: &trade; <br>
Euro (€) => Cú pháp: `&euro;` => Kq: &euro; <br>
Left arrow (←) => Cú pháp: `&larr;` => Kq: &larr; <br>
Up arrow (↑) => Cú pháp: `&uarr;`=> Kq: &uarr; <br>
Right arrow (→) => Cú pháp:`&rarr;` => Kq: &rarr; <br>
Down arrow (↓) => Cú pháp:`&darr;` => Kq: &darr; <br>
Degree (°) => Cú pháp: `&#176;`=> Kq: &#176; <br>
Pi (π) => Cú pháp: `&#960;` => Kq: &#960; <br>







# Emoji
> Truy cập link => chọn emoji => nhấn copy => dán vào đây sử dụng
>> Link tải: https://emojipedia.org/smiling-face-with-hearts 

ví dụ:

❤️ ✅ 🥰


