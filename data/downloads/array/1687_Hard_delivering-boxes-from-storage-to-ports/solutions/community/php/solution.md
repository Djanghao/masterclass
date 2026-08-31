# Solution Delivering Boxes from Storage to Ports

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/solutions/5287645/](https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/solutions/5287645/)

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
    public function boxDelivering($boxes, $portsCount, $maxBoxes, $maxWeight) {
        $n = count($boxes);
        
        $last_trip = array_fill(0, $n, 0);
        $last_trip[$n - 1] = 0;
        for ($i = $n - 2; $i >= 0; $i--) {
            if ($boxes[$i][0] == $boxes[$i + 1][0]) {
                $last_trip[$i] = $last_trip[$i + 1];
            } else {
                $last_trip[$i] = $last_trip[$i + 1] + 1;
            }
        }

        $dp = array_fill(0, $n + 1, PHP_INT_MAX);
        $dp[0] = 0;

        $min_dq = [];

        $carry_weight = 0;
        for ($i = 0, $j = 0; $i < $n; $i++) {
            $carry_weight += $boxes[$i][1];

            while ($j < $i + 1 - $maxBoxes || $carry_weight > $maxWeight) {
                $carry_weight -= $boxes[$j][1];
                $j++;
            }

            while (!empty($min_dq) && $min_dq[0] < $j) {
                array_shift($min_dq);
            }

            $dp[$i + 1] = $dp[$i] + 2;

            if (!empty($min_dq)) {
                $dp[$i + 1] = min($dp[$i + 1], $dp[$min_dq[0]] + $last_trip[$min_dq[0]] - $last_trip[$i] + 2);
            }

            while (!empty($min_dq) && $dp[end($min_dq)] + $last_trip[end($min_dq)] >= $dp[$i] + $last_trip[$i]) {
                array_pop($min_dq);
            }

            $min_dq[] = $i;
        }

        return $dp[$n];
    }
}

```