// thời gian
function thoigian(){
var n=new Date();
var h = n.getHours();
var m = n.getMinutes();
var s = n.getSeconds();
document.getElementById("dongho").innerHTML = h + ":" + m + ":" + s;
document.getElementById("dongho2").innerHTML = h + ":" + m + ":" + s;
document.getElementById("dongho3").innerHTML = h + ":" + m + ":" + s;
}   setInterval("thoigian()",1000);    



//giỏ hàng
var arr = [];
// thêm biến đếm số lượng
var count = 0;
// thêm biến tổng tiền 
var tongtien = 0;
var countt = 0;
// thêm vào giỏ hàng
function them(hinh, ten, gia, loai, soluong) {
 
    count++;
    document.getElementById("sogiohang").innerHTML = count;
    arr.push(new Array(hinh, ten, gia, loai, soluong, count));


    for (var i = 0; i < arr.length; i++) {
        // thêm dòng sản phẩm của bạn 
        if (i == 0) {
            // trả tổng tiền về 0
            tongtien = 0;
            document.getElementById("sp").innerHTML = '<tr><td colspan="5" class="spcuaban">Sản phẩm của bạn</td></tr><tr><td      style="width:20%;"><img class="hinh" src="' + arr[i][0] + ' " style="width:100px;height:100px;"></td "><td class="ten"  style="width:40%;font-size:10px;">' + arr[i][1] + '</td><td style="width:20%"><span class="giatien" ><b>' + arr[i][2] + ' đ</td>' + '<td ><button onclick="tru(\'' + arr[i][3] + '\',' + arr[i][5] + ')">-</button>Số lượng:<span>' + arr[i][4] + '</span><button onclick="cong(\'' + arr[i][3] + '\',' + arr[i][5] + ')">+</button></td><td style="width:10%"><button onclick="xoa(' + arr[i][5] + ')">X</button></td></tr>';
        } else
        document.getElementById("sp").innerHTML += '<tr><td      style="width:20%;"><img class="hinh" src="' + arr[i][0] + ' " style="width:100px;height:100px;"></td "><td class="ten"  style="width:40%;font-size:10px;">' + arr[i][1] + '</td><td style="width:20%"><span class="giatien" ><b>' + arr[i][2] + ' đ</td>' + '<td ><button onclick="tru(\'' + arr[i][3] + '\',' + arr[i][5] + ')">-</button>Số lượng:<span>' + arr[i][4] + '</span><button onclick="cong(\'' + arr[i][3] + '\',' + arr[i][5] + ')">+</button></td><td style="width:10%"><button onclick="xoa(' + arr[i][5] + ')">X</button></td></tr>';
        tongtien += arr[i][2] * arr[i][4];
    }
    // thêm dòng tổng tiền
    document.getElementById("sp").innerHTML += '<tr><td colspan="5" id="tongtien">Tổng tiền giỏ hàng:<span style="color:red">' + tongtien + 'đ</td></tr>';

}
// thêm biến đếm tăng giá tiền*/
var demgiatien = 1;
function cong(loai, somathang) {
    for (var j = 0; j < arr.length; j++) {
        if (loai == arr[j][3] && somathang == arr[j][5]) {
            arr[j][4]++;
            // tính tổng tiền 
            tongtien += arr[j][2];
        }
        // thêm dòng sản phẩm của bạn 
        if (j == 0) {
            document.getElementById("sp").innerHTML = '<tr><td colspan="5" class="spcuaban">Sản phẩm của bạn</td></tr><tr><td      style="width:20%;"><img class="hinh" src="' + arr[j][0] + ' " style="width:100px;height:100px;"></td "><td class="ten"  style="width:40%;font-size:10px;">' + arr[j][1] + '</td><td style="width:20%"><span class="giatien" ><b>' + arr[j][2] + ' đ</td>' + '<td ><button onclick="tru(\'' + arr[j][3] + '\',' + arr[j][5] + ')">-</button>Số lượng:<span>' + arr[j][4] + '</span><button onclick="cong(\'' + arr[j][3] + '\',' + arr[j][5] + ')">+</button></td><td style="width:10%"><button onclick="xoa(' + arr[j][5] + ')">X</button></td></tr>';
        } else
        document.getElementById("sp").innerHTML += '<tr><td      style="width:20%;"><img class="hinh" src="' + arr[j][0] + ' " style="width:100px;height:100px;"></td "><td class="ten"  style="width:40%;font-size:10px;">' + arr[j][1] + '</td><td style="width:20%"><span class="giatien" ><b>' + arr[j][2] + ' đ</td>' + '<td ><button onclick="tru(\'' + arr[j][3] + '\',' + arr[j][5] + ')">-</button>Số lượng:<span>' + arr[j][4] + '</span><button onclick="cong(\'' + arr[j][3] + '\',' + arr[j][5] + ')">+</button></td><td style="width:10%"><button onclick="xoa(' + arr[j][5] + ')">X</button></td></tr>';
        // thêm dòng tổng tiền
    }     document.getElementById("sp").innerHTML += '<tr><td colspan="5" id="tongtien">Tổng tiền giỏ hàng:<span style="color:red">' + tongtien + 'đ</td></tr>';
}
function tru(loai, somathang) {
    for (var j = 0; j < arr.length; j++) {
        if (loai == arr[j][3] && somathang == arr[j][5]) {
            arr[j][4]--;
            // tính tổng tiền 
            tongtien -= arr[j][2];
        }
        if (arr[j][4] == 0) {
            alert('Số lượng ít nhất là 1');
            arr[j][4] = 1;
            tongtien += arr[j][2];  
        }
        // thêm dòng sản phẩm của bạn 
        if (j == 0) {
            console.log("tru");
            document.getElementById("sp").innerHTML = '<tr><td colspan="5" class="spcuaban">Sản phẩm của bạn</td></tr><tr><td      style="width:20%;"><img class="hinh" src="' + arr[j][0] + ' " style="width:100px;height:100px;"></td "><td class="ten"  style="width:40%;font-size:10px;">' + arr[j][1] + '</td><td style="width:20%"><span class="giatien" ><b>' + arr[j][2] + ' đ</td>' + '<td ><button onclick="tru(\'' + arr[j][3] + '\',' + arr[j][5] + ')">-</button>Số lượng:<span>' + arr[j][4] + '</span><button onclick="cong(\'' + arr[j][3] + '\',' + arr[j][5] + ')">+</button></td><td style="width:10%"><button onclick="xoa(' + arr[j][5] + ')">X</button></td></tr>';
        } else
        document.getElementById("sp").innerHTML += '<tr><td style="width:20%;"><img class="hinh" src="' + arr[j][0] + ' " style="width:100px;height:100px;"></td "><td class="ten"  style="width:40%;font-size:10px;">' + arr[j][1] + '</td><td style="width:20%"><span class="giatien" ><b>' + arr[j][2] + ' đ</td>' + '<td ><button onclick="tru(\'' + arr[j][3] + '\',' + arr[j][5] + ')">-</button>Số lượng:<span>' + arr[j][4] + '</span><button onclick="cong(\'' + arr[j][3] + '\',' + arr[j][5] + ')">+</button></td><td style="width:10%"><button onclick="xoa(' + arr[j][5] + ')">X</button></td></tr>';
        // thêm dòng tổng tiền
    }    document.getElementById("sp").innerHTML += '<tr><td colspan="5" id="tongtien">Tổng tiền giỏ hàng:<span style="color:red">' + tongtien + 'đ</td></tr>';
}

