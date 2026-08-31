# [Kotlin] Simple math solution  ~ Beats 84.40%

**Author:** user3156ly
**Votes:** 1
**Link:** [https://leetcode.com/problems/excel-sheet-column-number/solutions/5593780/](https://leetcode.com/problems/excel-sheet-column-number/solutions/5593780/)

---

# Intuition
When solving this problem, the first thought is to recognize the pattern of the column titles in Excel. The column titles resemble a base-26 numeral system where each letter corresponds to a digit. Starting from 'A' to 'Z' (representing 1 to 26), 'AA' to 'AZ' (representing 27 to 52), and so on. This resembles converting a string from a custom base-26 number system to a decimal number.

# Approach
The approach involves iterating through each character of the string, converting each character to its corresponding value, and accumulating the result by considering the positional weight of each character. Specifically:
1. Initialize a variable to store the result.
2. Iterate over each character in the string.
3. For each character, convert it to its corresponding value (e.g., 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26).
4. Update the result by multiplying the current result by 26 and adding the current character's value.
5. Return the accumulated result after processing all characters.

# Complexity
- Time complexity:
  The time complexity is \\( O(n) \\), where \\( n \\) is the length of the column title string. This is because we process each character exactly once.

- Space complexity:
  The space complexity is \\( O(1) \\), as we only use a fixed amount of extra space for the result variable and no additional data structures that scale with input size.

# Kotlin Code
```kotlin
fun titleToNumber(columnTitle: String): Int {
    return columnTitle.fold(0) { result, char ->
        result * 26 + (char - 'A' + 1)
    }
}
