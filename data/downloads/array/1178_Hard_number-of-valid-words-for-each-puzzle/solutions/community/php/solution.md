# Solution Number of Valid Words for Each Puzzle

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/4894660/](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/4894660/)

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

    /**
     * @param String[] $words
     * @param String[] $puzzles
     * @return Integer[]
     */
    function findNumOfValidWords($words, $puzzles) {
        $result = [];
        $binaryCount = [];

        foreach ($words as $word) {
            $wordMask = 0;
            $wordLetters = str_split($word);
            foreach ($wordLetters as $char) {
                $wordMask |= 1 << (ord($char) - ord('a'));
            }
            if (!isset($binaryCount[$wordMask])) {
                $binaryCount[$wordMask] = 1;
            } else {
                $binaryCount[$wordMask]++;
            }
        }

        foreach ($puzzles as $puzzle) {
            $validCount = 0;
            $puzzleMask = 1 << (ord($puzzle[0]) - ord('a'));
            $puzzleLength = strlen($puzzle) - 1;

            for ($i = 0; $i < (1 << $puzzleLength); ++$i) {
                $currentPuzzleMask = $puzzleMask;
                for ($j = 0; $j < $puzzleLength; ++$j) {
                    if (($i & (1 << $j)) > 0) {
                        $currentPuzzleMask |= 1 << (ord($puzzle[$j + 1]) - ord('a'));
                    }
                }

                if (isset($binaryCount[$currentPuzzleMask])) {
                    $validCount += $binaryCount[$currentPuzzleMask];
                }
            }

            $result[] = $validCount;
        }

        return $result;
    }
}

```