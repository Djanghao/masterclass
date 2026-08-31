# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/happy-number/solutions/6065622/](https://leetcode.com/problems/happy-number/solutions/6065622/)

---

```php []
class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function isHappy($n) {
        // NOTE: if a number is happy, all intermediate numbers until 1 is reached are happy, too.
        // We could approach this recursively, but it could consume a lot of memory.
        // Let's do it iteratively instead.

        $memo = [];
        
        // 1. If ans === 1, happy number found. Return true.
        // 2. Split digits
        // 3. Square digits and sum
        // 4. If ans is in memo, cycle found. Return false.
        // 5. Store in memo.
        // 6. Repeat 1-5, with new num to test equals ans.
        while (true) {
            if ($n === 1) return true;

            $digits = $this->splitByDigits($n);
            $n = $this->sumSquaredDigits($digits);
            if (isset($memo[$n])) return false;
            $memo[$n] = true;
        }
    }

    function splitByDigits($n) {
        return array_map(
            fn ($d) => (int)$d,
            str_split((string)$n)
        );
    }

    function sumSquaredDigits($digits) {
        return array_reduce(
            $digits,
            fn ($sum, $digit) => $sum + $digit*$digit,
            0
        );
    }
}
```