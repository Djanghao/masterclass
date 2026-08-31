# PHP O(n)

**Author:** punkundead
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2450311/](https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2450311/)

---

```php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function isPossible($nums)
    {
        $last = PHP_INT_MIN;
        $h = [];
        $nums[] = PHP_INT_MAX;
        $len = 0;
        foreach ($nums as $num) {
            if ($num === $last) {
                $len++;
                continue;
            }
            if ($num > $last + 1) {
                if (($h[$last - 1][1] ?? 0) || ($h[$last - 1][2] ?? 0) > $len) {
                    return false;
                }
                if (($h[$last - 1][2] ?? 0) + ($h[$last - 1][3] ?? 0) < $len) {
                    return false;

                }

            } else {
                if ($len < ($h[$last - 1][1] ?? 0) + ($h[$last - 1][2] ?? 0)) {
                    return false;
                }
                $h[$last][2] = $h[$last - 1][1] ?? 0;
                $len -= $h[$last][2];
                $h[$last][3] = ($h[$last - 1][2] ?? 0);
                $len -= $h[$last][3];
                $h[$last][1] = $len - min($h[$last - 1][3] ?? 0, $len);
                $len -= $h[$last][1];
                $h[$last][3] += $len;
            }

            $len = 1;
            $last = $num;
        }

        return true;
    }
}
