# Backtracking Approach with Digit-to-Letter Mapping

**Author:** rakiburrimon
**Votes:** 5
**Link:** [https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/5170736/](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/5170736/)

---

# Intuition
To generate all possible letter combinations for the given digits, we can use a backtracking approach. We start with an empty combination and gradually append letters corresponding to each digit in the input string.

# Approach
1. Create a mapping of digits to letters.
2. Initialize an array to store the combinations, starting with an empty string.
3. Iterate through each digit in the input string:
- Retrieve the corresponding letters for the current digit.
- For each existing combination, append each letter to generate new combinations.
- Update the combinations array with the new combinations.
4. Return the array of combinations.

# Complexity
- Time complexity: O(3N \xD7 4M), where N is the number of digits with three corresponding letters (e.g. 2, 3, 4, 5, 6, 8) and M is the number of digits with four corresponding letters (e.g. 7, 9). In the worst case, we have 3N combinations for the digits with three letters and 4M combinations for the digits with four letters.

- Space complexity: O(3N \xD7 4M), as we need to store all possible combinations in the output array.

# Code
```
class Solution {

    /**
     * @param String $digits
     * @return String[]
     */
    function letterCombinations($digits) {
        if (empty($digits)) {
            return [];
        }
        
        $digitToCharMap = [
            '2' => ['a', 'b', 'c'],
            '3' => ['d', 'e', 'f'],
            '4' => ['g', 'h', 'i'],
            '5' => ['j', 'k', 'l'],
            '6' => ['m', 'n', 'o'],
            '7' => ['p', 'q', 'r', 's'],
            '8' => ['t', 'u', 'v'],
            '9' => ['w', 'x', 'y', 'z']
        ];
        
        $combinations = [''];
        $n = strlen($digits);
        
        for ($i = 0; $i < $n; $i++) {
            $newCombinations = [];
            $letters = $digitToCharMap[$digits[$i]];
            
            foreach ($combinations as $combination) {
                foreach ($letters as $letter) {
                    $newCombinations[] = $combination . $letter;
                }
            }
            
            $combinations = $newCombinations;
        }
        
        return $combinations;
    }
}
```