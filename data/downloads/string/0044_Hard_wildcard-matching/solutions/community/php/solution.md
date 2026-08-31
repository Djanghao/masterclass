# PHP | 100% | 100% | Regex solution

**Author:** MeAndMyCat
**Votes:** 4
**Link:** [https://leetcode.com/problems/wildcard-matching/solutions/1950430/](https://leetcode.com/problems/wildcard-matching/solutions/1950430/)

---

Used Regex, found that PHP/PCRE was faster than Python matching.
Replaced "?" with ".", and "*" with ".\\*".
```
class Solution {

    /**
     * @param String $s
     * @param String $p
     * @return Boolean
     */
    function isMatch($s, $p) {
        return preg_match("/^" . preg_replace("/\\*+/", ".*" ,str_replace("?", ".", $p)) . "$/U", $s);
    }
}
```