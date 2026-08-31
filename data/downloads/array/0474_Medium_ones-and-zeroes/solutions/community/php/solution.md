# Solution Ones and Zeroes

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/ones-and-zeroes/solutions/4728852/](https://leetcode.com/problems/ones-and-zeroes/solutions/4728852/)

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
     * @param String[] $strs
     * @param Integer $m
     * @param Integer $n
     * @return Integer
     */
    function findMaxForm($strs, $m, $n) {
        $dp = array_fill(0, $m + 1, array_fill(0, $n + 1, 0));
        
        foreach ($strs as $str) {
            $count = $this->countZeroesOnes($str);
            
            for ($i = $m; $i >= $count[0]; $i--) {
                for ($j = $n; $j >= $count[1]; $j--) {
                    $dp[$i][$j] = max($dp[$i][$j], $dp[$i - $count[0]][$j - $count[1]] + 1);
                }
            }
        }
        
        return $dp[$m][$n];
    }
    
    function countZeroesOnes($str) {
        $count = [0, 0];
        $length = strlen($str);
        for ($i = 0; $i < $length; $i++) {
            if ($str[$i] == '0') {
                $count[0]++;
            } elseif ($str[$i] == '1') {
                $count[1]++;
            }
        }
        return $count;
    }
}

```