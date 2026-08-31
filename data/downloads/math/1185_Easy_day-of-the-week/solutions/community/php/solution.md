# Solution Day of the Week

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/day-of-the-week/solutions/4895035/](https://leetcode.com/problems/day-of-the-week/solutions/4895035/)

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

    /**
     * @param Integer $day
     * @param Integer $month
     * @param Integer $year
     * @return String
     */
    function dayOfTheWeek($day, $month, $year) {
        $timestamp = mktime(0, 0, 0, $month, $day, $year);
        $dayOfWeek = date("l", $timestamp);
        return $dayOfWeek;
    }
}

```