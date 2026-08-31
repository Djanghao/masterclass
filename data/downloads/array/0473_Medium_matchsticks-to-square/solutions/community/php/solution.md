# -_-

**Author:** andreskrip
**Votes:** 0
**Link:** [https://leetcode.com/problems/matchsticks-to-square/solutions/5331104/](https://leetcode.com/problems/matchsticks-to-square/solutions/5331104/)

---

```
class Solution {
    function makesquare($matchsticks): bool
    {
        $totalLength = array_sum($matchsticks);

        if ($totalLength % 4 != 0) {
            return false;
        }

        rsort($matchsticks);

        $sideLength = $totalLength / 4;

        $sides = [0, 0, 0, 0];

        return $this->canBuildSquare($matchsticks, 0, $sides, $sideLength);
    }

    function canBuildSquare(array $matchsticks, int $num, array &$sides, int $sideLength): bool
    {
        $currentMatchstick = $matchsticks[$num] ?? null;

        if (!$currentMatchstick) {
            return array_count_values($sides)[$sideLength] === 4;
        }

        for ($side = 0; $side < 4; $side++) {
            if ($sides[$side] + $matchsticks[$num] <= $sideLength) {
                $sides[$side] += $matchsticks[$num];
                if ($this->canBuildSquare($matchsticks, $num + 1, $sides, $sideLength)) {
                    return true;
                }
                $sides[$side] -= $matchsticks[$num];
            }
        }

        return false;
    }
}
```