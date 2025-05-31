import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import cottageImage from "@assets/Cottage 1.jpg";
import Braai from "@assets/Braai area.jpg";
import Bath from "@assets/Bath.jpg";
import Bathroom1 from "@assets/Bathroom 1.jpg";
import Bathroom from "@assets/Bathroom.jpg";
import BraaiArea from "@assets/Braai area.jpg";
import Cottage1 from "@assets/Cottage 1.jpg";
import Cottage2 from "@assets/Cottage 2.jpg";
import Cottage3 from "@assets/Cottage 3.jpg";
import Cottage from "@assets/Cottage.jpg";
import Dam from "@assets/Dam.jpg";
import FarmRoad from "@assets/Farm Road.jpg";
import FirePlaceSpaced from "@assets/Fire place.jpg";
import Fireplace1 from "@assets/Fireplace 1.jpg";
import Flowers2 from "@assets/Flowers 2.jpg";
import Flowers from "@assets/Flowers.jpg";
import GasBraai from "@assets/Gas Braai.jpg";
import GuestBedroom1 from "@assets/Guest bedroom 1.jpg";
import GuestBedroom from "@assets/Guest Bedroom.jpg";
import Kitchen1 from "@assets/Kitchen 1.jpg";
import Kitchen2 from "@assets/Kitchen 2.jpg";
import Kitchen from "@assets/Kitchen.jpg";
import MainBedroom1 from "@assets/Main Bedroom 1.jpg";
import MainBedroom from "@assets/Main Bedroom.jpg";
import OutdoorShower from "@assets/Outdoor Shower.jpg";
import Stoep1 from "@assets/Stoep 1.jpg";
import Stoep from "@assets/Stoep.jpg";


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
    src: Bath,
    alt: "Rustic bath setup with wooden interior and scenic window view",
    category: "bathroom"
  },
  {
    src: Bathroom1,
    alt: "Rustic bathroom with large tub and red-accented windows",
    category: "bathroom"
  },
  {
    src: Bathroom,
    alt: "Modern rustic bathroom with wooden walls and natural light",
    category: "bathroom"
  },
  {
    src: Kitchen1,
    alt: "Rustic kitchen with brass pots and corrugated metal walls",
    category: "kitchen"
  },
  {
    src: Kitchen2,
    alt: "Close-up of a cozy kitchen stove with vintage vibes",
    category: "kitchen"
  },
  {
    src: Kitchen,
    alt: "Open shelf rustic kitchen with essentials and wooden counter",
    category: "kitchen"
  },
  {
    src: MainBedroom,
    alt: "Main bedroom with wooden finish and cozy double bed",
    category: "bedroom"
  },
  {
    src: Cottage,
    alt: "Ida Olive Shepherds Cottage exterior in stunning Karoo landscape",
    category: "cottage"
  },
  {
    src: Dam,
    alt: "Beautiful dam surrounded by natural bushveld",
    category: "nature"
  },
  {
    src: FarmRoad,
    alt: "Dusty farm road winding through a mountainous Karoo area",
    category: "nature"
  },
  {
    src: FirePlaceSpaced,
    alt: "Rustic fireplace area with cozy chairs and mountain view",
    category: "living"
  },
  {
    src: Flowers,
    alt: "Bright red wildflowers blooming in dry Karoo soil",
    category: "nature"
  },
  {
    src: GuestBedroom1,
    alt: "Guest bedroom with double bed and wooden interior walls",
    category: "bedroom"
  },
  {
    src: GuestBedroom,
    alt: "Cozy wooden guest bedroom with natural light",
    category: "bedroom"
  },
  {
    src: MainBedroom1,
    alt: "Main bedroom with charming wood paneling and comfy bed",
    category: "bedroom"
  },
  {
    src: OutdoorShower,
    alt: "Private outdoor shower overlooking the Karoo hills",
    category: "amenities"
  },
  {
    src: BraaiArea,
    alt: "Covered braai area with seating and panoramic view",
    category: "entertainment"
  },
  {
    src: Cottage1,
    alt: "Front view of shepherds cottage with bushveld background",
    category: "cottage"
  },
  {
    src: Cottage2,
    alt: "Side view of cottage featuring stone chimney and modern design",
    category: "cottage"
  },
  {
    src: Cottage3,
    alt: "Cottage surrounded by pink flowers and mountainous terrain",
    category: "cottage"
  },
  {
    src: Fireplace1,
    alt: "Fireplace in enclosed patio with view of landscape",
    category: "living"
  },
  {
    src: Flowers2,
    alt: "Close-up of delicate purple Karoo flowers in bloom",
    category: "nature"
  },
  {
    src: GasBraai,
    alt: "Gas braai station with seating area and mountain view",
    category: "entertainment"
  },
  {
    src: Stoep1,
    alt: "Wooden stoep with mountain backdrop and rustic charm",
    category: "stoep"
  },
  {
    src: Stoep,
    alt: "Cozy stoep area with seating and scenic views",
    category: "stoep"
  }
  
  
];
