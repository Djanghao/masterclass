# 1041 | PHP Solution, 0 ms

**Author:** Sporkyy
**Votes:** 1
**Link:** [https://leetcode.com/problems/robot-bounded-in-circle/solutions/294101/](https://leetcode.com/problems/robot-bounded-in-circle/solutions/294101/)

---

> Runtime: **0 ms**, faster than *100.00%* of PHP online submissions
> Memory Usage: **14.9 MB**, less than *100.00%* of PHP online submissions

```php
class Solution
{
    /**
     * @param String $instructions
     * @return Boolean
     */
    function isRobotBounded($instructions)
    {
        list($distance, $orientation) = [0, 0];
        for ($i = 0; $i < strlen($instructions); $i++) {
            switch ($instructions[$i]) {
                case 'G':
                    $distance += [1, 2, -1, -2][$orientation];
                    break;
                case 'L':
                    $orientation = ($orientation + 1) % 4;
                    break;
                case 'R':
                    $orientation = ($orientation + 3) % 4;
                    break;
            }
        }
        return 0 === $distance || 0 !== $orientation;
    }
}
```