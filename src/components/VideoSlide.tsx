import { useState } from "react";
import { Skeleton } from "./ui/skeleton"; 

export default function VideoSlide({ slide }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-md" />
      )}

      <video 
        className={`w-full h-full object-cover rounded-md pointer-events-none transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={slide}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
      />
    </div>
  );
}
