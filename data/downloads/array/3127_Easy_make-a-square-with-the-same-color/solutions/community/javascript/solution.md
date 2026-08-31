# Check Four Squares  - Fastest way ( 39 ms )

**Author:** zemamba
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5088337/](https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5088337/)

---

```javascript
var canMakeSquare = function(grid) {
    if (checkSquare(0, 0) >= 3) return true
    if (checkSquare(1, 0) >= 3) return true
    if (checkSquare(0, 1) >= 3) return true
    if (checkSquare(1, 1) >= 3) return true
    return false

    function checkSquare(a, b) {
        black = 0, white = 0
        grid[a+0][b+0] == 'B' ? black ++ : white ++
        grid[a+1][b+0] == 'B' ? black ++ : white ++
        grid[a+0][b+1] == 'B' ? black ++ : white ++
        grid[a+1][b+1] == 'B' ? black ++ : white ++
        return Math.max(black, white)
    }
};
```