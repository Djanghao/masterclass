# Javascript BFS

**Author:** hakuin
**Votes:** 15
**Link:** [https://leetcode.com/problems/snakes-and-ladders/solutions/293657/](https://leetcode.com/problems/snakes-and-ladders/solutions/293657/)

---

```
var snakesAndLadders = function(board) {
  const N = board.length;
  const getLoc = (pos) => {
    let row = Math.floor((pos - 1) / N);
    let col = (pos - 1) % N;
    col = (row % 2) === 1 ? N - col - 1 : col;
    row = N - row - 1;
    return [row,col];
  }
  const q = [1];
  const v = {'1': 0};
  while(q.length) {
    const n = q.shift();
    if(n === N*N) return v[n];
    for(let i = n+1; i <= Math.min(n+6, N*N); i++) {
      const [r, c] = getLoc(i);
      const next = board[r][c] === -1 ? i : board[r][c];
      if(v[next] === undefined) {
        q.push(next);
        v[next] = v[n] + 1;
      }
    }
  }
  
  return -1;
};
```