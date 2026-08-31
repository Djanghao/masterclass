# In-place solution | PHP

**Author:** leon0399
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/5268815/](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/5268815/)

---

# Intuition
Storing divided groups is excessive

# Approach
Remove elements from array in-place. We will sort array, and start with the smallest element, working our way up, removing elements in-place

# Complexity
- Time complexity: Depends on sorting algorithm;
- Space complexity: Depends on sorting algorithm;

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Boolean
     */
    function isPossibleDivide($nums, $k) {
        sort($nums);

        while(!empty($nums)) {
            $start = array_shift($nums);
            
            for ($i = 0; $i < $k - 1; $i++) {
                $expected = $start + $i + 1;
                $next = array_search($expected, $nums);

                if ($next === false) {
                    return false;
                }

                unset($nums[$next]);
            }
        }

        return true;
    }
}
```