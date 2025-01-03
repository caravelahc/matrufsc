import { IMateria } from "./materiasOperations";

function searchScore(haystack: string, searchWordsRegex: RegExp, value: number) {
    searchWordsRegex.lastIndex = 0;
    const tmp = haystack.match(searchWordsRegex);
    if (tmp === null)
        return 0;
    return tmp.length * value;
}

function filter(searchText: string, database: Array<IMateria>) {
    let searchWhole: RegExp[] = []
    let searchPart: RegExp[] = []
    let searchTextWords = searchText.split(" ")

    searchTextWords.forEach((searchWord) => {
        if (searchWord !== "") {
            searchWhole.push(new RegExp(`\\b${searchWord}\\b`, "g"))
            searchPart.push(new RegExp(searchWord, "g"))
        }
    })


    let result = []

    for (let i = 0; i < database.length; i++) {
        const haystack = database[i]
        const firstWord = haystack.nomeSearch.split(" ")[0]

        let exactly = false
        let score = 0
        for (let j = 0; j < searchWhole.length; j++) {
            let exprScore = 0
            searchWhole[j].lastIndex = 0

            if (searchWhole[j].test(haystack.codigo)) {
                exactly = true
                continue
            }

            if (firstWord == searchTextWords[j]) {
                exprScore += 200
            }

            exprScore += searchScore(haystack.nomeSearch, searchWhole[j], 100);
            exprScore += searchScore(haystack.nomeSearch, searchPart[j], 10);
            exprScore += searchScore(haystack.codigo, searchPart[j], 1);

            if (exprScore) {
                score += exprScore
            } else {
                score = 0
                break
            }
        }

        if (exactly) {
            result = [haystack]
            break
        }

        if (score) {
            haystack.score = score
            result.push(haystack)
        }
    }

    result.sort((a: IMateria, b: IMateria) => {
        let diff = b.score - a.score

        if (!diff) {
            if (a.score < 10 && b.score < 10) {
                if (b.codigo < a.codigo) {
                    diff =  1;
		} else if (a.codigo < b.codigo) {
                    diff = -1;
	        }
            } else {
                if (b.nomeSearch < a.nomeSearch) {
                    diff =  1;
		} else if (a.nomeSearch < b.nomeSearch) {
                    diff = -1;
		}
            }
        }

        return diff
    })

    return result
}

export default filter