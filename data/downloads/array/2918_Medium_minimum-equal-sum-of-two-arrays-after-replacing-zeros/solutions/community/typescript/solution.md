# Typescript Solution Beats 100% memory and time

**Author:** tal0012
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/5575583/](https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/5575583/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minSum(nums1: number[], nums2: number[]): number {
    let sizeNumsOne = nums1.length;
    let sizeNumsTwo = nums2.length;
    let numsOneZeroesCount = 0;
    let numsTwoZeroesCount = 0;
    let sumNumsOne = 0;
    let sumNumsTwo = 0;

    let index = 0;
    while(index < sizeNumsOne || index < sizeNumsTwo){
        if(index < sizeNumsOne){
            sumNumsOne+= nums1[index];
            if(nums1[index] === 0) numsOneZeroesCount++;
        }
        if(index < sizeNumsTwo){
            sumNumsTwo+= nums2[index];
            if(nums2[index] === 0) numsTwoZeroesCount++;
        }
        index++;
    }

    if(sumNumsOne+numsOneZeroesCount > sumNumsTwo+numsTwoZeroesCount){
        let potentialSum = sumNumsOne+numsOneZeroesCount;
        if(numsTwoZeroesCount === 0) return -1;
        return potentialSum;
    }else if(sumNumsOne+numsOneZeroesCount < sumNumsTwo+numsTwoZeroesCount){
        let potentialSum = sumNumsTwo+numsTwoZeroesCount;
        if(numsOneZeroesCount === 0) return -1;
        return potentialSum;
    }else{
        return sumNumsOne+numsOneZeroesCount;
    }
};
```