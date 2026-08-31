# PHP Solution

**Author:** JimWei89
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-array-concatenation-value/solutions/5637724/](https://leetcode.com/problems/find-the-array-concatenation-value/solutions/5637724/)

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
    function findTheArrayConcVal($nums) {
        $count = count($nums);
        $sum=0;

        for($i=0;$i<intval($count/2);$i++){
            $t = $nums[$i].$nums[$count-$i-1];
            $sum+=intval($t);
        }
        if($count%2==1)$sum+=$nums[$count/2];
        
        return $sum;
    }
}
```