# Go clean code

**Author:** ythosa
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/3462026/](https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/3462026/)

---


```
func minimumTeachings(n int, languages [][]int, friendships [][]int) int {
	var cantSpeekPersons = make(map[int]struct{})
	for _, friendship := range friendships {
		fst := friendship[0] - 1
		snd := friendship[1] - 1
		if !isLanguagesIntersects(languages, fst, snd) {
			cantSpeekPersons[fst] = struct{}{}
			cantSpeekPersons[snd] = struct{}{}
		}
	}

	var (
		dontSpeeksCountByLanguage = make([]int, n)
		maxDontSpeekCount         = 0
	)
	for person := range cantSpeekPersons {
		for _, language := range languages[person] {
			language--
			dontSpeeksCountByLanguage[language]++
			currentCount := dontSpeeksCountByLanguage[language]
			if currentCount > maxDontSpeekCount {
				maxDontSpeekCount = currentCount
			}
		}
	}

	return len(cantSpeekPersons) - maxDontSpeekCount
}

func isLanguagesIntersects(languages [][]int, fst, snd int) bool {
	var tmpSet = make(map[int]struct{})

	for _, language := range languages[fst] {
		tmpSet[language] = struct{}{}
	}

	for _, language := range languages[snd] {
		if _, ok := tmpSet[language]; ok {
			return true
		}
	}

	return false
}
```