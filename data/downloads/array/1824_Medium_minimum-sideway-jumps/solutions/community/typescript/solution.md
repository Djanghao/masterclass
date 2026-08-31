# Typescript O(n) Time O(1) Space

**Author:** Sameer177
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sideway-jumps/solutions/1935497/](https://leetcode.com/problems/minimum-sideway-jumps/solutions/1935497/)

---

```
function minSideJumps(obstacles: number[]): number {
    let dp = new Array(4).fill(1);
    dp[2] = 0;
    for(let i = 0; i < obstacles.length-1; i++) {
        let o = obstacles[i+1];
        if(o > 0 && dp[o] !== Infinity) {
            for(let j = 1; j <= 3; j++) {
                if(j == o || obstacles[i] == j) continue;
                dp[j] = Math.min(dp[o]+1,dp[j]);
            }
            dp[o] = Infinity;
        }
    }
    return Math.min(dp[1],dp[2],dp[3])
};