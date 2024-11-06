import { useState } from "react";

interface Props {
    code: string;
    name: string;
    credit: string;
    desc: string;
    attributes: string;
}

const ClassDiv = ({ code, name, credit, desc, attributes }: Props) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

    const toggleInfo = () => {
        setIsCollapsed(prev => !prev);
    }

    return (
        <div className="class-div">
            <h3 className="class-name" onClick={toggleInfo}>
                {code}: {name}
            </h3>
            <div className={isCollapsed ? "collapsed info-div" : "info-div"}>
                <p>{credit} Credits</p>
                <p>{desc}</p>
                <p>{attributes}</p>
            </div>
        </div>
    );
};

export default ClassDiv;
