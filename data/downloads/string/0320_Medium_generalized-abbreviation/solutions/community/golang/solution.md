# Go beats 100%

**Author:** Agito
**Votes:** 0
**Link:** [https://leetcode.com/problems/generalized-abbreviation/solutions/3583278/](https://leetcode.com/problems/generalized-abbreviation/solutions/3583278/)

---

# Code
```

func generateAbbreviations(word string) []string {
	res := []string{}
	generatePrefixNumber(word, "", &res)
	generatePrefixWord(word, "", &res)

	return res
}

func generatePrefixWord(word string, cur string, res *[]string) {
	if 0 == len(word) {
		*res = append(*res, cur)
	}

	for i := 0; i < len(word); i++ {
		prefix := word[0 : i+1]
		generatePrefixNumber(word[i+1:], cur+prefix, res)
	}
}

func generatePrefixNumber(word string, cur string, res *[]string) {
	if 0 == len(word) {
		*res = append(*res, cur)
	}

	for i := 0; i < len(word); i++ {
		prefix := word[0 : i+1]
		numOfPrefix := fmt.Sprintf("%v", len(prefix))
		generatePrefixWord(word[i+1:], cur+numOfPrefix, res)
	}
}


```