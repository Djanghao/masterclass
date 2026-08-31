# Binary search T: O(log n) -> O(n), S: O(1)

**Author:** user1393Nf
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/5877106/](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/5877106/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Binary search
# Complexity
- Time complexity: O(log n) -> O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Boolean
     */
    function search($nums, $target) {
        $l = 0;
        $r = count($nums) - 1;

        while ($l <= $r) {
            $mid = (int)(($l + $r) / 2);

            if ($nums[$mid] === $target) {
                return true;
            }


            // boundaries equals
            if ($nums[$l] === $nums[$mid] && $nums[$mid] === $nums[$r]) {
                $l++;
                $r--;
                
                continue;
            }


            // solution from binary search sorted array
            if ($nums[$l] <= $nums[$mid]) {
                if ($nums[$l] <= $target && $target < $nums[$mid]) {
                    $r = $mid - 1;
                } else {
                    $l = $mid + 1;
                }
            } else { 
                if ($nums[$mid] < $target && $target <= $nums[$r]) {
                    $l = $mid + 1;
                } else {
                    $r = $mid - 1;
                }
            }
        }

        return false;
    }
}
```