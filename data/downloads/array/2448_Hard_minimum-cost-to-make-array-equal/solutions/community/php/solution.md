# A simple and fast solution

**Author:** Caaat1
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3755663/](https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3755663/)

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
class Solution
{
    function minCost($nums, $costs)
    {
        asort($nums);
        $sum = array_sum($costs);
        $cost =
            array_reduce(
                array_keys($costs),
                fn ($carry, $x) => $carry + $costs[$x] * $nums[$x]
            ) - $sum * reset($nums);
        while (($sum -= $costs[key($nums)] << 1) > 0)
            $cost += (current($nums) - next($nums)) * $sum;
        return $cost;
    }
}
```