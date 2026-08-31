# Runtime 12 ms / Memory 19.3 MB

**Author:** ordinary9843
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/3330808/](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/3330808/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function modifyString($s) {
        $letters = [];
        for ($i = 0; $i < 26; $i++) {
            $letters[chr(97 + $i)] = true;
        }

        for ($i = 0; $i < strlen($s); $i++) {
            if ($s[$i] === '?') {
                $unsets = $letters;
                unset($unsets[$s[$i - 1]], $unsets[$s[$i + 1]]);
                $s[$i] = key($unsets);
            }
        }

        return $s;
    }
}
```