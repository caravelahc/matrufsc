import InfoWrapper from "./components/info-wrapper/InfoWrapper";
import Horarios from "./components/horarios/Horarios";
import Campus from "./components/campus/Campus";
import Logger from "./components/logger/Logger";
import Turmas from "./components/turmas/Turmas";
import Planos from "./components/planos/Planos";
import Saver from "./components/saver/Saver";
import Materias from "./components/materias/Materias";
import MateriasSuggetions from "./components/materias_suggestions/MateriasSugestions";
import { useEffect, useState } from "react";

function App() {
    const [campusSemesterInfo, setCampusSemesterInfo] = useState({
        campus: "",
        semester: ""
    })
    const [database, setDatabase] = useState([])

    useEffect(() => {
        const loadDb = async () => {
            const { campus, semester } = campusSemesterInfo

            if (campus !== "" && semester !== "") {
                fetch(`../db/${semester}_${campus}.json`, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    }
                })
                    .then(response => response.json())
                    .then(json => {
                        setDatabase(json[campus])   
                    }).then(() => console.log("Database updated!"))
                /*fetch(`https://matrufsc.caravela.club/data//${semester}.json`, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    }
                })
                    .then(response => response.json())
                    .then(json => {
                        setDatabase(json[campus])   
                    }).then(() => console.log("Database updated!"))*/
            }
        }

        loadDb()
    }, [campusSemesterInfo])


    return (
        <InfoWrapper>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <table cellPadding={0} cellSpacing={0} width="100%">
                                <tbody>
                                    <tr>
                                        <Campus setCampusSemesterInfo={setCampusSemesterInfo} campusSemesterInfo={campusSemesterInfo}/>
                                        <Planos />
                                        <Saver />
                                    </tr>
                                </tbody>
                            </table>
                            <table cellPadding={0} cellSpacing={0} width="100%">
                                <tbody>
                                    <tr>
                                        <MateriasSuggetions database={database} />
                                        <Logger />
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <div id="avisos" style={{display: "none"}}>
                                {/*AVISOS COMPONENT HERE*/}
                            </div>
                            <div id="updates_list" style={{display: "none"}}>
                                {/*UPDATE_LIST COMPONENT HERE*/}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <Materias />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: "440px", verticalAlign:"top" }}>
                            <Horarios />
                        </td>
                        <td style={{ width: "440px" }} valign="top">
                            <Turmas />
                        </td>
                    </tr>
                </tbody>
            </table>
        </InfoWrapper>
    );
}
export default App;
