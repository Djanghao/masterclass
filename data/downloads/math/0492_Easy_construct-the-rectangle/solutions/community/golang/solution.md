# Solution is almost like a binary search

**Author:** iddanilov
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-rectangle/solutions/5599305/](https://leetcode.com/problems/construct-the-rectangle/solutions/5599305/)

---



# Code
```
func constructRectangle(area int) []int {
    l := int(math.Sqrt(float64(area)))
    r := l
    for l * r != area {
        if l * r < area {
            l += 1
        } else {
            r -= 1
        }
    }
    return []int{int(l), int(r)}
}
```