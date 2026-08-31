# Beats 100% | O(n log n)

**Author:** AnuMessi10
**Votes:** 1
**Link:** [https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/4436386/](https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/4436386/)

---

# Intuition:
<!-- Describe your first thoughts on how to solve this problem. -->
Check for two farthest adjacent x coordinates.

# Approach
<!-- Describe your approach to solving the problem. -->
Store all the x-coordinates and sort them, find the two adjacent points who have the highest distance between them.

# Complexity
- Time complexity: `O(n log n)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maxWidthOfVerticalArea(points: number[][]): number {
    let xCoords: number[] = [], ans = 0;

    for(const point of points)
        xCoords.push(point[0])

    xCoords.sort((a, b) => a - b);

    for(let i = 0 ; i < xCoords.length - 1; i++)
        ans = Math.max(ans, xCoords[i + 1] - xCoords[i]);

    return ans;
};
```