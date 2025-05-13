import Car from "../../assets/carbody.mp4";
import TruckBody from "../../assets/commercial.mp4";
import CabinLogo from "../../assets/cabinLogo.svg";
import { vehicleOptions } from "./MiddleSection.config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { useState } from "react";

export const MiddleSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(Car);

  return (
    <div className="min-h-screen flex flex-col bg-secondary justify-center px-4 py-10 overflow-hidden">
      {/* Heading */}
      <p className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 text-center leading-relaxed">
        Evolving the drive with <strong>360-degree</strong>
        <br className="hidden sm:block" /> nonwoven solutions
      </p>

      {/* Swiper Section */}
      <div className="w-full max-w-7xl mx-auto h-[520px] md:h-[580px] relative">
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
          {/* Passenger Vehicle Slide */}
          <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 w-full h-full">
              {/* Text */}
              <div className="md:w-2/5 px-2 text-center md:text-left space-y-4">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">Passenger vehicles</p>
                <p className="text-base sm:text-lg font-normal">
                  Revving up Nonwoven innovation from <br />
                  interior to exterior.
                </p>
              </div>

              {/* Video + Options */}
              <div className="md:w-3/5 flex flex-col items-center justify-center gap-6 px-2">
                <video
                  src={selectedVideo}
                  autoPlay
                  loop
                  muted
                  className="w-full h-auto rounded-lg"
                />

                {/* Options */}
                <div className="flex flex-wrap justify-center gap-6">
                  {vehicleOptions.map((opt) => (
                    <div
                      key={opt.label}
                      className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
                      onClick={() => setSelectedVideo(opt.image)}
                    >
                      <img
                        src={CabinLogo}
                        alt={opt.label}
                        width="60"
                        height="60"
                        className="mb-1"
                      />
                      <p className="text-sm">{opt.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Commercial Vehicle Slide */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 w-full h-full">
              <div className="text-center md:text-left space-y-4 md:w-1/2 px-2">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">Commercial vehicles</p>
                <p className="text-base sm:text-lg font-normal">
                  Driving durability with cutting-edge <br />
                  nonwoven tech.
                </p>
              </div>

              <div className="md:w-1/2 px-2">
                <video
                  src={TruckBody}
                  autoPlay
                  loop
                  muted
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Custom Scrollbar */}
          <div className="custom-scrollbar w-1/2 h-2 bg-gray-300 mt-4 rounded-full mx-auto"></div>
        </Swiper>
      </div>
    </div>
  );
};
