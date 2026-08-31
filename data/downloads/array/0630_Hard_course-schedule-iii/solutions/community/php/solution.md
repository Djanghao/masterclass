# Solution Course Schedule III

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/course-schedule-iii/solutions/4751427/](https://leetcode.com/problems/course-schedule-iii/solutions/4751427/)

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
    function scheduleCourse($courses) {
        usort($courses, function($a, $b) {
            return $a[1] - $b[1];
        });

        $taken = [];

        $startTime = 0;

        foreach ($courses as $course) {
            [$duration, $endTime] = $course;

            if ($startTime + $duration <= $endTime) {
                $startTime += $duration;
                $taken[] = $duration;
            } else {
                $maxIndex = -1;
                $maxDuration = 0;
                for ($i = 0; $i < count($taken); $i++) {
                    if ($taken[$i] > $maxDuration) {
                        $maxIndex = $i;
                        $maxDuration = $taken[$i];
                    }
                }
                
                if ($maxIndex != -1 && $taken[$maxIndex] > $duration) {
                    $startTime -= $taken[$maxIndex] - $duration;
                    $taken[$maxIndex] = $duration;
                }
            }
        }

        return count($taken);
    }
}

```