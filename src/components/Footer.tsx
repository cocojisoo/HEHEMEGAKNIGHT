export default function Footer(){
    return (
        <div className="bg-[#322707] pt-[30px]">
            <div className="mt-[12px] w-[540px] h-[100px] mx-auto bg-[#5f4e1c] items-center py-[11px]">
                <div className=" flex justify-center items-center text-[#1d1502] text-[20px] mx-auto">
                   営業時間
                </div>
                <div className="flex justify-center items-center mt-[6px] text-[#1d1502] font-bold text-[28px] mx-auto">
                 6時〜23時（午後11時）
                </div>
            </div>
            <div className="my-[30px] flex justify-center items-center">      
                <img src="./public/footerLogo.png" alt="Logo" />
            </div>
            <div className="mb-[30px] flex justify-center items-center">
                <img src="./public/map.png" alt="Map" className="border-[2px] border-[#C2BDB0] p-[14px]" />
            </div>
            <div className="flex justify-center items-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="21" viewBox="0 0 14 21" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7 21C10.5 16.3333 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.16667 16.1667 7 21ZM7 11C9.20914 11 11 9.20918 11 7.00004C11 4.7909 9.20914 3.00004 7 3.00004C4.79086 3.00004 3 4.7909 3 7.00004C3 9.20918 4.79086 11 7 11Z" fill="#FFFDF8"/>
             </svg> 
             <span className="ml-[10px]">東京都港区赤坂xx-xx</span>
            </div>
            <div className="flex justify-center items-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.97693 11.7078C8.69529 13.3366 10.449 14.2203 11.5523 14.758C12.9434 15.4359 12.3997 12.894 14.4331 12.894C16.1278 12.894 18.1613 13.7413 18.1612 15.2664C18.1612 17.5456 15.1625 19.1848 13.5798 18.882C9.46765 18.0959 6.74812 16.3173 3.92669 12.894C1.49495 9.94352 0.221658 4.91963 0.029174 3.9127C-0.273659 2.33002 1.83357 -0.22014 3.92668 0.0151416C6.01978 0.250422 6.9771 4.92947 5.62138 5.77676C4.19884 6.6658 4.27107 5.99447 4.43512 7.13242C4.64506 8.58878 5.99478 10.7768 6.97693 11.7078Z" fill="#FFFDF8"/>
             </svg> 
             <span className="ml-[10px]"></span>(03) 3222-2222
            </div>
            <div className="mb-[30px] flex justify-center items-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 17" fill="none">
              <path d="M20.7347 0H0V3.64905L10.2031 10.2434L20.7347 3.64299V0Z" fill="#FFFDF8"/>
              <path d="M20.7347 5.22171L10.192 11.829L0 5.24185V16.3871H20.7347V5.22171Z" fill="#FFFDF8"/>
             </svg> 
             <span className="ml-[10px]"></span>contact@theclyde.com
            </div>
            <div className="w-full h-[59px] bg-[#000] py-[18px]">
                <img src="./public/copyright.png" alt="copyright" className="mx-auto mt-[5px]"/>
            </div>
        </div>
    );
}   