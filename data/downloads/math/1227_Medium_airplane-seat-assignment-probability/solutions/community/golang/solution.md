# Easy golang solution

**Author:** agrawal-sakshi
**Votes:** 0
**Link:** [https://leetcode.com/problems/airplane-seat-assignment-probability/solutions/5142627/](https://leetcode.com/problems/airplane-seat-assignment-probability/solutions/5142627/)

---

```
func nthPersonGetsNthSeat(n int) float64 {
    if n == 1{
        return float64(1)
    } else {
        return 0.5
    }
}
```