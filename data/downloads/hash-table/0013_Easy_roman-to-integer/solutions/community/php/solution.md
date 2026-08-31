# php (using str_tr)

**Author:** thePowerOfCreation21
**Votes:** 18
**Link:** [https://leetcode.com/problems/roman-to-integer/solutions/2201162/](https://leetcode.com/problems/roman-to-integer/solutions/2201162/)

---

so i did this and it worked :)

```
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function romanToInt($s) {
        $s = strtr(
            $s,
            [
                'M' => '1000,',
                'CM' => '900,',
                'D' => '500,',
                'CD' => '400,',
                'C' => '100,',
                'XC' => '90,',
                'L' => '50,',
                'XL' => '40,',
                'X' => '10,',
                'IX' => '9,',
                'V' => '5,',
                'IV' => '4',
                'I' => '1,'
            ]
        );
        return array_sum(explode(',', $s));
    }
}
```