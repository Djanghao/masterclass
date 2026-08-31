# JavaScript, classic BFS solution vs Math approach, TC/SC

**Author:** day-glow
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-knight-moves/solutions/1116030/](https://leetcode.com/problems/minimum-knight-moves/solutions/1116030/)

---

Filling the need for a classic BFS approach using ```.shift()``` and due to a number of comments in [other discussion solutions](https://leetcode.com/problems/minimum-knight-moves/discuss/806266/JS-Solution-BFS-252-ms-52MB-memory) confused by the nested ```while (queue.length)``` loops. This is not nessarily the most optimized, but it may be easier to understand if you are new to BFS or graph questions :) Note: ```.pop()``` is faster than ```.shift()``` so that is why some [other solutions](https://leetcode.com/problems/minimum-knight-moves/discuss/500480/JavaScript-Solution-BFS) may opt for that option with the extra queue.

**Classic BFS approach**:
TC-O(n^2) quadratic
SC-O(n^2) quadratic

```
var minKnightMoves = function(tx, ty) {
  var dirs = [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]];
  
  let steps = 0;
  let seen = new Set();
  let queue = [[0, 0]];

  while (queue.length) {
    let len = queue.length;
	
    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift(); // hey look, we're doing it --> .shift()
	  
      if (x === tx && y === ty) return steps; //current coords match target
	  
      for (let [dx, dy] of dirs) {
        let [nx, ny] = [x + dx, y + dy];
        if (!seen.has(nx + ',' + ny)) {
          queue.push([nx, ny]);
          seen.add(nx + ',' + ny);
        }
      }
    }
    steps++;
  }
};
```
Variable names note: 
```tx, ty``` short for ```targetX, targetY```
```dx, dy``` short for ```directionsX, directionsY``` from ```dirs``` aka ```directions```
```nx, ny``` short for ```neighborX, neighborY``` or ```nextX, nextY```

**Math approach**: clearly a pro level approach with this constant time solution. Learn more from the [other Leetcode post](https://leetcode.com/problems/minimum-knight-moves/discuss/680648/Javascript-O(1)-formula-solution), he added the link to the full explaination.
TC-O(1) constant
SC-O(1) constant
```
var minKnightMoves = function(x, y) {
  [x, y] = [Math.abs(x), Math.abs(y)]; 
  if (x < y) [x, y] = [y, x];  

  if (x === 1 && y === 0) return 3
  if (x === 2 && y === 2) return 4

  let m = Math.round(Math.max(x / 2, ( x + y ) / 3))
  return m + ((m + x + y) % 2)
};
```
I recommend stepping through this one line by line with the inputs ```x = 2, y = 112```

**Happy LeetCoding!**

*Please **upvote** this post :)
*Comments welcomed 
*Positivity encouraged 
*You've got this!
*Chess Nerds Rock