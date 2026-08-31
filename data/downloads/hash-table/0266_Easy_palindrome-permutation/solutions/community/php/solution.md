# PHP 8 ms runtime OMG?

**Author:** agilov
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-permutation/solutions/3638721/](https://leetcode.com/problems/palindrome-permutation/solutions/3638721/)

---

```
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function canPermutePalindrome($s) {
        $set = 0;
        $asciia = ord('a');
        for($i = 0; $i < strlen($s); $i++) {
            $set ^= 1 << (ord($s[$i]) - $asciia);
        }

        $ones = 0;
        for(;$set > 0;$set >>= 1){
            $ones += $set & 1;
        }

        return $ones <= 1;
    }
}
```