# [Golang] [UnitTest] Runtime: 4 ms, faster than 100.00% of Go online submissions

**Author:** nitro2
**Votes:** 1
**Link:** [https://leetcode.com/problems/consecutive-numbers-sum/solutions/2307850/](https://leetcode.com/problems/consecutive-numbers-sum/solutions/2307850/)

---

```golang
func consecutiveNumbersSum(n int) int {
	if n <= 2 {
		return 1
	}
	// x = n/r - (r-1)/2  --> Find integer of x
	count := 1
	x := 0.0
	for r := 2.0; r*r < float64(2*n) && x >= 0; r++ {
		x = (float64(n)/r - float64(r-1)/2)
		if x > 0 && x == float64(int(x)) {
			count++
		}
	}
	return count
}
```
Unit test: https://github.com/nitro2/leetcode/tree/master/consecutive-numbers-sum