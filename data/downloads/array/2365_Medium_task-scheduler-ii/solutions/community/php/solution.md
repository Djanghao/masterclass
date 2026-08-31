# Beating 100% users in Runtime & Memory using PHP

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/task-scheduler-ii/solutions/5485616/](https://leetcode.com/problems/task-scheduler-ii/solutions/5485616/)

---

# Code
```
class Solution {
    function taskSchedulerII($tasks, $space) {
        $last = [];
        $day = 1;
        for ($i = 0; $i < count($tasks); $i++, $day++) {
            $ld = $last[$tasks[$i]] ?? null;
            $last[$tasks[$i]] = $day;
            if ($ld !== null && $day <= $ld + $space) {
                $day = $ld + $space + 1;
                $last[$tasks[$i]] = $day;
            }
        }
        return $day - 1;
    }
}
```