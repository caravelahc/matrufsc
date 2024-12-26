import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import styles from "./Campus.module.css"

function Campus(
    { 
        setCampusSemesterInfo,
        campusSemesterInfo
    } : { 
        setCampusSemesterInfo: Dispatch<SetStateAction<{
            campus: string,
            semester: string
        }>>,
        campusSemesterInfo: {
            campus: string,
            semester: string
        }
    }) {
    const CAMPUSES = [
        ["FLO", "Florianópolis"],
        ["JOI", "Joinville"],
        ["CBS", "Curitibanos"],
        ["ARA", "Araranguá"],
        ["BLN", "Blumenau"],
    ];

    /**
     * Returns appropriate [year, semester] to be displayed as default in semester
     * selection.
     *
     * Semester starts at 1.
    */
    const currentDisplaySemester = () => {
        const semesterEndMonths = [5, 10, 11, 0];

        let today = new Date(Date.now());

        let semester = 1 + Math.floor(today.getMonth() / 6);
        if (semesterEndMonths.includes(today.getMonth())) {
            semester += 1;
        }

        let year = today.getFullYear();

        if (today.getMonth() >= 10) {
            year += 1;
            semester = 1;
        }

        return [year, semester];
    }

    const loadSemesters = (max: number) => {
        let [year, semester] = currentDisplaySemester();
    
        let semesters = [];
        for (let _ of Array(max).keys()) {
            semesters.push(year + '-' +  semester);
    
            semester--;
            if (semester == 0) {
                semester = 2;
                year -= 1;
            }
        }
        
        return semesters;
    }

    const SEMESTERS = loadSemesters(4)

    useEffect(() => {
        setCampusSemesterInfo({
            campus: CAMPUSES[0][0],
            semester: SEMESTERS[0].replace('-', '')
        })
    }, [])


    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target

        setCampusSemesterInfo({
            ...campusSemesterInfo,
            [name]: value
        })
    }

    return (
        <td className={styles.ui_campus} align="left">
            {"Campus: "} 
            <select name="campus" onChange={handleChange}>
                {
                    CAMPUSES.map((campus, index) => {
                        return (
                            <option value={campus[0]} key={index}>{campus[1]}</option>
                        )
                    })
                }
            </select>
            <select name="semester" onChange={handleChange}>
                {
                    SEMESTERS.map((semester, index) => {
                        return (
                            <option value={semester.replace('-', '')} key={index}>{semester}</option>
                        )
                    })
                }
            </select>
        </td>
    )
}

export default Campus