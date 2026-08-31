# Count Number of Homogenous Substrings

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/6121671/](https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/6121671/)

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
     * @return Integer
     */
    function countHomogenous($s) {
        $c = 0;
        $l = 0;
        $mod = 10**9+7;
        for($i=0; $i<strlen($s); $i++) {
            if($s[$i]!==$s[$i-1]??'') {
                $l=0;
            }
            $c += ++$l;
            $c %= $mod;
        }

        return $c;
    }
}
```