# TypeScript/JavaScript Sliding Window, Beats 95.51%

**Author:** jamestariga
**Votes:** 15
**Link:** [https://leetcode.com/problems/longest-repeating-character-replacement/solutions/4228367/](https://leetcode.com/problems/longest-repeating-character-replacement/solutions/4228367/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The idea is to maintain a window (substring) and adjust it as you iterate through the string. The goal is to find the longest substring with the same character, allowing for at most `k` replacements.

# Approach
<!-- Describe your approach to solving the problem. -->
**HashMap Initialization:**

`hashMap` is initialized to keep track of the frequency of characters in the current window.

**Variable Initialization:**

`longest` is initialized to track the length of the longest substring.
`maxFreq` is initialized to track the maximum frequency of any character encountered in the current window.
`leftPointer` is initialized as the starting point of the sliding window.

**Main Loop:**

The algorithm iterates through the string using the right pointer.
For each character encountered, it increments its frequency in the HashMap.

**Max Frequency Update:**

`maxFreq` is updated to reflect the maximum frequency of any character encountered so far.

**Dynamic Window Adjustment:**

If at any point, the size of the window minus the maximum frequency exceeds the allowed replacements `k`, it means we need to shrink the window from the left side.
The left pointer is moved, and the frequency of the character at that position is decremented.

**Longest Substring Update:**

`longest` is updated to keep track of the length of the longest substring with the same character.

**Result:**

Finally, the function returns the length of the longest substring with the same character, allowing for at most `k` replacements.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is O(N), where N is the length of the input string.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1) with an upper bound of O(26) for the HashMap.

# Code
```
const characterReplacement = (s: string, k: number): number => {
  const hashMap: { [key: string]: number } = {}
  let longest: number = 0
  let maxFreq: number = 0
  let leftPointer: number = 0

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    // Increment the frequency count by 1 upon encountering a character
    hashMap[s[rightPointer]] = (hashMap[s[rightPointer]] || 0) + 1

    // Maximum frequency of any character encountered so far in the current window.
    maxFreq = Math.max(maxFreq, hashMap[s[rightPointer]])

    // Move the window from the left until reaching `k` replacements
    if (maxFreq + k < rightPointer - leftPointer + 1) {
      hashMap[s[leftPointer]]--
      leftPointer++
    }

    // Calculate the longest repeating character
    longest = Math.max(longest, rightPointer - leftPointer + 1)
  }

  return longest
}
```