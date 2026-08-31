# C++ simple solution

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-divisible-substrings/solutions/4387990/](https://leetcode.com/problems/number-of-divisible-substrings/solutions/4387990/)

---

```
class Solution {
public:
    map<char, int> mp {
        {'a', 1},{'b', 1},
        {'c', 2},{'d', 2},{'e', 2},
        {'f', 3},{'g', 3},{'h', 3},
        {'i', 4},{'j', 4},{'k', 4},
        {'l', 5},{'m', 5},{'n', 5},
        {'o', 6},{'p', 6},{'q', 6},
        {'r', 7},{'s', 7},{'t', 7},
        {'u', 8},{'v', 8},{'w', 8},
        {'x', 9},{'y', 9},{'z', 9}
    };

    int countDivisibleSubstrings(string word) {
        int res = 0;
        for (int i = 0; i < word.size(); i++) {
            int sum = 0, len = 0;
            for (int j = i; j < word.size(); j++) {
                sum += mp[word[j]];
                res += (sum % ++len == 0);
            }
        }
        return res;
    }
};
```