# Go 0ms 100%

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/752535/](https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/752535/)

---

```go
func maxDiff(num int) int {
	s := strconv.Itoa(num)
	// make maxValue
	maxS, minS := s, s
	for _, v := range s {
		if v == '9' {
			continue
		}
		maxS = strings.ReplaceAll(maxS, string(v), "9")
		break
	}
	// make minValue
	for i, v := range s {
		if v == '1' || v == '0' {
			continue
		}
		if i == 0 {
			minS = strings.ReplaceAll(minS, string(v), "1")
		} else {
			minS = strings.ReplaceAll(minS, string(v), "0")
		}
		break
	}
	minN, _ := strconv.Atoi(minS)
	maxN, _ := strconv.Atoi(maxS)
	return maxN - minN
}
```