# Go - Runtime 0 ms Beats 100.00%

**Author:** praveenrajngrok
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-longest-new-string/solutions/5836090/](https://leetcode.com/problems/construct-the-longest-new-string/solutions/5836090/)

---


# Code
```golang []
func longestString(x int, y int, z int) int {
    if x == y {
        return x*4 + z*2
    } else {
        return min(x,y)*4 + 2 + z*2
    }
}
```