// xóa giỏ hàng
// đối số mặt hàng cụ thể
function xoa(somathang) {
    //giảm biến count <=> giảm mặt hàng hiện tại
    count--;
    for (var i = 0; i < arr.length; i++) {
        // điều kiện tìm ra mặt hàng
        if (somathang == arr[i][5]) {
            // xóa mảng tại vị trí đó
            arr.splice(somathang - 1, 1);
            break;
        }

    } // đưa giá trị ra giỏ hàng
    // trường hợp trả về giá trị null
    if (arr[0] == null) {
        document.getElementById("sogiohang").innerHTML = count;
        document.getElementById("sp").innerHTML = '<tr><td colspan="4"class="spcuaban">Sản phẩm của bạn</td></tr><tr><td colspan="4" class="spcuaban">Bạn chưa có sản phẩm nào...</td></tr>';
        document.getElementById("sp").innerHTML += '<tr><td colspan="5" id="tongtien">Tổng tiền giỏ hàng:<span style="color:red">' + 0 + 'đ</td></tr>';
     
    }// trường hợp có giá trị 
    else {
        if (somathang == count + 1) {// giữ nguyên giá trị
        } else {
            // thay đổi giá trị giảm số lượng sau index bị xóa
            for (var i = (somathang - 1); i < arr.length; i++) {
                arr[i][5]--;
            }
        }
        // hiển thị giỏ hàng mới
        for (var i = 0; i < arr.length; i++) {
            // thêm dòng sản phẩm của bạn 
            if (i == 0) {
                // trả tổng tiền về 0
                document.getElementById("sogiohang").innerHTML = count;
                tongtien = 0;
                document.getElementById("sp").innerHTML = '<tr><td colspan="5" class="spcuaban">Sản phẩm của bạn</td></tr><tr><td      style="width:20%;"><img class="hinh" src="' + arr[i][0] + ' " style="width:100px;height:100px;"></td "><td class="ten"  style="width:40%;font-size:10px;">' + arr[i][1] + '</td><td style="width:20%"><span class="giatien" ><b>' + arr[i][2] + ' đ</td>' + '<td ><button onclick="tru(\'' + arr[i][3] + '\',' + arr[i][5] + ')">-</button>Số lượng:<span>' + arr[i][4] + '</span><button onclick="cong(\'' + arr[i][3] + '\',' + arr[i][5] + ')">+</button></td><td style="width:10%"><button onclick="xoa(' + arr[i][5] + ')">X</button></td></tr>';
            } else
                document.getElementById("sp").innerHTML += '<tr><td      style="width:20%;"><img class="hinh" src="' + arr[i][0] + ' " style="width:100px;height:100px;"></td "><td class="ten"  style="width:40%;font-size:10px;">' + arr[i][1] + '</td><td style="width:20%"><span class="giatien" ><b>' + arr[i][2] + ' đ</td>' + '<td ><button onclick="tru(\'' + arr[i][3] + '\',' + arr[i][5] + ')">-</button>Số lượng:<span>' + arr[i][4] + '</span><button onclick="cong(\'' + arr[i][3] + '\',' + arr[i][5] + ')">+</button></td><td style="width:10%"><button onclick="xoa(' + arr[i][5] + ')">X</button></td></tr>';
            tongtien += arr[i][2] * arr[i][4];
        }
        // thêm dòng tổng tiền
        document.getElementById("sp").innerHTML += '<tr><td colspan="5" id="tongtien">Tổng tiền giỏ hàng:<span style="color:red">' + tongtien + 'đ</td></tr>';
    
    }
    

}



