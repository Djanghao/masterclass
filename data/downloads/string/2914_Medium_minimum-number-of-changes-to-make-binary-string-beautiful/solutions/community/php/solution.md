# 🎉 BEATS 100% 🚀  | O(n) Complexity 📈 | Easy Stack Approach Explained 🌟| PHP

**Author:** webdevanjali
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6011864/](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6011864/)

---

### Intuition:
A beautiful string is a string with 00,11 pairs only. where each and every proceeding character must be in pair 110011 is an beautiful string with total 3 pairs 11-00-11 2 pairs of ones and 1 pair of zeros **but** 100110 is **not** it DOES NOT contain any pair 10-01-10 has no pair of one or zero. So the tast is to find such pairs in the given string. 

### Approach:
1. **Use a stack** : Traverse the string, and for each character:
     - If the current character is the same as the top of the stack and the position is odd, **pop** the stack (valid partition).
     - Otherwise, **push** the character onto the stack.
   
2. **Count unmatched `0`s and `1`s** in the stack:
   - After processing, it will eliminate all the good pairs and the stack contains characters that couldn\u2019t be paired.

3. **Minimize changes**: The answer is the smaller of the count of unmatched `0`s or `1`s in the stack because we would change the smaller group to match the other.

### Complexity:
- **Time Complexity**: $$O(n)$$ \u2014 We traverse the string only once (where `n` is the length of the string), and for each character, we either push it onto the stack or pop from it. Both push and pop operations are O(1), so the time complexity is linear.
- **Space Complexity**: $$O(n)$$ \u2014 In the worst case, the stack could store all characters of the string if no characters match and get removed (in cases where the string is very disorganized). Hence, the space complexity is O(n), where `n` is the length of the string.


# Code
```php []
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function minChanges($s) {
        $stack =[];
        for($i=0;$i<strlen($s);$i++){
            if(!empty($stack) && $i >0 && $i%2 && end($stack) == $s[$i]){
                array_pop($stack);
            }
            else{
                $stack[]=$s[$i];
            }
        }
        $zeros = count(array_filter($stack, function($value) {
                    return $value == 0; 
                }));
        $len = count($stack);
        return ($zeros < $len-$zeros )? $zeros : $len-$zeros;
    }
}
```