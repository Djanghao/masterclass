# JavaScript - Bit Manipulation

**Author:** JayPokale
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum/solutions/3965408/](https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum/solutions/3965408/)

---

# Code
```
var minOperations = function(nums, target) {
    const n = nums.length, arr = Array(31).fill(0);
    let sum = 0;

    for(const x of nums) ++arr[Math.log2(x)], sum += x;
    if(sum < target) return -1;

    let i=0, res = 0;
    while(i < 31) {
        if(1<<i & target) {
            if(arr[i]) --arr[i];
            else {
                while(i < 30 && !arr[i]) ++i, ++res;
                --arr[i];
                continue;
            }
        }
        arr[++i] += Math.floor(arr[i-1] / 2);
    }

    return res;
};
```