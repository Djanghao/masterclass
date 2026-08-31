# Greedy | O(n)

**Author:** Benlegend
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-string-anti-palindrome/solutions/5595469/](https://leetcode.com/problems/make-string-anti-palindrome/solutions/5595469/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Collect the frequency of chars, put the lexicographically smaller characters to the left as much as possible. At least in the first half we're always free to choose smallest characters.

# Approach
<!-- Describe your approach to solving the problem. -->
In the second half, we need to check collision. Always select the smallest character that does not collide. If there is no such choice, the anti-palindrome cannot be made.

We can use priority_queue/ordered map for the frequency table, but since there are only 26 chars simply loop through an array is ok.

# Complexity
- Time complexity: O(26n) -> O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    /*
    Observations
    Let's see some testcases.
    s = "aaabbb" -> "aaabbb"
    s = "aabbcc" -> "aabcbc"
    s = "dddddbcx" -> "-1"
    s = "xxxddfff" -> "ddffxxfx"
    s = "aeeeexpk" -> "aeeepkxe"
    s = "nnnnnxyz" -> "-1"

    Put small characters to the left as much as possible,
    at least in the first half we're always free to choose smallest characters.

    In the second half of the answer, we need to check collision.
    Always select the smallest character that does not collide.
    If there is no such choice, the anti-palindrome cannot be made.

    string; hashtable; counting; greedy;
    O(n) space and time;
    */
    string makeAntiPalindrome(string s) {
        int n = s.size();
        unordered_map<char, int> mp;
        for (int i = 0; i < n; i++) {
            mp[s[i]]++;
        }

        string ans;
        for (int i = 0; i < n; i++) {
            char c = 0;
            for (char x = 'a'; x <= 'z'; x++) {
                if (mp.find(x) != mp.end()) {
                    if (i < n / 2 || ans[n - 1 - i] != x) {
                        c = x;
                        if (--mp[c] == 0) {
                            mp.erase(c);
                        }

                        break;
                    }
                }
            }

            if (c) {
                ans.push_back(c);
            } else {
                return "-1";
            }
        }

        return ans;
    }
};
```