# Precompute MaxLeft & MinRight || TypeScript ||

**Author:** sam_Eldoro
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/4719229/](https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/4719229/)

---

# Code
```
function sumOfBeauties(nums: number[]): number {
    let maxLeft:number[]=[];
    let minRight:number[]=[];
    maxLeft.push(nums[0]);
    for(let i:number=1;i<nums.length;i++){
        let n:number=maxLeft.length-1;
        if(maxLeft[n] < nums[i])maxLeft.push(nums[i]);
        else maxLeft.push(maxLeft[n]);
    }
    minRight.push(nums[nums.length-1]);
    for(let i:number=nums.length-2;i>=0;i--){
        let n:number=minRight.length-1;
        if(minRight[n] < nums[i])minRight.push(minRight[n]);
        else minRight.push(nums[i]);
    }
    minRight.reverse();
    let ans:number=0;
    console.log(maxLeft,minRight);
    for(let i:number=1;i<nums.length-1;i++){
        if(maxLeft[i-1] < nums[i]  && nums[i] < minRight[i+1]){
            ans+=2;
        }
        else if(nums[i-1] < nums[i] && nums[i] < nums[i+1]){
            ans+=1;
        }
    }

    return ans;
};
```