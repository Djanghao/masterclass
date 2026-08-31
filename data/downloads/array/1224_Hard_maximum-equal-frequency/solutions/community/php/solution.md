# Solution Maximum Equal Frequency

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-equal-frequency/solutions/4903559/](https://leetcode.com/problems/maximum-equal-frequency/solutions/4903559/)

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
     * @param Integer[] $nums
     * @return Integer
     */
    function maxEqualFreq($nums) {
        $counts = []; 
        $frequencies = []; 
        $res = 0;
        
        for ($i = 0; $i < count($nums); $i++) {
            $num = $nums[$i];
            if (!isset($counts[$num])) $counts[$num] = 0;
            $counts[$num]++;
            $currentFreq = $counts[$num];
            
            if (!isset($frequencies[$currentFreq])) $frequencies[$currentFreq] = 0;
            $frequencies[$currentFreq]++;
            
            $result = $frequencies[$currentFreq] * $currentFreq;
            
            if ($result == $i + 1 && $i != count($nums) - 1) {
                $res = max($res, $i + 2);
            } elseif ($result == $i) {
                $res = max($res, $i + 1);
            }
        }
        
        return $res;
    }
}
```