# ✅ Fast Go Solution (Beat 100%)

**Author:** erikrios
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-visited-integers/solutions/4570226/](https://leetcode.com/problems/last-visited-integers/solutions/4570226/)

---

```
func lastVisitedIntegers(words []string) []int {
	results := make([]int, 0)
	bucket := make([]int, 0)
	var conPrev int

	for i := 0; i < len(words); i++ {
		word := words[i]
		if word != "prev" {
			num, _ := strconv.Atoi(word)
			bucket = append(bucket, num)
			conPrev = 0
		} else {
			conPrev++
			num := -1
			if len(bucket) >= conPrev {
				num = bucket[len(bucket)-conPrev]
			}

			results = append(results, num)
		}
	}

	return results
}
```