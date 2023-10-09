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


export const icons = {
    "Todo": <BsCircle style={{color: "silver"}} />,
    "In Progress": <PiCircleHalfFill style={{color: "gold"}} />,
    "Done": <BsFillCheckCircleFill style={{color: "slateblue"}} />,
    "Cancelled": <BsXCircleFill style={{color: "gray"}} />,
    "Backlog": <MdOutlinePendingActions style={{color: "red"}} />,
    "Plus": <BsPlusLg style={{color: "gray"}} />,
    "Dots": <BsThreeDots style={{color: "gray"}} />,
    "No priority": <BiDotsHorizontal style={{color: "gray"}} />,
    "Urgent": <BsExclamationSquareFill style={{color: "orange"}} />,
    "High": <MdOutlineSignalCellularAlt />,
    "Medium": <div><MdOutlineSignalCellularAlt2Bar style={{position: "absolute"}} /><MdOutlineSignalCellularAlt style={{color: "silver"}} /></div>,
    "Low": <div><MdOutlineSignalCellularAlt1Bar style={{position: "absolute"}} /><MdOutlineSignalCellularAlt style={{color: "silver"}} /></div>,
    "Feature": <BsCircleFill style={{color: "silver"}} />,
    "Unknown":<BsExclamationSquareFill style={{color: "grey"}} />,
}

