import { useState } from "react";

interface Props {
    onApplyFilter: (
        nameFilter: string,
        codeFilter: string,
        creditFilter: string,
        attributeFilter: string,
        notIncludeFilter: string,
    ) => void;
}

const Filters = ({ onApplyFilter }: Props) => {
    const [nameFilter, setNameFilter] = useState<string>("");
    const [codeFilter, setCodeFilter] = useState<string>("");
    const [creditFilter, setCreditFilter] = useState<string>("");
    const [attributeFilter, setAttributeFilter] = useState<string>("");
    const [notIncludeFilter, setNotIncludeFilter] = useState<string>("");

    const handleApplyFilter = () => {
        onApplyFilter(nameFilter, codeFilter, creditFilter, attributeFilter, notIncludeFilter);
    };

    return (
        <div id="filters-div">
            <label htmlFor="name-filter">
                Course name:
                <input
                    type="text"
                    name="name-filter"
                    id="name-filter"
                    placeholder="Programming"
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                />
            </label>
            <label htmlFor="code-filter">
                Course code:
                <input
                    type="text"
                    name="code-filter"
                    id="code-filter"
                    placeholder="AA 100, AE, etc."
                    value={codeFilter}
                    onChange={(e) => setCodeFilter(e.target.value)}
                />
            </label>
            <label htmlFor="credit-filter">
                # of credits:
                <input
                    type="number"
                    name="credit-filter"
                    id="credit-filter"
                    placeholder="3"
                    value={creditFilter}
                    onChange={(e) => setCreditFilter(e.target.value)}
                />
            </label>
            <label htmlFor="attribute-filter">
                Attributes:
                <select
                    name="attribute-filter"
                    id="attribute-filter"
                    value={attributeFilter}
                    onChange={(e) => setAttributeFilter(e.target.value)}
                >
                    <option value="">
                        Select one (if needed)
                    </option>
                    <option value="Arts (GA)">
                        Arts (GA)
                    </option>
                    <option value="Health and Wellness (GHW)">
                        Health and Wellness (GHW)
                    </option>
                    <option value="Humanities (GH)">
                        Humanities (GH)
                    </option>
                    <option value="Integrative: Interdomain">
                        Interdomain
                    </option>
                    <option value="Natural Sciences (GN)">
                        Natural Sciences (GN)
                    </option>
                    <option value="Quantification (GQ)">
                        Quantification (GQ)
                    </option>
                    <option value="Social and Behavioral Scien (GS)">
                        Social and Behavioral Scien (GS)
                    </option>
                    <option value="Writing/Speaking (GWS)">
                        Writing/Speaking (GWS)
                    </option>
                    <option value="First-Year Seminar">
                        First-Year Seminar
                    </option>
                    <option value="International Cultures (IL)">
                        International Cultures (IL)
                    </option>
                    <option value="United States Cultures (US)">
                        United States Cultures (US)
                    </option>
                    <option value="Writing Across the Curriculum">
                        Writing Across the Curriculum
                    </option>
                    <option value="Bachelor of Arts: Arts">
                        Bachelor of Arts: Arts
                    </option>
                    <option value="Bachelor of Arts: Humanities">
                        Bachelor of Arts: Humanities
                    </option>
                    <option value="Bachelor of Arts: Natural Sciences">
                        Bachelor of Arts: Natural Sciences
                    </option>
                    <option value="Bachelor of Arts: Quantification">
                        Bachelor of Arts: Quantification
                    </option>
                    <option value="Bachelor of Arts: Social and Behavioral Sciences">
                        Bachelor of Arts: Social and Behavioral Sciences
                    </option>
                    <option value="Bachelor of Arts: World Cultures">
                        Bachelor of Arts: World Cultures
                    </option>
                    <option value="Bachelor of Arts: World Lang (12th Unit)">
                        Bachelor of Arts: World Lang (12th Unit)
                    </option>
                    <option value="Bachelor of Arts: World Language (All)">
                        Bachelor of Arts: World Language (All)
                    </option>
                    <option value="Exceeds 12th Unit of World Language">
                        Exceeds 12th Unit of World Language
                    </option>
                </select>
            </label>
            <label htmlFor="not-include-filter">
                Don't include:
                <select
                    name="not-include-filter"
                    id="not-include-filter"
                    value={notIncludeFilter}
                    onChange={(e) => setNotIncludeFilter(e.target.value)}
                >
                    <option value="">
                        Select one (if needed)
                    </option>
                    <option value="Arts (GA)">
                        Arts (GA)
                    </option>
                    <option value="Health and Wellness (GHW)">
                        Health and Wellness (GHW)
                    </option>
                    <option value="Humanities (GH)">
                        Humanities (GH)
                    </option>
                    <option value="Integrative: Interdomain">
                        Interdomain
                    </option>
                    <option value="Natural Sciences (GN)">
                        Natural Sciences (GN)
                    </option>
                    <option value="Quantification (GQ)">
                        Quantification (GQ)
                    </option>
                    <option value="Social and Behavioral Scien (GS)">
                        Social and Behavioral Scien (GS)
                    </option>
                    <option value="Writing/Speaking (GWS)">
                        Writing/Speaking (GWS)
                    </option>
                    <option value="First-Year Seminar">
                        First-Year Seminar
                    </option>
                    <option value="International Cultures (IL)">
                        International Cultures (IL)
                    </option>
                    <option value="United States Cultures (US)">
                        United States Cultures (US)
                    </option>
                    <option value="Writing Across the Curriculum">
                        Writing Across the Curriculum
                    </option>
                    <option value="Bachelor of Arts: Arts">
                        Bachelor of Arts: Arts
                    </option>
                    <option value="Bachelor of Arts: Humanities">
                        Bachelor of Arts: Humanities
                    </option>
                    <option value="Bachelor of Arts: Natural Sciences">
                        Bachelor of Arts: Natural Sciences
                    </option>
                    <option value="Bachelor of Arts: Quantification">
                        Bachelor of Arts: Quantification
                    </option>
                    <option value="Bachelor of Arts: Social and Behavioral Sciences">
                        Bachelor of Arts: Social and Behavioral Sciences
                    </option>
                    <option value="Bachelor of Arts: World Cultures">
                        Bachelor of Arts: World Cultures
                    </option>
                    <option value="Bachelor of Arts: World Lang (12th Unit)">
                        Bachelor of Arts: World Lang (12th Unit)
                    </option>
                    <option value="Bachelor of Arts: World Language (All)">
                        Bachelor of Arts: World Language (All)
                    </option>
                    <option value="Exceeds 12th Unit of World Language">
                        Exceeds 12th Unit of World Language
                    </option>
                </select>
            </label>
            <button id="search-btn" onClick={handleApplyFilter}>
                Search
            </button>
        </div>
    );
};

export default Filters;
