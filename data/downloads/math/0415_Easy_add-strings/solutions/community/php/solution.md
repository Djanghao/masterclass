# PHP Simple O(n) Solution for String-Based Number Addition

**Author:** JeanOmar
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-strings/solutions/5043227/](https://leetcode.com/problems/add-strings/solutions/5043227/)

---

# Intuition
Initially, my thought was to simulate the basic arithmetic addition that we perform manually, treating the input strings as large numbers that cannot be directly manipulated using standard arithmetic operations due to their size.

# Approach
I adopted a straightforward method to solve this problem by aligning the numbers by their least significant digits, adding them digit by digit, and managing carryovers as needed. This approach is simple and unoptimized, focusing on clarity and direct implementation of manual addition logic rather than efficiency enhancements.
# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
class Solution {

    /**
     * @param String $num1
     * @param String $num2
     * @return String
     */
    function addStrings($num1, $num2) {
        $maxLen = max(strlen($num1), strlen($num2));

        $num1 = str_pad($num1, $maxLen, '0', STR_PAD_LEFT);
        $num2 = str_pad($num2, $maxLen, '0', STR_PAD_LEFT);

        $remaining = 0;
        $result = '';
        for($i=$maxLen-1;$i>-1;$i--) {
            $sum = ($num1[$i]) + ($num2[$i]);
            if ($sum > 9) {
                $sum = ($sum % 10);
                $sum = $sum + $remaining;
                $remaining = 1;
                $result = $sum . $result;
            } else {
                $sum = $sum + $remaining;
                if ($sum > 9) {
                    $sum = ($sum % 10);
                    $remaining = 1;
                    $result = $sum . $result;
                } else {
                    $remaining = 0;
                    $result = $sum . $result;
                }
            }
        }

        if ($remaining > 0) {
            $result = $remaining . $result;
        }

        return $result;
    }
}
```