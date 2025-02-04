import React from 'react';
import Layout from '../components/Layout';
import JourneyData from '../data/journey.json';

function Journey() {
  console.log('JourneyData', JourneyData);
  return (
    <Layout>
        <>
        <div className="page-in flex justify-center flex-1 flex-col mt-4">
          <div className="flex flex-col justify-center items-center flex-1 pb-8">
          {
            JourneyData.map((item,index) => {
              return (
                <div key={index} className="flex" style={{ width: "90%", minHeight: "6rem" }}>
            <div data-aos-delay={`${index+1}00`}  data-aos="fade-right" style={{ width: "40%" }}>
              <p className="text-right text-blueGray text-xs dark:text-white ">{item.start} - {item.end}</p>
            </div>
            <div className="bg-blue-400 h-100 w-1 relative ml-4 mr-4">
              <div className="bg-blue-400 h-4 w-4 absolute rounded-xl" style={{ top: "-6px", left: "-6px" }}></div>
            </div>
              
            <div data-aos-delay={`${index+2}00`}  data-aos="fade-left" style={{ width: "50%" }}>
              <a target="_blank" rel="noopener noreferrer" className="text-blue" href="https://www.dagangan.com/">{item.companyName}</a>
              <p className="text-xs text-blueGray dark:text-white mb-2">{item.job}</p>
              <ul className="mb-4 list-disc ml-4 text-blue">
                {
                  item.jobDetail.map((detail,i) => {
                    return (
                      <li key={i} className="mb-1">
                        <p className="text-xs text-blueGray dark:text-white md:text-sm"> {detail.item} </p>
                      </li>
                    );
                  } )
                }
                
              </ul>
            </div>
        </div>
              );
            })
          }
          
  </div>
</div>





        {/* <ul className="steps steps-vertical">
          <li data-content="" className="step step-info">
              <ul className='list-disc'>
                <li>a</li>
                <li>b</li>
                <li>c</li>
                <li>d</li>
              </ul>

          </li>
          <li data-content="" className="step step-info">Choose plan</li>
          <li data-content="" className="step step-info">Purchase</li>
          <li data-content="" className="step step-info">Receive Product</li>
        </ul> */}
        </>
    </Layout>
  )
}

export default Journey