# Solution Minimum Cost to Connect Two Groups of Points

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/5183491/](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/5183491/)

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
    public function connectTwoGroups($cost) {
        $size1 = count($cost);
        $size2 = count($cost[0]);
        
        $dp = array_fill(0, $size1, array_fill(0, 1 << $size2, -1));

        $dfs = function($p1, $mask) use ($cost, $size1, $size2, &$dp, &$dfs) {
            if ($p1 == $size1) {
                $total_cost = 0;
                for ($p2 = 0; $p2 < $size2; ++$p2) {
                    if (!(($mask >> $p2) & 1)) {
                        $min_cost = PHP_INT_MAX;
                        for ($p1 = 0; $p1 < $size1; ++$p1) {
                            $min_cost = min($min_cost, $cost[$p1][$p2]);
                        }
                        $total_cost += $min_cost;
                    }
                }
                return $total_cost;
            }
            
            if ($dp[$p1][$mask] != -1) {
                return $dp[$p1][$mask];
            }
            
            $result = PHP_INT_MAX;
            for ($p2 = 0; $p2 < $size2; ++$p2) {
                $result = min($result, $cost[$p1][$p2] + $dfs($p1 + 1, $mask | (1 << $p2)));
            }
            
            $dp[$p1][$mask] = $result;
            return $result;
        };

        return $dfs(0, 0);
    }
}

```