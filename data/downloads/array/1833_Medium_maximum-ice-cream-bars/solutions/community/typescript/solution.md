# TS solution || sort || beat 100% ✅

**Author:** saifie1
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3007070/](https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3007070/)

---



# Code
```
function maxIceCream(costs: number[], coins: number): number {
  costs.sort((a,b)=>a-b);
    let count=0;
    for(let i=0;i<costs.length;i++){
        if(costs[i]<=coins){
            coins-=costs[i]
            count++
        }
    }
    return count;
};
```