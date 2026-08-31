# typescript solution

**Author:** mmSaif_64
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/solutions/4069804/](https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/solutions/4069804/)

---


```
function maximumSum(nums: number[]): number {
    let n: number = nums.length;
    
    let sq = [1];
    while(sq.at(-1) < n) sq.push((sq.length+1) ** 2);

    var res = 0;
    for(let i=1; i<=n; ++i) {
        var cur = 0;
        for(let s of sq) { 
            let idx = s*i;
            if(idx>n) break;
            cur += nums[idx-1];
        }
        res = Math.max(res, cur);
    }

    return res;
};
```