# Golang simple iterative solution, O(logN)

**Author:** redtree1112
**Votes:** 3
**Link:** [https://leetcode.com/problems/perfect-number/solutions/112194/](https://leetcode.com/problems/perfect-number/solutions/112194/)

---

```
func checkPerfectNumber(num int) bool {
	if num <= 1 {
		return false
	}
	sum := 0
	for i := 1; i*i <= num; i++ {
		if num%i == 0 {
			sum = sum + i + (num / i)
		}
	}
	return sum-num == num
}
```