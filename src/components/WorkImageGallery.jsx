"use client";

import Image from "next/image";

import { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const WorkImageGallery = ({ items }) =>
{
  const [selectedIndex, SetSelectedIndex] = useState(null);

  const OpenImage = (index) => SetSelectedIndex(index);
  const CloseImage = () => SetSelectedIndex(null);

  const PrevImage = (e) =>
  {
    e.stopPropagation();
    SetSelectedIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  }

  const NextImage = (e) =>
  {
    e.stopPropagation();
    SetSelectedIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  }

  return (
    <div className="grid grid-cols-1 px-4 gap-4
      sm:grid-cols-3 sm:px-16 sm:gap-12">
      {
        items.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer relative group bg-surfaceA10 rounded-3xl p-2"
            onClick={() => OpenImage(index)}>
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className="w-full h-[300px] object-cover rounded-3xl" />

            <div className="absolute bottom-0 left-0 w-full p-2 text-center bg-surfaceA10 rounded-b-3xl">
              {item.title}
            </div>
          </div>
        ))
      }

      {/* Popup */}
      {
        selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={CloseImage}>
            <div
              className="bg-surfaceA10 rounded-3xl shadow-lg p-6 max-w-4xl w-full text-center relative flex flex-col
                sm:flex-row"
              onClick={(e) => e.stopPropagation()}>
              {/* Close button */}
              <button
                className="absolute top-3 right-3 text-xl hover:text-primaryA30"
                onClick={CloseImage}>
                <FiX size={24} />
              </button>

              {/* Image */}
              <div className="w-full flex items-center justify-center
                sm:w-2/3">
                <Image
                  src={items[selectedIndex].image}
                  alt={items[selectedIndex].title}
                  width={600}
                  height={400}
                  className="w-full h-auto max-h-[80vh] object-cover rounded-3xl" />
              </div>

              <div className="w-full p-4 flex flex-col justify-center
                sm:w-1/3">
                <h2 className="font-bold text-xl mb-2">{items[selectedIndex].title}</h2>
                <ul className="list-disc text-start ml-4">
                  {
                    items[selectedIndex].description.split("\n").map((point, i) => <li key={i}>{point.trim()}</li>)
                  }
                </ul>
              </div>

              {/* Navigation buttons for smaller screens */}
              <div className="flex justify-between mt-2
                sm:hidden">
                <button
                  className="text-white p-3 rounded-full hover:bg-primaryA30"
                  onClick={PrevImage} >
                  <FiChevronLeft size={24} />
                </button>

                <button
                  className="text-white p-3 rounded-full hover:bg-primaryA30"
                  onClick={NextImage}>
                  <FiChevronRight size={24} />
                </button>
              </div>

              {/* Navigation for larger screens */}
              <button
                className="hidden absolute text-white p-2 rounded-full hover:bg-primaryA30
                  -left-10 top-1/2 transform -translate-y-1/2
                  sm:block"
                onClick={PrevImage} >
                <FiChevronLeft size={24} />
              </button>

              <button
                className="hidden absolute text-white p-2 rounded-full hover:bg-primaryA30
                  -right-10 top-1/2 transform -translate-y-1/2
                  sm:block"
                onClick={NextImage}>
                <FiChevronRight size={24} />
              </button>

            </div>
          </div>
        )
      }
    </div >
  );
}

export default WorkImageGallery;
