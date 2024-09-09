import Image from "next/image";
import UntitledUIIcon from "../../public/icons/untitledUIIcon"; 
import ThreeLines from "@/public/icons/threeLines";
function NavBar() {
  return (
    <>
      <div className=" bg-[#fff]">
        <div className="flex md:hidden justify-between">
          <div className="flex justify-center items-center ">
            <UntitledUIIcon />
          </div>
          <ThreeLines size={25}/>
        </div>
        <div className="md:flex hidden justify-between bg-[#fff] px-8 ">
          <div className="flex gap-10 text-[#475467] flex-wrap">
            <div className="flex justify-center items-center text-[#101828]">
            <Image
                className="min-w-[32px] min-h-[32px]"
                src="/images/Logomark.png"
                alt="Logo"
                width={32}
                height={32}
              />
              <div>Untitled UI</div>
            </div>
            <div className="md:flex justify-center items-center ">Home</div>
            <div className="flex gap-2 justify-center items-center">
              <div>Product</div>
              <Image
                className="min-w-[10px] min-h-[5px]"
                src="/images/drop-down.png"
                alt="drop-dpwn"
                width={10}
                height={5}
              />
            </div>
            <div className="flex justify-center items-center gap-2 ">
              <div>Resources </div>
              <Image
                src="/images/drop-down.png"
                alt="drop-dpwn"
                width={10}
                height={5}
              />
            </div>
            <div className="flex justify-center items-center">Pricing</div>
          </div>
          <div className="flex gap-3">
            <div className=" text-[#475467]  py-[10px] px-[18px] rounded-lg">
              <p>Log in</p>
            </div>
            <div className=" bg-[#7F56D9] py-[10px] px-[18px] rounded-lg">
              <p>sign up</p>
            </div>
          </div>
        </div>
        <hr className="mt-4"></hr>

      </div>
      
    </>
  );
}
export default NavBar;
