# Solution Make Array Strictly Increasing

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-strictly-increasing/solutions/4895053/](https://leetcode.com/problems/make-array-strictly-increasing/solutions/4895053/)

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
    private $dp = [];

    /**
     * @param Integer[] $arr1
     * @param Integer[] $arr2
     * @return Integer
     */
    function makeArrayIncreasing($arr1, $arr2) {
        sort($arr2);
        $result = $this->dfs(0, PHP_INT_MIN, $arr1, $arr2);
        return $result < 2001 ? $result : -1;
    }

    private function dfs($i, $prev, $arr1, $arr2) {
        if ($i == count($arr1)) return 0;
        $key = "$i,$prev";
        if (isset($this->dp[$key])) return $this->dp[$key];
        $cost = 2001;
        if ($arr1[$i] > $prev) {
            $cost = $this->dfs($i + 1, $arr1[$i], $arr1, $arr2);
        }
        $idx = $this->binarySearch($arr2, $prev);
        if ($idx < count($arr2)) {
            $cost = min($cost, 1 + $this->dfs($i + 1, $arr2[$idx], $arr1, $arr2));
        }
        $this->dp[$key] = $cost;
        return $cost;
    }

    private function binarySearch($arr, $value) {
        $leading = 0;
        $trailing = count($arr);
        while ($leading < $trailing) {
            $mid = intval(($leading + $trailing) / 2);
            $arr[$mid] <= $value ? $leading = $mid + 1 : $trailing = $mid;
        }
        return $leading;
    }
}

```