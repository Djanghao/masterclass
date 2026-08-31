# PHP Solution

**Author:** AhsanSoftEngr
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solutions/6046997/](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solutions/6046997/)

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
     * @param Integer[] $arr
     * @return Integer
     */
    function findLengthOfShortestSubarray($arr) {
        $n = count($arr);
        
        // Find the leftmost sorted part
        $left = 0;
        while ($left + 1 < $n && $arr[$left] <= $arr[$left + 1]) {
            $left++;
        }
        
        // If the entire array is already sorted
        if ($left == $n - 1) {
            return 0;
        }
        
        // Find the rightmost sorted part
        $right = $n - 1;
        while ($right > 0 && $arr[$right - 1] <= $arr[$right]) {
            $right--;
        }
        
        // Calculate the minimum length to remove by merging sorted parts
        $result = min($n - $left - 1, $right); // Remove one part completely
        
        // Check if we can merge parts
        $i = 0;
        $j = $right;
        while ($i <= $left && $j < $n) {
            if ($arr[$i] <= $arr[$j]) {
                $result = min($result, $j - $i - 1);
                $i++;
            } else {
                $j++;
            }
        }
        
        return $result;
    }
}

```