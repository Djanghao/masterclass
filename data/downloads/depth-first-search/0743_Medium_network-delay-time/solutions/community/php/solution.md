# Solution Network Delay Time

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/network-delay-time/solutions/4780521/](https://leetcode.com/problems/network-delay-time/solutions/4780521/)

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
     * @param Integer[][] $times
     * @param Integer $n
     * @param Integer $k
     * @return Integer
     */
    function networkDelayTime($times, $n, $k) {
        $distances = array_fill(1, $n, INF);
        $distances[$k] = 0;
        
        for ($i = 0; $i < $n - 1; $i++) {
            foreach ($times as $time) {
                $source = $time[0];
                $target = $time[1];
                $weight = $time[2];
                
                if ($distances[$source] != INF && $distances[$source] + $weight < $distances[$target]) {
                    $distances[$target] = $distances[$source] + $weight;
                }
            }
        }
        
        $maxDistance = max($distances);
        
        return ($maxDistance == INF) ? -1 : $maxDistance;
    }
}

```