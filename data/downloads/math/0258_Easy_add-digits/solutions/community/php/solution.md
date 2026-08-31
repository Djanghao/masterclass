# for example

**Author:** rtangelx
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-digits/solutions/6049175/](https://leetcode.com/problems/add-digits/solutions/6049175/)

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
     * @param Integer $num
     * @return Integer
     */
    function addDigits($num) {
        while($num>9)
        {
            $num=array_sum(str_split((string)$num));
        }
        return $num;
        
    }
}
```