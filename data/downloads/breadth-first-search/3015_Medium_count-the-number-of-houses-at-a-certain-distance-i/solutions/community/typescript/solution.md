# JS/TS Solution Brute Force

**Author:** giogokul13
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/5848277/](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/5848277/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

```
for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
        // Compute distance between house i and house j
        const distance = Math.min(
            Math.abs(i - j),
            Math.abs(i - x) + Math.abs(j - y) + 1,
            Math.abs(i - y) + Math.abs(j - x) + 1
        );
        result[distance - 1]++;
    }
}

```
Outer Loop (i): Iterates from house 1 to house n.

Inner Loop (j): For each i, iterates from i + 1 to house n. This ensures that each pair (i, j) is unique and avoids duplicate counting (since (i, j) is the same as (j, i)).

Calculating Distance:

Direct Path: Math.abs(i - j) computes the absolute difference between i and j, representing the number of streets between them via the linear connections.
Path via Shortcut (x to y):

First Shortcut Path: Math.abs(i - x) + Math.abs(j - y) + 1
Math.abs(i - x): Distance from house i to house x via the linear streets.

Math.abs(j - y): Distance from house j to house y via the linear streets.

 1: The additional shortcut street connecting x and y.
Second Shortcut Path: Math.abs(i - y) + Math.abs(j - x) + 1
Similar to the first path but swapping x and y, accounting for the possibility that taking the shortcut from y to x might be shorter.
Minimum Distance: Math.min(...) selects the smallest distance among the three calculated paths, ensuring that we always consider the shortest possible path between i and j.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N ^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @return {number[]}
 */
var countOfPairs = function (n, x, y) {
    const result = new Array(n).fill(0);

    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            const distance = Math.min(
                Math.abs(i - j),
                Math.abs(i - x) + Math.abs(j - y) + 1,
                Math.abs(i - y) + Math.abs(j - x) + 1
            );
            result[distance - 1]++;
        }
    }

    return result.map((count, index) => count * 2);
};
```