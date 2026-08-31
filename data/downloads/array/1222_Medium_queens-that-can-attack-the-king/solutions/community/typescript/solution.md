# easy solution

**Author:** uongsuadaubung
**Votes:** 1
**Link:** [https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/5366191/](https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/5366191/)

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
```
function queensAttacktheKing(queens: number[][], king: number[]): number[][] {
  const result: number[][] = [];
  const findTheQueens = ( direction: number[]) => {
    let [x, y] = king;
    while (x >= 0 && x < 8 && y >= 0 && y < 8) {
      x += direction[0];
      y += direction[1];
      if (queens.some(quinn => quinn[0] === x && quinn[1] === y)) {
        result.push([x, y]);
        break;
      }
    }
  };
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i !== 0 || j !== 0) {
        findTheQueens([i,j]); //from king move 8 directions to find the queens
      }
    }
  }
  return result;
};
```