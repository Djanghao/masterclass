# PHP Solution, Beats 100% Runtime + Memory Usage

**Author:** Sporkyy
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-range-i/solutions/368293/](https://leetcode.com/problems/smallest-range-i/solutions/368293/)

---

Runtime: 32 ms, faster than 100.00% of PHP online submissions
Memory Usage: 16.3 MB, less than 100.00% of PHP online submissions

```
class Solution
{

    /**
     * @param Integer[] $A
     * @param Integer $K
     * @return Integer
     */
    function smallestRangeI($A, $K)
    {
        return max(max($A) - $K - (min($A) + $K), 0);
    }
}
```