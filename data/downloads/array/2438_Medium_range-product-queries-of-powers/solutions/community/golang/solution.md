# Golang 200ms 100% solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-product-queries-of-powers/solutions/4010759/](https://leetcode.com/problems/range-product-queries-of-powers/solutions/4010759/)

---

# Code
```go
func productQueries(n int, queries [][]int) []int {
	magic := 1
	level := 0
	for n > magic {
		magic *= 2
		level++
	}
	powers := make([]int, 0, 13)
	for n > 0 {
		if n < magic {
			magic /= 2
			level--
			continue
		}
		n -= magic
		powers = append(powers, level)
	}
	// reverse powers to make powers increment
	for i := 0; i < len(powers)/2; i++ {
		powers[i], powers[len(powers)-1-i] = powers[len(powers)-1-i], powers[i]
	}
	current := 0
	for i := range powers {
		current += powers[i]
		powers[i] = current
	}
	result := make([]int, 0, len(queries))
	fastResult := make([]int, 0, current+1)
	fastResultCurrent := 1
	for i := 0; i <= current; i++ {
		fastResult = append(fastResult, fastResultCurrent)
		fastResultCurrent *= 2
		fastResultCurrent %= 1000000007
	}
	for _, query := range queries {
		powerOf2 := powers[query[1]]
		if query[0] > 0 {
			powerOf2 -= powers[query[0]-1]
		}
		result = append(result, fastResult[powerOf2])
	}
	return result
}
```