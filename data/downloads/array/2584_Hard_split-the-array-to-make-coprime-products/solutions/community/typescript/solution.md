# split-the-array-to-make-coprime-products - TS Solution

**Author:** himashusharma
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/5950710/](https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/5950710/)

---


# Code
```typescript []
function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


function findValidSplit(nums: number[]): number {
    let index =0;
    for(let i = 0; i<nums.length-1;i++ ){

        
    for(let j = nums.length-1; j>Math.max(i,index);j-- ){
        if(gcd(nums[i],nums[j])===1){
            continue;
        }
        index = Math.max(j,index);
        break;
    }    
        
        if(index == i )return index;
        
        if(index== nums.length-1) return-1;
    }
  return -1;
}
```