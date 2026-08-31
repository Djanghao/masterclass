# Dynamic programming with Linear complexity. Beats 90.0% of users with C++

**Author:** drgavrikov
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-ideal-subsequence/solutions/5083170/](https://leetcode.com/problems/longest-ideal-subsequence/solutions/5083170/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Let $DP[26]$ be an array of 26 values, where each value represents the length of the longest subsequence ending with the corresponding letter of the alphabet. For example, $DP[a]$ represents the length of the longest subsequence ending with the letter 'a', $DP[b]$ represents the length of the longest subsequence ending with the letter 'b', and so on.

We calculate the DP array by iterating from right to left through the given string. For each current letter $s[i]$, we consider all adjacent letters and choose the maximum subsequence among them, which we continue by adding the letter $s[i]$.

As the answer, we select the maximum value in the array $DP[26]$.

# Complexity
- Time complexity: $O(KN) = O(26N) = O(N)$ where $N$ is lenght of input string.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(26)$ additional int values.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

image.png
![image.png](./images/0.png)

```C++ []
class Solution {
public:
    int longestIdealString(string s, int k) {
        std::array<int, 26> dp{0};

        for (char ch: s) {
            int maxLength = 0;
            for (int shift = 0; shift <= k; ++shift) {
                if (ch - shift >= 'a' && ch - shift <= 'z' && maxLength < dp[ch - shift - 'a'] + 1) {
                    maxLength = dp[ch - shift - 'a'] + 1;
                }
                if (ch + shift >= 'a' && ch + shift <= 'z' && maxLength < dp[ch + shift - 'a'] + 1) {
                    maxLength = dp[ch + shift - 'a'] + 1;
                }
            }
            dp[ch - 'a'] = maxLength;
        }
        return *std::max_element(std::begin(dp), std::end(dp));
    }
};
```
```Koltin []
class Solution {
    fun longestIdealString(s: String, k: Int): Int {
        val dp = IntArray(26) { 0 }
        s.forEach { char ->
            val index = char - 'a'
            var maxLength = 0
            for (shift in 0..k) {
                if (char - shift in 'a'..'z' && maxLength < dp[char - shift - 'a'] + 1) {
                    maxLength = dp[char - shift - 'a'] + 1
                }
                if (char + shift in 'a'..'z' && maxLength < dp[char + shift - 'a'] + 1) {
                    maxLength = dp[char + shift - 'a'] + 1
                }
            }
            dp[index] = maxLength
        }
        return dp.maxOf { it }
    }
}

```