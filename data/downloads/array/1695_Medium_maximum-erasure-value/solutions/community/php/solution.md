# Solution Maximum Erasure Value

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-erasure-value/solutions/5306232/](https://leetcode.com/problems/maximum-erasure-value/solutions/5306232/)

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
    public function maximumUniqueSubarray($nums) {
        $S = [];
        $score = 0;
        $maxScore = 0;
        $l = 0;

        for ($r = 0; $r < count($nums); $r++) {
            while (isset($S[$nums[$r]])) {
                unset($S[$nums[$l]]);
                $score -= $nums[$l];
                $l++;
            }
            $S[$nums[$r]] = true;
            $score += $nums[$r];
            $maxScore = max($maxScore, $score);
        }

        return $maxScore;
    }
}

```