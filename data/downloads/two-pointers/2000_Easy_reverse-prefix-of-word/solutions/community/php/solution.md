# Reversing the prefix of the string up to the certain character with PHP.

**Author:** rakiburrimon
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-prefix-of-word/solutions/5095838/](https://leetcode.com/problems/reverse-prefix-of-word/solutions/5095838/)

---

# Intuition
The problem is asking to reverse the prefix of the word up to the first occurrence of a certain character. If the character does not exist in the word, we return the word as it is.

# Approach
1. Find the position of the first occurrence of the character in the word.
2. If the character is not found, return the original word.
3. Extract the substring before (and including) the first occurrence of the character.
4. Reverse this substring.
5. Extract the substring after the first occurrence of the character.
6. Concatenate the reversed substring with the last substring and return it.

# Complexity
- Time complexity:
The time complexity is O(n), where n is the length of the word. This is because we need to traverse the word to find the first occurrence of the character, and reversing a string also takes linear time.

- Space complexity:
The space complexity is O(n), where n is the length of the word. This is because we are creating new substrings which take up space.

# Code
```
class Solution {

    /**
     * @param String $word
     * @param String $ch
     * @return String
     */
    function reversePrefix($word, $ch) {
        // Find the position of the first occurrence of $ch in $word
        $position = strpos($word, $ch);
        
        // If $ch is not found in $word, return the original word
        if ($position == false){
            return $word;
        }

        // Extract the substring before (and including) the first occurrence of $ch
        $firstSubstring = substr($word, 0, $position + 1);

        // Reverse the first substring
        $reversed = strrev($firstSubstring);

        // Extract the substring after the first occurrence of $ch
        $lastSubstring = substr($word, $position + 1);

        // Return the reversed substring concatenated with the last substring
        return $reversed.$lastSubstring;
    }
}
```