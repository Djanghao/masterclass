# Solution Maximum Units on a Truck

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-units-on-a-truck/solutions/5340080/](https://leetcode.com/problems/maximum-units-on-a-truck/solutions/5340080/)

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
    public static function comp($a, $b) {
        return $b[1] <=> $a[1];
    }

    public function maximumUnits($boxTypes, $truckSize) {
        usort($boxTypes, ["Solution", "comp"]);

        $number = 0;
        for ($i = 0; $i < count($boxTypes); $i++) {
            if ($boxTypes[$i][0] <= $truckSize) {
                $number += ($boxTypes[$i][0] * $boxTypes[$i][1]);
                $truckSize -= $boxTypes[$i][0];
            } else {
                $number += ($truckSize * $boxTypes[$i][1]);
                break;
            }
        }
        return $number;
    }
}

```