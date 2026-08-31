# DP solution beats 100%

**Author:** ssalnikov
**Votes:** 3
**Link:** [https://leetcode.com/problems/knight-dialer/solutions/4336034/](https://leetcode.com/problems/knight-dialer/solutions/4336034/)

---

# Intuition
Good problem which could be solved many ways.

# Approach
DP

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n) easy to fix to O(1)

# Code
```
func knightDialer(n int) int {
    mod := 1_000_000_007
    res := [10]int{1, 1, 1, 1, 1, 1, 1, 1, 1, 1}

    for i := 1; i < n; i++ {
        res = [10]int{
            (res[4] + res[6]) % mod,
            (res[6] + res[8]) % mod,
            (res[7] + res[9]) % mod,
            (res[4] + res[8]) % mod,
            (res[0] + res[3] + res[9]) % mod,
            0,
            (res[0] + res[1] + res[7]) % mod,
            (res[2] + res[6]) % mod,
            (res[1] + res[3]) % mod,
            (res[2] + res[4]) % mod,
        }
    }

    sum := 0
    for _, v := range res {
        sum += v
    }
    return sum % mod
}

```