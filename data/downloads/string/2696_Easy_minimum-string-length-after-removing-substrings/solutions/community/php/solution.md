# BEATS 97% Reducing Strings by Removing Pairs: A Stack-Based Approach

**Author:** webdevanjali
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5964221/](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5964221/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal of this code is to make a string shorter by removing specific pairs of characters, namely "AB" and "CD". Imagine you have a pile of blocks, where each block is a character from the string. As you add blocks to the pile, if the top block and the one you\u2019re about to add make a pair ("AB" or "CD"), you simply take the top block off instead of adding the new one. This way, you keep reducing the pile until no more pairs can be removed.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Using a Stack: We use a stack (think of it like a pile of blocks) to help keep track of the characters as we go through the string.

2. Going Through Each Character: For each character in the string:

    - If there\u2019s already something on the top of the stack, check if it can pair up with the current character (either forming "AB" or "CD").
    - If they do form a pair, take the top character off the stack (remove the pair).
    - If they don\u2019t form a pair, just add the current character to the stack.
3. Final Length: After checking all characters, the number of blocks left in the stack gives you the length of the final string, which is returned as the answer.


# Complexity
- Time complexity: The process takes $$O(n)$$ time, where nn is the length of the input string. You look at each character just once.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: The space used can also be $$O(n)$$ in the worst case, which happens if none of the pairs can be removed and you have to keep all characters in the stack.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []

class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function minLength($s) {
        // Initialize an empty stack
        $stack = [];

        // Traverse through each character in the input string
        for ($i = 0; $i < strlen($s); $i++) {
            $currentChar = $s[$i];

            // Check if the top of the stack forms "AB" or "CD" with the current character
            if (!empty($stack)) {
                $topChar = end($stack);

                // Remove "AB" or "CD" if found
                if (($topChar == 'A' && $currentChar == 'B') || ($topChar == 'C' && $currentChar == 'D')) {
                    array_pop($stack); // Remove the top element from the stack
                    continue; // Skip adding the current character
                }
            }

            // If no removals, add the current character to the stack
            $stack[] = $currentChar;
        }

        // The minimum possible length is the size of the stack
        return count($stack);
    }
}
```