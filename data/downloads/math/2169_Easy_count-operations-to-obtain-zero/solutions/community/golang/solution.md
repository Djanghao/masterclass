# [Go] bigger % smaller

**Author:** sebnyberg
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/1768076/](https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/1768076/)

---

There is a nasty case where subtracting the other number would be quite slow.

Consider 1 and 100'000. There would be 100'000 subract-by-one operations.

To speed things up in this case, calculate how many times the smaller number can be removed from the bigger number and add it to the total number of operations. The result of the operation itself will be the leftover from the division, i.e. the remainder.

```go
func countOperations(num1 int, num2 int) int {
	var ops int
	for num1 > 0 && num2 > 0 {
        if num2 > num1 {
            num1, num2 = num2, num1
        }
        ops += num1/num2
        num1 %= num2
	}
	return ops
}
```