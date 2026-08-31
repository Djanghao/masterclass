# Simple DP : find longest common substring first O(n^2)

**Author:** KostaMalsev
**Votes:** 0
**Link:** [https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/6074294/](https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/6074294/)

---



# Code
```javascript []
/**
 * @param {string} initial
 * @param {string} target
 * @return {number}
 */
var minOperations = function(initial, target) {

    const M = target.length;
    const N = initial.length;

    let dp = Array(M+1).fill().map(() => Array(N+1).fill(0));
    let end = 0;
    let mxSize = 0;
    
    for(let i=1;i<=M;i++){

        for(let j=1;j<=N;j++){

            if(target[i-1] == initial[j-1]){

                dp[i][j] = dp[i-1][j-1]+1;
                
                if(dp[i][j] > mxSize){
                    
                    mxSize = dp[i][j];
                    end = i;
                }
            }
        }
    }
    let lcs = target.slice(end-mxSize,end);
    return (initial.length - lcs.length)+(target.length - lcs.length);
    
};
```