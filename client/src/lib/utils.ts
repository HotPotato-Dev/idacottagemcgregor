import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import cottageImage from "@assets/1.jpg";
import Braai from "@assets/2.jpg";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const galleryImages = [
  {
    src: cottageImage,
    alt: "Ida Olive Shepherds Cottage exterior in stunning Karoo landscape",
    category: "cottage"
  },
  {
    src: Braai,
    alt: "Rustic bedroom interior with natural lighting",
    category: "interior"
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Outdoor braai area with mountain views",
    category: "outdoor"
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Indigenous karoo vegetation and succulents",
    category: "nature"
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Dairy goats on the farm",
    category: "animals"
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Sunset over karoo landscape",
    category: "landscape"
  },
  {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Rustic cottage interior with fireplace",
    category: "interior"
  },
  {
    src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Starry night sky over the farm",
    category: "nature"
  }
];
