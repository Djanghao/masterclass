# PHP Sulution Runtime 19 ms; Beats 100%; Memory 19.3; MB Beats 100%;

**Author:** SurgeonDeath
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3623424/](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3623424/)

---

# PHP
Runtime 19 ms; Beats 100%; Memory 19.3; MB Beats 100%;

![Screenshot_1.png](./images/0.png)

# Code
```
class Solution
{
    /**
     * @param int $n
     * @param int $index
     * @param int $maxSum
     * @return int
     */
    function maxValue(int $n, int $index, int $maxSum): int
    {
        $left = 0;
        $right = $maxSum - $n;

        while ($left < $right) {
            $middle = ($left + $right + 1) / 2;

            if ($this->isPossible($n, $index, $maxSum - $n, $middle)) {
                $left = $middle;
            } else {
                $right = $middle - 1;
            }
        }

        return $left + 1;
    }

     private function isPossible(int $n, int $index, int $maxSum, int $value): bool
     {
        $leftValue = max($value - $index, 0);
        $rightValue = max($value - (($n - 1) - $index), 0);

        $sumBefore = ($value + $leftValue) * ($value - $leftValue + 1) / 2;
        $sumAfter = ($value + $rightValue) * ($value - $rightValue + 1) / 2;

        return $sumBefore + $sumAfter - $value <= $maxSum;
    }
}
```