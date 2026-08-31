# Solution Find the Grid of Region Average

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4748692/](https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4748692/)

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
     * @param Integer[][] $image
     * @param Integer $threshold
     * @return Integer[][]
     */
    function resultGrid($image, $threshold) {
        $rows = count($image);
        $cols = count($image[0]);
        
        $m = [];
        for ($i = 0; $i < $rows - 2; $i++) {
            for ($j = 0; $j < $cols - 2; $j++) {
                $sum = 0;
                $flag = false;
                
                for ($x = $i; $x < $i + 3; $x++) {
                    for ($y = $j; $y < $j + 3; $y++) {
                        $sum += $image[$x][$y];
                        
                        if ($x + 1 < $i + 3 && abs($image[$x][$y] - $image[$x + 1][$y]) > $threshold) {
                            $flag = true;
                            break 2;
                        }
                        
                        if ($y + 1 < $j + 3 && abs($image[$x][$y] - $image[$x][$y + 1]) > $threshold) {
                            $flag = true;
                            break 2;
                        }
                    }
                }
                
                if ($flag) continue;
                
                $sum = intval($sum / 9);
                
                for ($x = $i; $x < $i + 3; $x++) {
                    for ($y = $j; $y < $j + 3; $y++) {
                        if (isset($m[$x][$y])) {
                            $m[$x][$y][0] += $sum;
                            $m[$x][$y][1]++;
                        } else {
                            $m[$x][$y] = [$sum, 1];
                        }
                    }
                }
            }
        }
        
        $result = [];
        
        for ($i = 0; $i < $rows; $i++) {
            $result[$i] = [];
            for ($j = 0; $j < $cols; $j++) {
                if (isset($m[$i][$j])) {
                    $result[$i][$j] = intval($m[$i][$j][0] / $m[$i][$j][1]);
                } else {
                    $result[$i][$j] = $image[$i][$j];
                }
            }
        }
        
        return $result;
    }
}

```