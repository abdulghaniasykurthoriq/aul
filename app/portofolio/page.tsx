"use client";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import PortofolioData from "../data/portofolio.json";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function Portofolio() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('Running AOS.init()');
  //     AOS.init();
  //   }, 100); // Penundaan 100 milidetik
  // }, []);

  return (
    <Layout>
      <div className="mx-2">
        <div className="flex flex-wrap justify-center ">
          {PortofolioData.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-sm w-full md:max-w-[300px] m-2 cursor-pointer flex flex-col projects-center md:projects-start md:justify-center"
                style={{ opacity: 1, transform: "none" }}
              >
                <a
                  href={item.repo}
                  target="_blank"
                  className="w-full relative rounded-xl border-gray-700 dark:border-gray-400 border p-2 cursor-not-allowed  hover:border-gray-400 will-change-projectCard"
                >
                  <div style={{ transform: "none" }}>
                    <Swiper
                      modules={[Navigation, Pagination]}
                      // navigation
                      pagination={{ clickable: true }}
                      spaceBetween={50}
                      slidesPerView={1}
                      className="overflow-hidden"
                      loop={true}
                    >
                      {item?.images && item.images.length > 0 ? (
                        item.images.map((image, index) => (
                          <SwiperSlide key={index}>
                            <Image
                              className="w-full md:w-[100]"
                              src={image.url} // Sesuaikan dengan path gambar
                              alt="Avatar"
                              width={150}
                              height={70}
                              priority={false}
                            />
                          </SwiperSlide>
                        ))
                      ) : (
                        <SwiperSlide>
                          <Image
                            className="w-full md:w-[100]"
                            src="/portofolio/notfound.png" // Path gambar default (pastikan ada di folder `public`)
                            alt="Default Image"
                            width={150}
                            height={70}
                            priority={false}
                          />
                        </SwiperSlide>
                      )}
                    </Swiper>
                  </div>
                </a>
                <div className="w-full mt-5 ">
                  <div className="flex projects-center justify-between">
                    <a href="#" target="_blank">
                      <h3 className="text-lg font-bold cursor-not-allowed">
                        {item.companyName}
                      </h3>
                    </a>
                    <div className="space-x-2 flex items-center cursor-not-allowed"></div>
                  </div>
                  <p className="text-fun-gray text-left text-sm">{item.desc}</p>
                  <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
                    {item?.stack?.map((stack, index) => (
                      <li key={index}>
                        <div className="m-1 rounded-lg text-sm bg-gray-400 text-white py-1 px-2 hover:opacity-75">
                          {stack?.item}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Portofolio;
