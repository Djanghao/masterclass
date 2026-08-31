# Solution Circular Array Loop

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-array-loop/solutions/4726262/](https://leetcode.com/problems/circular-array-loop/solutions/4726262/)

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
     * @return Boolean
     */
    function circularArrayLoop($nums) {
        $n = count($nums);
        for ($i = 0; $i < $n; $i++) {
            $direction = $this->signum($nums[$i]);
            $slow = $i;
            $fast = $i;
            
            do {
                $slow = $this->getNextIndex($nums, $direction, $slow);
                $fast = $this->getNextIndex($nums, $direction, $fast);
                
                if ($fast != -1)
                    $fast = $this->getNextIndex($nums, $direction, $fast);
            } while ($slow != -1 && $fast != -1 && $slow != $fast);
            
            if ($slow != -1 && $slow == $fast)
                return true;
        }
        
        return false;
    }
    
    /**
     * @param Integer[] $nums
     * @param float $direction
     * @param int $i
     * @return int
     */
    private function getNextIndex($nums, $direction, $i) {
        $currentDirection = $this->signum($nums[$i]);
        
        if ($currentDirection * $direction < 0)
            return -1;
        
        $n = count($nums);
        $nextIndex = ($i + $nums[$i]) % $n;
        
        if ($nextIndex < 0)
            $nextIndex += $n;
        
        return $nextIndex == $i ? -1 : $nextIndex;
    }
    
    /**
     * @param float $x
     * @return float
     */
    private function signum($x) {
        return $x > 0 ? 1 : ($x < 0 ? -1 : 0);
    }
}

```