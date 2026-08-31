# php O(N)

**Author:** hjoru
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/1732024/](https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/1732024/)

---

```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function maxScoreIndices($nums) {
        $score = array_sum($nums);
        $maxScore = $score;
        $result = [];
        for ($index = 0; $index <= count($nums); $index++) {
            if ($maxScore < $score) {
                $result = [$index];
                $maxScore = $score;
            } else if ($maxScore === $score) {
                $result[] = $index;
            }
            if ($nums[$index] === 0) {
                $score++;
            } else {
                $score--;
            }
        }
        return $result;
    }
}