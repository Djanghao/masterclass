# JavaScript O(N) Time Elegant Solution

**Author:** control_the_narrative
**Votes:** 9
**Link:** [https://leetcode.com/problems/alphabet-board-path/solutions/1090457/](https://leetcode.com/problems/alphabet-board-path/solutions/1090457/)

---

Time: `O(N)`, `N` = size of `target`
Space: `O(26)` technically `O(1)`
```javascript
var alphabetBoardPath = function(target) {
    const board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"]
    const coordinate = new Map();
    
    for(let r = 0; r < board.length; r++) {
        for(let c = 0; c < board[r].length; c++) {
            coordinate.set(board[r][c], [r, c]);
        }
    }
    
    let r = 0, c = 0;
    let output = '';
    
    for(let char of target) {
        const [r1, c1] = coordinate.get(char);
        
        if(c > c1) output += 'L'.repeat(c - c1);
        if(r > r1) output += 'U'.repeat(r - r1);
        if(c < c1) output += 'R'.repeat(c1 - c);
        if(r < r1) output += 'D'.repeat(r1 - r);
        output += '!'
        r = r1;
        c = c1;
    }
    return output;
};
```