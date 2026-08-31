# Pattern matching using switch expression

**Author:** idhammond
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-valid-clock-times/solutions/5108436/](https://leetcode.com/problems/number-of-valid-clock-times/solutions/5108436/)

---

# Approach
Pattern match using switch expression.

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
public class Solution {
    public int CountTime(string time) {
        int hours = (time[0], time[1]) switch {
            ('?', '?')   => 24,  // ?? => 00 .. 23
            ('?', < '4') => 3,   // ?3 => 03, 13, 23
            ('?', _)     => 2,   // ?4 => 04, 14
            ('2', '?')   => 4,   // 2? => 20 .. 23
            ( _ , '?')   => 10,  // 1? => 10 .. 19
            _            => 1    // no wildcards
        };
        int minutes = (time[3], time[4]) switch {
            ('?', '?')   => 60,  // ?? => 00 .. 59
            ('?',  _)    => 6,   // ?5 => 05, 15, 25, 35, 45, 55
            ( _ , '?')   => 10,  // 3? => 30 .. 39
            _            => 1    // no wildcards
        };
        return hours * minutes;
    }
}
```