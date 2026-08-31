# minimum-cost-to-connect-two-groups-of-points - TS Solution

**Author:** himashusharma
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/5946320/](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/5946320/)

---


# Code
```typescript []
function connectTwoGroups(cost: number[][]): number {
    const n: number = cost.length; 
    const m: number = cost[0].length; 
    const minCost: number[] = Array(m).fill(Infinity); 
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            minCost[j] = Math.min(minCost[j], cost[i][j]);
        }
    }

    const memo: number[][] = Array.from({ length: n }, () => Array(1 << m).fill(-1)); 
    return dp(0, 0); 

    function dp(i: number, mask: number): number {
        if (i === n) {
            
            let totalCost: number = 0;
            for (let j = 0; j < m; j++) {
                if (((mask >> j) & 1) === 0) {
                    totalCost += minCost[j]; 
                }
            }
            return totalCost; 
        }

        if (memo[i][mask] !== -1) return memo[i][mask]; 

        let ans: number = Infinity; 
        for (let j = 0; j < m; j++) {
            
            ans = Math.min(ans, dp(i + 1, mask | (1 << j)) + cost[i][j]);
        }
        return memo[i][mask] = ans; 
    }
}


```