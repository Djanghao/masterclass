# Solution Trapping Rain Water II

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/trapping-rain-water-ii/solutions/4717729/](https://leetcode.com/problems/trapping-rain-water-ii/solutions/4717729/)

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
     * @param Integer[][] $heightMap
     * @return Integer
     */
    function trapRainWater($heightMap) {
        if (empty($heightMap)) return 0;
        
        $m = count($heightMap);
        $n = count($heightMap[0]);
        $pq = new SplPriorityQueue();
        $visited = array_fill(0, $m, array_fill(0, $n, false));
        $dirs = [[-1,0],[1,0],[0,-1],[0,1]];
        $res = 0;
        
        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if ($i == 0 || $i == $m - 1 || $j == 0 || $j == $n - 1) {
                    $pq->insert([$i, $j, $heightMap[$i][$j]], -$heightMap[$i][$j]);
                    $visited[$i][$j] = true;
                }
            }
        }
        
        while (!$pq->isEmpty()) {
            $cell = $pq->extract();
            $h = $cell[2];
            $i = $cell[0];
            $j = $cell[1];
            
            foreach ($dirs as $dir) {
                $x = $i + $dir[0];
                $y = $j + $dir[1];
                
                if ($x >= 0 && $x < $m && $y >= 0 && $y < $n && !$visited[$x][$y]) {
                    $visited[$x][$y] = true;
                    $res += max(0, $h - $heightMap[$x][$y]);
                    $pq->insert([$x, $y, max($h, $heightMap[$x][$y])], -max($h, $heightMap[$x][$y]));
                }
            }
        }
        
        return $res;
    }
}

$solution = new Solution();
$heightMap1 = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]];
echo $solution->trapRainWater($heightMap1); // Output: 4
$heightMap2 = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]];
echo $solution->trapRainWater($heightMap2); // Output: 10

```