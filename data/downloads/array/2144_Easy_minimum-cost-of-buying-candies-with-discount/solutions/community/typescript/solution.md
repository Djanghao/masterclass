# Typescript: Simple solution with O(n) time complexity and at O(1) space

**Author:** 9kiranpatil
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/2077791/](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/2077791/)

---

## Solution in linear time and constant space

Solution: Out of 3 selection, customer will get least cost selection free. So we can sort the array in reverse order and chose all element which are not multiple of 3 and will get element multiple of 3 Free.

```
function minimumCost(cost: number[]): number {
    cost.sort((a,b)=> b-a);
    
    let r = 0;
    for(let i=1; i<=cost.length;i++){
        if(i%3 != 0){
            r += cost[i-1];
        }
    }
    return r;
};
```