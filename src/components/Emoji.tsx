import { Image, ImageProps } from "@chakra-ui/react";
import BullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsup from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: string]: ImageProps } = {
    "3": { src: meh, alt: "meh", boxSize: "25px" },
    "4": { src: thumbsup, alt: "recommended", boxSize: "25px" },
    "5": { src: BullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[String(rating)]} marginTop={1} />;
};

export default Emoji;
