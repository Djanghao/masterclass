# php solution

**Author:** punkundead
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-plus-sign/solutions/1454129/](https://leetcode.com/problems/largest-plus-sign/solutions/1454129/)

---

```php
class Solution
{

    /**
     * @param Integer     $n
     * @param Integer[][] $mines
     *
     * @return Integer
     */
    function orderOfLargestPlusSign($n, $mines)
    {
        $max = 0;
        if(count($mines) === $n*$n) return 0;
        $a = array_fill(0, $n, array_fill(0, $n, 1));
        foreach ($mines as [$i, $j]) {
            $a[$i][$j] = 0;
        }

        for ($i = 0; $i < $n; $i++) {
            for ($s = $j = 0; $j < $n; $j++) {
                if ($a[$i][$j]) {
                    $a[$i][$j] = ++$s;
                } else {
                    $s = 0;
                }
            }
            
            for ($s = 0, $j = $n - 1; $j >= 0; $j--) {
                if ($a[$i][$j]) {
                    $a[$i][$j] = min($a[$i][$j], ++$s);
                } else {
                    $s = 0;
                }
            }
        }

        for ($j = 0; $j < $n; $j++) {
            for ($s = $i = 0; $i < $n; $i++) {
                if ($a[$i][$j]) {
                    $a[$i][$j] = min($a[$i][$j], ++$s);
                } else {
                    $s = 0;
                }
            }
            for ($s = 0, $i = $n - 1; $i >= 0; $i--) {
                if ($a[$i][$j]) {
                    $a[$i][$j] = min($a[$i][$j], ++$s);
                    $max = max($max, $a[$i][$j]);
                } else {
                    $s = 0;
                }
            }
        }

        return $max;
    }
}

```