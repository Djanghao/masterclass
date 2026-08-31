# TypeScript||Majority Element||Single Pass||No hashmap

**Author:** sam_Eldoro
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/4715968/](https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/4715968/)

---

# Code
```
function minimumIndex(nums: number[]): number {
    let dominantEle:number=nums[0];
    let count:number=0;
    for(let i=0;i<nums.length;i++){
        if(count==0){
            dominantEle=nums[i];
            count=1;
        }
        else if(dominantEle==nums[i]){
            count++;
        }else{
            count--;
        }
    }
    count=0;
    for(let i of nums)if(i==dominantEle)count++;
    let tempcount1:number=0;
    for(let i:number=0;i<nums.length;i++){
        if(nums[i]==dominantEle)tempcount1++;
        if(tempcount1==0)continue;
        let lenLeft:number=i+1;
        let lenRight:number=nums.length-i-1;
        if(lenLeft < tempcount1*2 && lenRight < (count-tempcount1)*2)return i;
    }
    return -1;
};
```