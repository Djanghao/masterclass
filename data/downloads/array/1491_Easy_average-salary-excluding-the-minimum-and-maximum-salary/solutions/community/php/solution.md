# easy solution | php

**Author:** pathik642
**Votes:** 1
**Link:** [https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/3472843/](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/3472843/)

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
     * @param Integer[] $salary
     * @return Float
     */
    function average($salary) {
        sort($salary); 
        $n = count($salary);
        $sum = array_sum($salary) - $salary[0] - $salary[$n-1];
        return $sum / ($n-2);
        
    }
}
```