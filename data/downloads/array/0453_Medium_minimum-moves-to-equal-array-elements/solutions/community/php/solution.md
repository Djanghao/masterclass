# I assume this is the fastest solution according to runtime.

**Author:** brakis
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/4474452/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/4474452/)

---

# How i didn't solve it
The problem wasn't very hard so I did it in around 15 minutes by myself but judging by the massive amount of test cases there were my code was the worst. Then I just gave up and asked Bing AI for help.

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minMoves($nums) {
        $min = min($nums);
        $moves = 0;

        foreach($nums as $num) {
            $moves += $num - $min;
        }

        return $moves;
    }

}
```