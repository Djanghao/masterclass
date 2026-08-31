# Topological sort

**Author:** georgynet
**Votes:** 1
**Link:** [https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5517900/](https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5517900/)

---

# Complexity
- Time complexity: $$O(K^2)$$

- Space complexity: $$O(K)$$

# Code
```
class Solution
{
    /**
     * @param int[][] $rowConditions
     * @param int[][] $colConditions
     * @return int[][]
     */
    public function buildMatrix(int $k, array $rowConditions, array $colConditions): array
    {
        $sortedRow = $this->topologicalSort($k, $rowConditions);
        $sortedCol = $this->topologicalSort($k, $colConditions);

        if (count($sortedRow) === 0 || count($sortedCol) === 0) {
            return [];
        }

        $r = array_fill(0, $k, 0);
        $result = array_fill(0, $k, $r);


        for ($i = 0; $i < $k; $i++) {
            $isMatched = false;
            for ($j = 0; $j < $k; $j++) {
                if ($sortedRow[$i] === $sortedCol[$j]) {
                    $result[$i][$j] = $sortedCol[$j];
                    $isMatched = true;
                }
            }

            if ($isMatched === false) {
                return [];
            }
        }

        return $result;
    }

    /**
     * @param int $k
     * @param int[][] $conditions
     * @return int[]
     */
    private function topologicalSort(int $k, array $conditions): array
    {
        $wights = array_fill(1, $k, 0);

        $indexed = [];
        foreach ($conditions as $condition) {
            $indexed[$condition[0]][] = $condition[1];
            ++$wights[$condition[1]];
        }

        $sorted = [];
        do {
            asort($wights);

            $firstKey = array_key_first($wights);
            if ($wights[$firstKey] !== 0) {
                return [];
            }

            unset($wights[$firstKey]);

            $sorted[] = $firstKey;

            $next = $indexed[$firstKey] ?? [];
            foreach ($next as $wight) {
                --$wights[$wight];
            }
        } while (count ($wights) > 0);

        return $sorted;
    }
}
```