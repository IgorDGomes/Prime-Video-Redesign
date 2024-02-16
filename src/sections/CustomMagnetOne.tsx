import img1 from "../assets/Img1.png"

export function CustomMagnetOne() {
    return (
        <div className="bg-linear-sky-transparent grid grid-cols-1 md:grid-cols-2 sm:py-10 overflow-hidden">
            <div className="flex justify-center pt-10 sm:pt-0">
                <img src={img1} className="min-w-[300px] w-[50%] max-w-[500px] h-fit" />
            </div>
            <div className="flex flex-col justify-center gap-4 text-center md:text-left pt-10 pb-14 sm:py-0">
                <h2 className="text-[1.5rem] sm:text-[2.8rem] text-white font-semibold leading-none">Watch now, cancel anytime.</h2>
                <p className="text-[0.8rem] sm:text-lg w-[80%] mx-auto md:mx-0">Sign up risk free. Cancel your Amazon Prime Video membership anytime.</p>
            </div>
        </div>
    )
}