# 💡JavaScript Solution - DP & Greedy

**Author:** AminiCK
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/457914/](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/457914/)

---

### The idea - DP/DFS/Recursion
1. Use divide and conquer methodolgy, the cost of building 1 node can be calculated by the cost of building nodes in the left part + the cost of building nodes in the right part + the cost of the root node (product of the maximun number to its left and right).
2. We can try every slice point to split the array in to left and right until there's only 1 element left
``` javascript
var mctFromLeafValuesDFS = function(arr) {
    let dp = [];
    let dfs = function(i, j) {
        if (!dp[i]) dp[i] = []; // initialize
        if (j<=i) return 0; // only 1 element
        if (dp[i][j]) return dp[i][j];
        let res = Number.MAX_VALUE;
        for (let k=i+1;k<=j;k++) { // try different slicing point
            res = Math.min(dfs(i, k-1) + dfs(k, j) + Math.max(...arr.slice(i,k)) * Math.max(...arr.slice(k, j+1)), res);
        }
        dp[i][j] = res;
        return dp[i][j];
    }
    return dfs(0, arr.length-1);
};
```
### The idea - Merge Intervals DP
 Can be translated into:
 Give some piles of nodes, merge them into 1 pile.
 You can only merge adjacent piles, the cost is the product of the largest nodes in the two piles.
```
var mctFromLeafValues = function(arr) {
    const N = arr.length;
    let dp = new Array(N).fill(0).map(()=>new Array(N).fill(0));
    
    for (let l=2;l<=N;l++) { // merge l piles to 1 pile
        for (let i = 0; i <= N - l;i++) { // start position 
            let j = i + l - 1; // end position
            dp[i][j] = Number.MAX_VALUE; // initialize
            for (let k=i;k<j;k++) { // split point
                dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k+1][j] + Math.max(...arr.slice(i,k+1)) * Math.max(...arr.slice(k+1, j+1)));
            }
        }
    }
    return dp[0][arr.length-1];
}
```
### The idea - Greedy
1. In order the minimize the final cost, we want to minimize the repetitive calculations for large numbers.
2. The idea is to always combine the smallest product pair for the current array, and remove the smaller number from the array since it will never be used again.
``` javascript
var mctFromLeafValuesGreedy = function(arr) {
    let cost = 0;
    while (arr.length>1) {
        let minProduct = Number.MAX_VALUE;
        let minId = -1;
        for (let i=0;i<arr.length-1;i++) {
            let curProduct = arr[i] * arr[i+1];
            if (curProduct < minProduct) {
                minProduct = curProduct;
                minId = arr[i]<arr[i+1]?i:i+1;
            }
        }
        cost+=minProduct;
        arr.splice(minId, 1);
    }
    return cost;
} 
```
### Version 2
``` javascript
var mctFromLeafValues = function(arr) {
    let cost = 0;
    while (arr.length > 1) {
        let minNum = Math.min(...arr);
        let minId = arr.indexOf(minNum);
        if (minId==0) cost+= arr[minId+1] * arr[minId];
        else if (minId==arr.length-1) cost+=arr[minId-1] * arr[minId];
        else cost+=arr[minId] * Math.min(arr[minId-1], arr[minId+1]); 
        arr.splice(minId, 1);
    }
    return cost;
}
```
