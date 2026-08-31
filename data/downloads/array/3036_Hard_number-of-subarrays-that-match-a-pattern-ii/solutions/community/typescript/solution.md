# 🟡🔵 TS/JS KMP/LSP solution ✅ 100% time and memmory | incode explanation

**Author:** arveske
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4711086/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4711086/)

---

![Screenshot 2024-02-11 150918.png](./images/0.png)

# Intuition
The most efficient way to solve this problem is by using the Knuth-Morris-Pratt (KMP) algorithm.
<!-- Describe your first thoughts on how to solve this problem. -->

# Complexity
- Time complexity: $$O(n+m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n+m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const countMatchingSubarrays = (nums: number[], pattern: number[]): number => {
    // Convert the input nums array into an operations array
    // nums[1,4,4,1,3,5,5,3] -> operations[1,0,-1,1,1,0,-1]
    const operations: number[] = []
    for (let i = 0; i < nums.length - 1; i++) {
        const [a, b] = [nums[i], nums[i + 1]]
        operations.push(a > b ? -1 : a < b ? 1 : 0)
    }
    // Call KMP algorithm
    return KMP(operations, pattern)
};

// Function to generate the Longest Prefix Suffix (LPS) array for the pattern
const generateLPS = (pattern: number[]) => {
  const patLen = pattern.length
  // Initialize the LPS array with all zeros
  const lps = Array(patLen).fill(0);
  let [i, j] = [0, 1]
  // Loop to fill the LPS array
  while (j < patLen) {
    if (pattern[i] === pattern[j]) {
      // If characters match, increment both pointers and update LPS
      lps[j++] = ++i;
    } else if (i > 0) {
      // If characters don't match and we've already found some prefix match,
      // reset i to the previous matching prefix's end and keep j unchanged
      i = lps[i - 1];
    } else {
      // If characters don't match and we haven't found any prefix match yet,
      // move j to the next character in the pattern
      j++;
    }
  }
  return lps;
}

// Function implementing the Knuth-Morris-Pratt (KMP) algorithm
const KMP = (operations: number[], pattern: number[]) => {
  // Generate the LPS array for the pattern
  let lps = generateLPS(pattern);
  let n = operations.length, m = pattern.length;
  let i = 0, j = 0;
  let res = 0; // Counter for the number of occurrences of pattern in operations
  // Main loop of KMP algorithm
  while (j < n) {
    if (operations[j] === pattern[i]) { 
      // If characters match, move both pointers forward
      i++, j++; 
      // If we've reached the end of the pattern, increment result counter
      if (i == m) res++;
    } else if (i > 0) {
      // If characters don't match and we've found some prefix match,
      // update i to the previous matching prefix's end
      i = lps[i - 1]; 
    } else {
      // If characters don't match and we haven't found any prefix match yet,
      // move j to the next character in operations
      j++; 
    }
  }
  return res; 
}
```