# PHP. Recursion + DP. Turn by turn solution

**Author:** CEERG
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-iii/solutions/3568121/](https://leetcode.com/problems/stone-game-iii/solutions/3568121/)

---

# Code
```
class Solution {
    private array $stoneValues;
    private int $n;

    private array $cache = [];

    public function stoneGameIII(array $stoneValues): string {
        $this->stoneValues = $stoneValues;
        $this->n = count($stoneValues);

        $score = $this->turn(0, true);

        if ($score > 0)
            return "Alice";

        if ($score < 0)
            return "Bob";

        return "Tie";
    }

    private function turn(int $iOffset, bool $aliceTurn): int {
        if (isset($this->cache[$aliceTurn][$iOffset])) {
            return $this->cache[$aliceTurn][$iOffset];
        }

        if ($iOffset > $this->n)
            return 0;

        $scores = [];

        for ($n = 0; $n < 3; $n++) {
            $score = $this->takeNStonesFromOffset($n, $iOffset);

            if (!$aliceTurn)
                $score *= -1;

            $scores[] = $score + $this->turn($iOffset + $n + 1, !$aliceTurn);
        }

        return $this->cache[$aliceTurn][$iOffset] = $aliceTurn ? max($scores) : min($scores);
    }

    private function takeNStonesFromOffset(int $n, int $iOffset): int {
        $score = 0;

        for ($k = 0; $k <= $n; $k++) {
            $i = $iOffset + $k;

            if ($i >= $this->n)
                continue;

            $score += $this->stoneValues[$i];
        }

        return $score;
    }
}
```