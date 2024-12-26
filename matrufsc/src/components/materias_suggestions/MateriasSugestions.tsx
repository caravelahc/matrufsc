import { ChangeEvent, useState } from "react"
import styles from "./MateriasSuggestions.module.css"

function MateriasSuggetions(
    {
        database
    } : {
        database: string[]
    }) {
    const [searchResult, setSearchResult] = useState([])
    const [pagesNumber, setPagesNumber] = useState(1)

    const search = (text: string) => {
        const textFormatted = text.toUpperCase()
            .trim()
            .replace(/[ÀÁÂÃÄÅ]/g, "A")
            .replace(/[ÈÉÊË]/g, "E")
            .replace(/[ÌÍÎÏ]/g, "I")
            .replace(/[ÒÓÔÕÖØ]/g, "O")
            .replace(/[ÙÚÛÜ]/g, "U")
            .replace(/Ç/g, "C")
            .replace(/Ð/g, "D")
            .replace(/Ñ/g, "N")
            .replace(/Ý/g, "Y")
            .replace(/ß/g, "B");

        if (textFormatted.length == 0) {
            setSearchResult([])
        } else {
            const result = database.filter((row: string[]) => row[0].includes(textFormatted) || row[1].includes(textFormatted))

            setSearchResult(result)
        }
    }

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target

        setPagesNumber(1)
        search(value)
    }

    return (
        <td>
            <input className={styles.combobox_input} type="text" id="materias_input" onChange={handleInput}/>
            <br />
                {
                    searchResult.length > 0 ?
                        <div className={styles.combobox_suggestions} id="materias_suggestions">
                            <div style={{marginRight: "1px"}}>
                                <div style={{cursor: "pointer", fontSize: "13px", fontWeight: "bold", backgroundColor: "white"}} title="Clique aqui para criar uma atividade extra-curricular, adicionando seus próprios horários">
                                    Criar atividade extra
                                </div>
                                {
                                    searchResult.slice(0, 10 * pagesNumber).map((result, index) => {
                                        return (
                                            <div key={index} style={{cursor: "pointer", backgroundColor: "white"}}>
                                                {result[0]} {result[2]}
                                            </div>
                                        )
                                    })
                                }  
                                <div style={{cursor: "pointer", fontSize: "13px", fontWeight: "bold", backgroundColor: "white"}} onClick={() => setPagesNumber(pagesNumber+1)}>
                                    Buscar mais...
                                </div> 
                            </div>
                        </div>
                    :
                        null
                }
        </td>
    )
}

export default MateriasSuggetions