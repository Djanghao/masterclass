# JavaScript Simple Backtracking Solution

**Author:** control_the_narrative
**Votes:** 14
**Link:** [https://leetcode.com/problems/expression-add-operators/solutions/1068461/](https://leetcode.com/problems/expression-add-operators/solutions/1068461/)

---

```javascript
var addOperators = function(num, target) {
    const output = []
    
    function permute(str, arr, total, prev) {
        if(!str.length && total === target) output.push(arr.join(''));
        
        let len = str.length;
        if(str[0] === '0') len = 1;

        for(let i = 1; i <= len; i++) {
            const curr = +str.slice(0, i);
            const rest = str.slice(i);
            
            if(!arr.length) permute(rest, [curr], curr, curr);
            else {
                permute(rest, [...arr, '+', curr], total+curr, curr);
                permute(rest, [...arr, '-', curr], total-curr, 0-curr);
                const prod = prev * curr;
                permute(rest, [...arr, '*', curr], total-prev+prod, prod);
            }
        }
    }
    permute(num, [], 0, 0);
    return output;
};
```