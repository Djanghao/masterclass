# Solution Probability of a Two Boxes Having The Same Number of Distinct Balls

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/solutions/5045753/](https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/solutions/5045753/)

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

    function ballsCount($balls) {
        return array_sum($balls);
    }

    function colorCount($balls) {
        return array_reduce($balls, function ($sum, $color) {
            return $sum + ($color > 0 ? 1 : 0);
        }, 0);
    }

    function shufflesCount($balls) {
        $ans = 1;
        $last = 0;
        foreach ($balls as $color) {
            for ($i = 1; $i <= $color; $i++) {
                $last++;
                $ans *= $last;
                $ans /= $i;
            }
        }
        return $ans;
    }

    function probability($colorIdx, &$A, &$B, $balls) {
        if ($colorIdx == count($balls)) {
            if ($this->ballsCount($A) == $this->ballsCount($B) && $this->colorCount($A) == $this->colorCount($B)) {
                return $this->shufflesCount($A) * $this->shufflesCount($B) / $this->shufflesCount($balls);
            }
            return 0;
        }
        $ans = 0;
        for ($i = 0; $i <= $balls[$colorIdx]; $i++) {
            $A[$colorIdx] = $i;
            $B[$colorIdx] = $balls[$colorIdx] - $i;
            $ans += $this->probability($colorIdx + 1, $A, $B, $balls);
            $A[$colorIdx] = $B[$colorIdx] = 0;
        }
        return $ans;
    }

    function getProbability($balls) {
        $A = array_fill(0, count($balls), 0);
        $B = array_fill(0, count($balls), 0);
        return $this->probability(0, $A, $B, $balls);
    }
}

```