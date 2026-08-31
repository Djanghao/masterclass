# Go - 0 ms, faster than 100.00% of Go - simple solution

**Author:** r00t_sh3ll
**Votes:** 1
**Link:** [https://leetcode.com/problems/xor-operation-in-an-array/solutions/1003734/](https://leetcode.com/problems/xor-operation-in-an-array/solutions/1003734/)

---

Runtime: 0 ms, faster than 100.00% of Go online submissions for XOR Operation in an Array.
Memory Usage: 1.9 MB, less than 32.73% of Go online submissions for XOR Operation in an Array.

```
func xorOperation(n int, start int) int {
	var output int
	for i := 0; i < n; i++ {
        output ^=  start + 2*i
	}
	return output
}
```