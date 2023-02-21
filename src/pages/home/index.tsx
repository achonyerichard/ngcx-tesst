import React from "react";


import NavWrapper from "../../components/nav_wrapper";

// MUI Icons
import LinkIcon from '@mui/icons-material/Link';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// Apex Chart imports
import BarChart from "../../components/charts/BarChart";
import AxisChart from "../../components/charts/AxisChart"
import RadarChart from "../../components/charts/RadialChart";






const Home = () => {

  return (
    <div className=" bg-[#F7F7F9] h-screen ">
      <NavWrapper
      >

        <div className=" ">

          <main className="p-2 lg:px-10 space-y-6 w-full">
            <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Data Card 1  Starts*/}
              <div className=" p-4 bg-white shadow-md rounded-lg ">
                <div className="flex items-center">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-10 w-10 text-blue-600 bg-[#E5F8FE] rounded-lg mr-6">
                    <LinkIcon />
                  </div>
                  <div className="grow">

                  </div>
                  <div className=" justify-end">
                    <span className="block text-sm font-bold text-[#83E542]">+122%<span className="text-xl w-5">^</span> </span>

                  </div>
                </div>
                <div className="flex flex-col pt-2 ">
                  <div>
                    <h1 className="text-md text-gray-600">
                      168.1k
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-md text-gray-400">
                      Total xxx
                    </h1>
                  </div>
                  <div className="flex  flex-wrap  items-baseline mt-2">
                    <div className="bg-gray-100 text-gray-900 py-2 px-4 rounded-full text-xs font-medium ">Last One Year</div>
                  </div>
                </div>
              </div>
              {/* Data Card 1  Ends*/}
              {/* Data Card 2 Starts*/}
              <div className=" p-4 bg-white shadow rounded-lg ">
                <div className="flex items-center">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-10 w-10 text-blue-600 bg-[#EEFBE5] rounded-lg mr-6">
                    <AttachMoneyIcon className="text-[#72E128]" />
                  </div>
                  <div className="grow">

                  </div>
                  <div className=" justify-end">
                    <span className="block text-sm font-bold text-[#83E542]">+38%<span className="text-xl w-5">^</span> </span>

                  </div>
                </div>
                <div className="flex flex-col pt-2 ">
                  <div>
                    <h1 className="text-md text-gray-600">
                      22.5k
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-md text-gray-400">
                      Total ABC
                    </h1>
                  </div>
                  <div className="flex  flex-wrap  items-baseline mt-2">
                    <div className="bg-gray-100 text-gray-900 py-2 px-4 rounded-full text-xs font-medium ">Last Six Months </div>
                  </div>
                </div>
              </div>
              {/* Data Card 2 Ends*/}

              {/* Data Card 3 Starts*/}
              <div className=" p-4 bg-white shadow rounded-lg ">
                <div className="flex flex-col  ">
                  <div>
                    <h1 className="text-md text-gray-600">
                      168.1k
                    </h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-md text-gray-400">
                      Total FX
                    </h1>
                    <span className="block text-xs font-bold text-red-400 -mt-2">-20% </span>
                  </div>

                  {/* Bar Chart from Ape Charts */}
                  <BarChart />
                </div>

              </div>
              {/* Data Card 3 Ends*/}
            </section>
            <section className="    ">
              <div className="md:flex items-center">
                {/* Data Card 4 Starts */}
                <div className="md:flex md:w-2/3 md:mr-4  bg-white md:py-5 shadow px-2">
                  <div className="md:w-2/3  border-r-2 border-gray-200 md:px-5">
                    <header className="pt-2 p-5">
                      <h1 className="text-xl text-gray-500">Total XXX</h1>
                      <p></p>
                    </header>

                    {/* Double Axis Chart from Apex Chart */}
                    <AxisChart />
                  </div>
                  <div className="md:w-1/3 p-3">
                    <header className="pt-2">
                      <h1 className="text-xl text-gray-600">Report</h1>
                      <p className="text-sm text-gray-400">Last month's transaction $200k</p>
                    </header>
                    <div className="flex justify-center items-center pt-10 ">
                      <div className="w-1/2 flex flex-col space-y-3 border-r-2 p-5">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-10 w-10 text-blue-600 bg-[#EEFBE5] rounded-lg mr-6">
                          <svg className="w-5 h-7 text-[#72E128]" fill="#72E128" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TrendingUpIcon"><path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"></path></svg>
                        </div>
                        <p className="text-sm text-gray-400">This week</p>
                        <h1 className="text-md text-gray-600">
                          +69.42%
                        </h1>

                      </div>
                      <div className="w-1/2 flex flex-col items-center p-5 space-y-3">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-10 w-10 text-blue-600 bg-[#EEFBE5] rounded-lg mr-6">
                          <svg className="w-5 h-7 fill-[#72E128]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TrendingDownIcon"><path d="M16,18L18.29,15.71L13.41,10.83L9.41,14.83L2,7.41L3.41,6L9.41,12L13.41,8L19.71,14.29L22,12V18H16Z"></path></svg>
                        </div>
                        <p className="text-sm text-gray-400">Last week</p>
                        <h1 className="text-md text-gray-600">
                          +69.42%
                        </h1>
                      </div>

                    </div>
                    <div className="mt-5 border-t-2 pt-3">
                      <div className="flex justify-around items-center ">
                        <div className="justify-start">
                          <p className="text-sm text-gray-400">Performance</p>
                          <h1 className="text-sm md:text-md text-gray-600">
                            +99.42%
                          </h1>
                        </div>
                        <div className="justify-end">
                          <button className="uppercase  text-white bg-[#64C623] px-3 py-2 text-sm md:text-md rounded-lg">View Report</button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                {/* Data Card 4 Ends*/}

                {/* Data Card 5  Starts*/}


                <div className="md:w-1/3 bg-white p-5">
                  <header className="pt-2">
                    <h1 className="text-xl text-gray-600">FX Radar</h1>

                  </header>
                  {/* Radar Chart from Apex Charts */}
                  <RadarChart />
                  </div>
              </div>
              {/* Data Card 5  Ends*/}
            </section>
          </main>



        </div>


      </NavWrapper>
    </div>
  );
};

export default Home;
