# ✅THE BEST EXPLANATION||Beats 100% Users

**Author:** harshal2024
**Votes:** 23
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/4600908/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/4600908/)

---

---
# PLEASE UPVOTE IF YOU LIKE IT \u2705
---
![Screenshot (3250).png](./images/0.png)

---
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The given code aims to find the minimum number of key presses needed to type a given string on a telephone keypad. The keys on the keypad are mapped to collections of letters, and it is allowed to remap keys 2 to 9 to different collections of letters.

---
# Approach
<!-- Describe your approach to solving the problem. -->
Initialization: Initialize variables ans to 0 (which will store the total number of key presses), n to the size of the input string word, and row to 1.

Calculate Quotient and Remainder: Find the quotient and remainder when dividing the length of the string by 8. The quotient represents complete cycles of rows on the keypad, and the remainder represents the remaining letters after complete cycles.

Loop Over Quotient (Complete Cycles): While there is a quotient (complete cycles) remaining, iterate through each complete cycle. In each iteration, add the product of 8 (number of keys in a cycle) and the current row to the ans. Increment the row for the next cycle.

Add Remaining Letters: After completing the cycles, add the product of the remainder and the final row to the ans. This accounts for the remaining letters that don't form complete cycles.

Return Result: The final value of ans represents the minimum number of key presses needed to type the given string on the telephone keypad with the allowed remapping.

In simple terms, the code calculates the number of key presses needed based on complete cycles and remaining letters, taking into account the possibility of remapping keys. The goal is to minimize the total number of key presses.

---

# Complexity
- Time complexity: O(q) , where q=quotient
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

---


![download.jpeg](./images/1.jpeg)

---

# Code
C++
```
class Solution {
public:
    // Function to find the minimum number of key presses needed to type a given string
    int minimumPushes(string word) {
        // Initialize variables to store the result, the size of the word, and the current row
        int ans = 0, n = word.size(), row = 1;

        // Calculate the quotient and remainder when dividing the length of the string by 8
        int quotient = n / 8;
        int remainder = n % 8;

        // Iterate over complete cycles (quotient)
        while (quotient--) {
            // Add the product of 8 (number of keys in a cycle) and the current row to the result
            ans += 8 * row;
            
            // Increment the row for the next cycle
            row++;
        }

        // Add the product of the remainder and the final row to account for remaining letters
        ans += remainder * row;

        // Return the final result, representing the minimum number of key presses
        return ans;
    }
};

```

---
Python3
```
class Solution:
    def minimumPushes(self, word: str) -> int:
        # Initialize variables to store the result, the size of the word, and the current row
        ans = 0
        n = len(word)
        row = 1

        # Calculate the quotient and remainder when dividing the length of the string by 8
        quotient = n // 8
        remainder = n % 8

        # Iterate over complete cycles (quotient)
        while quotient > 0:
            # Add the product of 8 (number of keys in a cycle) and the current row to the result
            ans += 8 * row

            # Decrement the quotient and increment the row for the next cycle
            quotient -= 1
            row += 1

        # Add the product of the remainder and the final row to account for remaining letters
        ans += remainder * row

        # Return the final result, representing the minimum number of key presses
        return ans

```

---
Java
```
public class Solution {
    public int minimumPushes(String word) {
        // Initialize variables to store the result, the size of the word, and the current row
        int ans = 0;
        int n = word.length();
        int row = 1;

        // Calculate the quotient and remainder when dividing the length of the string by 8
        int quotient = n / 8;
        int remainder = n % 8;

        // Iterate over complete cycles (quotient)
        while (quotient > 0) {
            // Add the product of 8 (number of keys in a cycle) and the current row to the result
            ans += 8 * row;

            // Decrement the quotient and increment the row for the next cycle
            quotient--;
            row++;
        }

        // Add the product of the remainder and the final row to account for remaining letters
        ans += remainder * row;

        // Return the final result, representing the minimum number of key presses
        return ans;
    }
}
```
