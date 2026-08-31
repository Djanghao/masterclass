# Solution Cinema Seat Allocation

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/cinema-seat-allocation/solutions/4956512/](https://leetcode.com/problems/cinema-seat-allocation/solutions/4956512/)

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

    /**
     * @param Integer $n
     * @param Integer[][] $reservedSeats
     * @return Integer
     */
    function maxNumberOfFamilies($n, $reservedSeats) {
        $reservedMap = [];
        foreach ($reservedSeats as $seat) {
            $row = $seat[0];
            $col = $seat[1];
            if (!isset($reservedMap[$row])) {
                $reservedMap[$row] = [];
            }
            $reservedMap[$row][$col] = true;
        }
        
        $count = 0;
        foreach ($reservedMap as $row => $seats) {
            $count += $this->countFamilies($seats);
        }
        
        $count += ($n - count($reservedMap)) * 2;
        
        return $count;
    }
    
    function countFamilies($seats) {
        $count = 0;
        $left = $this->canSeat($seats, [2,3,4,5]);
        $middle = $this->canSeat($seats, [4,5,6,7]);
        $right = $this->canSeat($seats, [6,7,8,9]);
        
        if ($left && $right) {
            $count += 2;
        } elseif ($left || $middle || $right) {
            $count += 1;
        }
        
        return $count;
    }
    
    function canSeat($seats, $group) {
        foreach ($group as $seat) {
            if (isset($seats[$seat])) {
                return false;
            }
        }
        return true;
    }
}

```