# 100% Correct Solution "WITHOUT" GCD

**Author:** AdityaRaj_cpp
**Votes:** 34
**Link:** [https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5113882/](https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5113882/)

---

# Important Note -
The GCD solution works, but it's incorrect.
If we were allowed to rearrange the characters of`s`after concatenation, then it would have been correct.

# My Approach -
Iterate from`1`to`n`and for every number which divides`n`, check if it can be the answer.

# Code
```
class Solution {
    bool ok(string s, int k) {
        int n = s.length();
        int cnt[26] = {0};
        for (int i = 0; i < k; i++)
            cnt[s[i] - 'a']++;
        for (int i = k; i < n; i += k) {
            int cnt2[26] = {0};
            for (int j = i; j < i + k; j++)
                cnt2[s[j] - 'a']++;
            for (int j = 0; j < 26; j++)
                if (cnt[j] != cnt2[j])
                    return false;
        }
        return true;
    }

public:
    int minAnagramLength(string s) {
        int n = s.size();
        for (int i = 1; i <= n; i++)
            if (n % i == 0 && ok(s, i))
                return i;
        return n;
    }
};
```