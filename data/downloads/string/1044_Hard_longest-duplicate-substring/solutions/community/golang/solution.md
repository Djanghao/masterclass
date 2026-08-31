# 😊Runtime 55 ms  Beats 80.00% of users with Go

**Author:** pvt2024
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-duplicate-substring/solutions/5141555/](https://leetcode.com/problems/longest-duplicate-substring/solutions/5141555/)

---

# Code
```
func longestDupSubstring(s string) string {
	// Define the custom sorting function based on suffixes
	rank2i := make([]int, len(s))
	for i := range rank2i {
		rank2i[i] = i
	}
	sort.Slice(rank2i, func(i, j int) bool {
		return s[rank2i[i]:] < s[rank2i[j]:]
	})

	// Build the index to rank array
	i2rank := make([]int, len(rank2i))
	for r, i := range rank2i {
		i2rank[i] = r
	}

	boost := 0
	var ret string
	mx := 0
	for i, r := range i2rank {
		// Skip the last in rank because there is nothing to compare with
		if r+1 == len(rank2i) {
			continue
		}

		// Compare the next in the rank
		j := rank2i[r+1]

		// Skip the residuals from the last loop
		i += boost
		j += boost

		for i < len(s) && j < len(s) && s[i] == s[j] {
			i++
			j++
			boost++
		}

		if boost > mx {
			mx = boost
			ret = s[i-boost : i]
		}

		// Next suffix has at least (this suffix - 1) common strings
		if boost > 0 {
			boost--
		}
	}

	return ret
}
```