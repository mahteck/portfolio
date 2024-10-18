import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div>
        <Navbar/>
        <h1 className="flex justify-center item-center text-yellow text-2xl font-bold text-center mb-4">About Us</h1>

        <div className="max-w-md mx-auto bg-gray-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl">

        <div className="md:flex">
         
            <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">My Name is Shoaib Munir</div>
            <br/>
            <h1 className="flex justify-center item-center text-yellow text-2xl font-bold text-center mb-4">Career Summary</h1>
              <ul className="mt-2 text-slate-500">
                <li>15+ years of experience in the field of Application Development, ERP implementation.</li>
                <li>Software programmer with history of productivity and successful project outcomes.</li>
                <li>Enhanced the working ability of the existing business systems by using efficient Business Application.</li>
                <li>Exploration of new techniques and methodologies in Business Software Development.</li>
              </ul>
              <div>
                <h1 className="flex justify-center item-center text-yellow text-2xl font-bold text-center mb-4">Technical Profile</h1>
                <p className="mt-2 text-slate-500">Projects:Business Reports - Using Power BI, School Management System, Gate Management System, Expense Management System, WEB APIs Using MVC, Corporate and eCommerce Websites.</p>
                <p className="mt-2 text-slate-500">Language: VB.6, VB.NET, Flutter, ASP.NET, MVC, HTML, CSS,TypeScript, NextJs</p>
              </div>
              <br/>
              <div>
                <h1 className="flex justify-center item-center text-yellow text-2xl font-bold text-center mb-4">Field Experience</h1>
                <p className="mt-2 text-slate-500">Company : Bays International as a Team Lead IT From January 2021 to Present.</p>
                <p className="mt-2 text-slate-500">Company : Macpac Films Ltd as a AM MIS From November 2019 to January 2021.</p>
                <p className="mt-2 text-slate-500">Company : Bays International as a AM MIS From Septemebr 2018 to October 2019.</p>
                <p className="mt-2 text-slate-500">Company : Efrotech Services as a Software Engineer From March 2009 to August 2018.</p>
              </div>
              <div>
                <h1 className="flex justify-center item-center text-yellow text-2xl font-bold text-center mb-4">Education Profile</h1>
                <p className="mt-2 text-slate-500">Bachelor of Commerce From Govt. Jinnah College 2019</p>
                <p className="mt-2 text-slate-500">Intermediate In Commerce From Govt. Jinnah College 2007</p>
                <p className="mt-2 text-slate-500">Matric From National English Grammar School 2005</p>
              </div>
          </div>
        </div>
      </div>

      </div>
    )
}