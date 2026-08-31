# One loop, no LINQ, no build-in operators, beats 90%

**Author:** feihoa
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-segments-in-a-string/solutions/3154535/](https://leetcode.com/problems/number-of-segments-in-a-string/solutions/3154535/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int CountSegments(string s) {
        var result = 0;
        var counterOn = true;
        for (var i = 0; i < s.Length; i++) {
            var item = s[i];
            if (item == ' ') {
                counterOn = true;
            }
            else if (counterOn) {
                result++;
                counterOn = false;
            }
        }

        return result;
    }
}
```