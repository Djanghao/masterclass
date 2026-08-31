# CLEAN SOLUTION! COMEIN!)

**Author:** alikaaa
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/5873347/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/5873347/)

---

# Code
```golang []
func getLongestSubsequence(words []string, groups []int) []string {
    var res = []string{words[0]}

    for i := 1; i < len(words); i++ {
        if groups[i-1] != groups[i] {
            res = append(res, words[i])
        }
    }

    return res
}
```