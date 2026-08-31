# Solution Flower Planting With No Adjacent

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/4881121/](https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/4881121/)

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
     * @param Integer[][] $paths
     * @return Integer[]
     */
    function gardenNoAdj($n, $paths) {
        $graph = array_fill(0, $n, []);
        $result = array_fill(0, $n, 0);
        
        foreach ($paths as $path) {
            $graph[$path[0] - 1][] = $path[1] - 1;
            $graph[$path[1] - 1][] = $path[0] - 1;
        }
        
        for ($i = 0; $i < $n; $i++) {
            $flower = 1;
            $usedFlowers = [];
            
            foreach ($graph[$i] as $neighbor) {
                if ($result[$neighbor] != 0) {
                    $usedFlowers[$result[$neighbor]] = true;
                }
            }
            
            for ($j = 1; $j <= 4; $j++) {
                if (!isset($usedFlowers[$j])) {
                    $flower = $j;
                    break;
                }
            }
            
            $result[$i] = $flower;
        }
        
        return $result;
    }
}
```