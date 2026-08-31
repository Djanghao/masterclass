# Easy php solution

**Author:** mhmahmud
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4571677/](https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4571677/)

---

# Approach
1. Split win and lost array from matches
2. filter win values with lost values
3. then find out lost values
4. sort win_new and lost_new then return into an array


# Code
```
class Solution {

    function findWinners($matches) {
        $win = [];
        $lost = [];
        for($i=0; $i<count($matches); $i++) {
            $win[] = $matches[$i][0];
            $lost[] = $matches[$i][1];
        }
        $win = array_values(array_unique($win));

        // filter win values
        $new_win = array_diff($win, $lost);

        // filter atleast one lost values
        $lost = array_count_values($lost);
        $new_lost = [];
        foreach($lost as $key=>$val) {
            if($val==1) {
                $new_lost[] = $key;
            }
        }
        sort($new_win);sort($new_lost);
        return [$new_win, $new_lost];
    }
}
```