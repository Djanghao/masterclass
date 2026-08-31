# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/solutions/6137459/](https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/solutions/6137459/)

---

```php []
class Solution {

    /**
     * @param String $str1
     * @param String $str2
     * @return Boolean
     */
    function canMakeSubsequence($str1, $str2) {
        $len1 = strlen($str1);
        $len2 = strlen($str2);

        $i1 = $i2 = 0;
        while ($i1 < $len1 && $i2 < $len2) {
            if ($str1[$i1] === $str2[$i2] || $this->cycle($str1[$i1]) === $str2[$i2]) {
                $i2++;
            }
            $i1++;
        }
        return $i2 === $len2;
    }

    function cycle(string $char): string {
        return $char === 'z' ? 'a' : ++$char;
    }
}
```