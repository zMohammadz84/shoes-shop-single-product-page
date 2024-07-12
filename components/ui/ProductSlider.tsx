"use client";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { MdOpenInFull } from "react-icons/md";
import { Modal } from "antd";
import Image from "next/image";
import { FC, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Prev from "@/public/icons/Prev";
import Next from "@/public/icons/Next";
import Close from "@/public/icons/Close";
import { ShoesType } from "@/types/ProductType";

type ProductSliderPropsType = ShoesType;

const ProductSlider: FC<ProductSliderPropsType> = ({
  images,
  thumbnailImages,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [thumbsSwiperModal, setThumbsSwiperModal] =
    useState<SwiperClass | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="lg:w-[28rem] xl:w-[23rem] 2xl:w-[28rem] relative product-swiper ">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="open slider modal button"
          className="hidden lg:flex lg:justify-center lg:items-center lg:size-10 bg-white absolute top-2 right-2 z-10 rounded-full hover:text-custom-orange-color transition-all"
        >
          <MdOpenInFull />
        </button>
        <Swiper
          navigation={{
            prevEl: ".product-swiper-prev-btn",
            nextEl: ".product-swiper-next-btn",
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="md:rounded-xl"
          breakpoints={{
            0: {
              spaceBetween: 10,
              slidesPerView: 1,
            },
            550: {
              spaceBetween: 10,
              slidesPerView: 1.5,
            },
            767: {
              spaceBetween: 10,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 10,
              slidesPerView: 1,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={`/images/${image}`}
                alt="product image"
                width={500}
                height={500}
              />
            </SwiperSlide>
          ))}
          <div className="product-swiper-prev-btn size-11 bg-white rounded-full absolute top-1/2 -translate-y-1/2 left-3 z-10 flex justify-center items-center stroke-black  hover:stroke-custom-orange-color cursor-pointer lg:hidden">
            <Prev />
          </div>
          <div className="product-swiper-next-btn size-11 bg-white rounded-full absolute top-1/2 -translate-y-1/2 right-3 z-10 flex justify-center items-center stroke-black hover:stroke-custom-orange-color cursor-pointer lg:hidden">
            <Next />
          </div>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="!hidden lg:!block mt-6 !overflow-visible"
          wrapperClass="flex gap-6"
        >
          {thumbnailImages.map((image, index) => (
            <SwiperSlide
              key={index}
              className="cursor-pointer rounded-xl overflow-hidden flex-1 !mr-0 "
            >
              <Image
                src={`/images/${image}`}
                alt="product image"
                width={500}
                height={500}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal
        onCancel={() => setIsOpen(false)}
        open={isOpen}
        centered
        footer={false}
        classNames={{
          mask: "bg-black/75 hidden lg:block",
          content: "bg-transparent shadow-none hidden lg:block",
        }}
        closeIcon={
          <span className="flex justify-center items-center absolute -top-6 right-4 fill-white hover:fill-custom-orange-color scale-125">
            <Close />
          </span>
        }
      >
        <div className="product-swiper-modal relative">
          <Swiper
            navigation={{
              prevEl: ".product-swiper-modal-prev-btn",
              nextEl: ".product-swiper-modal-next-btn",
            }}
            thumbs={{ swiper: thumbsSwiperModal }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="md:rounded-xl"
            breakpoints={{
              0: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
              550: {
                spaceBetween: 10,
                slidesPerView: 1.5,
              },
              767: {
                spaceBetween: 10,
                slidesPerView: 2,
              },
              1024: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={`/images/${image}`}
                  alt="product image"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiperModal}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="!hidden lg:!block mt-6 !overflow-visible"
            wrapperClass="flex gap-6 justify-center"
          >
            {thumbnailImages.map((image, index) => (
              <SwiperSlide
                key={index}
                className="cursor-pointer rounded-xl overflow-hidden !mr-0 !w-20"
              >
                <Image
                  src={`/images/${image}`}
                  alt="product image"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="product-swiper-modal-prev-btn size-12 bg-white rounded-full absolute top-56  -left-[23px] z-10 flex justify-center items-center stroke-black  hover:stroke-custom-orange-color cursor-pointer">
            <Prev />
          </div>
          <div className="product-swiper-modal-next-btn size-12 bg-white rounded-full absolute top-56  -right-[23px] z-10 flex justify-center items-center stroke-black hover:stroke-custom-orange-color cursor-pointer">
            <Next />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductSlider;
