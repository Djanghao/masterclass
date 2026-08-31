# DP without the 18 lap magic number

**Author:** david500
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/1805075/](https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/1805075/)

---

The idea: calculate the max number it makes sense to use the same tire. In other posts, posters use the number 18 because `2^18` > the constraint `2^18 > changeTime <= 10^5`. Here we calculate the actual best number.

Imagine a tire [2, 3] and changeTime 30
If we use the same tire
At lap 1: cost is 2
Lap 2: cost is 2 * 3^1 = 6
Lap 3: cost is 2 * 3^2 = 18
Lap 4: cost is 2 * 3^3 = 54 -> here it would not make sense to use the same tire  because we can just change the tire here for cost of 30 and then use the new tire for cost of 2, so we figure out the max consecutive laps we can use this tire for is 3

In the code below, we figure out how many times we can use the same tire for ANY tire, by calculating it based on the smallest tire in the tire list.

`sameTire` is a DP array tracking what is the min cost to complete lap `i` if we use one single tire (any tire)

```
var minimumFinishTime = function(tires, changeTime, numLaps) {  
    const n = tires.length
    const smallestTire = Math.min(...tires.map(t => t[1]))
    const maxSameTire = Math.floor(Math.log(changeTime) / Math.log(smallestTire)) + 1
    const sameTireLast = Array(n).fill(0)
	
	// DP array tracking what is the min cost to complete lap i using same tire
    const sameTire = Array(maxSameTire + 1).fill(Infinity)
    for (let lap = 1; lap <= maxSameTire; lap++) {
        tires.forEach((tire, i) => {
            sameTireLast[i] += tire[0] * tire[1] ** (lap - 1)
            sameTire[lap] = Math.min(sameTire[lap], sameTireLast[i])
        })
    }
    
    const dp = Array(numLaps + 1).fill(Infinity)
    for (let i = 1; i < numLaps + 1; i++) {
        if (i <= maxSameTire) dp[i] = sameTire[i]
		// at each lap, we can either use the same tire up to this lap (sameTire[i])
		// or a combination of 2 different best times, 
		// eg lap 6: use best time from lap 3 + lap 3
		// or from lap 4 + lap 2
		// or lap 5 + lap 1
        for (let j = 1; j < i / 2 + 1; j++) {
            dp[i] = Math.min(dp[i], dp[i-j] + changeTime + dp[j])
        }
    }
    return dp[numLaps]
};
```