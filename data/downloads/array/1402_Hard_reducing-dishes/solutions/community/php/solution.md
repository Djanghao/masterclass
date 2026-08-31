# PHP

**Author:** tinghaolai
**Votes:** 1
**Link:** [https://leetcode.com/problems/reducing-dishes/solutions/3353881/](https://leetcode.com/problems/reducing-dishes/solutions/3353881/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $satisfaction
     * @return Integer
     */
    function maxSatisfaction($satisfaction) {
        rsort($satisfaction);
        $result = 0;
        $acc = 0;
        foreach ($satisfaction as $score) {
            $acc += $score;
            if ($acc <= 0) {
                break;
            }

            $result += $acc;
        }

        return $result;
    }
}
```