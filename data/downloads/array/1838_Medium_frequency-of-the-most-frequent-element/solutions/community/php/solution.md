# PHP Solution

**Author:** lrazo
**Votes:** 0
**Link:** [https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4303860/](https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4303860/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function maxFrequency($nums, $k) {
        sort($nums);
        $n = count($nums);
        $l = 0;
        $r = 0;
        $total = 0;
        $maximum = 0;

        for ($r = 0; $r < $n; $r++) {
            $x = $nums[$r];
            $total += $x;

            while (((($r - $l + 1) * $x) > $k + $total)) {
                $total -= $nums[$l];
                $l++;
            }

            $maximum = max($maximum, $r - $l + 1);
        }

        return $maximum;
    }
}

```