# beats 100%

**Author:** MahbubNayon
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5862314/](https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5862314/)

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
     * @return Float
     */
    function minimumAverage($nums) {
        sort($nums);
        $left = 0;
        $right = count($nums)-1;
        $average = [];

        while ($left < $right) {
            $avg = ($nums[$left] + $nums[$right]) / 2;
            $average[] = $avg;
            $avg;
            $left++;
            $right--;
        }
        return min($average);
    }
}
```