# PHP Fibonacci

**Author:** J22qIDYZa7
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/5924710/](https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/5924710/)

---

# Code
```php []
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function countHousePlacements($n) {      

        // Modulo constant
        $mod = 10 ** 9 + 7;

        $test = [0, 2, 3];
        for ($i = 3; $i <= $n; $i++) {
            $test[] = ($test[$i - 1] + $test[$i - 2]) % $mod;
        }

        return ($test[$n]**2) % $mod;
    }
}
```