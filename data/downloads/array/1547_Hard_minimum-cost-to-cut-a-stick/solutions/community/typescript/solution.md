# Beats 100% TS currently

**Author:** gqstav
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/1768430/](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/1768430/)

---

I too first came up with the "cuts" solution, where you test out combinations of cuts that turn out fruitful. But I struggled with some edge cases in my for-loop and instead went for something I found fool-proof:
```ts
function minCost(n: number, cuts: number[]): number {
    cuts = cuts.sort((a,b) => a - b);
    const M = {}
    
    function helper(from: number, to: number){
        let res = [];
        const label = `${to},${from}`;
        if(M[label]) return M[label];
        
        for(const cut of cuts.filter(e => e > from && e < to)){
            res.push(helper(from, cut) + helper(cut, to))
        }
        
        if(res.length === 0) return 0;
        
        M[label] = to - from + Math.min(...res)
        
        return M[label];
    }

    return helper(0, n)
};
```
The idea is pretty much the same as the other upvoted solutions, but instead of keeping track of indexes and how they map to a certain length I use the length of a given stick and how our desired cuts cut that stick in the optimal way. Maybe it's helpful.