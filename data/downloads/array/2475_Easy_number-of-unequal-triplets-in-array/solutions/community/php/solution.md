# lazy solution: copy the conditions and put them inside three-loop

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/4864267/](https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/4864267/)

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
    function unequalTriplets($nums) {
    $count=0;
    for ($i = 0; $i < count($nums)-2 ; $i++) {
        for ($j = $i + 1; $j < count($nums)-1; $j++) {
            for ($k = $j + 1; $k < count($nums); $k++) {
                if($nums[$i] != $nums[$j] and $nums[$i] != $nums[$k] and $nums[$j] != $nums[$k]) {$count++;}
            }
        }
    }
return $count; 
    }
}
```