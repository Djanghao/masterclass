# 524: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 7
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/3292783/](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/3292783/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Sort the dictionary d in descending order by length and then lexicographically.
2. Traverse through the dictionary d using a for loop.
3. Set a variable i to 0 to keep track of the index of the current character in the word.
4. Traverse through the string s using a for loop.
5. If the current character in s is the same as the character at the current index i in the word, increment i by 1.
6. If we have found all the characters in the word, break the loop.
7. If we have found all the characters in the word, return the word.
8. If we have not found any word, return an empty string.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def findLongestWord(self, s: str, d: List[str]) -> str:
        # Sort the dictionary by length and lexicographically
        d.sort(key=lambda x: (-len(x), x))
        
        # Traverse through the dictionary
        for word in d:
            i = 0
            # Traverse through the string s
            for char in s:
                if i < len(word) and char == word[i]:
                    i += 1
                    # If we have found all the characters in the word, break the loop
                    if i == len(word):
                        break
            # If we have found all the characters in the word, return the word
            if i == len(word):
                return word
        return ""

```