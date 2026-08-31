# PHP Sorting solution

**Author:** hnatenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-rooms/solutions/3860736/](https://leetcode.com/problems/meeting-rooms/solutions/3860736/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O (N log N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 0 (1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[][] $intervals
     * @return Boolean
     */
    function canAttendMeetings($intervals) {
        
        sort($intervals);

        for ($i = 0; $i < count($intervals) - 1; $i++) {
            if ($intervals[$i][1] > $intervals[$i + 1][0]) {
                return false;
            }
        }
        return true;
    }
}
```