# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/factorial-trailing-zeroes/solutions/6109040/](https://leetcode.com/problems/factorial-trailing-zeroes/solutions/6109040/)

---

```php []
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function trailingZeroes($n) {
        $zeroes = 0;
        while ($n >= 5) {
            $n = (int)($n/5);
            $zeroes += $n;

        }
        return $zeroes;
    }
}
```