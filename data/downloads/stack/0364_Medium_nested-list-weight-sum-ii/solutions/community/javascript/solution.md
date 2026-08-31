# Javascript one pass solutions

**Author:** bloddybear
**Votes:** 5
**Link:** [https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/428724/](https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/428724/)

---

```
// One pass + One array pass
var depthSumInverse = function(nestedList) {
    
    const arr = [];
    const helper = (ni, depth) => {
        if(ni.isInteger()) {
            arr[depth] = (arr[depth] || 0) + ni.getInteger();
            return;
        }
        ni.getList().forEach(i => helper(i, depth + 1));
    };
    
    nestedList.forEach(ni => helper(ni, 0));
    
    const maxDepth = arr.length;
    let sum = 0;
    for(let i = arr.length - 1; i >= 0; i--) {
        sum += (maxDepth - i) * (arr[i] || 0);
    }
    
    return sum;
    
};
```
```
// One pass with formula => 1x+2y+3z = (3+1)(x+y+z) - (3x+2y+z)
// Inspired from https://leetcode.com/problems/nested-list-weight-sum-ii/discuss/114195/Java-one-pass-DFS-solution-mathematically
var depthSumInverse = function(nestedList) {
    let flatSum = 0, depthSum = 0, maxDepth = 1;
    const helper = (ni, depth) => {
        if(ni.isInteger()) {
            depthSum += ni.getInteger() * depth;
            flatSum += ni.getInteger();
            maxDepth = Math.max(maxDepth, depth);
            return;
        }
        ni.getList().forEach(i => helper(i, depth + 1));
    };
    
    nestedList.forEach(i => helper(i, 1));
    
    return (maxDepth + 1) * flatSum - depthSum;
}
```
```
// One pass, iteratively BFS
var depthSumInverse = function(nestedList) {
    let sum = 0, levelSum = 0, queue = [...nestedList];
    while(queue.length) {
        const len = queue.length;
        for(let i = 0; i < len; i++) {
            const ni = queue.pop();
            if(ni.isInteger()) {
                levelSum += ni.getInteger();
            } else {
                queue.unshift(...ni.getList());
            }
        }
        sum += levelSum;
    }
    return sum;
}
```