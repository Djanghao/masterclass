# PHP Solution, Beats 100% Runtime & Memory Usage

**Author:** Sporkyy
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/357068/](https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/357068/)

---

Runtime: 32 ms, faster than 100.00% of PHP online submissions
Memory Usage: 18.3 MB, less than 100.00% of PHP online submissions

```
class Solution
{

    /**
     * @param Integer[] $A
     * @param Integer $acc
     * @return Boolean[]
     */
    function prefixesDivBy5($A, $acc = 0)
    {
        return array_map(function ($digit) use (&$acc) {
            return !($acc = ($acc * 2 + $digit) % 5);
        }, $A);
    }
}
```