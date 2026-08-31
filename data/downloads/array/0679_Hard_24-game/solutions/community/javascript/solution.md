# Easy readable javascript solution

**Author:** Rajinisha001
**Votes:** 7
**Link:** [https://leetcode.com/problems/24-game/solutions/733164/](https://leetcode.com/problems/24-game/solutions/733164/)

---

```
const judgePoint24 = function(nums) {
	//converting all the integers to decimal numbers.
    nums = nums.map(num => Number(num.toFixed(4)));
    
	//Function that calculates all possible values after all operations on the numbers passed
    const computeTwoNums = (num1, num2) => {
        return [num1 + num2, num1 - num2, num2 - num1, num1 * num2, num1/num2, num2/num1];
    };
    
    const dfs = (list) => {
        let size = list.length;
        if(size === 1) {
            if(Math.abs(list[0] - 24) < 0.001) return true;
            else return false;
        }
        
        for(let i = 0; i < size; i++) {
            for(let j = i + 1; j < size; j++) {
                let nextRound = [];
                for(let k = 0; k < size; k++) {
                    if(k !== i && k !== j) nextRound.push(list[k]);
                }
                for(let val of computeTwoNums(list[i], list[j])) {
                    nextRound.push(val);
                    if(dfs(nextRound)) return true;
                    else nextRound.pop();
                }
            }
        }
        return false;
    };
    
    return dfs(nums);
};
```