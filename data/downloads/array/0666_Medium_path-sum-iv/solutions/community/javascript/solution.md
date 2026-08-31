# JavaScript | Map & PreSum | TC O(n), SC (1)

**Author:** baskvava
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-sum-iv/solutions/4595391/](https://leetcode.com/problems/path-sum-iv/solutions/4595391/)

---

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var pathSum = function(nums) {

    // store each node position
    // array represents each level, the limit is 6
    // Map to store position and value of node
    const arr = new Array(6).fill(null).map(()=>new Map());
    let res = 0;

    for (let num of nums) {
        const [levelStr, posStr, valStr] = num.toString().split("");
        const level = parseInt(levelStr);
        const pos = parseInt(posStr);
        const val = parseInt(valStr);

        // preSum of each node
        arr[level].set(pos, val + (arr[level - 1].get(Math.ceil(pos/2)) ?? 0));
        // add current value
        res += val;     

        // if find parent has two child nodes, add parent value again
        if (pos % 2 === 0 && arr[level].has(pos-1)) {
            res += arr[level - 1].get(Math.ceil(pos/2))
            
        }   
    }

    return res;

};


```