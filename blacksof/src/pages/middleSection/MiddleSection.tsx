import Car from "../../assets/carbody.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import TruckBody from "../../assets/commercial.mp4";
import CabinLogo from "../../assets/cabinLogo.svg";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { useState } from "react";
import { vehicleOptions } from "./MiddleSection.config";

export const MiddleSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(Car);
  

  return (
    <div className="h-screen flex flex-col bg-secondary justify-center pt-30 overflow-hidden">
      <p className="text-4xl font-light mb-8">
        Evolving the drive with <strong>360-degree</strong>
        <br /> nonwoven solutions
      </p>

      <div
        className="flex-grow w-full max-w-full mx-auto h-[540px]"
        style={{ marginTop: -150 }}
      >
        <Swiper
          direction="vertical"
          mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
          modules={[Mousewheel, Scrollbar]}
          scrollbar={{
            el: ".custom-scrollbar",
            draggable: true,
            hide: false,
          }}
          slidesPerView={1}
          className="h-full w-full"
        >
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-evenly w-full h-full ml-20">
              <span className="text-left space-y-4">
                <p className="text-3xl font-bold">Passenger vehicles</p>
                <p className="text-lg font-normal">
                  Revving up Nonwoven innovation from <br />
                  interior to exterior.
                </p>
              </span>

              <div className="md:w-1/2 flex flex-col justify-center">
                <video
                  src={selectedVideo}
                  autoPlay
                  loop
                  muted
                  className="w-full h-auto rotating-video"
                />

                <div className="flex flex-row justify-center gap-10 flex-wrap">
                  {vehicleOptions.map((opt) => (
                    <div
                      key={opt.label}
                      className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
                      onClick={() => setSelectedVideo(opt.image)}
                    >
                      <img
                        src={CabinLogo}
                        alt={opt.label}
                        width="69"
                        height="69"
                      />
                      <p>{opt.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-evenly w-full h-full ml-20">
              <span className="text-left space-y-4">
                <p className="text-3xl font-bold">Commercial vehicles</p>
                <p className="text-lg font-normal">
                  Driving durability with cutting-edge <br />
                  nonwoven tech.
                </p>
              </span>

              <div className="md:w-1/2 flex justify-center">
                <video
                  src={TruckBody}
                  autoPlay
                  loop
                  muted
                  className="w-full h-auto rotating-video"
                />
              </div>
            </div>
          </SwiperSlide>
          <div className="custom-scrollbar w-1/2 h-2 bg-gray-300 mt-4 rounded-full mx-auto"></div>
        </Swiper>
      </div>
    </div>
  );
};
