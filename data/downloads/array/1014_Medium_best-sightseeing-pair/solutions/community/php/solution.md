# Solution Best Sightseeing Pair

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-sightseeing-pair/solutions/4863347/](https://leetcode.com/problems/best-sightseeing-pair/solutions/4863347/)

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
     * @param Integer[] $values
     * @return Integer
     */
    function maxScoreSightseeingPair($values) {
        $maxScore = 0;
        $maxPrev = $values[0] + 0;
        
        for ($j = 1; $j < count($values); $j++) {
            $maxScore = max($maxScore, $maxPrev + $values[$j] - $j);
            $maxPrev = max($maxPrev, $values[$j] + $j);
        }
        
        return $maxScore;
    }
}

```