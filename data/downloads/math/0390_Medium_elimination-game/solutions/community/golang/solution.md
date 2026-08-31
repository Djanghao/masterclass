# Golang version of the easiest solution

**Author:** rtom09
**Votes:** 1
**Link:** [https://leetcode.com/problems/elimination-game/solutions/87140/](https://leetcode.com/problems/elimination-game/solutions/87140/)

---

```
func lastRemaining(n int) int {
    left := true
    remaining := n
    step := 1
    head := 1
        for remaining > 1 {
            if left || remaining % 2 == 1 {
                head = head + step
            }
            remaining /= 2
            step = step * 2
            left = !left
        }
        return head
}
```