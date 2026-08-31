# Solution Minimum Total Distance Traveled

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-distance-traveled/solutions/5989793/](https://leetcode.com/problems/minimum-total-distance-traveled/solutions/5989793/)

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
```php []
class Solution {  
    private $maxi = 1e16;   

    private function solve($r, $f, $robot, $v, &$dp) {  
        if ($r == count($robot)) {  
            return 0; 
        }  
        if ($f == count($v)) {  
            return $this->maxi;  
        }  
        if ($dp[$r][$f] != -1) {  
            return $dp[$r][$f];  
        }  

        $incl = abs($robot[$r] - $v[$f]) + $this->solve($r + 1, $f + 1, $robot, $v, $dp);  
        $excl = $this->solve($r, $f + 1, $robot, $v, $dp);  

        return $dp[$r][$f] = min($incl, $excl);  
    }  

    public function minimumTotalDistance($robot, $factory) {  
        sort($robot);  
        usort($factory, function($a, $b) {  
            return $a[0] <=> $b[0];    
        });  

        $v = [];  
        foreach ($factory as $f) {  
            $pos = $f[0];  
            $lim = $f[1];  
            for ($j = 0; $j < $lim; $j++) {  
                $v[] = $pos;  
            }  
        }  

        $dp = array_fill(0, count($robot) + 1, array_fill(0, count($v) + 1, -1));  

        return $this->solve(0, 0, $robot, $v, $dp);  
    }  
}  

```