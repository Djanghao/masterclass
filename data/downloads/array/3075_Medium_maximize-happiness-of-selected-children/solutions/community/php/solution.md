# Beats 99.11% of users with PHP

**Author:** velvm03
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5170562/](https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5170562/)

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
     * @param Integer[] $happiness
     * @param Integer $k
     * @return Integer
     */
    function maximumHappinessSum($happiness, $k) {
        $turn = 0;
        $ans = 0;

        sort($happiness);

        for($i = count($happiness) - 1 ; $i >= 0; $i--)
        {
            $ans += ($happiness[$i] - $turn >= 0 ? ($happiness[$i] - $turn) : 0 );
            $turn++;

            if($turn == $k) break;
        }

        return $ans;
    }
}
```