export default function recentActivity(){
    return(
        <div className="flex sm:flex-row flex-col p-12 justify-between">
            <div className="flex flex-col gap-4 justify-center items-center text-center"> 
                <h2 className="text-5xl font-bold text-[#2f7dcf]">1,234</h2>
                <h2 className="text-lg font-sans text-gray-800">Total View</h2>
            </div>
                        <div className="flex flex-col justify-center gap-4 items-center text-center">
                <h2 className="text-5xl text-[#579872] font-bold">89</h2>
                <h2 className="text-lg font-sans text-gray-800">Shared Recipies</h2>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center text-center ">
                <h2 className="text-5xl text-[#e98d30] font-bold">456</h2>
                <h2 className="text-lg text-gray-800 font-sans">Community Members</h2>
            </div>
        </div>
    )
}