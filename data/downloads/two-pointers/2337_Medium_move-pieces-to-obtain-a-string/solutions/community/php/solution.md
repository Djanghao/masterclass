# 🎉BEATS 100%🏆| Shortest Code💻| O(n) time🕒 & O(1)space🚀 complexity 📈| Approach Explained🌟 | PHP

**Author:** webdevanjali
**Votes:** 0
**Link:** [https://leetcode.com/problems/move-pieces-to-obtain-a-string/solutions/6117625/](https://leetcode.com/problems/move-pieces-to-obtain-a-string/solutions/6117625/)

---

# **Intuition**

The problem is about transforming one string (`start`) into another (`target`) by moving the `'L'` and `'R'` pieces. The key constraints are:
- `'L'` can only move to the **left** (to a smaller index).
- `'R'` can only move to the **right** (to a larger index).
- The `'_'` characters are just blank spaces that can be used to facilitate the movement of `'L'` and `'R'` pieces, but they don't affect the transformation.
- In order to do that, first,you ensure that the number of `'L'` and `'R'` characters in both `start` and `target` is the same. This is a necessary condition for transformation.
- Then, you use two pointers to skip over underscores and compare the positions of the `'L'` and `'R'` characters.
- You make sure that:
  - `'L'` pieces can only move left.
  - `'R'` pieces can only move right.
- You return `true` if all conditions are met and both strings are fully processed; otherwise, you return `false`.

---


# **Approach:**

1. **Count Matching for 'L' and 'R'**:
   - **First Step**: You first check if the count of `'L'` and `'R'` in `start` matches the count in `target`. If they don't match, it's **impossible** to transform `start` into `target`, and you return `false`.
     - This ensures that the transformation is even theoretically possible based on the total number of `'L'` and `'R'` characters.

2. **Skip Over Underscores**:
   - Both `start` and `target` can have `'_'` (blank spaces), which are irrelevant to the transformation but need to be skipped during comparison.
   - You use two pointers, `i` and `j`, for traversing through `start` and `target` respectively. Whenever you encounter a `'_'`, you move the pointer to the next non-underscore character.

3. **Compare the Non-Underscore Characters**:
   - After skipping the underscores, you compare the characters at the positions `i` in `start` and `j` in `target`.
     - **If they don't match** (i.e., if the characters at `start[i]` and `target[j]` aren't equal), return `false` immediately, because we can't move characters around to make them match.
   
4. **Movement Validation**:
   - **For 'L'**: The `'L'` piece in `start` can only move left to a smaller index in `target`. If the `'L'` is found in `start` at a position `i` and in `target` at a position `j`, it can only move if `i >= j`. If `i < j` or the position of `'L'` violates this condition, you return `false`.
   - **For 'R'**: The `'R'` piece can only move right. So, if the character at `start[i]` is `'R'` and `i > j`, it's invalid, and you return `false`.

5. **Final Check**:
   - After the loop ends, you need to ensure that there are no leftover characters (`'L'`, `'R'`) in either string that haven't been processed. So, you move both pointers to the next non-underscore character and check if they have both reached the end of the strings.

6. **Limitation Handling**:
   - The `limit` variable is used to prevent backtracking of 'L' pieces. After checking if an 'L' can move left, you record the last valid position in `limit`, and for the next 'L', it cannot be moved to an index before `limit`.


# Complexity
- **Time complexity $$O(n)$$**
  - **String traversal**: You're iterating over both strings once, checking and skipping underscores, comparing characters, and checking movement conditions. Since each step in the traversal is done in constant time, the overall complexity is linear with respect to the length of the strings (`n`).
  - You also have the initial step to count `'L'` and `'R'` characters using `count_chars()`, which operates in O(n) time.

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- **Space complexity: $$O(1)$$**
  - You only use a few variables for indexing and comparison (`i`, `j`, `limit`), so the space complexity is constant. There are no additional data structures (e.g., arrays or hashmaps) that require extra space.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {
    /**
     * @param String $start
     * @param String $target
     * @return Boolean
     */
    function canChange($start, $target) {
        $n = strlen($start);
        
        // Check if both strings have the same number of 'L' and 'R' characters
        if (count_chars($start, 1)[ord('L')] != count_chars($target, 1)[ord('L')] ||
            count_chars($start, 1)[ord('R')] != count_chars($target, 1)[ord('R')]) {
            return false;
        }

        // Iterate through both strings to compare non-underscore characters
        $i = $j = 0; // start and target pointer
        $limit =-1;
        while ($i < $n && $j < $n) {
            // Skip over underscores in both strings
            while ($i < $n && $start[$i] == '_') {
                $i++;
            }
            while ($j < $n && $target[$j] == '_') {
                $j++;
            }

            // If we've reached the end of both strings simultaneously
            if ($i == $n && $j == $n) {
                return true;
            }
            
            // If one pointer reaches the end while the other doesn't, return false
            if ($i == $n || $j == $n) {
                return false;
            }

            // If the characters at positions i and j do not match, return false
            if ($start[$i] != $target[$j]) {
                return false;
            }

            // Movement validation for 'L' and 'R'
            if ($start[$i] == 'L' && ($i < $j || $j<=$limit)) {
                return false;  // 'L' can only move to the left
            }
            if ($start[$i] == 'R' && $i > $j) {
                return false;  // 'R' can only move to the right
            }

            $limit == $j;
            // Move both pointers forward
            $i++;
            $j++;
        }

        while ($i < $n && $start[$i] == '_') {
            $i++;
        }
        while ($j < $n && $target[$j] == '_') {
            $j++;
        }

        // If we've processed both strings completely, return true
        return $i == $n && $j == $n;
    }
}

```