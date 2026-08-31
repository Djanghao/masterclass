# Solution Maximum Absolute Sum of Any Subarray

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/5879601/](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/5879601/)

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
    private function kadane($nums) {  
        $n = count($nums);  
        $currsum = 0;  
        $maxtillnow = PHP_INT_MIN;  
        
        for ($x = 0; $x < $n; $x++) {  
            $currsum += $nums[$x];  
            $maxtillnow = max($maxtillnow, $currsum);  
            if ($currsum < 0) {  
                $currsum = 0;  
            }  
        }  
        
        return $maxtillnow;  
    }  
    
    public function maxAbsoluteSum($nums) {  
        $pos = $this->kadane($nums);  
        
        for ($x = 0; $x < count($nums); $x++) {  
            $nums[$x] *= -1;  
        }  
        
        $neg = $this->kadane($nums);  
        
        return max($pos, abs($neg));
    }  
}
```