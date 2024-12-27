function searchScore(haystack: string, searchWordsRegex: RegExp, value: number) {
    searchWordsRegex.lastIndex = 0;
    const tmp = haystack.match(searchWordsRegex);
    if (tmp === null)
        return 0;
    return tmp.length * value;
}

function filter(searchText: string, database: Array<Array<string>>) {
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
        const firstWord = haystack[1].split(" ")[0]

        let exactly = false
        let score = 0
        for (let j = 0; j < searchWhole.length; j++) {
            let exprScore = 0
            searchWhole[j].lastIndex = 0

            if (searchWhole[j].test(haystack[0])) {
                exactly = true
                continue
            }

            if (firstWord == searchTextWords[j]) {
                exprScore += 200
            }

            exprScore += searchScore(haystack[1], searchWhole[j], 100);
            exprScore += searchScore(haystack[1], searchPart[j], 10);
            exprScore += searchScore(haystack[0], searchPart[j], 1);

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
            haystack[4] = score.toString()
            result.push(haystack)
        }
    }

    console.log(result)

    result.sort((a: Array<string>, b: Array<string>) => {
        const aScore = parseInt(a[4])
        const bScore = parseInt(b[4])


        let diff = bScore - aScore

        if (!diff) {
            if (aScore < 10 && bScore < 10) {
                if (b[0] < a[0]) {
                    diff =  1;
		} else if (a[0] < b[0]) {
                    diff = -1;
	        }
            } else {
                if (b[1] < a[1]) {
                    diff =  1;
		} else if (a[1] < b[1]) {
                    diff = -1;
		}
            }
        }

        return diff
    })


    console.log(result)
    return result
}

export default filter