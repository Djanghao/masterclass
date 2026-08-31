# Solution Maximum Performance of a Team

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-performance-of-a-team/solutions/4956490/](https://leetcode.com/problems/maximum-performance-of-a-team/solutions/4956490/)

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
     * @param Integer[] $speed
     * @param Integer[] $efficiency
     * @param Integer $k
     * @return Integer
     */
    function maxPerformance($n, $speed, $efficiency, $k) {
        $engineers = [];
        for ($i = 0; $i < $n; $i++) {
            $engineers[] = ['speed' => $speed[$i], 'efficiency' => $efficiency[$i]];
        }
        
        usort($engineers, function($a, $b) {
            return $b['efficiency'] - $a['efficiency'];
        });
        
        $heap = new SplPriorityQueue();
        $speedSum = 0;
        $maxPerformance = 0;
        
        foreach ($engineers as $engineer) {
            $speedSum += $engineer['speed'];
            $heap->insert($engineer['speed'], -$engineer['speed']);
            
            if ($heap->count() > $k) {
                $speedSum -= $heap->extract();
            }
            
            $maxPerformance = max($maxPerformance, $speedSum * $engineer['efficiency']);
        }
        
        return $maxPerformance % (10**9 + 7);
    }
}

```