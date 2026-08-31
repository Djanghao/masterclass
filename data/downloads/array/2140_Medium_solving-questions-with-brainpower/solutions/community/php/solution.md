# PHP

**Author:** CEERG
**Votes:** 1
**Link:** [https://leetcode.com/problems/solving-questions-with-brainpower/solutions/3515293/](https://leetcode.com/problems/solving-questions-with-brainpower/solutions/3515293/)

---

# Code
```
class Solution {
    private int $n = 0;

    private array $cache = [];

    /**
     * @param int[][] $questions
     * @return int
     */
    public function mostPoints(array $questions): int {
        $this->n = count($questions);

        return $this->mostPointsInternal($questions, 0);
    }

    /**
     * @param int[][] $questions
     * @param int $i
     * @return int
     */
    private function mostPointsInternal(array $questions, int $i): int {
        if ($i >= $this->n) {
            return 0;
        }

        if (array_key_exists($i, $this->cache)) {
            return $this->cache[$i];
        }

        $skipCurrentQuestionPoints = $this->mostPointsInternal($questions, $i + 1);

        $solveCurrentQuestionPoints = $questions[$i][0] + $this->mostPointsInternal($questions, $questions[$i][1] + $i + 1);

        $this->cache[$i] = max($solveCurrentQuestionPoints, $skipCurrentQuestionPoints);

        return $this->cache[$i];
    }
}
```