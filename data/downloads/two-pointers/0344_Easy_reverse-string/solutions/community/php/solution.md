# In-Place String Reversal Using Two Pointers

**Author:** rakiburrimon
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-string/solutions/5247793/](https://leetcode.com/problems/reverse-string/solutions/5247793/)

---

# Intuition
To reverse a string, the simplest approach is to use two pointers. One pointer starts at the beginning of the string and the other at the end. We swap the characters at these pointers and move the pointers towards the center. This way, we can reverse the string in place with minimal extra space.

# Approach
1. Initialize two pointers: left starting at the beginning (index 0) and right starting at the end (index n-1) of the string.
2. Swap the characters at the left and right pointers.
3. Move the left pointer one step to the right and the right pointer one step to the left.
4. Repeat steps 2 and 3 until the left pointer is greater than or equal to the right pointer.

# Complexity
- Time complexity: O(n), where n is the length of the string. We only pass through the string once, performing a constant-time operation (swap) for each character.

- Space complexity: O(1), since we are modifying the string in place and do not use any extra space proportional to the input size.

# Code
```
class Solution {

    /**
     * @param String[] $s
     * @return NULL
     */
    function reverseString(&$s) {
        $left = 0;
        $right = count($s) - 1;

        while ($left < $right) {
            // Swap the characters at the left and right pointers
            $temp = $s[$left];
            $s[$left] = $s[$right];
            $s[$right] = $temp;

            // Move the pointers towards the center
            $left++;
            $right--;
        }
    }
}
```