# Swift, only solution can pass without TLE, one time iterator O(N)

**Author:** tzef
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-palindromic-subsequences/solutions/2869999/](https://leetcode.com/problems/count-palindromic-subsequences/solutions/2869999/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
In Swift, both DFS or another O(N) solution to product the prefix and suffix count all get TLE to me,

Thanks for the solution only need 6 size of DP in one iterator (O(100N * 5))
https://leetcode.com/problems/count-palindromic-subsequences/solutions/2850557/cjavapython3-short-dp/comments/1701859/


# Approach
<!-- Describe your approach to solving the problem. -->
As the input constraint, we can limit the pattern by

    x in 0...9:
        y in 0...9:
            pattern = xy_yx

for every pattern
check each character of string j in 0..<5 indicates the character can contribute dp[j] count when it is the position (5-j) at this pattern

here use the trick is kind of reverse the dp position,
append dummy value `1` at the end for the first character then can share the same logic without check `if j == 0`

dry run an example:

    pattern: 01_10
     string: 01210

    i = 0, char: 0
    j: 0, dp = [0, 0, 0, 0, 0, 1]
    // check is s[i] chould is valid if in position 5 of pattern
    // although s[i] == pattern[j], but dp[1] is zero 
    // means no any combination for "1_10", so if we take s[i], 
    // can't compose a valid palindrome
    j: 1, dp = [0, 0, 0, 0, 0, 1]
    j: 2, dp = [0, 0, 0, 0, 0, 1]
    j: 3, dp = [0, 0, 0, 0, 0, 1]
    j: 4, dp = [0, 0, 0, 0, 1, 1]
    // s[0] could be the first pattern

    same procedure, when i = 1
    dp = [0, 0, 0, 1, 1, 1]
    i: 2
    dp = [0, 0, 1, 1, 1, 1]
    i: 3
    dp = [0, 1, 1, 1, 1, 1]
    i: 4
    dp = [1, 1, 1, 1, 1, 1]
    // "01210" can contribute one composition for one palindromic subsequence

If the stirng is 001210
we will get 2 valid count in position 1
so the final dp would be 

    [2, 2, 2, 2, 2, 1]




# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

$$O(N)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

$$O(1)$$

# Code
```
class Solution {
    let mod = 1e9+7
    func countPalindromes(_ s: String) -> Int {
        countPalindromes(Array(s))
    }

    func countPalindromes(_ s: [Character]) -> Int {
        var count = 0
        for i in 0...9 {
            for j in 0...9 {
                let pattern = "\\(i)\\(j)_\\(j)\\(i)".map { $0 }
                var dp = Array(repeating: 0, count: 5)
                dp.append(1) // dummy source for the first index
                for char in s {
                    for k in 0..<5 {
                        if k == 2 || char == pattern[k] {
                            dp[k] += dp[k+1]
                        }
                    }
                }
                count = (count + dp[0]) % Int(mod)
            }
        }
        return count
    }
}
```