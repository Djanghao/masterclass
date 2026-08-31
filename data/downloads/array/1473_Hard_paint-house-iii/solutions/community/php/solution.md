# Solution Paint House III

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-house-iii/solutions/5045796/](https://leetcode.com/problems/paint-house-iii/solutions/5045796/)

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

    function rec($ind, &$houses, $prev, &$cost, $m, $n, $target, &$dp) {
        if ($ind == $m) {
            if ($target == 0) return 0;
            return INF;
        }
        if ($dp[$ind][$prev + 1][$target] != -1) return $dp[$ind][$prev + 1][$target];
        if ($houses[$ind] != 0) {
            if ($houses[$ind] == $prev)
                return $dp[$ind][$prev + 1][$target] = $this->rec($ind + 1, $houses, $houses[$ind], $cost, $m, $n, $target, $dp);
            elseif ($target == 0) return INF;
            else  return $dp[$ind][$prev + 1][$target] = $this->rec($ind + 1, $houses, $houses[$ind], $cost, $m, $n, $target - 1, $dp);
        }
        $mini = INF;
        for ($i = 1; $i <= $n; $i++) {
            if ($prev == $i) {
                $mini = min($mini, $this->rec($ind + 1, $houses, $prev, $cost, $m, $n, $target, $dp) + $cost[$ind][$i - 1]);
            } elseif ($target != 0) {
                $mini = min($mini, $this->rec($ind + 1, $houses, $i, $cost, $m, $n, $target - 1, $dp) + $cost[$ind][$i - 1]);
            }
        }
        return $dp[$ind][$prev + 1][$target] = $mini;
    }

    /**
     * @param Integer[] $houses
     * @param Integer[][] $cost
     * @param Integer $m
     * @param Integer $n
     * @param Integer $target
     * @return Integer
     */
    function minCost($houses, $cost, $m, $n, $target) {
        $dp = array_fill(0, $m, array_fill(0, $n + 3, array_fill(0, $target + 1, -1)));
        $c = $this->rec(0, $houses, -1, $cost, $m, $n, $target, $dp);
        if ($c >= INF) return -1;
        return $c;
    }
}

```