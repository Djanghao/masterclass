# Go Solution

**Author:** jonathanjsmith
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/solutions/2750674/](https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/solutions/2750674/)

---

Idea: Create a power function and whenever the number passes the max value, just subtract it and we will always receive the mod of 10^9 + 7, whenever the number exceeds this value.

The main algorithm to count the combinations was inspired by @yuanzhi247012 so go upvote him :)
https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/discuss/2744409/Python3-Either-flip-si%3Ai%2Bk-or-not-flip.-Totally-2

```
func pow(a, b int) int {
    max := 1000000000 + 7
    res := 1
    for i := 0; i < b; i++ {
        res = a * res
        if res > max {
            res -= max
        }
    }
    return res
}

func countDistinctStrings(s string, k int) int {
    return pow(2, len(s) - k + 1)
}
```