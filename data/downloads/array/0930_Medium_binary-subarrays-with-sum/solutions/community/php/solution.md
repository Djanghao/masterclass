# Check

**Author:** AhsanSoftEngr
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-subarrays-with-sum/solutions/5062210/](https://leetcode.com/problems/binary-subarrays-with-sum/solutions/5062210/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
class Solution {\r
\r
    /**\r
     * @param Integer[] $nums\r
     * @param Integer $goal\r
     * @return Integer\r
     */\r
    function numSubarraysWithSum($nums, $goal) {\r
        $prefix_sum = 0;\r
        $count = [0 => 1];\r
        $sum = 0;\r
\r
        for ($i = 0; $i < count($nums); $i++) {\r
            $prefix_sum += $nums[$i];\r
            $diff = $prefix_sum - $goal;\r
            if (isset($count[$diff])) {\r
                $sum += $count[$diff];\r
            }\r
            $count[$prefix_sum] = isset($count[$prefix_sum]) ? $count[$prefix_sum] + 1 : 1;\r
        }\r
\r
        return $sum;\r
    }\r
}\r
```