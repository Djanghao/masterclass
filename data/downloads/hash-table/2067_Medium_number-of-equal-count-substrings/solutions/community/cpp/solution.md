# C++ Sliding Window No Extra Space (Beats 100% runtime & memory)

**Author:** m_mel
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-equal-count-substrings/solutions/5980247/](https://leetcode.com/problems/number-of-equal-count-substrings/solutions/5980247/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Add/ Remove frequencies on the go. Maximum window size should be count \\* 26 since if it's higher we will exceed the frequencies required.


# Complexity
- Time complexity: O(26 \\* N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    int equalCountSubstrings(string s, int count) {
        int window = count;
        int res = 0;

        for (int window = count; window <= s.size() && window <= count * 26; window += count)
        {
            int cnt[26] = {0};
            int ind = 0;
            int numCnts = 0;
            while (ind < s.size())
            {
                // First appearance of a char
                if (cnt[s[ind] - 'a'] + 1 == 1) numCnts--;
                // Char frequencies equal count
                if (cnt[s[ind] - 'a'] + 1 == count) numCnts++;
                // Char exceeds frequency
                if (cnt[s[ind] - 'a'] + 1 == count + 1) numCnts--;
                cnt[s[ind] - 'a']++;
                // Removing Char breaks frequency
                if (ind >= window && cnt[s[ind - window] - 'a'] - 1 == count - 1) numCnts--;
                // Removing Char no longer exists in frequencies
                if (ind >= window && cnt[s[ind - window] - 'a'] - 1 == 0) numCnts++;
                // Removing Char forms frequency
                if (ind >= window && cnt[s[ind - window] - 'a'] - 1 == count) numCnts++;
                if (ind >= window) cnt[s[ind - window] - 'a']--;

                // If numCnts == 0 all char complete frequency
                if (ind >= window - 1 && numCnts == 0) {
                    res++;
                }
                ind++;
            }
        }
        return res;
    }
};
```