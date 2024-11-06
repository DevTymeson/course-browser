import ClassDiv from "./ClassDiv";

interface Class {
    Code: string;
    Name: string;
    Credits: string;
    Description: string;
    Attributes: string;
}

interface Props {
    classes: Class[];
}

const ClassList = ({ classes }: Props) => {
    return (
        <div id="classes-div">
            <h1 id="classes-heading">Classes</h1>
            <ul id="class-ul">
                {classes.map((classItem) => (
                    <ClassDiv
                        key={classItem.Code}
                        code={classItem.Code}
                        name={classItem.Name}
                        credit={classItem.Credits}
                        desc={classItem.Description}
                        attributes={classItem.Attributes}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ClassList;
