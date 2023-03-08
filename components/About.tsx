'use client'
import React from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {}

// export default function About({ }: Props) {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0
//       }}
//       animate={{
//         opacity: 1
//       }}
//       transition={{
//         duration: 2
//       }}
//       className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
//     >
//       <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

//       <motion.img
//         initial={{
//           x: -200,
//           opacity: 0
//         }}
//         transition={{
//           duration: 1.5
//         }}
//         whileInView={{
//           x: 0,
//           opacity: 1
//         }}
//         // src="/CartoonSelfPhotoNoBG.png"
//         src="/UCI-Photo.jpg"
//         className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-54 md:h-95 xl:w-[300px] xl:h-[300px]"
//       />

//       <div className="space-y-10 px-0 md:px-10">
//         <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7ab0a]/50">little</span> background</h4>
//         <p className="text-base"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at dapibus purus. Proin quis vestibulum est. Praesent porttitor vehicula diam fermentum tincidunt. Donec laoreet sit amet augue eu fermentum. In euismod eros ac metus rhoncus, a commodo dolor vulputate. Nam porta aliquam orci, quis vehicula nibh tempus ac. Etiam ornare turpis imperdiet ante faucibus elementum. Nam vitae lectus vel lorem tincidunt dignissim quis sed est. Suspendisse pharetra tincidunt lorem non fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at dapibus purus. Proin quis vestibulum est. Praesent porttitor vehicula diam fermentum tincidunt. Donec laoreet sit amet augue eu fermentum. In euismod eros ac metus rhoncus, a commodo dolor vulputate. Nam porta aliquam orci, quis vehicula nibh tempus ac. Etiam ornare turpis imperdiet ante faucibus elementum. Nam vitae lectus vel lorem tincidunt dignissim quis sed est. Suspendisse pharetra tincidunt lorem non fermentum.</p>
//       </div>

//     </motion.div>
//   )
// }

export default function About({ }: Props) {
  const love = '<I-Love-';
  const end = '/>';
  // const [text] = useTypewriter({
  //   words: [
  //     "Coffee/>",
  //     "ToCreate/>",
  //     "ToCode/>"
  //   ],
  //   loop: Infinity,
  //   delaySpeed: 2500
  // });
  return (
    <div className="container h-screen m-auto text-center">
      <div className="flex w-full justify-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mt-[10%] mb-[70px]">About</h3>
      </div>
      <div className="flex w-[90%] flex-wrap m-auto">
        <div className="basis-full lg:basis-[50%]">
          <motion.img
            initial={{
            x: -200,
            opacity: 0
            }}
            transition={{
              duration: 1.5
            }}
            whileInView={{
              x: 0,
              opacity: 1
            }}
            src="/UCI-Photo.jpg"
            className="mb-20 md:mb-0 flex-shrink-0 w-72 h-72 rounded-full object-cover lg:rounded-lg lg:w-96 lg:h-96 xl:w-[300px] xl:h-[300px] m-auto border"
          />
          <h1>Fun Facts:</h1>
          {/* <h1>{love}{text}</h1> */}
          <h1>{love}To-Workout {end}</h1>
          <h1>{love}To-Travel {end}</h1>
          <h1>{love}To-RockClimb {end}</h1>
        </div>
        <div className="basis-full lg:basis-[50%]">
          <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at dapibus purus. Proin quis vestibulum est. Praesent porttitor vehicula diam fermentum tincidunt. Donec laoreet sit amet augue eu fermentum. In euismod eros ac metus rhoncus, a commodo dolor vulputate. Nam porta aliquam orci, quis vehicula nibh tempus ac. Etiam ornare turpis imperdiet ante faucibus elementum. Nam vitae lectus vel lorem tincidunt dignissim quis sed est. Suspendisse pharetra tincidunt lorem non fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at dapibus purus. Proin quis vestibulum est. Praesent porttitor vehicula diam fermentum tincidunt. Donec laoreet sit amet augue eu fermentum. In euismod eros ac metus rhoncus, a commodo dolor vulputate. Nam porta aliquam orci, quis vehicula nibh tempus ac. Etiam ornare turpis imperdiet ante faucibus elementum. Nam vitae lectus vel lorem tincidunt dignissim quis sed est. Suspendisse pharetra tincidunt lorem non fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at dapibus purus. Proin quis vestibulum est. Praesent porttitor vehicula diam fermentum tincidunt. Donec laoreet sit amet augue eu fermentum. In euismod eros ac metus rhoncus, a commodo dolor vulputate. Nam porta aliquam orci, quis vehicula nibh tempus ac. Etiam ornare turpis imperdiet ante faucibus elementum. Nam vitae lectus vel lorem tincidunt dignissim quis sed est. Suspendisse pharetra tincidunt lorem non fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at dapibus purus. Proin quis vestibulum est. Praesent porttitor vehicula diam fermentum tincidunt. Donec laoreet sit amet augue eu fermentum. In euismod eros ac metus rhoncus, a commodo dolor vulputate. Nam porta aliquam orci, quis vehicula nibh tempus ac. Etiam ornare turpis imperdiet ante faucibus elementum. Nam vitae lectus vel lorem tincidunt dignissim quis sed est. Suspendisse pharetra tincidunt lorem non fermentum.</p>
        </div>

      </div>
    </div>
  )
}


// div - container
// div - row - width 100% - display flex
// div - row - width 100% - display flex
// div - column half
// div - column half
