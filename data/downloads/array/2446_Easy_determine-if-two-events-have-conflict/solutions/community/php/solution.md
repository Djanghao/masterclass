# 100% efficient solution

**Author:** AhsanSoftEngr
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/6061304/](https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/6061304/)

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
```php []
class Solution {

    /**
     * @param String[] $event1
     * @param String[] $event2
     * @return Boolean
     */
    function haveConflict($event1, $event2) {
        // Parse the event times into comparable formats
        $start1 = strtotime($event1[0]);
        $end1 = strtotime($event1[1]);
        $start2 = strtotime($event2[0]);
        $end2 = strtotime($event2[1]);

        // Check if the events overlap
        return !($end1 < $start2 || $end2 < $start1);
    }
}

```