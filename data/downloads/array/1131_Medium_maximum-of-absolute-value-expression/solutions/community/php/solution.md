# Maximum of Absolute value Expression: PHP

**Author:** hakhiste
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/5572926/](https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/5572926/)

---

# Intuition
Optimized solution
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $arr1
     * @param Integer[] $arr2
     * @return Integer
     */
    function maxAbsValExpr($arr1, $arr2) {
        $a = $b = $c = $d = [];
        for($i=0;$i< count($arr1); $i++) {
            $a[] = $i + $arr1[$i] - $arr2[$i];
            $b[] = $i + $arr1[$i] + $arr2[$i];
            $c[] = $i - $arr1[$i] + $arr2[$i];
            $d[] = $i - $arr1[$i] - $arr2[$i];
        
        }
        return max(max($a) - min($a), max($b) - min($b), max($c) - min($c), max($d) - min($d));
    }
}
```