# Solution Non-decreasing Subsequences

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/non-decreasing-subsequences/solutions/4731809/](https://leetcode.com/problems/non-decreasing-subsequences/solutions/4731809/)

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
     * @return Integer[][]
     */
    function findSubsequences($nums) {
        $result = [];
        $temp = [];
        $this->backtrack($nums, $result, $temp, 0);
        return $result;
    }
    
    function backtrack($nums, &$result, &$temp, $start) {
        if (count($temp) > 1) {
            $result[] = $temp;
        }
        
        $used = [];
        for ($i = $start; $i < count($nums); $i++) {
            if (empty($temp) || $nums[$i] >= end($temp)) {
                if (isset($used[$nums[$i]])) continue;
                
                $temp[] = $nums[$i];
                $this->backtrack($nums, $result, $temp, $i + 1);
                array_pop($temp);
                
                $used[$nums[$i]] = true;
            }
        }
    }
}

```