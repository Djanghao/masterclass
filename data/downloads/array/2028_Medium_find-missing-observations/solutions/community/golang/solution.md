# Beats 80% | Actually simple

**Author:** 3nd3r1
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-missing-observations/solutions/5739935/](https://leetcode.com/problems/find-missing-observations/solutions/5739935/)

---

# Code
```golang []
func missingRolls(rolls []int, mean int, n int) []int {
    left := mean * (n+len(rolls)) - n
    ans := make([]int, n)

    for _, roll := range rolls {
        left -= roll
    }

    if left<0 {
        return []int{}
    }

    for i:=0; i<n; i++ {
        ans[i]=min(6, 1+left)
        left-=ans[i]-1
    }

    if left>0 {
        return []int{}
    }
    return ans
}
```