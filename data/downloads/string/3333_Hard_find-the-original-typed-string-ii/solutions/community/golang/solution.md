# Really simple counting

**Author:** pioneer10
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-original-typed-string-ii/solutions/5972052/](https://leetcode.com/problems/find-the-original-typed-string-ii/solutions/5972052/)

---

# Intuition
Let's consider there several same consecutive letters. That means that Alice wanted to type at least one occurence of the letter, but perhaps more, though not more than the number of letter actually typed. So, if the number of letters is `c` then there are exactly `c` possibilities: from `1` through `c` letters.

The resulting string consist of one or more groups of same consecutive letters. Obviously, the minimum length of the text Alice wanted to type is equal to the number of groups, and the total number of possible strings is product of sizes of all the groups (size of the group is the number of letters it contains).

# Approach
It's not a big deal to calculate the total number of possibilities, but we have a constraint on the minimum length.

Let's calculate the number of possible strings having length strictly less than `k`.

We use dynamic programming to do so. Let `dp[l]` be the number of strings of length `l`. We iterate through groups and for each of them we update `dp` accordingly: if the group size is `c`, then roughly speaking `dp[l] = sum(dp[l - i], i=1..c)` (we must consider the boundaries, i.e. `l - i` must be greater than or equal to `0`.)

In this case time complexity is the number of groups multiplied by `k` (each step we process one group and recalculate `k` values in `dp`.)

Obviously, it's too much. How can we improve? As noted above, after `k` groups the minimum length is `k`, so all `dp[l]` would be `0`. Therefore, we recalculate `dp` only for the first `k` groups.

# Complexity
- Time complexity: $$O(k^2 + n)$$
- Space complexity: $$O(k)$$

# Code
```golang []
const Modulo = 1000000007

func possibleStringCount(word string, k int) int {
    i, m, n := 0, 0, len(word)
    switch {
        case n < k:
        return 0
        case n == k:
        return 1
    }
    res := int64(1) // total number of possible strings
    dp := make([]int, k)
    dp2 := make([]int, k)
    dp[0] = 1 // empty string
    for ; i < n && m < k; i++ {
        m++ // number of groups
        c := 1 // size of current group
        for i < n - 1 && word[i] == word[i + 1] {
            i++
            c++
        }
        res = (res * int64(c)) % Modulo
        s := 0 // sliding window sum
        for j := m - 1; j < k && j < m + c - 1; j++ {
            dp2[j] = s
            s = (s + dp[j]) % Modulo
        }
        for j := m + c - 1; j < k; j++ {
            dp2[j] = s
            s = (s + Modulo - dp[j - c]) % Modulo
            s = (s + dp[j]) % Modulo
        }
        dp, dp2 = dp2, dp
        dp2[m - 1] = 0
    }
    for i < n {
        i++
        c := int64(1)
        for i < n && word[i] == word[i - 1] {
            i++
            c++
        }
        res = (res * c) % Modulo
    }
    s := 0 // total number of strings with length less than k
    for _, v := range dp {
        s = (s + v) % Modulo
    }
    return int((res + Modulo - int64(s)) % Modulo)
}
```