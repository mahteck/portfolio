import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      
      <h1 className="flex justify-center items-center text-center text-6xl font-bold border-0 text-green m-10"> Hi, i'm SHOAIB MUNIR</h1>

        <div className="max-w-md mx-auto bg-gray-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src="/images/about.jpg" alt="profile Picture"/>
            </div>
            
              <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">About my Self</div>
              <a href="/about" className="block mt-1 text-lg leading-tight font-medium text-white hover:underline">My name is Shoaib Munir, and I have graduated in both Science and Commerce. 
                I have over 15+ years of experience....</a>
            </div>
          </div>
        </div>

        <a href="/projects" className="block mt-1 text-lg leading-tight font-medium text-white hover:underline"><h1 className="flex justify-center items-center text-center text-6xl font-bold border-0 text-green m-10">My Projects</h1></a>

      <div id="main" className="grid grid-rows-2 grid-flow-col"> 
        <div className="bg-gray-200 rounded-lg m-4 h-30">
          <div className="max-w-md mx-auto bg-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-30" src="/images/about.jpg" alt="profile Picture"/>
              </div>

              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-black font-semibold">Expense Management System</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Through the expense module, you can record your daily expenses. It is user-friendly and also responsive.</a>
              </div>
            </div>
          </div>
        </div> 

        <div className="bg-gray-200 rounded-lg m-4 h-30">
        <div className="max-w-md mx-auto bg-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-30" src="/images/about.jpg" alt="profile Picture"/>
              </div>

                <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-black font-semibold">MIS Services</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">I can create all types of business reports using Power BI, as well as custom dashboard reports.</a>
              </div>
            </div>
          </div>
        </div> 

        <div className="bg-gray-200 rounded-lg m-4 h-30">
          <div className="max-w-md mx-auto bg-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img className="h-48 w-full object-cover md:h-full md:w-30" src="/images/about.jpg" alt="profile Picture"/>
                </div>

                  <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-black font-semibold">School Management System</div>
                  <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Through the school management system, you can manage student records, teacher information, accounts, results, and payslips.</a>
                </div>
              </div>
            </div>
        </div> 

    <div className="bg-gray-200 rounded-lg m-4 h-30">
      <div className="max-w-md mx-auto bg-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-32" 
              src="/images/about.jpg" 
              alt="Profile Picture" 
            />
          </div>

        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-black font-semibold">
            Gate Management System
          </div>
          <a 
            href="#" 
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Through the Gate Management System, you can track daily In/Out gate passes and monitor your visitors.
          </a>
        </div>
      </div>
    </div>
</div>
        
</div> 
     
</div>
  );
}
