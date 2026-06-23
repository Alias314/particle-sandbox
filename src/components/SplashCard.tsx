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
import VideoSlide from "./VideoSlide";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <Card className="h-auto w-2xl overflow-visible rounded-none bg-white rounded-md">
        <CardHeader className="flex flex-col">
          <Carousel className="w-full mx-auto overflow-hidden">
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide}>
                  <AspectRatio ratio={16 / 9}>
                    <VideoSlide slide={slide} />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 [&_svg]:!w-6 [&_svg]:!h-6 bg-black/40 border-none text-white" />
            <CarouselNext className="right-3 [&_svg]:!w-6 [&_svg]:!h-6 bg-black/40 border-none text-white" />
          </Carousel>
        </CardHeader>
        <CardContent className="mt-1">
          <CardTitle className="mb-1 text-xl text-center font-semibold">
            Particle Sandbox
          </CardTitle>
          <CardDescription className="px-2 text-justify text-gray-900">
            Welcome to the Particle Sandbox, a real-time 3D simulation driven by
            the BOIDS flocking algorithm. Play with the sliders to change how
            many particles spawn, how they move, and how they're pulled toward
            (or pushed from) the black hole. If you're curious on what some of
            the sliders do, just hover on the label of each slider.
          </CardDescription>
          <CardAction className="mt-10 relative right-0 ml-auto">
            <Button
              className="py-4 px-3 text-lg text-white bg-slate-800 hover:bg-slate-700"
              onClick={onClose}
            >
              Get Started
            </Button>
          </CardAction>
        </CardContent>
      </Card>
    </div>
  );
}
