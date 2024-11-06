import { useEffect, useState } from "react";
import ClassList from "./ClassList";
import Filters from "./Filters";

interface Class {
    Code: string;
    Name: string;
    Credits: string;
    Description: string;
    Attributes: string;
}

const ClassProvider = () => {
    const [classes, setClasses] = useState<Class[]>([]);
    const [filtered, setFilteredClasses] = useState<Class[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await fetch("http://localhost:5000/classes");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data: Class[] = await response.json();
                setClasses(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchClasses();
    }, []);

    const filterClasses = (
        nameFilter: string,
        codeFilter: string,
        creditFilter: string,
        attributeFilter: string
    ): Array<Class> => {
        try {
            return classes.filter((classItem) => {
                return (
                    classItem.Name.includes(nameFilter) &&
                    classItem.Code.includes(codeFilter) &&
                    classItem.Credits.includes(creditFilter) &&
                    (attributeFilter === "" ||
                        classItem.Attributes.includes(attributeFilter))
                );
            });
        } catch (e) {
            console.error(`Something went wrong: ${e}`);
            return [];
        }
    };

    const handleFilterApply = (
        nameFilter: string,
        codeFilter: string,
        creditFilter: string,
        attributeFilter: string
    ) => {
        const filtered = filterClasses(
            nameFilter,
            codeFilter,
            creditFilter,
            attributeFilter
        );
        setFilteredClasses(filtered);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div id="main-div">
            <h1 id="heading">
                Welcome to the Unofficial Penn State Course Browser!
            </h1>
            <Filters onApplyFilter={handleFilterApply} />
            <ClassList classes={filtered} />
        </div>
    );
};

export default ClassProvider;
