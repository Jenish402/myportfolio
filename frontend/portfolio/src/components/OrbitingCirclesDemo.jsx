import { OrbitingCircles } from "../components/OrbitingCircles";
import { FaPython } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export function OrbitingCirclesDemo() {
    return (
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={40}>
                <FaPython  className="text-[30px]"/>
                <SiPandas  className="text-[30px]"/>
                <SiNumpy  className="text-[30px]"/>
            </OrbitingCircles>
            <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
                <FaReact  className="text-[30px]"/>
                <FaNodeJs  className="text-[30px]"/>
                <SiMongodb  className="text-[30px]"/>
                <RiTailwindCssFill  className="text-[30px]"/>
                <FaHtml5  className="text-[30px]"/>
                <RiNextjsFill  className="text-[30px]"/>
            </OrbitingCircles>
        </div>
    );
}
