import { X } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const slides = [
  "/video/carousel/slide-1.mp4",
  "/video/carousel/slide-2.mp4",
  "/video/carousel/slide-3.mp4",
  "/video/carousel/slide-4.mp4",
  "/video/carousel/slide-5.mp4",
  "/video/carousel/slide-6.mp4",
  "/video/carousel/slide-7.mp4",
];

export default function SplashCard({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <Card className="h-full w-[40%] bg-white overflow-visible rounded-none bg-white shadow-lg shadow-white">
        <CardHeader className="flex flex-col">
          <CardAction className="relative right-0 ml-auto">
            <Button className="bg-white" variant="ghost" onClick={onClose}>
              <X className="size-6 text-gray-950" />
            </Button>
          </CardAction>
          <Carousel className="w-2xl mx-auto overflow-hidden">
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide}>
                  <AspectRatio ratio={16 / 9}>
                    <video 
                      className="w-full h-full object-cover rounded-md pointer-events-none"
                      src={slide}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 [&_svg]:!w-6 [&_svg]:!h-6 bg-black/40 border-none text-white" />
            <CarouselNext className="right-3 [&_svg]:!w-6 [&_svg]:!h-6 bg-black/40 border-none text-white" />
          </Carousel>
        </CardHeader>
        <CardContent className="px-12">
          <CardTitle className="text-xl text-center">
            Particle Sandbox
          </CardTitle>
          <CardDescription className="text-justify text-gray-900">
            Ni hao, this a real-time 3D particle simulation and stuff yea. hmm
            this uses the BOIDS algorithm for the particle movement and stuff.
            there a buncha sliders that you can use to tweak the amount of
            particles, its movement patterns, and even sliders for how the
            particle interacts with other particles and with the black hole (the
            sphere)
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
