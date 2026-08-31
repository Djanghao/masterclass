# PHP solution

**Author:** a8deh
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/6040436/](https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/6040436/)

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
     * @param Integer $lower
     * @param Integer $upper
     * @return Integer
     */
function countFairPairs($nums, $lower, $upper) {
    sort($nums);
    $count = 0;
    $n = count($nums);

    for ($i = 0; $i < $n - 1; $i++) {
        $left = $i + 1;
        $right = $n - 1;

        // Use binary search to find the lower bound
        while ($left <= $right) {
            $mid = intdiv($left + $right, 2);
            if ($nums[$i] + $nums[$mid] >= $lower) {
                $right = $mid - 1;
            } else {
                $left = $mid + 1;
            }
        }
        $lowerBound = $left;

        // Reset the pointers for upper bound search
        $left = $i + 1;
        $right = $n - 1;

        // Use binary search to find the upper bound
        while ($left <= $right) {
            $mid = intdiv($left + $right, 2);
            if ($nums[$i] + $nums[$mid] <= $upper) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }
        $upperBound = $right;

        // Count pairs between lowerBound and upperBound
        if ($lowerBound <= $upperBound) {
            $count += ($upperBound - $lowerBound + 1);
        }
    }

    return $count;
}

}








```