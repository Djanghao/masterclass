# JavaScript - With explanation

**Author:** JayPokale
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/solutions/4057073/](https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/solutions/4057073/)

---

# Intuition
Considering 1-Indexed arrays
Our index sett will be:
{1 * 1, 1 * 4, 1 * 9, 1 * 16, ....}
{2 * 1, 2 * 4, 2 * 9, 2 * 16, ....}
{3 * 1, 3 * 4, 3 * 9, 3 * 16, ....}
....
upto n

So first find {1,4,9,16,.....}

# Code
```
var maximumSum = function(nums) {
    var n = nums.length;
    
    // Find squares 
    var sq = [1];
    while(sq.at(-1) < n) sq.push((sq.length+1) ** 2);

    var res = 0;
    for(let i=1; i<=n; ++i) {
        var cur = 0;
        for(var s of sq) { // s*i will give {i*1, i*4, i*9, ...}
            var idx = s*i;
            if(idx>n) break;
            cur += nums[idx-1];
        }
        res = Math.max(res, cur);
    }

    return res;
};
```