# Solution Minimum Number of Refueling Stops

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/4807572/](https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/4807572/)

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

    function minRefuelStops($target, $startFuel, $stations) {
        $maxheap = new SplMaxHeap();
        
        $currFuel = $startFuel;
        $res = 0;
        $currPos = 0;
        $n = count($stations);
        
        while ($currFuel < $target) {
            while ($currPos < $n && $stations[$currPos][0] <= $currFuel) {
                $maxheap->insert($stations[$currPos][1]);
                $currPos++;
            }
            
            if ($maxheap->isEmpty()) {
                return -1;
            }
            
            $currFuel += $maxheap->extract();
            $res++;
        }
        return $res;
    }
}

```