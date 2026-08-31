# 2848. Points That Intersect With Cars

**Author:** shaban4ik96
**Votes:** 0
**Link:** [https://leetcode.com/problems/points-that-intersect-with-cars/solutions/5900387/](https://leetcode.com/problems/points-that-intersect-with-cars/solutions/5900387/)

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
     * @param Integer[][] $nums
     * @return Integer
     */
    function numberOfPoints($nums) {
        $points = [];
        foreach ($nums as $current_car){
            for ($i = $current_car[0]; $i <= $current_car[1]; $i++){
                $points[$i] = "";
            }
        }

        return count($points);

    }
}
```