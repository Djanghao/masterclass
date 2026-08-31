# Best speed solution

**Author:** user3658uq
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-empty/solutions/4751002/](https://leetcode.com/problems/make-array-empty/solutions/4751002/)

---

# Code
```
function countOperationsToEmptyArray(nums: number[]): number {
    const l = nums.length
    let map = new Map<number, number>()
    for (let i = 0; i < l; i++) {
        map.set(nums[i], i)
    }
    nums.sort((a, b) => a - b)
    

    let operations = l
    let currentIndex = 0
    let nextIndex = l
    for (let i = 0; i < l; currentIndex = map.get(nums[i++])) {
        if (nextIndex < currentIndex) {
            operations += l - i
        }
        nextIndex = map.get(nums[i + 1])
    }
    return operations
};


```