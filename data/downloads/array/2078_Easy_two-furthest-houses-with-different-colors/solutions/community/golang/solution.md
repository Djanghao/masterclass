# Go

**Author:** adrianlee0118
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/2968965/](https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/2968965/)

---

```
func maxDistance(colors []int) int {
    max := 0
    for i := 0; i < len(colors) - 1; i++ {
        for j := i + 1; j < len(colors); j++ {
            if colors[i] != colors[j] && j - i > max {
                max = j - i
            }
        }
    }
    return max
}
```