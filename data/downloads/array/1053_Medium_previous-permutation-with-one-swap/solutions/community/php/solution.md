# Solution Previous Permutation With One Swap

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/4881522/](https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/4881522/)

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
    function prevPermOpt1($arr) {
        $n = count($arr);
        $i = $n - 2;
        
        while ($i >= 0 && $arr[$i] <= $arr[$i + 1]) {
            $i--;
        }
        
        if ($i == -1) {
            return $arr;
        }
        
        $j = $n - 1;
        while ($arr[$j] >= $arr[$i] || $arr[$j] == $arr[$j - 1]) {
            $j--;
        }
        
        $temp = $arr[$i];
        $arr[$i] = $arr[$j];
        $arr[$j] = $temp;
        
        return $arr;
    }
}

```