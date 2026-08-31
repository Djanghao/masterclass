# PHP Dynamic Programming

**Author:** punkundead
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/3421061/](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/3421061/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(k * s)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution
{

    /**
     * @param Integer[][] $piles
     * @param Integer $k
     * @return Integer
     */
    function maxValueOfCoins($piles, $k)
    {
        $a = array_fill(0, 2, array_fill(1, $k, 0));
        $c = 0;
        foreach ($piles as $pile) {
            for ($i = 1; $i <= $k; $i++) {
                for ($j = 0, $s = 0, $kk = min($i, count($pile)) ; $j < $kk; $j++) {
                    $s += $pile[$j];
                    $a[$c][$i] = max($a[$c][$i], $a[1 - $c][$i], $s + $a[1 - $c][$i - $j - 1]);
                }
            }
            $c = 1 - $c;
        }

        return end($a[1 - $c]);
    }
}

```