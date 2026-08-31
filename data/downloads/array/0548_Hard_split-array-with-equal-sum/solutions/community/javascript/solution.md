# Javascript solutions (Set and DFS)

**Author:** 6117392
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-array-with-equal-sum/solutions/767903/](https://leetcode.com/problems/split-array-with-equal-sum/solutions/767903/)

---

# Set solution
```
var splitArray = function(nums) {
    if (nums.length < 7) return false;
    
    let sum = Array(nums.length);
    sum[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum[i] = sum[i - 1] + nums[i];
    }
    
    for (let j = 3; j < nums.length - 3; j++) {
        let set = new Set();
        for (let i = 1; i < j - 1; i++) {
            if (sum[i - 1] === sum[j - 1] - sum[i])
                set.add(sum[i - 1]);
        }
        for (let k = j + 2; k < nums.length - 1; k++) {
            if (sum[nums.length - 1] - sum[k] === sum[k - 1] - sum[j] && set.has(sum[k - 1] - sum[j]))
                return true;
        }
    }
    return false;
};
```


# DFS solution
```
var splitArray = function(nums) {
    let dp = [nums[0]];
    let min = Infinity, max = -Infinity;
    for (let i = 1; i < nums.length; i++) {
        dp[i] = dp[i-1] + nums[i];
        
        min = Math.min(min, dp[i]);
        max = Math.max(max, dp[i]);
    }
    min = Math.floor((dp[dp.length-1] - 3*max)/4);
    max = Math.ceil((dp[dp.length-1] - 3*min)/4);

    const traverse = (i, diff, level) => {
        if (level === 3){
            if (i < (dp.length-1) && dp[dp.length-1]-dp[i] === diff) return true;
            return false;
        }
        
        for (let j = i+1; j < dp.length; j++) {
            if (dp[j] - dp[i] === diff && traverse(j+1, diff, level+1)) {
                return true;
            }
        }
        return false;
    }
    
    for (let i = 0; i < dp.length-6; i++) {
        if (dp[i] >= min && dp[i] <= max) {
            if (traverse(i+1, dp[i], 1)) return true;
        }
    }
    return false;
};
```
This throws TLE because essentially it's O(N^3)
