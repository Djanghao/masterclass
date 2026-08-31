# Search first index of b and last index(reverse search) of a

**Author:** evelioamd
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/5195170/](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/5195170/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First, have to check first and last index of chars, then check if last index of a is greater than first index of b.
# Approach
<!-- Describe your approach to solving the problem. -->
I got the first index of b with a simple search, and stored in \\$bPos, then got the last index of a and stored in $aPos

```
$aPos = strripos($s, 'a');
$bPos = stripos($s, 'b');
```

Then simple compare this both index, incase \\$aPos is greater than \\$bPos then return false.

If either \\$aPost or \\$bPos is bolean and but the other an int, then we return true, cause whole string is of same chars.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function checkString($s) {
        $aPos =  false;
        $bPos =  false;

        $aPos = strripos($s, 'a');
        $bPos = stripos($s, 'b');

        if(is_int($aPos) && is_int($bPos) && $aPos > $bPos){
            return false;
        } else if(is_int($bPos) && !$aPos ){
            return true;
        } else if(is_int($aPos) && !$bPos ){
            return true;
        }

        return true;
    }
}
```