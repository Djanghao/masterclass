# Runtime 29 ms / Memory 19.2 MB

**Author:** ordinary9843
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-the-string/solutions/3277208/](https://leetcode.com/problems/reformat-the-string/solutions/3277208/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function reformat($s) {
        $res = '';
        $letters = $digits = [];
        for ($i = 0; $i < strlen($s); $i++) {
            if ($s[$i] >= 0 && $s[$i] <= 9) {
                $digits[] = $s[$i];
            } else {
                $letters[] = $s[$i];
            }
        }

        $digitCount = count($digits);
        $letterCount = count($letters);
        $abs = abs($digitCount - $letterCount);
        if ($abs >= 0 && $abs <= 1) {
            if ($digitCount > $letterCount) {
                $first = $digits;
                $second = $letters;
            } else {
                $first = $letters;
                $second = $digits;
            }

            while (count($first) > 0 || count($second) > 0) {
                (count($first) > 0) && $res .= array_shift($first);
                (count($second) > 0) && $res .= array_shift($second);
            }
        }

        return $res;
    }
}
```