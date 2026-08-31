# #JavaScript and Typescript

**Author:** sanjay_rawat
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/3974715/](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/3974715/)

---


# Code
```
function largestSumAfterKNegations(nums: number[], k: number): number {

const arr= nums.sort((a,b)=>a-b);
let index=0;
while(k!=0){
    arr[index]*=-1;
    if(arr[index]>arr[index+1]){
        index+=1;
    }
    k-=1;
}
return arr.reduce((prev,curr)=>prev+curr,0)


};
```