# JavaScript solution, Recursion

**Author:** hiitsherby
**Votes:** 3
**Link:** [https://leetcode.com/problems/strobogrammatic-number-iii/solutions/323216/](https://leetcode.com/problems/strobogrammatic-number-iii/solutions/323216/)

---

JavaScript version of this solution: https://leetcode.com/problems/strobogrammatic-number-iii/discuss/67378/Concise-Java-Solution 
```
var strobogrammaticInRange = function(low, high) {
    let count = 0;
    const map = {
            '0': '0',
            '1': '1',
            '6': '9',
            '8': '8',
            '9': '6'
        };
    const dfs = (low, high, n, left, right) => {
        if (left > right) {
            const tooSmall = n.join('').length === low.length && n.join('') < low;
            const tooLarge = n.join('').length === high.length && n.join('') > high;
            if (tooSmall || tooLarge) return 0;
            else return 1;
        }
        let count = 0;
        for (let d in map){
            n[left] = d;
            n[right] = map[d];
            const not0start = !(n.length !== 1 && n[0] === '0');
            const notSingle69 = !(left === right && (d === '6' || d === '9'));
            if (not0start && notSingle69) count += dfs(low, high, n, left+1, right-1);
        }
        return count;
    }

    for (let n = low.length; n <= high.length; n++){
        count += dfs(low, high, new Array(n), 0, n-1);
    }
    return count;
};
```