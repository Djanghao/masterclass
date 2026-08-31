# Diff, easy solution

**Author:** spone12
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/6018002/](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/6018002/)

---


# Complexity
- Time complexity: 9ms, $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 20,44mb, $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function differenceOfSum($nums) {
        
        $elemSum = array_sum ($nums);
        $digitSum = array_sum(str_split(implode('', $nums)));  
        return abs ($elemSum - $digitSum);
    }
}
```