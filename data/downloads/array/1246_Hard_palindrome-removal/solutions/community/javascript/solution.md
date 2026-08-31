# Javascript (Top Down Solution)

**Author:** mcgannco
**Votes:** 2
**Link:** [https://leetcode.com/problems/palindrome-removal/solutions/825558/](https://leetcode.com/problems/palindrome-removal/solutions/825558/)

---

```javascript
function minimumMoves(arr) {
let memo = {};
    return helper(0,arr.length-1);
    function helper(s,e) {
        if(s===e) return 1;
        if(s>e) return 0;
        if(memo.hasOwnProperty(`${s},${e}`)) return memo[`${s},${e}`];
        let res = 1 + helper(s+1,e);
        for(let i = s+1; i<=e; i++) {
            if(arr[s] === arr[i]) {
                let left = Math.max(1,helper(s+1,i-1));
                let right = helper(i+1,e);
                res = Math.min(res,left+right);
            }
        }
        memo[`${s},${e}`] = res;
        return memo[`${s},${e}`];
    }
};
```