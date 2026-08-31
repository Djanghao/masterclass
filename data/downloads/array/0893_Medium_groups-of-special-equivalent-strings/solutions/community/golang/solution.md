# Go 0ms map solution

**Author:** tjucoder
**Votes:** 2
**Link:** [https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/508798/](https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/508798/)

---

```go
func numSpecialEquivGroups(A []string) int {
    m := map[[52]int]interface{}{}
    for _, s := range A {
        array := [52]int{}
        for i, c := range s {
            if i % 2 == 0 {
                array[c-'a']++
            } else {
                array[c-'a'+26]++
            }
        }
        m[array] = nil
    }
    return len(m)
}
```