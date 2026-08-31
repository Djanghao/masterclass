# Solution Minimum Operations to Make a Subsequence

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/5354647/](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/5354647/)

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
    
    function getlis($nums) {
        $arr = [];
        $ans = 0;
        
        foreach ($nums as $num) {
            if (empty($arr) || $num > end($arr)) {
                $arr[] = $num;
                $ans = max($ans, count($arr));
            } else {
                $idx = $this->lowerBound($arr, $num);
                $arr[$idx] = $num;
            }
        }
        
        return $ans;
    }
    
    function lowerBound(&$arr, $target) {
        $left = 0;
        $right = count($arr) - 1;
        
        while ($left < $right) {
            $mid = (int)(($left + $right) / 2);
            if ($arr[$mid] < $target) {
                $left = $mid + 1;
            } else {
                $right = $mid;
            }
        }
        
        return $left;
    }
    
    function minOperations($target, $arr) {
        $n = count($target);
        $m = count($arr);
        
        $mp = [];
        foreach ($target as $i => $value) {
            $mp[$value] = $i;
        }
        
        $newans = [];
        foreach ($arr as $num) {
            if (isset($mp[$num])) {
                $newans[] = $mp[$num];
            }
        }
        
        $len = $this->getlis($newans);
        
        return $n - $len;
    }
}

```