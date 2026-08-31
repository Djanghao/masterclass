# Go solution

**Author:** foxtech
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/5725198/](https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/5725198/)

---

# Code
```golang []
func coloredCells(n int) int64 {
    sum := int64(1)

    for i := 0; i < n; i++ {
        sum += int64(4 * i)
    }

    return sum
}
```