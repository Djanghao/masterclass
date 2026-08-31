# Recursive backtracking + array_count_values()  + count_chars()

**Author:** yieldtoben
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5203420/](https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5203420/)

---

# Approach
Recursive backtracking to calculate all sets, prune paths where a new word doesn't work with the letters available.

# Complexity
- Time complexity:
$$O(2^n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {

    /**
     * @param String[] $words
     * @param String[] $letters
     * @param Integer[] $score
     * @return Integer
     */
    function maxScoreWords($words, $letters, $score)
    {
        $result = 0;
        $frequency = array_count_values($letters);
        $this->calcSubsets($words, $result, $frequency, $score);
        return $result;
    }

    function calcSubsets(&$A, &$R, &$F, &$S, $subset = [], $index = 0)
    {
        if (count($subset) > 0)
        {
            $count = count_chars(implode("", $subset), 1);
            $ss = 0;
            foreach ($count as $k => $v)
            {
                if (($F[chr($k)] ?? 0) < $v) return;
                $ss += $v * $S[$k - ord('a')];
            }
            $R = max($R, $ss);
        }
        for ($i = $index; $i < count($A); $i++)
        {
            $subset[] = $A[$i];
            $this->calcSubsets($A, $R, $F, $S, $subset, $i + 1);
            array_pop($subset);
        }
    }
}
```