"use client";
import React, { useState, useRef, useEffect } from "react";

interface Message {
  content: string;
  role: string;
  start: number;
  end: number;
}

interface TranscriptionProps {
  messages: Message[];
  audioSrc: string;
}

const Transcription: React.FC<TranscriptionProps> = ({
  messages,
  audioSrc,
}) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [finAudio, setFinAudio] = useState(0);

  // Carga el audio
  useEffect(() => {
    const newAudio = new Audio(audioSrc);
    setAudio(newAudio);
    return () => {
      newAudio.pause();
    };
  }, [audioSrc]);

  // Actualiza el tiempo del audio y lo pausa cuando llega al final
  useEffect(() => {
    const handleTimeUpdate = () => {
      if (audio) {
        if (audio.currentTime >= finAudio) {
          audio.pause();
        }
      }
    };

    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [audio, finAudio]);

  // Salta a un tiempo específico y reproduce el audio
  const handleJumpToTime = (start: number, end: number) => {
    if (audio) {
      audio.currentTime = start;
      audio.play();
    }
    setFinAudio(end);
  };

  return (
    <div className='space-y-4'>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.role === "agent" ? "justify-start" : "justify-end"
          } items-start`}>
          <button
            onClick={() => handleJumpToTime(message.start, message.end)}
            className='bg-[#f1f1f1] relative p-4 rounded-3xl shadow-md text-left transition-all duration-300 hover:-translate-y-1'>
            <p
              className={`font-semibold text-sm md:text-base ${
                message.role === "agent" ? "text-[#ff7373]" : "text-[blue]"
              } capitalize`}>
              {message.role}
            </p>
            <p className="text-sm md:text-base">{message.content}</p>
          </button>
        </div>
      ))}
      <audio
        ref={audioRef}
        src={audioSrc}></audio>
    </div>
  );
};

export default Transcription;
