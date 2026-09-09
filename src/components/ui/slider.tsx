import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

export function Slider({
  className,
  ...props
}: SliderPrimitive.SliderProps) {
  return (
    <SliderPrimitive.Root
      className={cn("relative flex h-11 w-full touch-none items-center", className)}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1 w-full rounded-full bg-paper/15">
        <SliderPrimitive.Range className="absolute h-full rounded-full bg-orange" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block size-5 rounded-full bg-paper shadow-border after:absolute after:top-1/2 after:left-1/2 after:size-11 after:-translate-1/2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange" />
    </SliderPrimitive.Root>
  );
}

export function SliderPaper({
  className,
  ...props
}: SliderPrimitive.SliderProps) {
  return (
    <SliderPrimitive.Root
      className={cn("relative flex h-11 w-full touch-none items-center", className)}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1 w-full rounded-full bg-ink/12">
        <SliderPrimitive.Range className="absolute h-full rounded-full bg-ember" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block size-5 rounded-full bg-ink after:absolute after:top-1/2 after:left-1/2 after:size-11 after:-translate-1/2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember" />
    </SliderPrimitive.Root>
  );
}
