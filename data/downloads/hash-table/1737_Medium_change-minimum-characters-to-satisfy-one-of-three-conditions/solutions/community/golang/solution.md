# Simple Go Solution

**Author:** slightly-anonymous
**Votes:** 1
**Link:** [https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/3536438/](https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/3536438/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(N)
- Space complexity:
O(1)
# Code
```
func minCharacters(a string, b string) int {
    m, n := len(a), len(b)
    ans := m + n
    c1, c2 := [26]int{}, [26]int{}
    for _,r := range a {
        c1[r - 'a']++
    }
    for _,r := range b {
        c2[r - 'a']++
    }
    for i := 0; i < 26; i++ {
        ans = min(ans, m + n - c1[i] - c2[i])
        if (i!=0) {
            c1[i] += c1[i-1]
            c2[i] += c2[i-1]
        }
        if (i != 25) {
            ans = min(ans, m - c1[i] + c2[i])
            ans = min(ans, n - c2[i] + c1[i])
        }
    }
    return ans
}

func min(a,b int) int {
    if a<b {return a}
    return b
}
```