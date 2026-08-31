# Solution Predict the Winner

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/predict-the-winner/solutions/4731768/](https://leetcode.com/problems/predict-the-winner/solutions/4731768/)

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
     * @return Boolean
     */
    function predictTheWinner($nums) {
        return $this->canWin($nums, 0, count($nums) - 1, 1) >= 0;
    }
    
    function canWin($nums, $start, $end, $turn) {
        if ($start == $end) {
            return $nums[$start] * $turn;
        }
        
        $scoreStart = $nums[$start] * $turn + $this->canWin($nums, $start + 1, $end, -$turn);
        $scoreEnd = $nums[$end] * $turn + $this->canWin($nums, $start, $end - 1, -$turn);
        
        return max($scoreStart * $turn, $scoreEnd * $turn) * $turn;
    }
}

```