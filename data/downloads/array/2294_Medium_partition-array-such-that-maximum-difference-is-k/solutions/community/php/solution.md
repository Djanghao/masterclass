# php 100% faster in O(n)

**Author:** willy24692485
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/3324535/](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/3324535/)

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
     * @param Integer $k
     * @return Integer
     */
    function partitionArray($nums, $k) {
        $result = 0;
        if ($k === 0 && count(array_count_values($nums)) === count($nums)) {
            return count($nums);
        }
        while (!empty($nums)) {
            $max = max($nums);
            $arr = array_filter($nums, function($val) use ($max, $k) {
                return $val >= $max - $k;
            });
            $nums = array_diff($nums, $arr);
            $result++;
        }
        return $result;
    }
}
```