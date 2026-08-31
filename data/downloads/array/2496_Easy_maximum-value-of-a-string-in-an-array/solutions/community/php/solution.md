# Solution : 2496. Maximum Value of a String in an Array

**Author:** renault-consulting-web
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/5813467/](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/5813467/)

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
     * @param String[] $strs
     * @return Integer
     */
    function maximumValue($strs) {
        $count = 0;
        foreach($strs as $str){
            if(is_numeric($str)){
                if((int)$str > $count){
                    $count = (int)$str;
                }
            }elseif(strlen($str) > $count){
                $count = strlen($str);
            }
           
        }
        return $count;
    }
}
```