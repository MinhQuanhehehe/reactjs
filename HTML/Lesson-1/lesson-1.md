Inline và Block
Inline: nằm cùng dòng với phần tử cạnh nó
Block: phần tử block sẽ nằm trên 1 dòng riêng, có thể sửa style

Thẻ tự đóng: Thẻ không thể có nội dung (ảnh, audio, link) nên không có thẻ đóng
Thẻ có thẻ đóng: Vì có nội dung bên trong nên cần phải đóng thẻ

Cấu trúc HTML5

Header: Chữa nội dung thương hiệu (logo,...)
Navigation: Điều hướng trang
Article: Nội dung chính của bài viết, chứa các section phân đoạn nội dung bên trong
Aside: Các đường link hoặc nội dung liên quan, ở bên cạnh Article
Footer: Chứa thông tin như chính sách, quy định, copyright,... 


<h></h> heading, từ 1 đến 6 tiêu đề nội dung trang
<p></p> paragraph, nội dung trang
<a></a> tạo liên kết trang khác, các phần của trang, ...
    - trở về đầu trang, trang chủ
    - đến file ảnh, file html khác, ...
    - đến link trên internet
    - download
    - gửi mail, gọi điện, ....
<img> insert ảnh
    - phải có src ảnh
    - có thể chỉnh các thuộc tính (title, alt, width và height, phương thức loading,...)

<!DOCTYPE html> khai báo loại tài liệu
<html></html> đóng gói 1 trang html
<head></head> chứa dữ liệu metadata (chứa dữ liệu phụ trợ cho trang html, mới tìm hiểu sơ sơ)
    <title></title> tiêu đề web (trên tab trình duyệt)
    <style></style> định nghĩa style cho element
    <link> liên kết với stylesheet bên ngoài
    <meta> định nghĩa bộ kí tự, các thông tin liên quan (sẽ học kĩ hơn)
    <hr> horizontal rule, insert đường kẻ ngang
    <p></p> paragraph, nội dung trang
        <br> break line, xuống dòng
        <em></em> in nghiêng
        <strong></strong> in đậm
        <abbr></abbr> mô tả cụm từ
        <ol></ol>, <ul></ul> thẻ list, bên trong có thẻ <li></li>
        <dl></dl> description list, bên trong có thẻ <dt></dt> và <dd></dd>