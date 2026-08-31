# ✅ JavaScript || Easy || DFS || Memoization || Commented

**Author:** Atikur-Rahman-Sabuj
**Votes:** 1
**Link:** [https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3054976/](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3054976/)

---




```
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @return {number}
 */
var maxOutput = function(n, edges, price) {
    const m = new Array(n).fill(null).map(_=> new Map());
    for(const edge of edges){
        // initialize graph and path values with 0
       m[edge[0]].set(edge[1], 0);
       m[edge[1]].set(edge[0], 0);
    }
    let ans = 0;
    for(let i = 0 ; i < n ; i++){
        // run dfs for every node
        ans = Math.max(ans, dfs(i, -1) - price[i]);
    }
    return ans;
    
    //i -> current node, p -> parent node of i
    function dfs(i, p){
        let maxPath = 0;
        for(const child of m[i].keys()){
            if(child != p){
                // consider every adjacent node except parent
                let path = m[i].get(child);
                if(path === 0){
                    // if price not calculated from i to child then calculate
                    path = dfs(child, i);
                    // memoize the calculation
                    m[i].set(child, path);    
                }
                maxPath = Math.max(maxPath, path);
            }
        }
        return maxPath + price[i];
    } 
};