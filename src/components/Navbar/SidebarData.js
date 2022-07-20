import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as HiIcons from "react-icons/hi";
import * as FiIcons from "react-icons/fi";

export const SidebarDataOne = [
  {
    title: "Home",
    path: "/",
    icon: <MdIcons.MdHomeFilled size={24} />,
    class: "sidenav-item",
  },
  {
    title: "Explore",
    path: "/explore",
    icon: <AiIcons.AiOutlineCompass size={24} />,
    class: "sidenav-item explore",
  },
  {
    title: "Shorts",
    path: "/shorts",
    icon: <GiIcons.GiUnderwearShorts size={24} />,
    class: "sidenav-item",
  },
  {
    title: "Subscriptions",
    path: "/subscriptions",
    icon: <MdIcons.MdOutlineSubscriptions size={24} />,
    class: "sidenav-item",
  },
];

export const SidebarDataTwo = [
  {
    title: "Library",
    path: "/library",
    icon: <MdIcons.MdOutlineLibraryAdd size={24} />,
  },
  {
    title: "History",
    path: "/history",
    icon: <MdIcons.MdHistory size={24} />,
  },
  {
    title: "Your videos",
    path: "/channel/user0",
    icon: <AiIcons.AiOutlinePlaySquare size={24} />,
  },
  {
    title: "Watch Later",
    path: "/later",
    icon: <AiIcons.AiOutlineClockCircle size={24} />,
  },
  {
    title: "Liked videos",
    path: "/liked",
    icon: <AiIcons.AiOutlineLike size={24} />,
  },
];

export const SidebarDataThree = [
  {
    title: "Music",
    path: "/",
    icon: <IoIcons.IoMusicalNotes size={18} />,
  },
  {
    title: "Sport",
    path: "/explore",
    icon: <AiIcons.AiFillTrophy size={18} />,
  },
  {
    title: "Gaming",
    path: "/shorts",
    icon: <IoIcons.IoGameController size={18} />,
  },
  {
    title: "Films",
    path: "/subscriptions",
    icon: <IoIcons.IoFilm size={18} />,
  },
];

export const SidebarDataFour = [
  {
    title: "Youtube Premium",
    path: "/",
    icon: <AiIcons.AiOutlineYoutube size={24} />,
  },
  {
    title: "Films",
    path: "/explore",
    icon: <IoIcons.IoFilmOutline size={24} />,
  },
  {
    title: "Live",
    path: "/shorts",
    icon: <MdIcons.MdLiveTv size={24} />,
  },
  {
    title: "Fashion & beauty",
    path: "/subscriptions",
    icon: <RiIcons.RiShirtLine size={24} />,
  },
  {
    title: "Learning",
    path: "/shorts",
    icon: <HiIcons.HiOutlineLightBulb size={24} />,
  },
  {
    title: "Sport",
    path: "/subscriptions",
    icon: <AiIcons.AiOutlineTrophy size={24} />,
  },
];
export const SidebarDataFive = [
  {
    title: "Settings",
    path: "/",
    icon: <FiIcons.FiSettings size={24} />,
  },
  {
    title: "Report History",
    path: "/explore",
    icon: <MdIcons.MdOutlinedFlag size={24} />,
  },
  {
    title: "Help",
    path: "/shorts",
    icon: <FiIcons.FiHelpCircle size={24} />,
  },
  {
    title: "Send Feedback",
    path: "/subscriptions",
    icon: <MdIcons.MdOutlineFeedback size={24} />,
  },
];
