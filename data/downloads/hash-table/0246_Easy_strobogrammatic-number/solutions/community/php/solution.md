# PHP Solution using two pointers

**Author:** JeanOmar
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number/solutions/5024937/](https://leetcode.com/problems/strobogrammatic-number/solutions/5024937/)

---

# Intuition
To determine if a number is strobogrammatic, I initially thought of checking each digit to see if it looks the same when flipped upside down, focusing on how the number appears when viewed from the opposite direction.

# Approach
The solution involves mapping each digit to its strobogrammatic counterpart and then comparing the digits from the beginning and end of the number inward. If all corresponding digits match their mapped values and are valid strobogrammatic numbers, the number is strobogrammatic. If any pair does not match, the number isn't strobogrammatic. This approach ensures that we examine each digit only once, leading to an efficient verification process.

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
class Solution {

    /**
     * @param String $num
     * @return Boolean
     */
    function isStrobogrammatic($num) {
        /** Version 1
        $left = 0;
        $right = strlen($num)-1;
        $array = [
            0 => 0,
            1 => 1,
            6 => 9,
            8 => 8,
            9 => 6
        ];
        while ($left <= $right) {
            $tmp = $num[$left];
            if (isset($array[$tmp])) {
                $num[$left] = $array[$tmp];
            }
            if ($num[$left] !== $num[$right]) {
                return false;
            }
            if (!isset($array[$tmp])) {
                return false;
            }
            if (
                ($left == $right) &&
                ($tmp == 9 || $tmp == 6)
            ) {
                return false;
            }
            $left++;
            $right--;
        }
        
        return true;
        */

        //Version 2 Optimized
        $mapping = [
            0 => 0,
            1 => 1,
            6 => 9,
            8 => 8,
            9 => 6
        ];

        for ($left = 0, $right = strlen($num)-1;$left <= $right;$left++,$right--) {
            $leftChar = $num[$left];
            $rightChar = $num[$right];

            if (
                $mapping[$leftChar] != $rightChar 
                || !isset($mapping[$leftChar])
            ) {
                return false;
            }
        }

        return true;
    }
}
```