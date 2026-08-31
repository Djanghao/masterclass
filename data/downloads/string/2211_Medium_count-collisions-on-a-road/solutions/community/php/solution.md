# O(n) time, O(1) memory solution

**Author:** DemetriSam
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-collisions-on-a-road/solutions/4676254/](https://leetcode.com/problems/count-collisions-on-a-road/solutions/4676254/)

---

Going through we need to remember if we met 'S' or 'R' already and also we need to know how many cars still go to the right.
Knowing that and the current car direction we can calculate contribution to the answer for the each car. O(n) time, O(1) memory.

# Code
```
class Solution {

    /**
     * @param String $directions
     * @return Integer
     */
    function countCollisions($directions) {
        $flag = 'L';
        $ans = 0;
        $count_r = 0;

        for($i = 0; $i < strlen($directions); $i++) {
            $cur = $directions[$i];

            if($flag === 'R' && $cur === 'L') {
                $ans += $count_r + 1;
                $count_r = 0;
                $flag = 'S';
            } elseif($flag === 'R' && $cur === 'S') {
                $ans += $count_r;
                $count_r = 0;
                $flag = 'S';
            } elseif($flag === 'S' && $cur === 'L') {
                $ans += 1;
            } elseif($cur === 'R') {
                $flag = $cur;
                $count_r += 1;
            } elseif($cur !== 'L') {
                $flag = $cur;
            }
        }

        return $ans;
    }
}
```