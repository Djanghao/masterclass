# PHP. Recursion + DP

**Author:** CEERG
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-ii/solutions/3565127/](https://leetcode.com/problems/stone-game-ii/solutions/3565127/)

---

# Code
```
class Solution {
    private array $cache = [];

    public function stoneGameII(array $piles, int $i = 0, int $m = 1, bool $aliceTurn = true): int {
        if (isset($this->cache[$i][$m][$aliceTurn]))
            return $this->cache[$i][$m][$aliceTurn];

        if (!array_key_exists($i, $piles))
            return 0;

        $score = $aliceTurn ? 0 : PHP_INT_MAX;

        for ($pilesCanTake = 1; $pilesCanTake <= 2 * $m; $pilesCanTake++) {
            $currentScore = 0;

            for ($pileToTake = 0; $pileToTake < $pilesCanTake; $pileToTake++) {
                if (array_key_exists($i + $pileToTake, $piles))
                    $currentScore += $piles[$i + $pileToTake];
                else
                    continue;
            }

            $nextScore = $this->stoneGameII($piles, $i + $pilesCanTake, max($m, $pilesCanTake), !$aliceTurn);

            if ($aliceTurn)
                $score = max($score, $currentScore + $nextScore);
            else
                $score = min($score, $nextScore);
        }

        return $this->cache[$i][$m][$aliceTurn] = $score;
    }
}
```