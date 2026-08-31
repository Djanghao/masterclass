# PHP Solution | Beats 100%

**Author:** garimarajput748
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-best-non-overlapping-events/solutions/6124851/](https://leetcode.com/problems/two-best-non-overlapping-events/solutions/6124851/)

---

# Complexity
- Time complexity: $$O(NLogN)$$

- Space complexity: $$O(N)$$

# Code
```php []
class Solution {

    /**
     * @param Integer[][] $events
     * @return Integer
     */
    function maxTwoEvents($events) {
        $n = count($events);

        // Step 1: Sort the events by their start time
        usort($events, function ($a, $b) {
            return $a[0] - $b[0];
        });

        // Step 2: Create the suffix array for the maximum event value from each event onward
        $suffixMax = array_fill(0, $n, 0);
        $suffixMax[$n - 1] = $events[$n - 1][2]; // Initialize the last event's value

        // Populate the suffixMax array
        for ($i = $n - 2; $i >= 0; $i--) {
            $suffixMax[$i] = max($events[$i][2], $suffixMax[$i + 1]);
        }

        // Step 3: For each event, find the next event that starts after it ends
        $maxSum = 0;

        for ($i = 0; $i < $n; $i++) {
            $left = $i + 1;
            $right = $n - 1;
            $nextEventIndex = -1;

            // Perform binary search to find the next non-overlapping event
            while ($left <= $right) {
                $mid = (int)(($left + $right) / 2);
                if ($events[$mid][0] > $events[$i][1]) {
                    $nextEventIndex = $mid;
                    $right = $mid - 1;
                } else {
                    $left = $mid + 1;
                }
            }

            // If a valid next event is found, update the max sum
            if ($nextEventIndex !== -1) {
                $maxSum = max($maxSum, $events[$i][2] + $suffixMax[$nextEventIndex]);
            }

            // Also consider the case where we take only the current event
            $maxSum = max($maxSum, $events[$i][2]);
        }

        return $maxSum;
    }
}
```