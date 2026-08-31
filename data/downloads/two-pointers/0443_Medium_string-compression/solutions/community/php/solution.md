# PHP Best Solution

**Author:** garimarajput748
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-compression/solutions/6122816/](https://leetcode.com/problems/string-compression/solutions/6122816/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```php []
class Solution {

    /**
     * @param String[] $chars
     * @return Integer
     */
    function compress(&$chars) {
        $n = count($chars);
        $idx = 0;

        for ($i = 0; $i < $n; $i++) {
            $ch = $chars[$i];
            $count = 0;

            // Count the number of consecutive occurrences of the current character
            while ($i < $n && $chars[$i] === $ch) {
                $count++;
                $i++;
            }

            // Add the character to the compressed array
            $chars[$idx++] = $ch;

            // If the count is greater than 1, add the count as digits
            if ($count > 1) {
                foreach (str_split((string)$count) as $digit) {
                    $chars[$idx++] = $digit;
                }
            }

            $i--; // Adjust index after exiting the inner loop
        }

        // Resize the array to the new length
        $chars = array_slice($chars, 0, $idx);

        return $idx;
    }
}
```