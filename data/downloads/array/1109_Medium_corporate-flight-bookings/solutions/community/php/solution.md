# Runtime 348 ms  / Memory 47.6 MB

**Author:** ordinary9843
**Votes:** 0
**Link:** [https://leetcode.com/problems/corporate-flight-bookings/solutions/2965685/](https://leetcode.com/problems/corporate-flight-bookings/solutions/2965685/)

---

# Code
```
class Solution {

    /**
     * @param Integer[][] $bookings
     * @param Integer $n
     * @return Integer[]
     */
    function corpFlightBookings($bookings, $n) {
        $res = array_fill(0, $n, 0);
        foreach ($bookings as $booking) {
            $res[$booking[0] - 1] = $res[$booking[0] - 1] + $booking[2];
            if ($booking[1] >= $n) {
                continue;
            }
            $res[$booking[1]] = $res[$booking[1]] - $booking[2];
        }

        for ($i = 1; $i < $n; $i++) {
            $res[$i] = $res[$i] + $res[$i - 1];
        }

        return $res;
    }
}
```