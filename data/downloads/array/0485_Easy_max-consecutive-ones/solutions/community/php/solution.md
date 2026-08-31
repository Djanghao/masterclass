# simp;e solution

**Author:** virensingh616
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-consecutive-ones/solutions/5180359/](https://leetcode.com/problems/max-consecutive-ones/solutions/5180359/)

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
    function findMaxConsecutiveOnes($nums) {
      $max = $tempMax = 0;
        
        foreach($nums as $num){
            $num === 0 ? $tempMax = 0 : $tempMax++;
            $max = max($tempMax, $max);
        }
        
        return $max;
    }
}
```