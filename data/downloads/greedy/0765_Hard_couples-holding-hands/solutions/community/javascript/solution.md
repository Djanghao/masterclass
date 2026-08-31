# Javascript Solution

**Author:** kayode-olusi
**Votes:** 2
**Link:** [https://leetcode.com/problems/couples-holding-hands/solutions/5651488/](https://leetcode.com/problems/couples-holding-hands/solutions/5651488/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is about pairing couples seated in a row so that each couple sits together with minimal swaps.

# Approach
<!-- Describe your approach to solving the problem. -->
Graph Representation:
- Create an adjacency list (adjList) to store the pairings and an   index map (idx) to track the positions of each person.

Swapping:
   - Iterate through the row in pairs.
   - For each pair, if they are not correctly paired, swap the partner with the person currently sitting in the partner's seat.
   - Update the index map and increment the swap count.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
/**
 * @param {number[]} row
 * @return {number}
 */

var minSwapsCouples = function(row) {
  const adjList = {};
  const idx = {};
  let swaps = 0;

  for (let i = 0; i < row.length; i += 2) {
    adjList[i] = i + 1;
    adjList[i + 1] = i;

    idx[row[i]] = i;
    idx[row[i + 1]] = i + 1; 
  }

  for (let i = 0; i < row.length; i += 2) {
    let curr = row[i];
    let next = row[i + 1];
    let partner = adjList[curr];

    if (next !== partner) {
      let next_idx = idx[next];
      let partner_idx = idx[partner];
      [row[next_idx], row[partner_idx]] = [row[partner_idx], row[next_idx]];

      idx[next] = partner_idx;
      idx[partner] = next_idx;

      swaps += 1;
    }
  }

  return swaps;
};
```