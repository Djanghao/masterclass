# Two pointers (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/5330564/](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/5330564/)

---

# Approach
The approach of the provided solution is to iterate through all possible substrings of strings s and t using two pointers. For each pair of substrings, it checks if there is exactly 1 differing character between them. If there is only 1 differing character, it increments the count of valid substrings.

By breaking out of the inner loop as soon as 2 differing characters are encountered, the solution avoids unnecessary comparisons for the rest of the substring, improving the efficiency of the algorithm.

# Complexity
- Time complexity:
$$O(m * n)$$, where m and n are the lengths of strings s and t, respectively. This is because the solution iterates through all possible pairs of substrings of s and t.

- Space complexity:
$$O(1)$$, as it only uses a constant amount of extra space to store the variables total_substrings, index_s, index_t, and diff_count.

# Code
``` python3 []
class Solution:
    def countSubstrings(self, s: str, t: str) -> int:
        total_substrings = 0

        for i in range(len(s)):
            for j in range(len(t)):
                # Initialize the indices
                index_s = i
                index_t = j
                # Initialize the difference count
                diff_count = 0

                # Iterate over the characters of both strings until a difference is found
                while index_s < len(s) and index_t < len(t):
                    # If the characters at the current indices are different, increment the 
                    # difference count
                    if s[index_s] != t[index_t]:
                        diff_count += 1
                    # If the difference count is 1, increment the total substrings counter
                    if diff_count == 1:
                        total_substrings += 1
                    # If the difference count is 2, break the loop
                    if diff_count == 2:
                        break
                    # Move to the next indices
                    index_s += 1
                    index_t += 1

        return total_substrings
        
```
``` javascript []
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function(s, t) {
    let totalSubstrings = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            // Initialize the indices
            let indexS = i;
            let indexT = j;
            // Initialize the difference count
            let diffCount = 0;

            // Iterate over the characters of both strings until a difference is found
            while (indexS < s.length && indexT < t.length) {
                // If the characters at the current indices are different, increment the 
                // difference count
                if (s[indexS] !== t[indexT]) {
                    diffCount++;
                }
                // If the difference count is 1, increment the total substrings counter
                if (diffCount === 1) {
                    totalSubstrings++;
                }
                // If the difference count is 2, break the loop
                if (diffCount === 2) {
                    break;
                }
                // Move to the next indices
                indexS++;
                indexT++;
            }
        }
    }

    return totalSubstrings;
};
```
``` php []
class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return Integer
     */
    function countSubstrings($s, $t) {
        $totalSubstrings = 0;
        $m = strlen($s);
        $n = strlen($t);

        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                // Initialize the indices
                $indexS = $i;
                $indexT = $j;
                // Initialize the difference count
                $diffCount = 0;

                // Iterate over the characters of both strings until a difference is found
                while ($indexS < $m && $indexT < $n) {
                    // If the characters at the current indices are different, increment the 
                    // difference count
                    if ($s[$indexS] !== $t[$indexT]) {
                        $diffCount++;
                    }
                    // If the difference count is 1, increment the total substrings counter
                    if ($diffCount === 1) {
                        $totalSubstrings++;
                    }
                    // If the difference count is 2, break the loop
                    if ($diffCount === 2) {
                        break;
                    }
                    // Move to the next indices
                    $indexS++;
                    $indexT++;
                }
            }
        }

        return $totalSubstrings;
    }
}
```