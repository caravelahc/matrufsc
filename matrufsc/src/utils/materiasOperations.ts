type Professores = Array<string>
type HorariosRaw = Array<string>
type MateriaDataRaw = [string, string, string, any[]]
type TurmaDataRaw = [string, number, number, number, number, number, number, HorariosRaw, Professores]

interface IHorario {
    dia: number,
    inicio: string,
    aulas: number
    centro: string,
    sala: string
}

interface ITurma {
    codigo: string,
    horasAula: number,
    vagasOfertadas: number,
    vagasOcupadas: number,
    alunosEspeciais: number,
    saldoVagas: number,
    pedidosSemVaga: number,
    horarios: Array<IHorario>,
    professores: Array<string>
}

interface IMateria {
    codigo: string,
    nomeSearch: string,
    nome: string,
    turmas: Array<ITurma>,
    turmaEscolhida: string,
    score: number,
    isChecked: boolean,
    cor?: string
}

const COLORS = ["lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgreen", "lightpink", 
    "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue" ,"lightyellow"]

function stringToNumber(str: string) : number {
    return str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

function formatHorarios(horarios: Array<string>) : Array<IHorario> {
    const horariosFormatted = horarios.map(horario => {
        const horarioSplitted = horario.split("/").map(horario => horario.trim())

        const diaFormatted = parseInt(horarioSplitted[0].split(".")[0])
        const inicioFormatted = horarioSplitted[0].split(".")[1].split("-")[0]
        const inicioParsed = `${inicioFormatted.slice(0,2)}:${inicioFormatted.slice(2,4)}` 
        const aulasFormatted = parseInt(horarioSplitted[0].split(".")[1].split("-")[1])
        const centroFormatted = horarioSplitted[1].split("-")[0]
        const salaFormatted = horarioSplitted[1].split("-")[1]

        return {
            dia: diaFormatted,
            inicio: inicioParsed,
            aulas: aulasFormatted,
            centro: centroFormatted,
            sala: salaFormatted
        }
    })

    return horariosFormatted
}

function formatTurmas(turmas: Array<TurmaDataRaw>) : Array<ITurma> {
    let turmasFormatted = turmas.map(turma => {
        return {
            codigo: turma[0],
            horasAula: turma[1],
            vagasOfertadas: turma[2],
            vagasOcupadas: turma[3],
            alunosEspeciais: turma[4],
            saldoVagas: turma[5],
            pedidosSemVaga: turma[6],
            horarios: formatHorarios(turma[7]),
            professores: turma[8]
        }
    })

    return turmasFormatted
}

function formatDbMaterias(materias: Array<MateriaDataRaw>) : Array<IMateria> {
    const materiasFormatted = materias.map(materia => {
        return {
            codigo: materia[0],
            nomeSearch: materia[1],
            nome: materia[2],
            turmas: formatTurmas(materia[3]),
            turmaEscolhida: materia[3][0][0],
            score: 0,
            isChecked: false,
        }
    })

    return materiasFormatted
}

function addMateria(selectedMaterias: Array<IMateria>, selectedMateria: IMateria) : Array<IMateria> {
    let newSelectedMaterias = [...selectedMaterias]

    const turmasCodigos = selectedMaterias.map((materia) => materia.codigo)

    selectedMateria.isChecked = true
    selectedMateria.cor = COLORS[stringToNumber(selectedMateria.nome) % COLORS.length]


    if (!turmasCodigos.includes(selectedMateria.codigo)) {
        newSelectedMaterias.push(selectedMateria)
    }

    return newSelectedMaterias
}

function removeMateria(selectedMaterias: Array<IMateria>, selectedMateria: IMateria) : Array<IMateria> {
    let newSelectedMaterias = [...selectedMaterias]

    const turmasCodigos = selectedMaterias.map((materia) => materia.codigo)

    if (turmasCodigos.includes(selectedMateria.codigo)) {
        newSelectedMaterias = newSelectedMaterias.filter(newSelectedMateria => newSelectedMateria.codigo !== selectedMateria.codigo)
    }

    return newSelectedMaterias
}

function checkboxMateria(selectedMaterias: Array<IMateria>, selectedMateria: IMateria) : Array<IMateria> {
    let newSelectedMaterias = [...selectedMaterias]

    for (let i = 0; i < newSelectedMaterias.length; i++) {
        if (newSelectedMaterias[i].codigo === selectedMateria.codigo) {
            newSelectedMaterias[i].isChecked = !newSelectedMaterias[i].isChecked
        
            break
        }
    }

    return newSelectedMaterias
}

function moveUpMateria(selectedMaterias: Array<IMateria>, selectedMateria: IMateria) : Array<IMateria> {
    let newSelectedMaterias = [...selectedMaterias]

    const selectedMateriaIndex = newSelectedMaterias.findIndex(newSelectedMateria => newSelectedMateria.codigo === selectedMateria.codigo)

    if (selectedMateriaIndex !== undefined && selectedMateriaIndex > 0) {
        const tmp = newSelectedMaterias[selectedMateriaIndex - 1]
        newSelectedMaterias[selectedMateriaIndex - 1] = selectedMateria
        newSelectedMaterias[selectedMateriaIndex] = tmp
    }

    return newSelectedMaterias
}

function moveDownMateria(selectedMaterias: Array<IMateria>, selectedMateria: IMateria) : Array<IMateria> {
    let newSelectedMaterias = [...selectedMaterias]

    const selectedMateriaIndex = newSelectedMaterias.findIndex(newSelectedMateria => newSelectedMateria.codigo === selectedMateria.codigo)

    if (selectedMateriaIndex !== undefined && selectedMateriaIndex !== newSelectedMaterias.length - 1) {
        const tmp = newSelectedMaterias[selectedMateriaIndex + 1]
        newSelectedMaterias[selectedMateriaIndex + 1] = selectedMateria
        newSelectedMaterias[selectedMateriaIndex] = tmp
    }

    return newSelectedMaterias
}

export {
    formatDbMaterias,
    addMateria,
    removeMateria,
    checkboxMateria,
    moveUpMateria,
    moveDownMateria,
    type IMateria,
}