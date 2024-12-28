import InfoWrapper from "./components/info-wrapper/InfoWrapper";
import Horarios from "./components/horarios/Horarios";
import Campus from "./components/campus/Campus";
import Logger from "./components/logger/Logger";
import Turmas from "./components/turmas/Turmas";
import Planos from "./components/planos/Planos";
import Saver from "./components/saver/Saver";
import Materias from "./components/materias/Materias";

function App() {
    return (
        <InfoWrapper>
            <div className="space-y-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div id="campus">
                            <Campus />
                        </div>
                        <div id="planos" className="w-72">
                            <Planos />
                        </div>
                    </div>
                    <div id="saver">
                        <Saver />
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <input type="combobox" id="materias_input" className="font-11 w-48 border border-black p-0" />
                        <div id="materias_suggestions" className="hidden">{/*MATERIAS_SUGGESTIONS COMPONENT HERE*/}</div>
                    </div>
                    <div className="flex-1 border border-[#add8e6]">
                        <Logger />
                    </div>
                </div>
                <div>
                    <div id="avisos" className="hidden">{/*AVISOS COMPONENT HERE*/}</div>
                    <div id="updates_list" className="hidden">{/*UPDATE_LIST COMPONENT HERE*/}</div>
                </div>
                <div>
                    <Materias />
                </div>
                <div className="flex space-x-4">
                    <div className="w-96">
                        <Horarios />
                    </div>
                    <div className="w-96">
                        <Turmas />
                    </div>
                </div>
            </div>
        </InfoWrapper>
    );
}

export default App;
