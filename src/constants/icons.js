import {
    BsPlusBsCircleFill,
    BsDot,
    BsExclamationSquareFill,
    Bs0Square,
    BsFillCheckCircleFill,
    BsThreeDots,
    BsCircleFill,
    BsCircle,
    BsPlusLg,
    BsXCircleFill,
    BsFillEmojiSmileUpsideDownFill
} from "react-icons/bs";

import {
    PiCircleHalfFill
} from "react-icons/pi";

import {
    TbCircleDotted,
} from "react-icons/tb";

import {
    BiDotsHorizontal,
    BiSignal3,
    BiSignal2,
    BiSignal1
} from "react-icons/bi";
import {
    MdOutlineSignalCellularAlt,
    MdOutlineSignalCellularAlt2Bar,
    MdOutlineSignalCellularAlt1Bar,
    MdOutlinePendingActions
} from "react-icons/md";

const icons = {
    "Todo": <BsCircle style={{ color: "silver" }} />,
    "In progress": <PiCircleHalfFill style={{ color: "gold" }} />,
    "Done": <BsFillCheckCircleFill style={{ color: "slateblue" }} />,
    "Cancelled": <BsXCircleFill style={{ color: "gray" }} />,
    "Backlog": <TbCircleDotted style={{ color: "grey" }} />,
    "Plus": <BsPlusLg style={{ color: "gray" }} />,
    "Dots": <BsThreeDots style={{ color: "gray" }} />,
    "No priority": <BiDotsHorizontal style={{ color: "gray" }} />,
    "Urgent": <BsExclamationSquareFill style={{ color: "orange" }} />,
    "High": <MdOutlineSignalCellularAlt />,
    "Medium": <div><MdOutlineSignalCellularAlt2Bar style={{ position: "absolute" }} /><MdOutlineSignalCellularAlt style={{ color: "silver" }} /></div>,
    "Low": <div><MdOutlineSignalCellularAlt1Bar style={{ position: "absolute" }} /><MdOutlineSignalCellularAlt style={{ color: "silver" }} /></div>,
    "Feature": <BsCircleFill style={{ color: "silver" }} />,
    "Unknown": <BsExclamationSquareFill style={{ color: "grey" }} />,
    0: <BiDotsHorizontal style={{ color: "gray" }} />,
    4: <BsExclamationSquareFill style={{ color: "orange" }} />,
    3: <MdOutlineSignalCellularAlt />,
    2: <div><MdOutlineSignalCellularAlt2Bar style={{ position: "absolute" }} /><MdOutlineSignalCellularAlt style={{ color: "silver" }} /></div>,
    1: <div><MdOutlineSignalCellularAlt1Bar style={{ position: "absolute" }} /><MdOutlineSignalCellularAlt style={{ color: "silver" }} /></div>,
}

const IMG_API_URL = "https://ui-avatars.com/api/?background=000000&format=svg&color=fff&name=";

const getImage = (name) => {
    return <img src={IMG_API_URL + name} className="card-img" />
}
const getStatusIcon = (isAvailable) => {
    const statusColor = isAvailable ? "lightgreen" : "gray";
    return <BsCircleFill className="card-img-status" style={{ color: statusColor }} />
}

export { icons, getImage, getStatusIcon }

