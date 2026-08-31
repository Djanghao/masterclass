# Easy solution

**Author:** Kaursanampreet
**Votes:** 0
**Link:** [https://leetcode.com/problems/destroying-asteroids/solutions/5472370/](https://leetcode.com/problems/destroying-asteroids/solutions/5472370/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(1)

# Code
```
class Solution {

    /**
     * @param Integer $mass
     * @param Integer[] $asteroids
     * @return Boolean
     */
    function asteroidsDestroyed($mass, $asteroids) {
        sort($asteroids);
        foreach($asteroids as $asteroid) {
            if ($asteroid > $mass) {
                return false;
            }
            $mass += $asteroid;
        }
        return true;
    }
}
```