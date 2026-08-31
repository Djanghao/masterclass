# n-repeated-element-in-size-2n-array - TypeScript

**Author:** himashusharma
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/5894167/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/5894167/)

---



# Code
```typescript []
function repeatedNTimes(nums: number[]): number {
let set = new Set()
for(let i = 0; i < nums.length; i++){
    if(set.has(nums[i])){
        return nums[i]
    }else{
        set.add(nums[i])
    }
}   
};
```