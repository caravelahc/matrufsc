import InfoWrapper from "./components/info-wrapper/InfoWrapper";
import Horarios from "./components/horarios/Horarios";
import Campus from "./components/campus/Campus";
import Logger from "./components/logger/Logger";
import Turmas from "./components/turmas/Turmas";
//import Planos from "./components/planos/Planos";
//import Saver from "./components/saver/Saver";
import Materias from "./components/materias/Materias";
import MateriasSuggetions from "./components/materias_suggestions/MateriasSugestions";
import { useEffect, useState } from "react";

import { 
    addMateria, 
    removeMateria, 
    formatDbMaterias, 
    checkboxMateria,
    moveUpMateria,
    moveDownMateria,
    changeTurmaEscolhidaMateria, 
    IMateria 
} from "./utils/materiasOperations";

function App() {
    const [campusSemesterInfo, setCampusSemesterInfo] = useState({
        campus: "",
        semester: ""
    })
    const [database, setDatabase] = useState<Array<IMateria>>([])
    const [selectedMaterias, setSelectedMaterias] = useState<Array<IMateria>>([])
    const [selectedMateriaTurmas, setSelectedMateriaTurmas] = useState<IMateria | null>(null)

    const addSelectedMateria = (selectedMateria: IMateria) => {
        const newSelectedMaterias = addMateria(selectedMaterias, selectedMateria)
        setSelectedMaterias(newSelectedMaterias)
        setSelectedMateriaTurmas(selectedMateria)
    }

    const removeSelectedMateria = (selectedMateria: IMateria) => {
        const newSelectedMaterias = removeMateria(selectedMaterias, selectedMateria)
        setSelectedMaterias(newSelectedMaterias)
    }

    const handleCheckboxMateria = (selectedMateria: IMateria) => {
        const newSelectedMaterias = checkboxMateria(selectedMaterias, selectedMateria)
        setSelectedMaterias(newSelectedMaterias)
    }

    const handleMoveUpMateria = (selectedMateria: IMateria) => {
        const newSelectedMaterias = moveUpMateria(selectedMaterias, selectedMateria)
        setSelectedMaterias(newSelectedMaterias)
    }

    const handleMoveDownMateria = (selectedMateria: IMateria) => {
        const newSelectedMaterias = moveDownMateria(selectedMaterias, selectedMateria)
        setSelectedMaterias(newSelectedMaterias)
    }

    const handleChangeTurmaEscolhidaMateria = (selectedMateria: IMateria, codigo: string) => {
        const newSelectedMaterias = changeTurmaEscolhidaMateria(selectedMaterias, selectedMateria, codigo)
        setSelectedMaterias(newSelectedMaterias)
    }

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
                        const materiasFormatted = formatDbMaterias(json[campus])
                        setDatabase(materiasFormatted)   
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
                                        {/*<Planos />*/}
                                        {/*<Saver />*/}
                                    </tr>
                                </tbody>
                            </table>
                            <table cellPadding={0} cellSpacing={0} width="100%">
                                <tbody>
                                    <tr>
                                        <MateriasSuggetions database={database} addMateria={addSelectedMateria} />
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
                            <Materias 
                                selectedMaterias={selectedMaterias} 
                                semester={campusSemesterInfo.semester} 
                                removeMateria={removeSelectedMateria} 
                                handleCheckboxMateria={handleCheckboxMateria}
                                handleMoveUpMateria={handleMoveUpMateria}
                                handleMoveDownMateria={handleMoveDownMateria}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: "440px", verticalAlign:"top" }}>
                            <Horarios selectedMaterias={selectedMaterias} />
                        </td>
                        <td style={{ width: "440px" }} valign="top">
                            <Turmas selectedMateriaTurmas={selectedMateriaTurmas} changeTurmaEscolhidaMateria={handleChangeTurmaEscolhidaMateria} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </InfoWrapper>
    );
}
export default App;
