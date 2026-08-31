# Solution Minimum Cost to Cut a Stick

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/5138466/](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/5138466/)

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
    public $dp;
    
    function recursion($l, $r, $left, $right, &$cuts) {
        if ($r < $l) return 0;
        if ($this->dp[$l][$r] != -1) return $this->dp[$l][$r];
        $answer = PHP_INT_MAX;
        for ($i = $l; $i <= $r; $i++) {
            $length = $right - $left;
            $current = $length + $this->recursion($l, $i - 1, $left, $cuts[$i], $cuts) + $this->recursion($i + 1, $r, $cuts[$i], $right, $cuts);
            $answer = min($answer, $current);
        }
        return $this->dp[$l][$r] = $answer;
    }
    
    function minCost($n, &$cuts) {
        $this->dp = array_fill(0, count($cuts) + 4, array_fill(0, count($cuts) + 2, -1));
        sort($cuts);
        return $this->recursion(0, count($cuts) - 1, 0, $n, $cuts);
    }
}

```