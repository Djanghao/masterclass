# PHP, beast 100%, O(1)

**Author:** spone12
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/5981169/](https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/5981169/)

---

# Complexity
- Time complexity: 1ms, $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 19.77mb, $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function isFascinating($n) {
        
        $concatanated = '';
        for ($i = 1; $i <= 3; $i++) {
            $concatanated .= (string)($n * $i);
            if ($this->containsZero($concatanated)) {
                return false;
            }
        }

        $chars = str_split($concatanated);
        sort($chars);
        return implode($chars) == '123456789';
    }

    function containsZero($str) {
        return str_contains ($str, '0');
    }
}
```