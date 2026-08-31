# Easy to understand!

**Author:** ramziddinrustamov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/4057668/](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/4057668/)

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
     * @param Integer $k
     * @return Integer
     */
    function countKDifference($nums, $k) {
        $result = 0; 
          for($i = 0; $i < count($nums); $i++) 
          { 
            for($j = $i + 1; $j < count($nums); $j++) 
            {
                  if(abs($nums[$i] - $nums[$j]) === $k) 
                  { 
                    $result++;
                  }
              }
          }
          
          return $result;
      }
}
```