import React from "react";

export default function DemoFunction() {
  //Đối với function component bên dưới lệnh return sẽ là giao diện của thẻ <DemoFuntion>
  //Lưu ý: Nội dung của thẻ phải được bao phủ bởi 1 thẻ
  return (
    <div>
      <p className="bg-dark text-center text-light p-2">Hello Jay</p>
      <p className="text-center">Hello Nguyen</p>
    </div>
  );
}
