# Solution Minimum Initial Energy to Finish Tasks

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/5233233/](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/5233233/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public function minimumEffort($tasks) {
        $ans = 0;
        $energy_left = 0;

        usort($tasks, function($a, $b) {
            return ($b[1] - $b[0]) - ($a[1] - $a[0]);
        });

        foreach ($tasks as $task) {
            $actual = $task[0];
            $minimum = $task[1];

            if ($energy_left < $minimum) {
                $ans += $minimum - $energy_left;
                $energy_left = $minimum - $actual;
            } else {
                $energy_left -= $actual;
            }
        }

        return $ans;
    }
}

```