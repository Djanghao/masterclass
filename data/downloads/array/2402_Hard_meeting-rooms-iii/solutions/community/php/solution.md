# Beating 100% users in Runtime & Memory using PHP

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-rooms-iii/solutions/5485794/](https://leetcode.com/problems/meeting-rooms-iii/solutions/5485794/)

---

# Code
```
class Solution {
    function mostBooked($n, $meetings) {
        $ans = array_fill(0, $n, 0);
        $times = array_fill(0, $n, 0);
        sort($meetings);

        foreach ($meetings as $meeting) {
            [$start, $end] = $meeting;
            $flag = false;
            $minind = -1;
            $val = PHP_INT_MAX;
            for ($j = 0; $j < $n; $j++) {
                if ($times[$j] < $val) {
                    $val = $times[$j];
                    $minind = $j;
                }
                if ($times[$j] <= $start) {
                    $flag = true;
                    $ans[$j]++;
                    $times[$j] = $end;
                    break;
                }
            }
            if (!$flag) {
                $ans[$minind]++;
                $times[$minind] += ($end - $start);
            }
        }

        $maxi = -1;
        $id = -1;
        for ($i = 0; $i < $n; $i++) {
            if ($ans[$i] > $maxi) {
                $maxi = $ans[$i];
                $id = $i;
            }
        }

        return $id;
    }
}
```