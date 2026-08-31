# 1-line Go Solution

**Author:** evleria
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-complement/solutions/1557605/](https://leetcode.com/problems/number-complement/solutions/1557605/)

---

```
func findComplement(num int) int {
	return (1<<(bits.Len(uint(num))) - 1) ^ num
}
```