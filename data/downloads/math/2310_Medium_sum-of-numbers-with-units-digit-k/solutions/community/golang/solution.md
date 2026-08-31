# Golang 0ms 100% solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/3950712/](https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/3950712/)

---

# Code
```go
func minimumNumbers(num int, k int) int {
	if num == 0 {
		return 0
	}
	if num % 10 == k {
		return 1
	}
	if k == 0 {
		return -1
	}
	count := 1
	for num > k {
		count++
		num -= k
		if num % 10 == k {
			return count
		}
	}
	return -1
}
```