# Golang hash table solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/substring-xor-queries/solutions/4040548/](https://leetcode.com/problems/substring-xor-queries/solutions/4040548/)

---

# Code
```go
func substringXorQueries(s string, queries [][]int) [][]int {
	queryHash := make(map[int][]int)
	for _, query := range queries {
		queryHash[query[0]^query[1]] = make([]int, 0, 2)
	}
loop:
	for i := 0; i < len(s); i++ {
		if s[i] == '0' {
			if len(queryHash[0]) == 0 {
				queryHash[0] = []int{i, i}
			}
			continue
		}
		curValue := 0
		for wide := 1; wide < 32; wide++ {
			idx := i+wide-1
			if idx >= len(s) {
				continue loop
			}
			curValue = curValue << 1 + int(s[idx]-'0')
			if len(queryHash[curValue]) == 0 {
				queryHash[curValue] = []int{i, idx}
			}
		}
	}
	result := make([][]int, 0, len(queries))
	for _, query := range queries {
		v := queryHash[query[0]^query[1]]
		if len(v) == 0 {
			result = append(result, []int{-1, -1})
		} else {
			result = append(result, v)
		}
	}
	return result
}
```