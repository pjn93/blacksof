// src/constants/vehicleOptions.ts
import CarBody from "../../assets/carbody.mp4";
import Front from "../../assets/front.mp4";
import Cabin from "../../assets/cabin.mp4";
import Trunk from "../../assets/Trunk.mp4";
import Exterior from "../../assets/Exterior.mp4";

export interface VehicleOption {
  label: string;
  image: string;
}

export const vehicleOptions: VehicleOption[] = [
  { label: "Complete Body", image: CarBody },
  { label: "Front", image: Front },
  { label: "Cabin", image: Cabin },
  { label: "Trunk", image: Trunk },
  { label: "Exterior", image: Exterior },
];
