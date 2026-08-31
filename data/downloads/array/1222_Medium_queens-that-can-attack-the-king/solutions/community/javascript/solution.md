# Easy to understand

**Author:** andyoung
**Votes:** 2
**Link:** [https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/425746/](https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/425746/)

---

```
var queensAttacktheKing = function(queens, king) {
  const map = {};
  queens.forEach(q => map[q.join(',')] = 1);
  
  // for eight directions, find the first queen
  const ans = [];
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1], [-1, 1], [1, -1], [1, 1], [-1, -1]];
  // record if needed to go further for each direction
  const visited = new Array(8).fill(false);
  let step = 1;
  while (step < 8) {
    dirs.forEach((d, i) => {
      if (!visited[i]) {
        let x = king[0] + step * d[0];
        let y = king[1] + step * d[1];
        if (x < 0 || y < 0 || x > 7 || y > 7) {
          visited[i] = true;
        } else if (map[`${x},${y}`]) {
          visited[i] = true;
          ans.push([x, y]);
        }
      }
    });
    step += 1;
  }
  
  return ans;
};