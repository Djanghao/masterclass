# Simple and highly optimized solution

**Author:** krishnavcse
**Votes:** 0
**Link:** [https://leetcode.com/problems/day-of-the-year/solutions/4244673/](https://leetcode.com/problems/day-of-the-year/solutions/4244673/)

---


# Approach
Initialize array with all month days
Find year is leap year or not
If it's a leap make feburuary days to 29
Initialize days to current month days
If month is greater then 1 then in for loop iterate till month -1
Sum of all month days in loop

# Complexity
- Time complexity:
$O(n)

- Space complexity:

# Code
```
class Solution {

    /**
     * @param String $date
     * @return Integer
     */
    function dayOfYear($date) {
        $date = explode('-', $date);
        $isLeapYear = (int)($date[0]/4);
        $days = $date[2];
        $months = [31,28,31,30,31,30,31,31,30,31,30,31];

        if (($date[0] % 400 == 0) || ($date[0] % 100 != 0) && ($date[0] % 4 == 0)) {
            $months[1] = 29;
        }

        if ($date[1] > 1) {
            for($i=0; $i < $date[1]-1; $i++) {
                $days += $months[$i];
            }
        }

        return (int)$days;
    }
}
```