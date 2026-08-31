# Precomputations||MaxLeft||MinRight||TypeScript||O(n)

**Author:** sam_Eldoro
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/4719033/](https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/4719033/)

---

# Code
```
function partitionDisjoint(nums: number[]): number {
    let maxLeft:number[]=[];
    let minRight:number[]=[];
    maxLeft.push(nums[0]);
    for(let i=1;i<nums.length;i++){
        let maxEle:number=nums[i];
        if(maxLeft[maxLeft.length-1] <= maxEle)maxLeft.push(maxEle);
        else maxLeft.push(maxLeft[maxLeft.length-1]);
    }
    minRight.push(nums[nums.length-1]);

    for(let i=nums.length-2;i>=0;i--){
        let n:number=minRight.length-1;
        if(minRight[n] <= nums[i]){
            minRight.push(minRight[n]);
        }
        else{
            minRight.push(nums[i]);
        }
    }
    minRight.reverse()
    for(let i=0;i<maxLeft.length;i++){
        if(maxLeft[i] <= minRight[i+1]){
            return i+1;
        }
    }

    return -1;
};
```