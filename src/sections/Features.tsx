import Img1 from "../assets/Img3.png"
import Img2 from "../assets/Img4.png"
import Img3 from "../assets/Img5.png"

export function Features() {
    return (
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 py-16 bg-sky-600">
                <div className="flex flex-col items-center gap-5 text-center mb-10">
                    <img src={Img1} alt="Watch Everywhere" className="w-[60svw] sm:w-[300px]" />
                    <h3 className="text-[1.5rem] sm:text-3xl text-white font-semibold">Watch anywhere</h3>
                    <p className="text-[0.8rem] sm:text-lg w-[80%]">Enjoy from the web or with the Prime Video app on your phone, tablet, or select Smart TVs — on up to three devices at the same time.</p>
                </div>
                <div className="flex flex-col items-center gap-5 text-center mb-10">
                    <img src={Img2} alt="Download" className="w-[60svw] sm:w-[300px]" />
                    <h3 className="text-[1.5rem] sm:text-3xl text-white font-semibold">Download and go</h3>
                    <p className="text-[0.8rem] sm:text-lg w-[80%]">Watch offline on the Prime Video app when you download titles to your iPhone, iPad, tablet, or Android device.</p>
                </div>
                <div className="flex flex-col items-center gap-5 text-center">
                    <img src={Img3} alt="Data Saver" className="w-[60svw] sm:w-[300px]" />
                    <h3 className="text-[1.5rem] sm:text-3xl text-white font-semibold">Data Saver</h3>
                    <p className="text-[0.8rem] sm:text-lg w-[80%]">Control data usage while downloading and watching videos on select phones or tablets.</p>
                </div>
            </div>
        </>
    )
}