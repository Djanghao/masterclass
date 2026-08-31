# Dynamic programming

**Author:** ebyccc
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/3436294/](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/3436294/)

---

# Intuition
I remember that i have solved a question that counts the number of **SAME** substrings in two strings s and t, using a dp approach. This one is only different that we want to find a diff-by-one substring in two strings S and T

# Approach
if two substrings: Sub1 ending in position i + 1 in S and Sub2 ending in position j + 1 in T are diff by one, then it means two things,
either:
1) Sub1[0..-2] (Sub1 excluding the last character) and Sub1[0..-2] are the same and Sub1[-1] (last character in Sub1) and Sub2[-1] are different, 
or
2) Sub1[0..-2] and Sub1[0..-2] are diff-by-1 and Sub1[-1] and Sub2[-1] are the same

So, we can create two dp arrays,
one called same_dp[][], where same_dp[i][j] means the count of same substrings that ends in the ith character in S and jth character in T,
the other one called diff_dp[][], where diff_dp[i][j] means the count of diff-by-one substrings that ends in the ith character in S and jth character in T.

The result is then sum of all elements in diff_dp

# Complexity
- Time complexity:
O(MN)

- Space complexity:
O(MN)

# Code
```
class Solution {
    func countSubstrings(_ s: String, _ t: String) -> Int {
        let s = Array(s)
        let t = Array(t)
        var same_dp = [[Int]](repeating: [Int](repeating: 0, count: t.count + 1), count: s.count + 1)
        var diff_dp = [[Int]](repeating: [Int](repeating: 0, count: t.count + 1), count: s.count + 1)
        var res = 0
        for i in 1...s.count {
            for j in 1...t.count {
                if s[i - 1] == t[j - 1] {
                    same_dp[i][j] = same_dp[i - 1][j - 1] + 1
                    diff_dp[i][j] = diff_dp[i - 1][j - 1]
                }
                else {
                    same_dp[i][j] = 0
                    diff_dp[i][j] = ((i == 1 && j == 1) ? 0 : same_dp[i - 1][j - 1]) + 1
                }
                res += diff_dp[i][j]
            }
        }
        return res
    }
}
```