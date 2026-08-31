# Solution Check If It Is a Good Array

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/4907799/](https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/4907799/)

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
    function isGoodArray($nums) {
        $gcd = $nums[0]; 
        
        foreach ($nums as $num) {
            $gcd = $this->gcd($gcd, $num);
            if ($gcd == 1) {
                return true;
            }
        }
        
        return $gcd == 1;
    }
    
    function gcd($a, $b) {
        while ($b != 0) {
            $temp = $b;
            $b = $a % $b;
            $a = $temp;
        }
        return $a;
    }
}

```