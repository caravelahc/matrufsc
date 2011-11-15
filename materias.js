function Materias()
{
    var self = this;
    var selected = null;

    var materias = new Object();
    var list = new Array();

    var get_color = (function(){
        var cores = [ "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgreen",
                      "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue",
                      "lightyellow" ];
        var counter = 0;
        return (function(){
            var ret = cores[counter++];
            if (counter >= cores.length)
                counter = 0;
            return ret;
        });
    })();
    function criar_aulas(horarios)
    {
        var horas = new Object();
        horas["0730"] =  0; horas[ 0] = "0730";
        horas["0820"] =  1; horas[ 1] = "0820";
        horas["0910"] =  2; horas[ 2] = "0910";
        horas["1010"] =  3; horas[ 3] = "1010";
        horas["1100"] =  4; horas[ 4] = "1100";
        horas["1330"] =  5; horas[ 5] = "1330";
        horas["1420"] =  6; horas[ 6] = "1420";
        horas["1510"] =  7; horas[ 7] = "1510";
        horas["1620"] =  8; horas[ 8] = "1620";
        horas["1710"] =  9; horas[ 9] = "1710";
        horas["1830"] = 10; horas[10] = "1830";
        horas["1920"] = 11; horas[11] = "1920";
        horas["2020"] = 12; horas[12] = "2020";
        horas["2110"] = 13; horas[13] = "2110";

        var split = horarios.replace(/ \/ \S*/ig, "").split(" ");
        var ret = new Array();
        for (var i = 0; i < split.length; i++) {
            ret[i] = new Object();
            ret[i].dia  = parseInt(split[i].slice(0,1)) - 2;
            ret[i].hora = horas[split[i].slice(2,6)];
            ret[i].n    = parseInt(split[i].slice(7));
        }
        for (var i = 0; i < ret.length-1; i++) {
            for (var j = i+1; j < ret.length; j++) {
                if ((ret[j].dia < ret[i].dia) || ((ret[j].dia == ret[i].dia) && (ret[j].hora < ret[i].hora))) {
                    var tmp = ret[i];
                    ret[i] = ret[j];
                    ret[j] = tmp;
                }
            }
        }
        ret.index = function() {
            var r = "";
            for (var i = 0; i < this.length; i++) {
                r += (this[i].dia+2) + "." + horas[this[i].hora] + "-" + this[i].n;
            }
            return r;
        };
        return ret;
    }
    function add_item(codigo, str)
    {
        var array = str.split("\n"); /* uma turma por item */
        var split = array[0].split("\t");

        if (materias[codigo])
            return null;

        /* parte de dados */
        var materia = new Object();
        materia.codigo = codigo;
        materia.nome   = split[1];
        materia.cor    = get_color();

        materia.turmas = new Array();
        for (var i = 1; i < array.length - 1; i++) {
            var split = array[i].split("\t");
            var turma = new Object();
            turma.turma     = split[0];
            turma.aulas     = criar_aulas(split[3]);
            turma.professor = split[4];
            turma.selected  = 1;
            turma.materia   = materia;
            materia.turmas[turma.turma] = turma;
        }

        materia.horarios = new Object();
        for (var i in materia.turmas) {
            var turma = materia.turmas[i];
            var index = turma.aulas.index();
            if (!materia.horarios[index]) {
                materia.horarios[index] = new Object();
            }
            if (!materia.horarios[index].turmas) {
                materia.horarios[index].turmas = new Object();
            }
            if (!materia.horarios[index].turma_representante) {
                materia.horarios[index].turma_representante = turma;
            }
            materia.horarios[index].turmas[turma.turma] = turma;
            materia.horarios[index].materia = materia;
            materia.horarios[index].aulas = turma.aulas;
        }
        materias[materia.codigo] = materia;
        list.push(materia);

        return materia;
    }
    function remove_item(materia) {
        for (var i = 0; i < list.length; i++) {
            if (list[i] == materia) {
                list.splice(i,1);
                break;
            }
        }
        delete materias[materia.codigo];
    }

    /* procedures */
    self.set_selected = function(materia) { selected = materia; };
    self.add_item = add_item;
    self.remove_item = remove_item;
    /* functions */
    self.get = function(codigo) { return materias[codigo]; };
    self.get_selected = function() { return selected; };
    self.list = function() { return list; };
}
