# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-champion-i/solutions/6140217/](https://leetcode.com/problems/find-champion-i/solutions/6140217/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
public int findChampion(int[][] grid) {
    int n = grid.length;

    // Start with the assumption that team 0 is the champion
    int champion = 0;

    // Iterate through all teams to find a potential champion
    for (int i = 1; i < n; i++) {
        if (grid[champion][i] == 0) {
            // If the current champion loses to team i, update champion
            champion = i;
        }
    }

    // Verify if the identified champion is actually the champion
    for (int i = 0; i < n; i++) {
        if (i != champion && (grid[champion][i] == 0 || grid[i][champion] == 1)) {
            // If the champion loses to or fails to beat another team, return -1
            return -1;
        }
    }

    return champion;
}
```
```javascript []
var findChampion = function(grid) {
    const n = grid.length;

    // Start with the assumption that team 0 is the champion
    let champion = 0;

    // Iterate through all teams to find a potential champion
    for (let i = 1; i < n; i++) {
        if (grid[champion][i] === 0) {
            // If the current champion loses to team i, update champion
            champion = i;
        }
    }

    // Verify if the identified champion is actually the champion
    for (let i = 0; i < n; i++) {
        if (i !== champion && (grid[champion][i] === 0 || grid[i][champion] === 1)) {
            // If the champion loses to or fails to beat another team, return -1
            return -1;
        }
    }

    return champion;
};
```
```typescript []
function findChampion(grid: number[][]): number {
    const n = grid.length;

    // Start with the assumption that team 0 is the champion
    let champion = 0;

    // Iterate through all teams to find a potential champion
    for (let i = 1; i < n; i++) {
        if (grid[champion][i] === 0) {
            // If the current champion loses to team i, update champion
            champion = i;
        }
    }

    // Verify if the identified champion is actually the champion
    for (let i = 0; i < n; i++) {
        if (i !== champion && (grid[champion][i] === 0 || grid[i][champion] === 1)) {
            // If the champion loses to or fails to beat another team, return -1
            return -1;
        }
    }

    return champion;
};
```