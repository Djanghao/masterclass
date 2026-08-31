# [PHP] Beats 81.25%

**Author:** amiddio_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5358662/](https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5358662/)

---

# Code
```
class Solution {

    /**
     * @param String $word
     * @return Integer
     */
    function numberOfSpecialChars($word) {
        $letters_lower = $letters_upper = [];
        
        for ($i = 0; $i < strlen($word); $i++) {
            if ($word[$i] === strtolower($word[$i])) {
                $letters_lower[$word[$i]] = strtoupper($word[$i]);
            } else {
                $letters_upper[$word[$i]] = strtolower($word[$i]);
            }
        }
        
        $intersect_values = array_intersect(
            array_values($letters_lower), array_keys($letters_upper)
        );

        return count($intersect_values);
    }
}
```