# Typescript, basic DP

**Author:** jxc454
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/1471123/](https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/1471123/)

---

```
function maxTaxiEarnings(n: number, rides: number[][]): number {
    if (rides.length === 1) {
        return rides[0][2]
    }
    
    // sort by endTime ascending
    rides.sort((a, b) => {
        return a[1] - b[1]
    })
    
    const dp = Array(rides.length).fill(0)
    
    for (let i = 0; i < rides.length; i++) {
        const [start, end, tip] = rides[i]
        const value = end - start + tip
        
        // looking for most recent ride with an endTime <= current start time
        // could use binary search here instead, to speed things up
        for (let j = i - 1; j >= 0; j--) {
            if (rides[j][1] <= start) {
                dp[i] = Math.max(value + dp[j], dp[i - 1])
                break
            }
        }
        
        if (dp[i] === 0) {
            dp[i] = Math.max(value, (dp[i - 1] || 0))
        }
    }

    return dp[rides.length - 1]
};
```