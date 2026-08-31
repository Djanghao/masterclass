# Easy to understand JS Brute Force solution

**Author:** loid_forger
**Votes:** 2
**Link:** [https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/2861005/](https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/2861005/)

---

Starting from every index, simulate the Robot's movements. At the end of each move, check if Robot is out of grid. Break out to start new iteration if out of grid else increment the `res` for `ith` index and continue the process
```
var executeInstructions = function(n, startPos, s) {
    let res = Array(s.length).fill(0)
    for(let i = 0; i < s.length; i++){
        let [currX, currY] = startPos;
        for(let j = i; j < s.length; j++){
            switch(s[j]){
                case 'L':{
                    currY -= 1;
                }
                    break;
                case 'R':{
                    currY += 1;
                }
                    break;
                case 'U':{
                    currX -= 1;
                }
                    break;
                case 'D':{
                    currX += 1;
                }
                    break;
            }
            if(currX < 0 || currY < 0 || currX >= n || currY >= n)
                break;
            res[i] += 1;
        }
    }
    return res;
};
```