# Solution Sum of Unique Elements

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-unique-elements/solutions/5879598/](https://leetcode.com/problems/sum-of-unique-elements/solutions/5879598/)

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
    public function sumOfUnique($nums) {  
        $sum = 0;  
        $freq = array_fill(0, 101, 0);  

        foreach ($nums as $num) {  
            $freq[$num]++;  
            if ($freq[$num] === 1) {  
                $sum += $num;   
            } elseif ($freq[$num] === 2) {  
                $sum -= $num; 
            }  
        }  

        return $sum;  
    }  
}
```