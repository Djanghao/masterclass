# using max found array

**Author:** menesterov
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-divisible-subset/solutions/5387289/](https://leetcode.com/problems/largest-divisible-subset/solutions/5387289/)

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
     * @return Integer[]
     */
    function largestDivisibleSubset($nums) {
        sort($nums);
        $res[$nums[0]] = [$nums[0]];
        $maxs = [1];
        for ($i=1; $i < count($nums); $i++) {
            $base = $nums[$i];
            $cnt = 1;
            $foundmax = 0;
            $found = null;
            for ($j=$i-1; $j >= 0; $j--) {
                $check = $nums[$j];
                if ($maxs[$j] <= $foundmax) {
                    break;
                } elseif ($base % $check == 0) {
                    $found = $check;
                    $foundmax = count($res[$found]);
                }
            }
            $res[$base] = $res[$found] ?? [];
            $res[$base][] = $base;
            $maxs[$i] = count($res[$base]) > $maxs[$i-1] ? count($res[$base]) : $maxs[$i-1];
        }
        $foundmax = end($maxs);
        do {
            $result = array_pop($res);
        } while (count($result) < $foundmax);
        return $result;
    }
}
```