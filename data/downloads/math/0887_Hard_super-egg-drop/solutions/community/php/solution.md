# Solution Super Egg Drop

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-egg-drop/solutions/4813121/](https://leetcode.com/problems/super-egg-drop/solutions/4813121/)

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

    private $dp;

    function superEggDrop($e, $f) {
        $this->dp = array_fill(0, $e + 1, array_fill(0, $f + 1, -1));
        return $this->solve($e, $f);
    }

    private function solve($e, $f) {
        if ($e == 1) return $f;
        if ($f == 0 || $f == 1) return $f;

        if ($this->dp[$e][$f] != -1) return $this->dp[$e][$f];
        $ans = PHP_INT_MAX;

        $left = 1;
        $right = $f;
        while ($left <= $right) {
            $k = $left + floor(($right - $left) / 2);

            $low = $this->solve($e - 1, $k - 1);
            $high = $this->solve($e, $f - $k);

            $temp = 1 + max($low, $high);
            $ans = min($ans, $temp);
            if ($low < $high) {
                $left = $k + 1;
            } else {
                $right = $k - 1;
            }
        }

        return $this->dp[$e][$f] = $ans;
    }
}

```