# PHP straightforward solution O(n)

**Author:** andreypetko987
**Votes:** 0
**Link:** [https://leetcode.com/problems/diet-plan-performance/solutions/4989873/](https://leetcode.com/problems/diet-plan-performance/solutions/4989873/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
-  O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $calories
     * @param Integer $k
     * @param Integer $lower
     * @param Integer $upper
     * @return Integer
     */
    function dietPlanPerformance($calories, $k, $lower, $upper): int {
        $sum = $calories[0];
        $result = 0;
        for ($i = 1; $i < $k; $i++) {
            $sum += $calories[$i];
        }

        if ($sum < $lower) {
            $result--;
        }

        if ($sum > $upper) {
            $result++;
        }

        $nextElemementToSub = $calories[0];

        for ($i = 1; $i < count($calories); $i++) {
            if ($i + $k > count($calories)){
                break;
            }

            $sum -= $nextElemementToSub;
            $sum += $calories[$i + $k - 1];

            if ($sum < $lower) {
                $result--;
            }

            if ($sum > $upper) {
                $result++;
            }

            $nextElemementToSub = $calories[$i];
        }

        return $result;
    }
}

```