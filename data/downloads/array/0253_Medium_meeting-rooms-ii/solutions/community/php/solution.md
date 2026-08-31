# PHP Sorting solution

**Author:** hnatenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/3860803/](https://leetcode.com/problems/meeting-rooms-ii/solutions/3860803/)

---



# Complexity
- Time complexity: O(N log N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O (N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[][] $intervals
     * @return Integer
     */
    function minMeetingRooms($intervals) {
        $res = 0;
        $count = 0;
        $start = [];
        $end = [];

        for ($i = 0; $i < count($intervals); $i++) {
            $start[$i] = $intervals[$i][0];
            $end[$i] = $intervals[$i][1];
        }
        sort($start);
        sort($end);

        $i = 0;
        $j = 0;

        while ($i < count($intervals)) {
            if ($start[$i] < $end[$j]) {
                $count++;
                $i++;
            } else {
                $count--;
                $j++;
            }
            $res = max($res, $count);

        }
        return $res;
    }
}
```