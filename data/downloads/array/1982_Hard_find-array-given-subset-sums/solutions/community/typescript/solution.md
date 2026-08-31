# 💥💥Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-array-given-subset-sums/solutions/5950626/](https://leetcode.com/problems/find-array-given-subset-sums/solutions/5950626/)

---

# Intuition
Reconstruct an unknown array from the sums of all its possible subsets, understanding that each subset's sum must relate to the original array's elements and their combinations.

# Approach
Sort the subset sums, then recursively attempt to identify elements of the original array by grouping and validating sums based on the first two distinct sums, using flags to track occurrences and confirming potential candidates for the original array.

# Complexity
- Time complexity:
O(n * 2^n), where n is the length of the original array, since we explore subsets of the elements.

- Space complexity:
O(n), mainly for storing the result and the tracking of used indices during the recursive process.

# Code
```typescript []
/**
 * Function to recover the original array from its subset sums.
 * 
 * @param n - The length of the original array.
 * @param sums - An array containing all subset sums.
 * @returns An array representing the recovered original array.
 */
function recoverArray(n: number, sums: number[]): number[] {
  const m = sums.length; // Length of the sums array
  sums.sort((a, b) => a - b); // Sort the sums in ascending order
  const res: number[] = Array(n).fill(0); // Initialize the result array with zeros

  /**
   * Recursive function to attempt to extract elements from the subset sums.
   * 
   * @param a - The current array of sums being processed.
   * @param d - The current depth in the recursion (index for the result array).
   */
  function tryExtract(a: number[], d: number): void {
    const len = a.length; // Length of the current array
    if (len === 2) {
      // Base case: if only two elements are left, we can determine the original number
      res[d] = a[0] + a[1];
      throw new Error('Extracted original array'); // Throw an error to break out of the recursion
    }

    const x = a[1] - a[0]; // Calculate the potential original number
    let flag1 = 0; // Flag to track if 0 is found
    let flag2 = 0; // Flag to track if the opposite of x is found
    const used = new Uint8Array(len); // Array to track used indices

    let j = 0; // Pointer for the sums array
    let i = 0; // Pointer for the current element being considered
    while (!used[len - 1]) { // Continue until the last element is used
      while (used[i]) i++; // Find the next unused index
      if (a[i] === 0) flag1 = 1; // Check if we encountered 0
      used[i] = 1; // Mark this index as used
      while (used[j] || a[j] < a[i] + x) j++; // Find the corresponding index for a[i] + x
      if (a[j] === 0) flag2 = 1; // Check if we encountered 0 again
      used[j] = 2; // Mark this index as used for the second condition
    }

    let a1: number[] = []; // Array to store elements related to flag1
    let a2: number[] = []; // Array to store elements related to flag2

    // Fill a1 and a2 based on the flags
    for (i = 0; i < len; i++) {
      if (flag1 && used[i] === 1) a1.push(a[i]);
      if (flag2 && used[i] === 2) a2.push(a[i]);
    }

    if (flag1) {
      // If flag1 is set, recursively try to extract numbers for the positive case
      res[d] = x;
      tryExtract(a1, d + 1);
    }
    if (flag2) {
      // If flag2 is set, recursively try to extract numbers for the negative case
      res[d] = -x;
      tryExtract(a2, d + 1);
    }
  }

  try {
    // Start the extraction process
    tryExtract(sums, 0);
  } catch (e) {
    // Catch the thrown error and return the result array
    return res;
  }

  return res; // Return the recovered original array
}

```