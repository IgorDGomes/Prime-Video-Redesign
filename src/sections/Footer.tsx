import footerImg from "../assets/PrimeVideoFooter.png"

export function Footer() {

    const d = new Date();
    const y = d.getFullYear()

    return (
        <div className="flex flex-col gap-10 sm:gap-4 items-center pt-10 pb-6">
            <a href="/">
                <img src={footerImg} alt="" className="w-[110px]" />
            </a>
            <ul className="grid sm:grid-cols-4 gap-4 text-sky-600 text-sm text-center">
                <li>
                    <a href="https://www.primevideo.com/help/ref=dvm_MLP_EU_privacy?nodeId=202064890" className="border-b-slide">Terms and Privacy Notice</a>
                </li>
                <li>
                    <a href="https://www.primevideo.com/help/ref=atv_hp_nd_cnt?nodeId=GZVH7DTWNBGPRPDS" className="border-b-slide">Cookie Notice</a>
                </li>
                <li>
                    <a href="https://www.amazon.co.uk/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Feu.primevideo.com%2Fauth%2Freturn%2Fref%3Dav_auth_ap%3F_t%3Dsg6i9B2_M59RYaICi3HwwBfYTBBXmsDNFNGO-bti5EucgAAAAAQAAAABlz832cmF3AAAAAPgWC9WfHH8iB-olH_E9xQ%26location%3D%2Fhelp%2Fcontact-us%3Fref_%253Datv_auth_red_aft&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&accountStatusPolicy=P1&openid.assoc_handle=amzn_prime_video_sso_gb&openid.mode=checkid_setup&siteState=261-4887708-1725337&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=amzn_prime_video_eea&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" className="border-b-slide">Send us feedback</a>
                </li>
                <li>
                    <a href="https://www.primevideo.com/help/ref=dvm_MLP_EU_privacy?nodeId=202064890" target="_blank" className="border-b-slide">Help</a>
                </li>
            </ul>
            <p className="text-neutral-600 text-[0.9rem] w-[80%] text-center">{`© 1996-${y}, Amazon.com, Inc. or its affiliates`}</p>
            <p className="text-gray-400">Created by <a href="https://github.com/IgorDGomes" className="text-gray-200 hover:text-white">Igor Gomes</a></p>
        </div>
    )
}