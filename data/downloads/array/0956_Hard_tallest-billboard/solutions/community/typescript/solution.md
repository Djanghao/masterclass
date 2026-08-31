# TypeScript Solution Based on Editorial

**Author:** jswang00037
**Votes:** 1
**Link:** [https://leetcode.com/problems/tallest-billboard/solutions/3675473/](https://leetcode.com/problems/tallest-billboard/solutions/3675473/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Try all the combinations can work, but it would time out. 
- Instead of log the combination of rods, we should focus on the height of steels. 
- - Use Dypanic Programming (DP) to preventig re-calculating the combinations before new rod. 
- If there are multiple combinations with the same difference `diff`, we should keep the taller one `taller` to reduce future attemping. (i.e. `2,3` and `1,2` would be equal heights if adding `1` to left, but `2,3` would have taller height. )
- If there are multiple combinations with the same difference and same `taller`, we should only keep one to reduce future attemping. (i.e. adding rod to left of `1,2` is equal to adding rod to right of `2,1`) 

# Approach
<!-- Describe your approach to solving the problem. -->
1. Construct the `dp` to log `{diff: taller}` and initial the value as {0:0}. (no rods such that `diff` and `taller` are `0`)
2. Loop the `rods`, copy `dp` into `newDp`. 
    2-1.  Try to add `rod` to `shorter` or `taller` side and get the new diffrence `newDiff` and new taller `newTaller`. 
    2-2. If there is a log of `oldTaller` with the same `newDiff`, set the log with key `newDiff` with **higher one**. 
    2-3. Replace `dp` with `newDp`
3. Return `dp.get(0)` as result. It represent the largest height of `0` difference. 

# Complexity
Let `m` be the sum of `rods`. 
- Time complexity: $$O(n \\cdot m)$$
    - Loop `rods`: $$O(n)$$
    - Loop `dp`: $$O(m)$$ since there could be at most `m` of `diff`. 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m)$$
    - Size of `dp`: $$O(m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function tallestBillboard(rods: number[]): number {
    let dp = new Map<number, number>(); // {diff: taller}
    dp.set(0, 0);

    for(let i=0; i<rods.length; i++){
        const rod = rods[i];
        const newDp = new Map<number, number>();
        // copy
        dp.forEach(
            (taller, diff) =>{
                // do nothing
                newDp.set(diff, taller);
            }
        )

        // add rod
        dp.forEach(
            (taller, diff) =>{
                // add to taller
                let newDiff = diff + rod;
                let oldTaller = newDp.get(newDiff);
                let newTaller = taller+rod;
                if(oldTaller){
                    newDp.set(newDiff, Math.max(oldTaller, newTaller));
                }else{
                    newDp.set(newDiff, newTaller);
                }

                
                // add to shorter
                const shorter = taller - diff;
                newDiff = Math.abs(shorter+rod - taller);
                oldTaller = newDp.get(newDiff);
                newTaller = Math.max(shorter+rod, taller);                
                if(oldTaller){
                    newDp.set(newDiff, Math.max(oldTaller, newTaller))
                }else{
                    newDp.set(newDiff, newTaller);
                }
            }
        )
        dp = newDp;
    }
    const res = dp.get(0) as number;

    return res;
};
```