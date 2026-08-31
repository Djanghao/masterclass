# Decomposed PHP Solution 100%

**Author:** VcoFnb4F8H
**Votes:** 0
**Link:** [https://leetcode.com/problems/min-max-game/solutions/6078975/](https://leetcode.com/problems/min-max-game/solutions/6078975/)

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
     * @param Integer[] $nums
     * @return Integer
     */
    function minMaxGame($nums) {
        $n = count($nums);
        if ($n == 1) {
            return $nums[0];
        }
            while ($n > 1){
                $newNums = [];
                $halfN = $n / 2;
        for ($i = 0; $i < $halfN; $i++) {
           $even = ($i % 2 == 0);
            $odd = ($i % 2 != 0);
            if ($even){
                $newNums[] = min($nums[2 * $i], $nums[2 * $i + 1]);
            }else if ($odd){
                $newNums[] = max($nums[2 * $i], $nums[2 * $i + 1]);
            }
        }
         $nums = $newNums;
         $n = count($nums);
        }
        return $nums[0];
    }
}
```