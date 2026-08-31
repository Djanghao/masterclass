# php foreach 2n

**Author:** LEV13
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/3539541/](https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/3539541/)

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
     * @param Integer[] $player1
     * @param Integer[] $player2
     * @return Integer
     */
    function isWinner($player1, $player2) {
        $score1 = 0;
        $score2 = 0;

        foreach ($player1 as $key => $value) {
            $caf = 1;
            if (isset($player1[$key-1]) && $player1[$key-1] === 10) {
                $caf = 2;
            } elseif (isset($player1[$key-2]) && $player1[$key-2] === 10) {
                $caf = 2;
            }
            $score1 += ($value*$caf);
        }

        foreach ($player2 as $key => $value) {
            $caf = 1;
            if (isset($player2[$key-1]) && $player2[$key-1] === 10) {
                $caf = 2;
            } elseif (isset($player2[$key-2]) && $player2[$key-2] === 10) {
                $caf = 2;
            }
            $score2 += ($value*$caf);
        }

        if (($result = ($score1 <=> $score2)) === -1) {
            return 2;
        }

        return $result;
    }
}
```