# PHP. Sliding Window.

**Author:** CEERG
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-radius-subarray-averages/solutions/3661796/](https://leetcode.com/problems/k-radius-subarray-averages/solutions/3661796/)

---

# Code
```
class Solution {
    /**
     * @param int[] $nums
     * @param int $k
     * @return int[]
     */
    function getAverages(array $nums, int $k): array {
        $length = $k * 2 + 1;
        $n = count($nums);
        $sum = 0;

        $averages = array_fill(0, $n, -1);

        for ($i = 0; $i < $n; $i++) {
            $left = $i - $length + 1;
            $center = $i - $k;
            $right = $i;

            $sum += $nums[$right];

            if ($left - 1 >= 0)
                $sum -= $nums[$left - 1];

            if ($left >= 0) {
                $averages[$center] = intdiv($sum, $length);
            }
        }

        return $averages;
    }
}
```