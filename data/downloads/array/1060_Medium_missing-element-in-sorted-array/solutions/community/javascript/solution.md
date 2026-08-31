# JS Binary search

**Author:** lonsk
**Votes:** 2
**Link:** [https://leetcode.com/problems/missing-element-in-sorted-array/solutions/1318016/](https://leetcode.com/problems/missing-element-in-sorted-array/solutions/1318016/)

---

```
function missingElement(nums: number[], k: number): number {
    let min = 0;
    let max = nums.length - 1;
    const start = nums[0];
    
    while(min <= max){
        const mid = Math.floor((min + max) / 2);
        const missingBeforeMid = nums[mid] - mid - start;
        
        if(missingBeforeMid < k){
            min = mid + 1;
        }else {
            max = mid - 1;
        }
    }
    
    return min - 1 + start + k;
};
```