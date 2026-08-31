# PHP solution

**Author:** punkundead
**Votes:** 0
**Link:** [https://leetcode.com/problems/frog-jump/solutions/3967435/](https://leetcode.com/problems/frog-jump/solutions/3967435/)

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
```PHP
class Solution
{
    /**
     * @param int[] $stones
     */
    function canCross(array $stones): bool
    {
        $h = array_fill_keys($stones, []);
        $end = end($stones);
        $h[0] = [0 => true];
        $last = 0;
        foreach ($stones as $stone) {
            foreach ($h[$stone] as $j => $_) {
                if ($j > 1 && isset($h[$stone + $j - 1])) {
                    $h[$stone + $j - 1][$j - 1] = true;
                    $last = max($last, $stone + $j - 1);
                }
                if (isset($h[$stone + $j])) {
                    $h[$stone + $j][$j] = true;
                    $last = max($last, $stone + $j);
                }
                if (isset($h[$stone + $j + 1])) {
                    $h[$stone + $j + 1][$j + 1] = true;
                    $last = max($last, $stone + $j + 1);
                }
            }
            if ($last <= $stone) return false;
            if ($last === $end) return true;
        }

        return !!end($h);
    }
}
```