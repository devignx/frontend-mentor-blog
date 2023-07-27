import Link from "next/link";
import Image from "next/image";
import {HiOutlineArrowSmDown} from "react-icons/hi";
export default function Home(){
    return(
        <main className="min-h-screen text-black" >
          
            <section className="w-full mb-36 z-10 mx-auto md:w-4/6 block" >
                <div className="flex items-end pc justify-between p-6 px-0" >
                    <h1 className="text-6xl flex gap-2" >W.<HiOutlineArrowSmDown/> </h1>
                    <div className="flex gap-8 " >
                        <Link href={'/'} >Home</Link>
                        <Link href={'/'} >New</Link>
                        <Link href={'/'} >Popular</Link>
                        <Link href={'/'} >Trending</Link>
                        <Link href={'/'} >Categories</Link>
                    </div>
                </div>
                <div className="flex flex-col relative md:flex-row justify-between gap-8 mt-12 w-11/12 mx-auto md:w-full" >
                  <div className="bg-blue-300 blur-[300px] w-[36rem] h-[36rem] absolute right-0 z-[-1]" ></div>
                    <div className="w-full" >
                    <div className="overflow-hidden w-full h-[15rem]" >
                        <Image className="w-full object-cover" width='300' height='500' alt="" src='https://picsum.photos/1000/700'  />
                    </div>
                    <div className="flex flex-col md:flex-row items-start mt-12 gap-4" >
                        <h1 className="text-5xl" >The Bright Future of Web 3.0?</h1>
                        <div className="w-1012 md:w-3/5" >
                            <p className="font-medium" >We dive into the next evolution of the web that claims to put the power of the platforms back into the hands or the people. But is it really fulfilling its promise?</p>
                            <button className="bg-red-400 mt-3 uppercase text-white px-4 py-2" >Read More</button>
                        </div>
                    </div>
                    </div>
                    <div className="w-full mx-auto md:w-2/5 text-white bg-black p-8" >
                        <h1 className="text-3xl font-bold" >News</h1>
                        <div className=" w-full my-3 border-b py-4" >
                            <h3>Bla bla bla</h3>
                            <p className="opacity-60 text-sm" >gvacbjosdnvkmfkvkdfvkmdlkdklfvnjdnvjndjf</p>
                        </div>
                        <div className=" w-full my-3 border-b py-4" >
                            <h3>Bla bla bla</h3>
                            <p className="opacity-60 text-sm" >gvacbjosdnvkmfkvkdfvkmdlkdklfvnjdnvjndjf</p>
                        </div>
                        <div className=" w-full my-3 border-b py-4" >
                            <h3>Bla bla bla</h3>
                            <p className="opacity-60 text-sm" >gvacbjosdnvkmfkvkdfvkmdlkdklfvnjdnvjndjf</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap w-11/12 mx-auto md:mx-0 justify-between mt-24 gap-8" >
                    <div className="flex gap-3" >
                        <Image className="w-24 object-cover" width='300' height='500' alt="" src='https://picsum.photos/1000/700'  />
                        <div>
                            <p className="text-4xl opacity-40 font-bold" >01</p>
                            <h1 className="mt-3 mb-2" >Rekjdcjbajcd</h1>
                            <p>ahjcbjbj xasjnajdc jncnjkaca</p>
                        </div>
                    </div>
                    <div className="flex gap-3" >
                    <Image className="w-24 object-cover" width='300' height='500' alt="" src='https://picsum.photos/1000/700'  />
                    <div>
                        <p className="text-4xl opacity-40 font-bold" >01</p>
                        <h1 className="mt-3 mb-2" >Rekjdcjbajcd</h1>
                        <p>ahjcbjbj xasjnajdc jncnjkaca</p>
                    </div>
                </div>
                <div className="flex gap-3" >
                    <Image className="w-24 object-cover" width='300' height='500' alt="" src='https://picsum.photos/1000/700'  />
                    <div>
                        <p className="text-4xl opacity-40 font-bold" >01</p>
                        <h1 className="mt-3 mb-2" >Rekjdcjbajcd</h1>
                        <p>ahjcbjbj xasjnajdc jncnjkaca</p>
                    </div>
                </div>
                </div>
            </section>

        </main>
    )
}