//form đăng ký
    function submit(){
        var hoten = document.getElementById("hoten").value.trim();
        var email = document.getElementById("email").value.trim();
        var sdt = document.getElementById("sdt").value.trim();
        var password = document.getElementById("password").value.trim();
        var address = document.getElementById("address").value.trim();

        if(hoten == ""){
            alert("Vui lòng nhập họ và tên");
            return;
        }
        if(email == ""){
            alert("Vui lòng nhập email");
            return;
        }else {
            if(email.match("\\w+@\\w+(\\.\\w+){1,2}")){}else { alert("Email không hợp lệ");return}
        }
        if(sdt == ""){
            alert("Vui lòng nhập số điện thoại");
            return;
        }
        if(password == ""){
            alert("Vui lòng nhập mật khẩu");
            return;
        }
        if(address == ""){
            alert("Vui lòng nhập địa chỉ");
            return;
        }
        alert("Bạn đã đăng ký thành công ");
        //lưu dữ liệu vào trong LocalStorage
        localStorage.setItem("hoten",hoten);
        localStorage.setItem("email",email);
        localStorage.setItem("sdt",sdt);
        localStorage.setItem("password",password);
        localStorage.setItem("address",address);
    }


// check đăng nhập
    function join(){
        var email = document.getElementById("emailjoin").value.trim();
        var password = document.getElementById("passjoin").value.trim();
        if(email != localStorage.getItem("email")){
            alert("Sai tài khoản email");
            return
        }
        if(password != localStorage.getItem("password")){
            alert("Sai mật khẩu");
            return;
        }
        alert("Bạn đã đăng nhập thành công");
    }