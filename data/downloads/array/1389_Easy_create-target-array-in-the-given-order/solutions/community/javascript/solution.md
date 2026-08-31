# Fast & Simple JavaScript Solution

**Author:** trevH
**Votes:** 20
**Link:** [https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/548762/](https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/548762/)

---

w/ Splice
```
const createTargetArray = (nums, idx) => {
    let target = []
    for(const i in nums)target.splice(idx[i], 0, nums[i])
    return target
};
```
You can also preprocess the idxArr to avoiding having to shift elements:
```
const createTargetArray = (nums, idxArr) => {
    let target = []
    for(let i = 0; i < idxArr.length; i++){
        for(let j = 0; j < i; j++){
            if(idxArr[i] <= idxArr[j])idxArr[j]++
        }
    }
    for(const i in nums)target[idxArr[i]] = nums[i]
    return target
};
```
Optimization: only loop when necessary
```
const createTargetArray = (nums, idxArr) => {
    let target = [], max = -1
    for(let i = 0; i < idxArr.length; i++){
        if(idxArr[i] <= max){
            for(let j = 0; j < i; j++){
                if(idxArr[i] <= idxArr[j])idxArr[j]++
                if(idxArr[j] > max)max = idxArr[j]
            }            
        }
        max = Math.max(max, idxArr[i])
    }
    for(const i in nums)target[idxArr[i]] = nums[i]
    return target
};
```
