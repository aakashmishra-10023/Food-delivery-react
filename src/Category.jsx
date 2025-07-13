import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { LiaPastafarianismSolid } from "react-icons/lia";
import { MdDinnerDining } from "react-icons/md";
import { LuPizza } from "react-icons/lu";
import { GiHamburger } from "react-icons/gi";
const categories = [
  {
    id: 1,
    name: "All",
    image: <TiThSmallOutline className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 2,
    name: "breakfast",
    image: (
      <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
    ),
  },
  {
    id: 3,
    name: "soups",
    image: <LuSoup className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 4,
    name: "pasta",
    image: (
      <LiaPastafarianismSolid className="w-[60px] h-[60px] text-green-600" />
    ),
  },
  {
    id: 5,
    name: "main_course",
    image: <MdDinnerDining className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 6,
    name: "pizza",
    image: <LuPizza className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 7,
    name: "burger",
    image: <GiHamburger className="w-[60px] h-[60px] text-green-600" />,
  },
];
export default categories;
