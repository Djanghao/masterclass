# Golang 0 ms 1.8 MB

**Author:** maxhero90
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/2766247/](https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/2766247/)

---

```
func makeIntegerBeautiful(n int64, target int) int64 {
	sum := 0
	for num := n; num != 0; num /= 10 {
		sum += int(num % 10)
	}

	if sum <= target {
		return 0
	}

	if mod := n % 10; mod != 0 {
		return 10 - mod + 10*makeIntegerBeautiful(n/10+1, target)
	}
	return 10 * makeIntegerBeautiful(n/10, target)
}
```