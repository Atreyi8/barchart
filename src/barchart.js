import "./App.css";
import { useMemo } from "react";
import { motion } from "framer-motion"

const Bar = ({ name, colour, height }) => {
    return <motion.div
        className="bar"
        initial={{height:0}}
        animate={{height:`${height}%`}}
        exit={{height:0}}
        transition={{duration:5}}
        style={{ backgroundColor: colour}}>
        <div className="tooltip">{name}</div>
    </motion.div>
}

const Barchart = ({ data }) => {
    const maxTicketCount = useMemo(() => {
        return Math.max(...data.map(item => item.ticketCount))
    }, [data])
    return (

        <motion.div 
        className="topcontainer"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:4}}
        >
            <div className="main-container">

                {data.map(ele => {
                    return <Bar className="bar" key={ele.id} height={(ele.ticketCount / maxTicketCount) * 100} {...ele} />

                })}
            </div>
            <div className="x-axis-label">Departments</div>
            <div className="y-axis-label">Number of Tickets</div>
        </motion.div>

    )

}

export default Barchart;