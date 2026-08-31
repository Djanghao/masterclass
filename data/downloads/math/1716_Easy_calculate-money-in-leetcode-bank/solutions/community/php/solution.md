# Math only, simple formula explained, O(1) for time and space

**Author:** maxzuber
**Votes:** 1
**Link:** [https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/4369452/](https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/4369452/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
There are some arithmetic progressions, so we can try to find a formula.

# Approach
<!-- Describe your approach to solving the problem. -->
Every full week earns 1 + 2 + ... + 7 = 28. Sum of basic weekly earnings are `28 * fullWeeks`

Each next full week adds 7 per week: so we have 0 for the 1st week (basic earnings only), 7 for the 2nd full week, 14 for the 3rd, 21 for the 4th, and so on. Additional earnings for the all full weeks are `fullWeeks * (0 + fullWeeks - 1) / 2`

Days over full weeks earns sum, described as `1 + fullWeeks` for monday, `2 + fullWeeks` for tuesday, and so on. In manner of arithmetic progression it is `daysOver * (1 + fullWeeks + daysOver + fullWeeks) / 2`

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function totalMoney($n) {
        $fullWeeks = intval($n / 7);
        $daysOver = $n % 7;

        return $daysOver * ((1 + 2 * $fullWeeks + $daysOver) / 2) // sum of days of partial week
            + 28 * $fullWeeks // 7 * ((1 + 7) / 2) -- 1 + .. + 7 for each week
            + ($fullWeeks > 0 ? (7 * ($fullWeeks * ($fullWeeks - 1) / 2)) : 0) // additional 1 per every full week
            ;
    }
}
```