# 75% with the help decbin

**Author:** evgpol
**Votes:** 0
**Link:** [https://leetcode.com/problems/strictly-palindromic-number/solutions/5345681/](https://leetcode.com/problems/strictly-palindromic-number/solutions/5345681/)

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
     * @param Integer $n
     * @return Boolean
     */
    function isStrictlyPalindromic($n) {
        $decBin = decbin ($n);
        $count = strlen((string)$decBin);

        if($decBin[0]==$decBin[$count] && $decBin[1]==$decBin[$count-1]){
            return true;
        }else{
            return false;
        }
    }
}
```