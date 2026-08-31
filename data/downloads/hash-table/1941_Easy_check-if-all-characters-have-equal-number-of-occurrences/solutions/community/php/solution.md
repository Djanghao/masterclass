# 0 ms? WTF?

**Author:** GLZVSKI
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/4321049/](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/4321049/)

---

# Code
```
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function areOccurrencesEqual(string $str): bool
    {
        $count = 0;

        foreach(count_chars($str, 1) as $val) {
            if ($count === 0) {
                $count = $val;
                continue;
            }

            if ($count != $val) {
                return false;
            }
        }

        return true;
    }
}
```