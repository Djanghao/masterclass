# Solution Alphabet Board Path

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/alphabet-board-path/solutions/4890033/](https://leetcode.com/problems/alphabet-board-path/solutions/4890033/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    private static $board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"];
    private static $letters = [];

    public function __construct() {
        foreach (self::$board as $rowIndex => $row) {
            foreach (str_split($row) as $colIndex => $letter) {
                self::$letters[$letter] = [$rowIndex, $colIndex];
            }
        }
    }

    /**
     * @param String $target
     * @return String
     */
    function alphabetBoardPath($target) {
        $move = function ($from, $to) {
            $res = '';
            $f = $from;
            $t = $to;

            while ($f[0] > $t[0]) {
                $f[0]--;
                $res .= 'U';
            }

            while ($f[1] > $t[1]) {
                $f[1]--;
                $res .= 'L';
            }

            while ($f[0] < $t[0]) {
                $f[0]++;
                $res .= 'D';
            }

            while ($f[1] < $t[1]) {
                $f[1]++;
                $res .= 'R';
            }

            return $res . '!';
        };

        $coords = array_map(function ($char) {
            return self::$letters[$char];
        }, str_split($target));

        return implode(array_map($move, array_merge([[0, 0]], array_slice($coords, 0, -1)), $coords));
    }
}

```