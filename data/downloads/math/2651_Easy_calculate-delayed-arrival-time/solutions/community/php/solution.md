# Easy solution

**Author:** spone12
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/5988593/](https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/5988593/)

---


# Complexity
- Time complexity: 0ms, $$O(1)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 19.96mb, $$O(1)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer $arrivalTime
     * @param Integer $delayedTime
     * @return Integer
     */
    function findDelayedArrivalTime($arrivalTime, $delayedTime) {

        $additionalTime = $arrivalTime + $delayedTime;
        if ($additionalTime < 24) {
            return $additionalTime;
        } elseif ($additionalTime == 24) {
            return 0;
        } else {
            return abs(24 - $additionalTime);
        }
    }
}
```