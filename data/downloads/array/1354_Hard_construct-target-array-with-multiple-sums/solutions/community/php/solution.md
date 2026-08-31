# Solution Construct Target Array With Multiple Sums

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/4934647/](https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/4934647/)

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
     * @param Integer[] $target
     * @return Boolean
     */
    function isPossible($target) {
        $heap = new SplMaxHeap();
        $sum = 0;
        foreach ($target as $num) {
            $heap->insert($num);
            $sum += $num;
        }
        while ($heap->top() > 1) {
            $a = $heap->extract();
            if ($sum - $a == 1) return true;
            if ($a < $sum - $a || $sum - $a == 0) return false;
            $temp = $a % ($sum - $a);
            if ($temp <= 0) return false;
            $sum = -$a + $sum + $temp;
            $heap->insert($temp);
        }
        return true;
    }
}

```