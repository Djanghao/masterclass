# Simple set solution JS/TS

**Author:** amit3ricky
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3839030/](https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3839030/)

---

# Intuition
I have seen all the solutions in which they are creating new set everytime inside loop. But we will only need to create new set everytime for right side but for the left we can just add.

# Code
```
function distinctDifferenceArray(nums: number[]): number[] {
    let leftSet = new Set<number>();

    return nums.map((num,index)=>{
        leftSet.add(num);
        let rightSet = new Set<number>(nums.slice(index+1));
        return leftSet.size-rightSet.size;
    })
};
```