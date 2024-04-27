import { StaticImageData } from "next/image";

export interface ButtonProps {
    onClick?: () => void;
    text?: string;
    children?: React.ReactNode;
    img?: string | StaticImageData;
    link?: string;
    width?: string | number;
    height?: string | number;
    backgroundColor?: string;
  }
