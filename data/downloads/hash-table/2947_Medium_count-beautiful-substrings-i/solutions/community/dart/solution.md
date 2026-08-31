# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-beautiful-substrings-i/solutions/4454414/](https://leetcode.com/problems/count-beautiful-substrings-i/solutions/4454414/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    static const candidates = "aeiou";
    int beautifulSubstrings(String s, int k) {
        var c = 0;
        for (int i = 0; i < s.length; i++) {
            var vowels = 0;
            var consonants = 0;
            for (int j = i; j < s.length; j++) {
                if (candidates.contains(s[j])) {
                    vowels++;
                } else {
                    consonants++;
                }

                if (vowels == consonants && ((vowels * consonants) % k == 0)) {
                    c += 1;
                }
            }
        }

        return c;
    }
}
```