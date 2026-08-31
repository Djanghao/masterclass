# Solution Set Intersection Size At Least Two

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/4757081/](https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/4757081/)

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
     * @param Integer[][] $intervals
     * @return Integer
     */
    function intersectionSizeTwo($intervals) {
        usort($intervals, function($a, $b) {
            return $a[1] != $b[1] ? $a[1] - $b[1] : $b[0] - $a[0];
        });
        
        $count = 0;
        $lastNums = [-1, -1];
        
        foreach ($intervals as $interval) {
            $start = $interval[0];
            $end = $interval[1];
            
            if ($start > $lastNums[1]) {
                $lastNums = [$end - 1, $end];
                $count += 2;
            }
            elseif ($start > $lastNums[0]) {
                $lastNums = [$lastNums[1], $end];
                $count++;
            }
        }
        
        return $count;
    }
}

```