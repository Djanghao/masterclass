# php straightforward solution, only for&while cycles and strlen&count functions used

**Author:** V-Isa
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5733432/](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5733432/)

---

# Complexity
- Time complexity:
$$O(n)$$

# Code
```php []
class Solution {

    /**
     * @param String $s
     * @param Integer $k
     * @return Integer
     */
    function getLucky($s, $k) {
        for($i = 0, $l = strlen($s), $a = []; $i < $l; $i++) {
            $n = ord($s[$i]) - 96;
            while (0 < $n) {
                $a[] = $n % 10;
                $n = (int)($n / 10);
            }
        }
        for($i = 0, $c = count($a), $s = 0; $i < $c; $i++) {
            $s += $a[$i];
        }
        for ($j = 1; $j <= $k; $j++) {
            if ($k === $j || 10 > $s) {
                return $s;
            }
            $ns = 0;
            while(0 < $s) {
                $ns += $s % 10;
                $s = (int)($s / 10);
            }
            $s = $ns;
        }
    }
}
```