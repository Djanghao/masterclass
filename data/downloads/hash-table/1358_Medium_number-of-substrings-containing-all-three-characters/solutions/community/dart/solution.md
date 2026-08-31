# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/5391923/](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/5391923/)

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
  int numberOfSubstrings(String s) {
    Map<String, int> m = {};
    int left = 0;
    int count = 0;
    for (int right = 0; right < s.length; right++) {
        m[s[right]] = (m[s[right]] ?? 0) + 1;
        while (m.length == 3) {
            m[s[left]] = (m[s[left]] ?? 0) - 1;
            count += s.length - right;
            if (m[s[left]] == 0) {
                m.remove(s[left]);
            }
            left++;
        }
    }
    return count;
    }
}
```