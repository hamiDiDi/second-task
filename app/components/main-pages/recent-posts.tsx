import Image from "next/image";
function RecentPosts() {
  return (
    <>
      <div className="flex overflow-hidden flex-col bg-[#fff] mt-10 text-[#101828] w-full gap-6 md:gap-8">
        <h3 className="flex justify-start text-2xl font-semibold">
          Recent blog posts
        </h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex flex-col gap-2 md:gap-3">
            <Image
              className="rounded-lg grow min-h-[200px] md:min-h-[236px]"
              src="/images/chair.png"
              alt="chairs"
              width={592}
              height={236}
            />
            <p className="text-[#6941C6] text-sm font-semibold">
              Olivia Rhye • 20 Jan 2022
            </p>
            <h4 className="md:text-2xl text-lg font-semibold">
              UX review presentations
            </h4>
            <p className="text-[#475467] text-base -mt-1 md:text-base">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="flex gap-2 mt-2">
              <div className="text-[#026AA2] font-medium bg-[#F0F9FF] rounded-lg py-[2px] px-3">
                <button>Design</button>
              </div>
              <div className="text-[#C11574] font-medium bg-[#FDF2FA] rounded-lg py-[2px] px-3">
                <button>Research</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex md:flex-row gap-2 md:gap-6  flex-col">
              <Image
                className="w-full rounded-lg md:max-w-[320px] grow"
                src="/images/Image101.png"
                alt="chairs"
                width={320}
                height={200}
              />
              <div className="flex flex-col gap-3">
                <p className="text-[#6941C6] text-sm font-semibold">
                  Phoenix Baker • 19 Jan 2022
                </p>
                <h4 className="md:text-2xl text-lg font-semibold">
                  Migrating to Linear 101
                </h4>
                <p className="text-[#475467] text-base">
                  Linear helps streamline software projects, sprints, tasks, and
                  bug tracking. Here’s how to get...
                </p>
                <div className="flex gap-2">
                  <div className="text-[#6941C6] bg-[#F9F5FF] rounded-2xl py-[2px] px-[10px]">
                    <button>Design</button>
                  </div>
                  <div className="text-[#C11574] bg-[#FDF2FA] rounded-2xl py-[2px] px-[10px]">
                    <button>Research</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row gap-2 md:gap-3  flex-col">
              <Image
                className="w-full rounded-lg min-h-[200px] md:max-w-[320px]"
                src="/images/chair.png"
                alt="chairs"
                width={320}
                height={200}
              />
              <div className="flex flex-col gap-3 ">
                <p className="text-[#6941C6] text-sm font-semibold">
                  Lana Steiner • 18 Jan 2022
                </p>
                <h4 className="md:text-2xl text-lg font-semibold">
                  Building your API Stack
                </h4>
                <p className="text-[#475467] text-base">
                  The rise of RESTful APIs has been met by a rise in tools for
                  creating, testing, and manag...
                </p>
                <div className="flex gap-2">
                  <div className="text-[#027A48] bg-[#ECFDF3] rounded-2xl py-[2px] px-[10px]">
                    <button>Software</button>
                  </div>
                  <div className="text-[#C11574] bg-[#FDF2FA] rounded-2xl py-[2px] px-[10px]">
                    <button>Research</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RecentPosts;
