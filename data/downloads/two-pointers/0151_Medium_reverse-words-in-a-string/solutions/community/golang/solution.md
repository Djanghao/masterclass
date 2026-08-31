# Simple Go Solution | Easy Explanation | O(N) Time & Space Complexity

**Author:** vibhushit
**Votes:** 7
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solutions/3941591/](https://leetcode.com/problems/reverse-words-in-a-string/solutions/3941591/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Given an input string s containing words separated by spaces, the goal is to reverse the order of the words while ensuring that only a single space separates the words in the reversed output. This involves splitting the string into words, reversing their order, and then joining them back together with a single space separator.
# Approach
<!-- Describe your approach to solving the problem. -->
- Use strings.Fields to split the input string s into words. This function splits the string based on whitespace characters, treating consecutive spaces as a single separator.
- Initialize two pointers, low and high, to reverse the order of the words in the words slice.
- Swap the words at the positions pointed by low and high, and increment low and decrement high.
- After the loop, use strings.Join to concatenate the reversed words with a single space separator.
- Use strings.TrimSpace to remove any leading or trailing spaces from the final concatenated string.
# Complexity
1. Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- The strings.Fields function takes linear time to split the input string into words.
- The two-pointer loop iterates through half of the words in the words slice, performing constant time swaps.
- The strings.Join and strings.TrimSpace operations both take linear time proportional to the length of the concatenated string.
- Overall, the time complexity is linear, O(n), where n is the length of the input string.

2. Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- The strings.Fields function creates a slice to store the words, which requires space proportional to the number of words in the input string.
- The pointers low and high require constant space.
- The words slice, as well as the concatenated and trimmed string, also require space proportional to the length of the input string.
- Therefore, the space complexity is linear, O(n), where n is the length of the input string.

# Code
```
func reverseWords(s string) string {
    // Split the input string into words
    words := strings.Fields(s)

    // Initialize pointers for the word reversal
    low, high := 0, len(words)-1

    // Swap words using the two-pointer approach
    for low < high {
        words[low], words[high] = words[high], words[low]
        low++
        high--
    }

    // Join the reversed words back into a single string and trim spaces
    return strings.TrimSpace(strings.Join(words, " "))
}

```