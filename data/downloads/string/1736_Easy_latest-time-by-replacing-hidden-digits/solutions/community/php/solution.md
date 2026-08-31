# Runtime 7ms / Memory 19.55mb

**Author:** ordinary9843
**Votes:** 0
**Link:** [https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/3769899/](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/3769899/)

---

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {

    /**
     * @param String $time
     * @return String
     */
    function maximumTime($time) {
        ($time[0] === '?') && $time[0] = ((int)$time[1] <= 3) ? '2' : '1';
        ($time[1] === '?') && $time[1] = ((int)$time[0] === 2) ? '3' : '9';
        ($time[3] === '?') && $time[3] = '5';
        ($time[4] === '?') && $time[4] = '9';
 
        return $time;
    }
}
```