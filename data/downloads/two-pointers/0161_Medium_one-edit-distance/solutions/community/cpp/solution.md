# C++ DP

**Author:** jianchao-li
**Votes:** 73
**Link:** [https://leetcode.com/problems/one-edit-distance/solutions/50108/](https://leetcode.com/problems/one-edit-distance/solutions/50108/)

---

The edit distance in this problem is the *Levenshtein distance*: *insertion*, *deletion* and *substitution* are all of the same cost. Thus, the edit distance is commutative.

For two strings ***s*** and ***t*** to be one edit distance apart, if they are of the same length, we can substitute one character in one string to get the other; if they are of length one apart, we can delete one character from the longer one to get the shorter one. These are all the possibilities.

We traverse the two strings, once we find a mismatch, we either do a substituion (nothing happens) or a deletion in the longer one (the pointer to the longer string is moved forward by one step). Then we check whether the two remaining substrings are equal. For edge cases like `s = "ab"` and `t = "abc"` where the mismatch happens at the last character of the longer one and thus we will not find a mismatch during the loop, we just check whether they are of one apart in lengths.

```cpp
class Solution {
public:
    bool isOneEditDistance(string s, string t) {
        int m = s.size(), n = t.size();
        if (m > n) {
            return isOneEditDistance(t, s);
        }
        for (int i = 0; i < m; i++) {
            if (s[i] != t[i]) {
                if (m == n) {
                    return s.substr(i + 1) == t.substr(i + 1);
                }
                return s.substr(i) == t.substr(i + 1);
            }
        }
        return m + 1 == n;
    }
};
```