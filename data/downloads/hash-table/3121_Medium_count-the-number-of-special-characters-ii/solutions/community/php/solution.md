# PHP : Count the Number of Special Characters II (inspired by Java)

**Author:** linkman
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5958205/](https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5958205/)

---

# Inspired by
https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5052474/two-flags

# Code
```php []
class Solution {

    /**
     * @param String $word
     * @return Integer
     */
    function numberOfSpecialChars($word) {
        $lo = array_fill(0, 26, false);
        $up = array_fill(0, 26, false);

        foreach(str_split($word) as $char){
            if (ctype_lower($char)) {
                $index = ord($char) - ord('a');
                $lo[$index] = !$up[$index];
            } else {
                $up[ord($char) - ord('A')] = true;
            }
        }

        $res = 0;
        for($i = 0; $i < 26; $i++) {
            $res += $lo[$i] && $up[$i] ? 1 : 0;
        }

        return $res;        
    }
}
```