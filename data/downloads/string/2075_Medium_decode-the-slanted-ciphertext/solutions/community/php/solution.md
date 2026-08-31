# 2075. Decode the Slanted Ciphertext is solve in seconds

**Author:** ayanahmedcorder
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/5465530/](https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/5465530/)

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
<?php
class Solution {
    public function decodeCiphertext($encodedText, $rows) {
        $length = strlen($encodedText);
        $cols = ceil($length / $rows); // Calculate number of columns
        
        // Initialize matrix
        $matrix = array_fill(0, $rows, array_fill(0, $cols, ' '));

        // Fill the matrix with characters from encodedText
        for ($i = 0, $index = 0; $i < $rows; $i++) {
            for ($j = 0; $j < $cols && $index < $length; $j++, $index++) {
                $matrix[$i][$j] = $encodedText[$index];
            }
        }

        // Decode the slanted ciphertext
        $decodedMessage = '';
        for ($start = 0; $start < $cols; $start++) {
            for ($i = 0, $j = $start; $i < $rows && $j < $cols; $i++, $j++) {
                $decodedMessage .= $matrix[$i][$j];
            }
        }

        // Remove trailing spaces and return the decoded message
        return rtrim($decodedMessage);
    }
}

// Example usage:
$solution = new Solution();
$encodedText = "ch   ie   pr";
$rows = 3;
echo $solution->decodeCiphertext($encodedText, $rows) . PHP_EOL;  // Output: "cipher"

$encodedText = "iveo    eed   l te   olc";
$rows = 4;
echo $solution->decodeCiphertext($encodedText, $rows) . PHP_EOL;  // Output: "i love leetcode"
?>

```