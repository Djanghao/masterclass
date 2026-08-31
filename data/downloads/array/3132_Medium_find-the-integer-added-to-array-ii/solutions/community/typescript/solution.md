# Typescript (difference table approach) single pass over arrays

**Author:** ToxicalNoob3062
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5085488/](https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5085488/)

---

# Intuition
making a difference tabel will showcase all differrence possible where the rows are the elements of num2 and cols are elements of nums1! then we have to scan the table somehow to make ensure we are picking up the minimum x from the table!

# Approach
From the differrence table whenever you choose something make ensure you have not choosed the same element from same col or row before because those are the common mapping! you can only do 1:1 mapping! so to track that we are using a hashmap whose values will contain 2 sets to track i and j!

# Complexity
O(n*m) where n= nums1.length and m=nums2.length

- Space complexity:
O(n+m) there can be n+m differrent values for the key space and i and j we are pushing can also be max n & m
which boils down to (n+m)

# Code
```
// Function to find the minimum possible integer that can be added to the elements of nums1
// to make it equal to nums2 after removing two elements from nums1
function minimumAddedInteger(
  nums1: number[], // First input array
  nums2: number[], // Second input array
  debug: boolean = false // Optional debug flag to print the difference table
): number {
  // If debug flag is true, print the difference table
  if (debug) printTable(nums1, nums2);

  // Initialize a tracker object to keep track of the differences and their indices
  const tracker: Record<number, Set<number>[]> = {};

  // Initialize the minimum difference to Infinity
  let min = Infinity;

  // Iterate over the elements of nums2
  for (let i = 0; i < nums2.length; i++) {
    // Iterate over the elements of nums1
    for (let j = 0; j < nums1.length; j++) {
      // Calculate the difference between the current elements of nums2 and nums1
      const val = nums2[i] - nums1[j];

      // If the difference is not already in the tracker, add it with two empty sets for the indices
      if (!tracker[val]) {
        tracker[val] = [new Set(), new Set()];
      }

      // If the current indices are not already in the sets for the current difference, add them
      if (!tracker[val][0].has(i) && !tracker[val][1].has(j)) {
        tracker[val][0].add(i);
        tracker[val][1].add(j);

        // If the sizes of the sets for the current difference are equal to the length of nums2,
        // update the minimum difference
        if (
          tracker[val][0].size === nums2.length &&
          tracker[val][1].size === nums2.length
        ) {
          min = Math.min(min, val);
        }
      }
    }
  }

  // Return the minimum difference
  return min;
}

// Function to print the difference table for debugging
function printTable(nums1: number[], nums2: number[]): void {
  // Iterate over the elements of nums2
  for (let i = 0; i < nums2.length; i++) {
    // Initialize an accumulator string for the current row of the table
    let accumulator = "";

    // Iterate over the elements of nums1
    for (let j = 0; j < nums1.length; j++) {
      // Calculate the difference between the current elements of nums2 and nums1
      const val = nums2[i] - nums1[j];

      // Add the difference to the accumulator string with a "|" separator
      accumulator += (val >= 0 ? " " + val : val) + "|";
    }

    // Print the accumulator string for the current row of the table
    console.log(accumulator);
  }
}


```