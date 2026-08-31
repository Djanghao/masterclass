# Solution Water and Jug Problem

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/water-and-jug-problem/solutions/4712978/](https://leetcode.com/problems/water-and-jug-problem/solutions/4712978/)

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
     * @param Integer $jug1Capacity
     * @param Integer $jug2Capacity
     * @param Integer $targetCapacity
     * @return Boolean
     */
    function canMeasureWater($jug1Capacity, $jug2Capacity, $targetCapacity) {
        if ($targetCapacity == 0) return true;
        
        if ($jug1Capacity + $jug2Capacity < $targetCapacity) return false;
        
        return $targetCapacity % $this->gcd($jug1Capacity, $jug2Capacity) == 0;
    }
    
    function gcd($a, $b) {
        while ($b != 0) {
            $temp = $b;
            $b = $a % $b;
            $a = $temp;
        }
        return $a;
    }
}

```