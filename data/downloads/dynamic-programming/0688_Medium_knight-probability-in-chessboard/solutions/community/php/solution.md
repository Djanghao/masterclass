# PHP solution

**Author:** punkundead
**Votes:** 0
**Link:** [https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3800772/](https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3800772/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n*n*k)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n*n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```PHP
class Solution
{
    function knightProbability(int $n, int $k, int $row, int $column): float
    {
        $prev = $cur = array_fill(0, $n, array_fill(0, $n, 0));
        $prev[$row][$column] = 1;
        for ($l = $k; $l; $l--) {
            for ($i = 0; $i < $n; $i++) {
                for ($j = 0; $j < $n; $j++) {
                    $cur[$i][$j] =
                        ($prev[$i - 1][$j - 2] ?? 0) +
                        ($prev[$i - 2][$j - 1] ?? 0) +
                        ($prev[$i - 2][$j + 1] ?? 0) +
                        ($prev[$i - 1][$j + 2] ?? 0) +
                        ($prev[$i + 1][$j - 2] ?? 0) +
                        ($prev[$i + 2][$j - 1] ?? 0) +
                        ($prev[$i + 2][$j + 1] ?? 0) +
                        ($prev[$i + 1][$j + 2] ?? 0);
                }
            }
            $prev = $cur;
        }

        $sum = 0;
        array_walk_recursive($prev, function ($val) use (&$sum) {
            $sum += $val;
        });
        return $sum / (8 ** $k);
    }
}

```