# Only string functions

**Author:** artimovsky
**Votes:** 4
**Link:** [https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3127461/](https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3127461/)

---

# Code
```
class Solution {

    /**
     * @param String $str1
     * @param String $str2
     * @return String
     */
    function gcdOfStrings($str1, $str2) {

        $s = '';

        for ($i=1; $i <= strlen($str2); $i++) { 
            $try = substr($str2, 0, $i);

            $remains1 = str_replace($try, '', $str1);
            $remains2 = str_replace($try, '', $str2);

            if ($remains1 === '' && $remains2 === '') {
                $s = $try;
            }
        }

        return $s;

    }
}
```