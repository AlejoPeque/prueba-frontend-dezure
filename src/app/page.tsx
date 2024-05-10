import React from "react";
import Transcription from "../components/Transcription";
import { transcriptionData } from "@/data/data";
import { motion } from "framer-motion";
import FadeInAll from "@/utils/FadeInAll";

const audioSrc = "/sound/audio.wav";

const Home: React.FC = () => {
  return (
    <div className='container mx-auto py-14 flex flex-col gap-2 justify-center p-2'>
      <FadeInAll>
        <h1 className='text-2xl md:text-4xl font-bold text-center mb-4'>
          Prueba Tecnica • Dezure
        </h1>
      </FadeInAll>

      <Transcription
        messages={transcriptionData}
        audioSrc={audioSrc}
      />
    </div>
  );
};

export default Home;
