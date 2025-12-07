export default function Header(){
    const menuItems = [
        "ストーリー",
        "メニュー",
        "イベント",
        "お問い合わせ",
        "ご予約",
        "ブログ",
    ];
    return (
        <header className="text-center mt-[23px]">
          <div className="flex justify-center border-b border-[#6a6a6a]">
            <img
              src="./public/logo.png"
              alt="logo"
              className="w-[350px] h-[203px] mb-[29px]"
              />
          </div>

          <nav className="flex justify-center gap-[100px] py-[28px] text-sm text-[#3c3c3c] ">
                <span className="cursor-pointer font-bold hover:opacity-60 transition">HOME</span>
            {menuItems.map((item) =>(
                <span key={item} className="cursor-pointer hover:opacity-60 transition">
                    {item}
                </span>

            ))}
          </nav>
          
        </header>
    );
}