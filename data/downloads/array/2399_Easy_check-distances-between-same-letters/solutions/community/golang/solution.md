# best O(n) solution golang | 1 loop using slice and compare diff

**Author:** zkhrg
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-distances-between-same-letters/solutions/5632803/](https://leetcode.com/problems/check-distances-between-same-letters/solutions/5632803/)

---

# Complexity
- Time complexity:
$$O(n)$$
- Space complexity:
$$O(1)$$
# Code
```go
func checkDistances(s string, distance []int) bool {
    my_dist := make([]int, 26, 26)
    for i := 0; i < len(s); i++ {
        l := int(s[i]-'a')
        if my_dist[l] == 0 {
            my_dist[l] = i + 1
            continue
        }
        my_dist[l] = i - my_dist[l]
        if my_dist[l] != distance[l]{
            return false
        }
    }

    return true
}
```