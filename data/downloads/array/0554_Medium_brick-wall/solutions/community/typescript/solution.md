# Simple and clean JavaScript / TypeScript solution (Hash Table)

**Author:** Arkadiy1
**Votes:** 0
**Link:** [https://leetcode.com/problems/brick-wall/solutions/3954538/](https://leetcode.com/problems/brick-wall/solutions/3954538/)

---


# Code
```
const leastBricks = (wall) => {
    const map = {};
    let max = 0;

    for (const row of wall) {
      let sum = 0;

      for (let i = 0; i < row.length - 1; i++) {
        sum += row[i]; 
        map[sum] = map[sum] + 1 || 1;
        max = Math.max(max, map[sum]);
      }
    }

    return wall.length - max;
};
```