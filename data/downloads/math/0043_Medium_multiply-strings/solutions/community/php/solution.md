# Multiply Strings

**Author:** Wasim_Pinjari
**Votes:** 1
**Link:** [https://leetcode.com/problems/multiply-strings/solutions/4932435/](https://leetcode.com/problems/multiply-strings/solutions/4932435/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
=> First thought to mulitply string without using any built-in library funtions
# Approach
<!-- Describe your approach to solving the problem. -->
=> Count the length of the string, then decide that string to which position it should fill in an array. Loop the string and assign the result string.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
=> Core Logic implementation of the code  

# Code
```
class Solution {

    /**
     * @param String $num1
     * @param String $num2
     * @return String
     */
    function multiply($num1, $num2) {
        $char_len1 = strlen($num1);
        $char_len2 = strlen($num2);
        $result = array_fill(0, $char_len1 + $char_len2, 0);
        for ($i = $char_len1 - 1; $i >= 0; $i--) {
            for ($j = $char_len2 - 1; $j >= 0; $j--) {
                $mul = ($num1[$i] - '0') * ($num2[$j] - '0');
                $sum = $mul + $result[$i + $j + 1];
                $result[$i + $j] += (int)($sum / 10);
                $result[$i + $j + 1] = $sum % 10;
            }
        }
        // Remove leading zeros
        $resultStr = implode('', $result);
        $resultStr = ltrim($resultStr, '0');
        return $resultStr === '' ? '0' : $resultStr;
    }
}
```