# Stack | Fast | With explanation

**Author:** pmistry_
**Votes:** 2
**Link:** [https://leetcode.com/problems/baseball-game/solutions/2596627/](https://leetcode.com/problems/baseball-game/solutions/2596627/)

---

I just found this Blog and Github repository with solutions to Leetcode problems.
https://leet-codes.blogspot.com/2022/09/682-baseball-game-stack.html
It is very useful, and I just wanted to share it with you.
Note: You can bookmark it as a resource, and for another approaches
<br>

```
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let stack = [];
    let sum = 0;
    for(let i=0;i<ops.length;i++){
        if(ops[i] == 'C'){
            stack.pop(); 
        }else if(ops[i] == '+'){
            stack.push(Number(stack[stack.length-1] || 0) + Number(stack[stack.length-2] || 0)); 
        }else if(ops[i] == 'D'){
            stack.push(stack[stack.length-1] * 2); 
        }else if((!isNaN(ops[i])) && typeof(Number(ops[i])) == 'number'){
            stack.push(ops[i]);
        }
    }
    return  stack.reduce(
              (previousValue, currentValue) => Number(previousValue) + Number(currentValue),
              0
            );
};
```

```
Runtime: 70 ms, faster than 87.59% of JavaScript online submissions for Baseball Game.
Memory Usage: 42.6 MB, less than 49.49% of JavaScript online submissions for Baseball Game.
```


