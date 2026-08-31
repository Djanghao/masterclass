# ✅ [PHP🚀 Beats 100%][JS 93%] Binary Search Algorithm With Explanation

**Author:** akunopaka
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3270311/](https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3270311/)

---

# Approach
My approach to solving this problem is to use a **binary search algorithm** to find the minimum time. 
I start by set the left to 0 and right boundaries of the search to the first time(min) in the array multiplied by the total trips. 

Then loop through the array and check if the time at the current index is greater than the middle time in the range. If it is, break out of the loop and if not, add the number of trips that can be made in that time to the total trips count. 
If the total trips count is less than the total trips, move the left boundary to the middle time plus one, otherwise, move the right boundary to the middle time minus one. 

When the loop ends, I return the left boundary as this is the minimum time that meets the required number of trips.

# Complexity
The **time complexity** of this algorithm is O(NlogN), where n is the size of the input array \\$time. Since we have to sort the array initially, and then loop through the array once for each iteration of the binary search loop.


# Javascript
```
/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function (time, totalTrips) {
//  let left = 1, right = Math.min(...time) * totalTrips;
    let left = 1, right = 1e14;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let trips = 0;

        for (let t of time) {
            trips += Math.floor(mid / t);
            if (trips >= totalTrips) break;
        }

        if (trips < totalTrips) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};
```


# PHP
```1st  []
class Solution {
    /**
     * @param Integer[] $time
     * @param Integer $totalTrips
     * @return Integer
     */
    function minimumTime(array $time, int $totalTrips): int
    {
        $leftTimeBound = 0;
        $rightTimeBound = $totalTrips * min($time);
    //  $rightTimeBound = PHP_INT_MAX;
        while ($leftTimeBound <= $rightTimeBound) {
            $middleTimeInRange = $leftTimeBound + intdiv(($rightTimeBound - $leftTimeBound), 2);
            $tripsCount = 0;
            foreach ($time as $busTime) {
                $tripsCount += floor($middleTimeInRange / $busTime);
                if ($tripsCount >= $totalTrips) break;
            }
            if ($tripsCount < $totalTrips) {
                $leftTimeBound = $middleTimeInRange + 1;
            } else {
                $rightTimeBound = $middleTimeInRange - 1;
            }
        }
        return $leftTimeBound;
    }
}
```
```2nd []
class Solution {
    /**
     * @param Integer[] $time
     * @param Integer $totalTrips
     * @return Integer
     */
    function minimumTime(array $time, int $totalTrips): int
    {
        sort($time);
        $time = array_count_values($time);
        $leftTimeBound = 0;
        $rightTimeBound = $totalTrips * array_key_first($time); // OR PHP_INT_MAX
        while ($leftTimeBound <= $rightTimeBound) {
            $middleTimeInRange = (int)$leftTimeBound + intdiv(($rightTimeBound - $leftTimeBound), 2);
            $tripsCount = 0;
            foreach ($time as $busTime => $busCount) {
                if ($busTime > $middleTimeInRange) break;
                $tripsCount += floor($middleTimeInRange / $busTime) * $busCount;
                if ($tripsCount > $totalTrips) break;
            }
            if ($tripsCount < $totalTrips) {
                $leftTimeBound = $middleTimeInRange + 1;
            } else {
                $rightTimeBound = $middleTimeInRange - 1;
            }
        }
        return $leftTimeBound;
    }
}
```



If my work was useful for you, please upvote!

\uD83D\uDC4D\uD83D\uDC4D\uD83D\uDC4D