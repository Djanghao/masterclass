# [Go] O(n^2) Partition by size and find unique

**Author:** sebnyberg
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-abbreviation/solutions/1813985/](https://leetcode.com/problems/word-abbreviation/solutions/1813985/)

---

Key insights:

* Two words can only have the same abbreviation if they have the same length
* All abbreviations of length 2+ will shorten the length of the word
* When considering words of the same size, it is not necessary to "calculate" the abbreviated string, only compare the two segments that remain after the abbreviation

```go
func wordsAbbreviation(words []string) []string {
	// Two words cannot have the same abbreviation unless they have the
	// same number of letters. So we may partition the strings by size..
	var bySize [401][]string
	for _, w := range words {
		bySize[len(w)] = append(bySize[len(w)], w)
	}
	// ResultMap holds the result for a given string
	resultMap := make(map[string]string, len(words))
	for _, w := range words {
		resultMap[w] = w // default
	}

	// Then, abbreviate strings one by one
	abbrs := make(map[[2]string]int, len(words))
	for size, words := range bySize {
		if len(words) == 0 {
			continue
		}
		// Remember: this idiomatic way of clearing maps uses memclr under the hood,
		// significantly speeding up the cleanup. It doesn't actually loop through
		// each item.
		for k := range abbrs {
			delete(abbrs, k)
		}
		var done [401]bool
		for x := size - 2; x > 1; x-- {
			for i, w := range words {
				if done[i] {
					continue
				}
				k := [2]string{w[:size-x-1], w[size-1:]}
				abbrs[k]++
			}
			for i, w := range words {
				k := [2]string{w[:size-x-1], w[size-1:]}
				if abbrs[k] == 1 {
					done[i] = true
					resultMap[words[i]] = w[:size-x-1] + fmt.Sprint(x) + w[size-1:]
				}
			}
		}
	}
	res := make([]string, len(words))
	for i, w := range words {
		res[i] = resultMap[w]
	}
	return res
}

```