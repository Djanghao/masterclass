# Solution Smallest Rotation with Highest Score

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/4789530/](https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/4789530/)

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
    function bestRotation($nums) {
        $n = count($nums);
        $loss = array_fill(0, $n, 0);
        
        for ($i = 0; $i < $n; $i++) {
            $loss[($i - $nums[$i] + 1 + $n) % $n]--;
        }
        
        $res = 0;
        
        for ($i = 1; $i < $n; $i++) {
            $loss[$i] += $loss[$i - 1] + 1;
            $res = ($loss[$i] > $loss[$res]) ? $i : $res;
        }
        
        return $res;
    }
}

```