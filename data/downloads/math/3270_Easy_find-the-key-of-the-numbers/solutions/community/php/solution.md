# Simple PHP solution beats 100% ;)

**Author:** karouSan
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5939261/](https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5939261/)

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
     * @param Integer $num1
     * @param Integer $num2
     * @param Integer $num3
     * @return Integer
     */
    function generateKey($num1, $num2, $num3) 
    {
        $num1 = array_pad(str_split($num1), -4, 0);
        $num2 = array_pad(str_split($num2), -4, 0);
        $num3 = array_pad(str_split($num3), -4, 0);

        $result = '';
        for ($i=0; $i<4; $i++) {
            $result .= min($num1[$i], $num2[$i], $num3[$i]);
        }

        return (int) $result;        
    }
}
```