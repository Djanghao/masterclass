# Golang simulation solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/incremental-memory-leak/solutions/1312562/](https://leetcode.com/problems/incremental-memory-leak/solutions/1312562/)

---

```go
func memLeak(memory1 int, memory2 int) []int {
	for i := 1;; i++ {
		if memory1 >= memory2 {
			if memory1 < i {
				return []int{i, memory1, memory2}
			}
			memory1 -= i
		} else {
			if memory2 < i {
				return []int{i, memory1, memory2}
			}
			memory2 -= i
		}
	}
	return nil
}
```