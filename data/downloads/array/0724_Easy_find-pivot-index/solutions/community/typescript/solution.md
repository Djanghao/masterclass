# pivotIndex

**Author:** deepambinnal
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-pivot-index/solutions/2372588/](https://leetcode.com/problems/find-pivot-index/solutions/2372588/)

---

```
function pivotIndex(nums: number[]): number {
    let leftSum = 0
    let sum = nums.reduce((a,b) => a +b)
    
    for(let i = 0; i<nums.length; i++){
        if(leftSum === sum - leftSum - nums[i]){
            return i
        }
        leftSum += nums[i]
    }
    
    return -1
};
```