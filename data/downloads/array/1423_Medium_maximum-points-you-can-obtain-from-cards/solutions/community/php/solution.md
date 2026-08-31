# Sliding window -ish solution with O(1) memory

**Author:** DemetriSam
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solutions/4604051/](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solutions/4604051/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $cardPoints
     * @param Integer $k
     * @return Integer
     */
    function maxScore($cardPoints, $k) {
        $max = $sum = array_sum(array_slice($cardPoints, 0, $k));
        $len = count($cardPoints);

        for($i = 1; $i <=$k; $i++) {
            $del = $k - $i;
            $add = $len - $i;
            $sum = $sum + $cardPoints[$add] - $cardPoints[$del];
            $max = max($sum, $max);
        }

        return $max;
    }
}
```