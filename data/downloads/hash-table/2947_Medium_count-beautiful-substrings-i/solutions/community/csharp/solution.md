# Defenetely not the best solution with dynamic programming.

**Author:** Drugged_Monkey
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-beautiful-substrings-i/solutions/4572463/](https://leetcode.com/problems/count-beautiful-substrings-i/solutions/4572463/)

---

# Approach
First I create 2d-array of integers where `row` represents `start` of substring, `column` represents `end` of substring and `value` represents count of `vowels` in substring. Then I traverse string maintaining count of `vowels` in current substring simultaneously counting `beautiful` strings.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n^2)$$

# Code
```
    public sealed class Solution
    {
        private readonly HashSet<char> set = new HashSet<char>("aeiou");

        public int BeautifulSubstrings(string s, int k)
        {
            var l = s.Length;
            var dp = new int[l, l];
            dp[0, 0] = 0;
            var ans = 0;

            for(int i = 0; i < l; i++)
            {
                dp[i, i] = set.Contains(s[i]) ? 1 : 0;
            }

            for (int i = 0; i < l; i++)
            {
                for (int j = i + 1; j < l; j++)
                {
                    var v = dp[i, j - 1] + dp[j, j];
                    var t = j - i + 1;
                    var c = t - v;

                    dp[i, j] = v;
                    ans += (v == c && (v * c) % k == 0 ? 1 : 0);
                }
            }

            return ans;
        }
    }
```