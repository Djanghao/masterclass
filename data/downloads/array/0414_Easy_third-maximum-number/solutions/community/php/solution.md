# Solution Third Maximum Number

**Author:** Suyono-Sukorame
**Votes:** 1
**Link:** [https://leetcode.com/problems/third-maximum-number/solutions/4717750/](https://leetcode.com/problems/third-maximum-number/solutions/4717750/)

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
     * @param Integer[] $nums
     * @return Integer
     */
    function thirdMax($nums) {
        $first = $second = $third = PHP_INT_MIN;
        
        foreach ($nums as $num) {
            if ($num > $first) {
                $third = $second;
                $second = $first;
                $first = $num;
            } elseif ($num > $second && $num < $first) {
                $third = $second;
                $second = $num;
            } elseif ($num > $third && $num < $second) {
                $third = $num;
            }
        }
        
        return ($third != PHP_INT_MIN) ? $third : $first;
    }
}

$solution = new Solution();
echo $solution->thirdMax([3,2,1]); // Output: 1
echo $solution->thirdMax([1,2]); // Output: 2
echo $solution->thirdMax([2,2,3,1]); // Output: 1

```