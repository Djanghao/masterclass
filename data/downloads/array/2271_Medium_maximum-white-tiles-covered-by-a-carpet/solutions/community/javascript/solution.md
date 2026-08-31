# JavaScript, sliding window

**Author:** aanand07
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/2865696/](https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/2865696/)

---

My original solution took O(n^2) and was giving TLE
Took reference from below solution and tweaked it to cover edge cases
https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/2042218/js-sliding-window-o-nlogn/

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(nlogn + 2n) ~ O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
var maximumWhiteTiles = function (tiles, carpetLen) {
    tiles.sort((a, b) => a[0] - b[0])

    let right = 1;
    let cover = tiles[0][1] - tiles[0][0] + 1;
    let maxCovered = cover;
    if (maxCovered >= carpetLen) return carpetLen

    for (const tile of tiles) {
        let start = tile[0]
        let end = start + carpetLen - 1

        while (right < tiles.length && tiles[right][1] <= end) {
            cover += tiles[right][1] - tiles[right][0] + 1
            right++
        }
        if (right === tiles.length || end < tiles[right][0]) {
            maxCovered = Math.max(maxCovered, cover)
        } else {
            let partial = end - tiles[right][0] + 1
            maxCovered = Math.max(maxCovered, cover + partial)
        }

        cover -= (tile[1] - tile[0]) + 1
    }

    return maxCovered
};
```