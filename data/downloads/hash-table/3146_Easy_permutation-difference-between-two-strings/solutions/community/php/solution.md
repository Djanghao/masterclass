# Solution

**Author:** rahulgdas1
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5692729/](https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5692729/)

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

    /**
     * @param String $s
     * @param String $t
     * @return Integer
     */
    function findPermutationDifference($s, $t) {
        $sum = 0;
        for($i = 0; $i < strlen($s); $i++)
        {
            for($j = 0; $j < strlen($t); $j++)
            {
                $s[$i] == $t[$j] ? $sum = $sum + abs($i - $j) : $sum;
            }
        }  
        return $sum;      
    }
}
```