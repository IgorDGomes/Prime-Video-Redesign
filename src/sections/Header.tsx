import { useEffect, useState } from "react";

import user from "../assets/user.svg"
import logo from "../assets/logo.png"
import arrowDown from "../assets/image 1.svg"

export function Header() {
    const [smallDevice, setSmallDevice] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 500) {
                setSmallDevice(true);
            } else {
                setSmallDevice(false);
            }
        }

        // Call handleResize initially
        handleResize();

        // Add event listener to update smallDevice state on resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="header-content w-full bg-transparent h-fit pb-8">
            
            { 
            smallDevice ? (
                <div className="bg-sky-500/10 min-h-24 flex items-center justify-between backdrop-blur-sm">
                    <a href="/" className="w-[30vw] sm:w-[190px] h-fit ml-[10%]">
                        <img src={logo} alt="Amazon Prime Video" />
                    </a>
                    <div className="mr-[10%] flex gap-[2vw]">
                        <img src={user} alt="User Profile" className="w-[15svw] max-w-12" />
                    </div>
                </div>
            ) : (
                <div className="bg-sky-500/10 min-h-24 flex items-center justify-between backdrop-blur-sm">
                    <a href="/" className="w-[30vw] sm:w-[190px] h-fit ml-[10%]">
                        <img src={logo} alt="Amazon Prime Video" />
                    </a>
                    <div className="mr-[10%] flex gap-[2vw]">
                        <a href="https://www.amazon.co.uk/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Feu.primevideo.com%2Fauth%2Freturn%2Fref%3Dav_auth_ap%3F_t%3Dsg3mVN2CB4In6CyX0JnImyXuZZl6QM64YMA5qLUPtIOtMAAAAAQAAAABlz9WpcmF3AAAAAPgWC9WfHH8iB-olH_E9xQ%26location%3Dhttps%3A%2F%2Fwww.primevideo.com%2Fsignup%3Foffer%253Dpm%2526ref_%253Ddvm_MLP_pt_Join_1_pm&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&accountStatusPolicy=P1&openid.assoc_handle=amzn_prime_video_sso_gb&openid.mode=checkid_setup&siteState=261-4887708-1725337&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=amzn_prime_video_eea&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" className="bg-sky-500 py-1 px-4 rounded-md hover:bg-sky-600 font-semibold transition-all text-white">Login</a>
                        <a href="https://www.amazon.co.uk/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Feu.primevideo.com%2Fauth%2Freturn%2Fref%3Dav_auth_ap%3F_t%3Dsg7QXzs--qO8HcuENZ9-LgLbwABxE6iQxZrQKMJD1dmZ6AAAAAQAAAABlz9YJcmF3AAAAAPgWC9WfHH8iB-olH_E9xQ%26location%3Dhttps%3A%2F%2Fwww.primevideo.com%2Fsignup%3Fref_%253Ddvm_MLP_pt_Join_1_ft&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&accountStatusPolicy=P1&openid.assoc_handle=amzn_prime_video_sso_gb&openid.mode=checkid_setup&siteState=261-4887708-1725337&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=amzn_prime_video_eea&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"className="bg-sky-500 py-1 px-4 rounded-md hover:bg-sky-600 font-medium transition-all text-white">Sign In</a>
                    </div>
                </div>
            ) 
            }

            <div className="flex flex-col max-w-[850px] items-center mx-auto my-[10%] gap-6 text-center md:px-0 px-[6vw] overflow-hidden">
                <h1 className="font-bold text-[1.6rem] sm:text-[35px] leading-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                <form className="grid sm:flex gap-6 sm:gap-2 w-full max-w-[450px]">
                    <input type="email" placeholder="Email Address" className="bg-sky-400/80 min-w-[200px] w-full rounded-xl py-[10px] pl-4 placeholder:text-white" />
                    <button type="button" className="bg-sky-500 px-4 rounded-xl hover:bg-sky-600 font-semibold transition-all text-white w-[105px] min-w-[105px] min-h-[40px] mx-auto">Start Now</button>
                </form>
                <p className="leading-[18px] sm:leading-0 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <img src={arrowDown} className="mx-auto bg-black/60 p-2 rounded-full animate-bounce-mod backdrop-blur-sm w-10 md:w-14" />
        </div>
    )
}