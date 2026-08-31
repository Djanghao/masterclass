# PHP, o(n) solution

**Author:** biprojit_roy
**Votes:** 0
**Link:** [https://leetcode.com/problems/watering-plants/solutions/3537967/](https://leetcode.com/problems/watering-plants/solutions/3537967/)

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
     * @param Integer[] $plants
     * @param Integer $capacity
     * @return Integer
     */
    function wateringPlants($plants, $capacity) {
        $currentCapacity = $capacity;
        $steps = 0;
        for($c = 0 ; $c < sizeof($plants); $c++){
            if($plants[$c] <= $currentCapacity){
                $currentCapacity -= $plants[$c];
                $steps++;
            }else{
                $currentCapacity = $capacity - $plants[$c];
                $steps += ($c * 2) + 1;
            }
        }
        return $steps;
    }
}
```