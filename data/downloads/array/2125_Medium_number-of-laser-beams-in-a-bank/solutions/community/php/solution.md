# PHP solution

**Author:** chistowick
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/4501294/](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/4501294/)

---

# Intuition
It is clear from the conditions of the problem that:
1. Beams cannot connect two devices in the same row (i.e. connected devices are always in different rows)
2. Between two connected devices, either there are no rows at all, or between them the rows do not contain a single device (i.e. the rays cannot cross the rows in which there is a device)
Totally: it is only necessary to calculate the number of connections between each two nearest non-empty rows.

# Approach
1. Let's count the number of devices in all non-empty rows
2. Find and sum up the number of connections between each two adjacent rows of devices: $x*y$

# Complexity
- Time complexity:
$$O(M*N)$$

# Code
```
class Solution {

    /**
     * @param String[] $bank
     * @return Integer
     */
    function numberOfBeams($bank) {
        $sum = 0;
        $current = 0;
        array_walk($bank, function($value, $key) use (&$sum, &$current) {
            $devicesCount = substr_count($value, '1');
            if ($devicesCount > 0) {
                $sum += $current*$devicesCount;
                $current = $devicesCount;
            }
        });

        return $sum;
    }
}
```