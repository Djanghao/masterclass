# Counts the Digits That Divide a Number

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/6137994/](https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/6137994/)

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
    function countDigits($num) {
        $st_value = strval($num);
        
        $count = 0;
        for($i=0; $i<strlen($st_value); $i++){
            if($num%$st_value[$i]==0){
                $count++;
            }
        }
        return $count;
    }
}
```