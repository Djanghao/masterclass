# Solution Maximum Number of Operations With the Same Score II

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-ii/solutions/4743949/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-ii/solutions/4743949/)

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
    function maxOperations($nums) {
        $maxScore = 1;
        $l = count($nums);
        $sumSet = [];

        $sumSet[] = $nums[0] + $nums[1];
        $sumSet[] = $nums[$l - 2] + $nums[$l - 1];
        $sumSet[] = $nums[0] + $nums[$l - 1];

        foreach ($sumSet as $sum) {
            $dp = array_fill(0, $l, array_fill(0, $l, -1));
            $score = $this->computeScoreForSum(0, $l - 1, $sum, $nums, $dp);
            $maxScore = max($score, $maxScore);
        }

        return $maxScore;
    }

    function computeScoreForSum($i, $j, $sum, $nums, &$dp) {
        $l = count($nums);
        if ($i < $j && $i >= 0 && $j < $l) {
            if ($dp[$i][$j] !== -1) {
                return $dp[$i][$j];
            }
            $sc1 = 0; $sc2 = 0; $sc3 = 0;
            if ($this->functionOP1Score($i, $nums) === $sum) {
                $sc1 = 1 + $this->computeScoreForSum($i + 2, $j, $sum, $nums, $dp);
            }
            if ($this->functionOP2Score($i, $j, $nums) === $sum) {
                $sc2 = 1 + $this->computeScoreForSum($i + 1, $j - 1, $sum, $nums, $dp);
            }
            if ($this->functionOP3Score($j, $nums) === $sum) {
                $sc3 = 1 + $this->computeScoreForSum($i, $j - 2, $sum, $nums, $dp);
            }
            $dp[$i][$j] = max($sc1, $sc2, $sc3);
            return $dp[$i][$j];
        }
        return 0;
    }

    function functionOP1Score($i, $nums) {
        return $nums[$i] + $nums[$i + 1];
    }

    function functionOP2Score($i, $j, $nums) {
        return $nums[$i] + $nums[$j];
    }

    function functionOP3Score($j, $nums) {
        return $nums[$j - 1] + $nums[$j];
    }
}

```