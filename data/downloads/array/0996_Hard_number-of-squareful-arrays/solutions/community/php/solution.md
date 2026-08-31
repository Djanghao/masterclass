# Solution Number of Squareful Arrays

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-squareful-arrays/solutions/4856762/](https://leetcode.com/problems/number-of-squareful-arrays/solutions/4856762/)

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
     * @return Integer
     */
    function numSquarefulPerms($nums) {
        $count = 0;
        sort($nums);
        $this->backtrack($nums, 0, $count);
        return $count;
    }

    function backtrack(&$nums, $start, &$count) {
        if ($start == count($nums)) {
            $count++;
            return;
        }
        
        $visited = [];
        for ($i = $start; $i < count($nums); $i++) {
            if (isset($visited[$nums[$i]])) {
                continue;
            }
            if ($start > 0 && !$this->isSquareful($nums[$start - 1], $nums[$i])) {
                continue;
            }
            $visited[$nums[$i]] = true;
            $this->swap($nums, $start, $i);
            $this->backtrack($nums, $start + 1, $count);
            $this->swap($nums, $start, $i);
        }
    }

    function isSquareful($a, $b) {
        $sum = $a + $b;
        $root = intval(sqrt($sum));
        return $root * $root == $sum;
    }

    function swap(&$arr, $i, $j) {
        $temp = $arr[$i];
        $arr[$i] = $arr[$j];
        $arr[$j] = $temp;
    }
}

```