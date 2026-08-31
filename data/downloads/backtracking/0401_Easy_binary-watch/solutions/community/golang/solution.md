# Golang simple solution

**Author:** szk3
**Votes:** 4
**Link:** [https://leetcode.com/problems/binary-watch/solutions/2671589/](https://leetcode.com/problems/binary-watch/solutions/2671589/)

---

```
func readBinaryWatch(turnedOn int) []string {
    var times []string
    for h := 0; h < 12; h++ {
        i := bits.OnesCount(uint(h))
        for m := 0; m < 60; m++ {
            j := bits.OnesCount(uint(m))
            if turnedOn == i + j {
               times = append(times, fmt.Sprintf("%d:%02d", h, m))
            }
        }
    }
    return times
}
```
