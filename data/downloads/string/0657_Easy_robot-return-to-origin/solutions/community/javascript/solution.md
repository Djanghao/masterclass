# Javascript 100% 100%

**Author:** nanthsree22
**Votes:** 11
**Link:** [https://leetcode.com/problems/robot-return-to-origin/solutions/285242/](https://leetcode.com/problems/robot-return-to-origin/solutions/285242/)

---

```
var judgeCircle = function(moves) {    
    let x=0,y=0
    for(i=0;i<moves.length;i++){
        switch (moves[i]) {
            case 'R':
                x++;
                break;
            case 'L':
                x--;
                break;
            case 'U':
                y++;
                break;
            case 'D':
                y--;
                break;
        }
    }
     return x === 0 && y === 0

    
};
```
