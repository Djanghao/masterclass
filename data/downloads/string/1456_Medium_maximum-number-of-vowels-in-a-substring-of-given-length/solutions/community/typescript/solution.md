# [JS/TS] Sets, Sliding Windows, and Early Returns - Beats: 97.92% Runtime; 91.67% Memory

**Author:** tmilewski
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3487175/](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3487175/)

---

# Intuition
Sets, Sliding Windows, and Early Returns. Oh my!

# Approach

1. For simplicity and speed, we place the vowels in a `Set`. 
2. Using a `for` loop, we get the initial `max` number of vowels in the first window. We set the `current` to `max` before continuing.
3. From there, we use the sliding window technique (see code comments) to determine the number of vowels in any given window.
4. We set the `max` if the `current` number is greater.

We attempt to return at multiple points in the code if `max` or `current` have hit `k`, seeing as there's no point in continuing. 

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)

# Code
```
function maxVowels(s: string, k: number): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])

  let max = 0 // Max number of vowels in any window
  let current = 0 // Number of vowels in the current window

  // Count the total number of vowels from the first window
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) max++
  }
  
  if (max === k) return max // Return if the `k` is hit

  current = max // Set the current to the max

  // Sliding window technique
  for (let i = 1; i <= s.length - k; i++) {
    if (vowels.has(s[i - 1])) current-- // Remove the left-most vowel
    if (vowels.has(s[i + k - 1])) current++ // Add the right-most vowel

    if (current === k) return current // Return if the `k` is hit
    if (current > max) max = current // Set `max` to the `current` value, if greater
  }

  return max
};

```