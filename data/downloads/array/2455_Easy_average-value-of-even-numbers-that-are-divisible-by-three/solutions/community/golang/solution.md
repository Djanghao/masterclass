# Golang 3 ms 4.1 MB

**Author:** maxhero90
**Votes:** 1
**Link:** [https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/2764817/](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/2764817/)

---

```
func averageValue(nums []int) int {
	sum := 0
	count := 0
	for _, num := range nums {
		if num%6 == 0 {
			sum += num
			count++
		}
	}
	if count == 0 {
		return 0
	}
	return sum / count
}
```