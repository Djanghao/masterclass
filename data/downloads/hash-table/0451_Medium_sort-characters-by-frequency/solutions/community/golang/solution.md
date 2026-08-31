# Golang simple 100%

**Author:** ylz-at
**Votes:** 15
**Link:** [https://leetcode.com/problems/sort-characters-by-frequency/solutions/706106/](https://leetcode.com/problems/sort-characters-by-frequency/solutions/706106/)

---

```
package main

import "sort"

func frequencySort(s string) string {
	freq := make([]int, 255)
	for i := 0; i < len(s); i++ {
		freq[s[i]]++
	}
	b := []byte(s)
	sort.Slice(b, func(i, j int) bool {
		if freq[b[i]] == freq[b[j]] {
			return b[i] > b[j]
		}
		return freq[b[i]] > freq[b[j]]
	})
	return string(b)
}
```