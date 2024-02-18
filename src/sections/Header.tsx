import { useEffect, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import user from "../assets/user.svg"
import logo from "../assets/logo.png"
import arrowDown from "../assets/image 1.svg"

export function Header() {
    const [smallDevice, setSmallDevice] = useState(false);
    const [country, setCountry] = useState('');

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 500) {
                setSmallDevice(true);
            } else {
                setSmallDevice(false);
            }
        }
        
        handleResize();
        
        window.addEventListener("resize", handleResize);

        if (navigator.language === "pt-PT") {
            setCountry("Portugal");
        } else {
            setCountry("Germany")
        }
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <>
        <div className="header-content w-full bg-transparent h-fit pb-8">
            
            { 
            smallDevice ? (
                <div className="bg-sky-500/10 min-h-[15svw] flex items-center justify-between backdrop-blur-sm fixed right-0 left-0 top-0 z-10">
                    <a href="/" className="w-[30vw] sm:w-[190px] h-fit ml-[10%]">
                        <img src={logo} alt="Amazon Prime Video" />
                    </a>
                    
                    <div className="mr-[10%] flex gap-[2vw]">
                        <NavigationMenu.Root className="relative z-[1]">
                            <NavigationMenu.List>
                                <NavigationMenu.Item>
                                    <NavigationMenu.Trigger className="group rounded-full">
                                        <img src={user} alt="User Profile" className="w-[9svw] max-w-12" />
                                    </NavigationMenu.Trigger>
                                    <NavigationMenu.Content className="absolute top-[100%] right-0 bg-sky-100 text-black font-semibold py-3 px-2 rounded-md w-[150px]">
                                        <ul className="flex flex-col gap-1 items-center">
                                            <li className="w-full">
                                                <NavigationMenu.Link asChild>
                                                    <a href="https://www.amazon.co.uk/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Feu.primevideo.com%2Fauth%2Freturn%2Fref%3Dav_auth_ap%3F_t%3Dsgx-hoAKkaSXG-G6ixMEJzuFqmOuDI-O-T90lsXIvxpEgAAAAAQAAAABl0T9pcmF3AAAAAPgWC9WfHH8iB-olH_E9xQ%26location%3D%2Fcollection%2FIncludedwithPrime%3Fref_%253Datv_unknown&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&accountStatusPolicy=P1&openid.assoc_handle=amzn_prime_video_sso_gb&openid.mode=checkid_setup&siteState=261-4887708-1725337&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=amzn_prime_video_eea&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" 
                                                    className="hover:bg-sky-200 px-2 py-4 rounded-md text-base flex justify-center items-center max-h-[24px] w-full"
                                                    >
                                                        Sign In
                                                    </a>
                                                </NavigationMenu.Link>
                                            </li>
                                            <li className="w-full">
                                                <NavigationMenu.Link asChild>
                                                    <a href="https://www.amazon.co.uk/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&accountStatusPolicy=P1&siteState=261-4887708-1725337&language=en_US&pageId=amzn_prime_video_eea&openid.return_to=https%3A%2F%2Feu.primevideo.com%2Fauth%2Freturn%2Fref%3Dav_auth_ap%3F_t%3Dsg_VvyBQ8s3rKFnCkaQmWhXsu-wYR8JX55Xjy8YuwI7WrAAAAAQAAAABl0UUZcmF3AAAAAPgWC9WfHH8iB-olH_E9xQ%26location%3Dhttps%3A%2F%2Fwww.primevideo.com%2Fsignup%3Fref_%253Ddvm_MLP_pt_Join_1_ft&prevRID=16YQ6YABPX1Z9ABFGZS7&openid.assoc_handle=amzn_prime_video_sso_gb&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" 
                                                    className="hover:bg-sky-200 px-2 py-4 rounded-md text-base flex justify-center items-center max-h-[24px] w-full"
                                                    >
                                                        Create Account
                                                    </a>
                                                </NavigationMenu.Link>
                                            </li>
                                        </ul>
                                    </NavigationMenu.Content>
                                </NavigationMenu.Item>
                            </NavigationMenu.List>
                            <NavigationMenu.Indicator>
                                <div className="fixed -top-[0.2rem] right-[4svw] h-[6px] w-[6px] rotate-[45deg] bg-white" />
                            </NavigationMenu.Indicator>
                        </NavigationMenu.Root>
                    </div>
                </div>
            ) : (
                <div className="bg-sky-500/10 min-h-24 flex items-center justify-between backdrop-blur-sm">
                    <a href="/" className="w-[30vw] sm:w-[190px] h-fit ml-[10%]">
                        <img src={logo} alt="Amazon Prime Video" />
                    </a>
                    <div className="mr-[10%] flex gap-[2vw]">
                        <a href="https://www.amazon.co.uk/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Feu.primevideo.com%2Fauth%2Freturn%2Fref%3Dav_auth_ap%3F_t%3Dsg3mVN2CB4In6CyX0JnImyXuZZl6QM64YMA5qLUPtIOtMAAAAAQAAAABlz9WpcmF3AAAAAPgWC9WfHH8iB-olH_E9xQ%26location%3Dhttps%3A%2F%2Fwww.primevideo.com%2Fsignup%3Foffer%253Dpm%2526ref_%253Ddvm_MLP_pt_Join_1_pm&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&accountStatusPolicy=P1&openid.assoc_handle=amzn_prime_video_sso_gb&openid.mode=checkid_setup&siteState=261-4887708-1725337&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=amzn_prime_video_eea&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" className="bg-sky-500 py-1 px-4 rounded-md hover:bg-sky-600 font-semibold transition-all text-white">Login</a>
                        <a href="https://www.amazon.co.uk/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&accountStatusPolicy=P1&siteState=261-4887708-1725337&language=en_US&pageId=amzn_prime_video_eea&openid.return_to=https%3A%2F%2Feu.primevideo.com%2Fauth%2Freturn%2Fref%3Dav_auth_ap%3F_t%3Dsg_VvyBQ8s3rKFnCkaQmWhXsu-wYR8JX55Xjy8YuwI7WrAAAAAQAAAABl0UUZcmF3AAAAAPgWC9WfHH8iB-olH_E9xQ%26location%3Dhttps%3A%2F%2Fwww.primevideo.com%2Fsignup%3Fref_%253Ddvm_MLP_pt_Join_1_ft&prevRID=16YQ6YABPX1Z9ABFGZS7&openid.assoc_handle=amzn_prime_video_sso_gb&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" className="bg-sky-500 py-1 px-4 rounded-md hover:bg-sky-600 font-medium transition-all text-white">Create Account</a>
                    </div>
                </div>
            ) 
            }



            <div className="flex flex-col max-w-[850px] items-center mx-auto my-[10%] gap-10 sm:gap-6 text-center md:px-0 px-[6vw] overflow-hidden backdrop-blur-[2px] md:backdrop-blur-none py-28 sm:py-10 md:py-0">
                <h1 className="font-bold text-[1.6rem] sm:text-[35px] leading-8 text-white">Amazon Prime now available for customers in {country}</h1>
                <form className="grid sm:flex gap-6 sm:gap-2 w-full max-w-[450px]">
                    <input type="email" placeholder="Email Address" className="bg-sky-400/80 min-w-[200px] w-full rounded-xl py-[10px] pl-4 placeholder:text-white" />
                    <button type="button" className="bg-sky-500 px-4 rounded-xl hover:bg-sky-600 font-semibold transition-all text-white w-[105px] min-w-fit min-h-[40px] mx-auto">Start Now</button>
                </form>
                <p className="leading-6 text-lg text-white">Join Amazon Prime to watch popular movies and TV shows, including award-winning Amazon Originals. Amazon Prime also includes fast and free delivery on eligible items.</p>
            </div>
            <img src={arrowDown} className="mx-auto bg-black/60 p-2 rounded-full animate-bounce-mod backdrop-blur-sm w-10 md:w-14" />
        </div>
        </>
    )
}