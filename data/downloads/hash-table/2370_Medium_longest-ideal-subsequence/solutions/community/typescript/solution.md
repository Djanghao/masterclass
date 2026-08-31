# [Javascript/Typescript] Dynamic Programming Solution Explain Detail

**Author:** nhandqDev
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-ideal-subsequence/solutions/5073312/](https://leetcode.com/problems/longest-ideal-subsequence/solutions/5073312/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
At an index `i` we can choose maximum `2 * k + 1` characters.
For example:
if `k = 2`, and s[i] = 'k' then we can choose from 'i', 'j', 'k', 'l', 'm'.
if `k = 3`, and s[i] = 't' then we can choose from 'q', 'r', 's', 't', 'u', 'v', 'w'.

So we can see the ***Longest Ideal Subsequence*** at index `i` is the maximum of the ***Longest Ideal Subsequence*** of the previous index that are within the range of `[i-k, i+k]` characters.
Well we can see a pattern here, the ***Longest Ideal Subsequence*** at any index is dependent on the ***Longest Ideal Subsequence*** of previous index. So we can think of using dynamic programming to solve this problem.
We can implement an array `dp` of length 26 to store the ***Longest Ideal Subsequence*** ending at each character. Then loop through the string `s` and decode the character at each index to `dp` index, and then loop from `0` to `k` to find in the range [i - k, i] and loop from `1` to `k` to find in the range [i, i + k] and update the ***Longest Ideal Subsequence*** ending at the current character. Finally we can update the result with the maximum of the ***Longest Ideal Subsequence*** ending at the current character.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create an array `dp` of length 26 to store the ***Longest Ideal Subsequence*** ending at each character.
2. Create a helper function `idxOfLetter` to get the index of a letter in the alphabet.
3. Iterate through the string `s`:
    - Get the index of the current character.
    - Iterate from `0` to `k`:
        - Update the longest ideal subsequence ending at the current character.
    - Iterate from `1` to `k`:
        - Update the longest ideal subsequence ending at the current character.
    - Update the result with the maximum of the longest ideal subsequence ending at the current character.
4. Return the result.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Typescript
function idxOfLetter(s: string): number {
    return s.charCodeAt(0) - 97
}

function longestIdealString(s: string, k: number): number {
    const n = s.length
    const dp = Array.from({ length: 26 }).map(_ => 0)
    let res = 0

    for (let i = 0; i < n; i++) {
        const currIdx = idxOfLetter(s[i])

        for (let j = 0; j <= k; j++) {
            dp[currIdx] = Math.max(dp[currIdx], (dp[currIdx - j] || 0) + 1)
        }
        for (let j = 1; j <= k; j++) {
            dp[currIdx] = Math.max(dp[currIdx], (dp[currIdx + j] || 0) + 1)
        }

        res = Math.max(res, dp[currIdx])
    }

    return res
}
```