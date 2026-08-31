# TypeScript Solution of torocholazzz's Javascript/Python implementation

**Author:** CainTheMeister
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/3490646/](https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/3490646/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the code is O(n log n), where n is the number of tiles. This is because the code first sorts the tiles in $$O(n log n)$$time, and then it iterates over the sorted tiles in O(n) time.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

The space complexity of the code is $$O(n)$$, where n is the number of tiles. This is because the code stores the sorted tiles in an array, which takes up O(n) space.
# Code
```
function maximumWhiteTiles(tiles: [[number, number]], carpetLen: number): number {
  const sorted = tiles.sort((a, b) => a[0] - b[0]);
  let res = 0;
  
  let total = 0;
  let right = 0;

  for (let tile of sorted) {
    const start = tile[0];
    const end = start + carpetLen - 1;
    while (right < sorted.length && tiles[right][1] < end) {
      total += tiles[right][1] - tiles[right][0] + 1;
      right++;
    }
    if (right === sorted.length || sorted[right][0] > end) {
      res = Math.max(res, total);
    } else {
      res = Math.max(res, total + (end - tiles[right][0] + 1));
    }
    total -= tile[1] - tile[0] + 1;
  }
  
  return res;
};
```