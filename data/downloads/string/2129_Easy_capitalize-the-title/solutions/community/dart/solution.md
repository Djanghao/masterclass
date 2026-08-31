# Very Simble Solution Beats 89%

**Author:** mohamedmostafaBig
**Votes:** 0
**Link:** [https://leetcode.com/problems/capitalize-the-title/solutions/5870979/](https://leetcode.com/problems/capitalize-the-title/solutions/5870979/)

---

# Solution Beats 89% 

# Intuition
The goal is to format a given title such that:
1. Every word with more than 2 characters is capitalized (the first letter is uppercase, and the rest are lowercase).
2. Words with 2 characters or fewer are entirely lowercase.

# Approach
1. **Convert the entire title to lowercase** to handle any variations in capitalization.
2. **Split the title into individual words**.
3. **Transform each word**:
   - If the word has more than 2 characters, capitalize the first letter.
   - If the word has 2 or fewer characters, leave it entirely in lowercase.
4. **Rejoin the words** into a single string, maintaining the correct format.

# Complexity
- **Time complexity**: $$O(n)$$, where `n` is the total number of characters in the title.
- **Space complexity**: $$O(n)$$ for storing the transformed words.

# Code
```dart
class Solution {
  String capitalizeTitle(String title) {
    return title.toLowerCase().split(' ').map(
      (word) {
        return word.length > 2
            ? word.replaceFirst(word[0], word[0].toUpperCase())
            : word;
      },
    ).join(' ');
  }
}
```

This solution handles the capitalization rules efficiently, achieving a speed that beats 89% of submissions.