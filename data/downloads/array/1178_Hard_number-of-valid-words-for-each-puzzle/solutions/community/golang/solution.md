# 👏Runtime 100 ms  Beats 60.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/5039863/](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/5039863/)

---

# Code
```
func findNumOfValidWords(words []string, puzzles []string) []int {
    wordMap := make(map[int]int)

	// Constructing the mask for each word
	for _, w := range words {
		mask := 0
		for i := 0; i < len(w); i++ {
			mask |= 1 << (w[i] - 'a')
		}
		wordMap[mask]++
	}

	res := make([]int, 0)

	// Checking the validity for each puzzle
	for _, p := range puzzles {
		mask := 0
		for i := 0; i < len(p); i++ {
			mask |= 1 << (p[i] - 'a')
		}
		c := 0
		sub := mask
		first := 1 << (p[0] - 'a')
		for sub > 0 {
			if (sub & first) == first && wordMap[sub] > 0 {
				c += wordMap[sub]
			}
			sub = (sub - 1) & mask // get the next substring
		}
		res = append(res, c)
	}

	return res
}
```