# Compact js/ts

**Author:** pailhead
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-good-indices/solutions/3323265/](https://leetcode.com/problems/find-all-good-indices/solutions/3323265/)

---

# Intuition
I tried to solve it with stacks at first, but then realized they're not needed? 

# Approach
Count the length of the valid intervals before and after. Check the current value against last known value. As we cross k iterations, we can check if the intervals are of at least k length. If we break the rule, the count is reset. 

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(1)$$? the result though could be $$O(n)$$ dunno

# Code
```
function goodIndices(nums: number[], k: number): number[] {
    const res:number[] = []
    let [lpr,lpo,cpr,cpo] = [-Infinity,Infinity,0,0]
    for ( let i = 0 ; i < nums.length - k - 1 ; i ++ ) {
        const [prn,pon] = [nums[i],nums[i+k+1]]
        if(prn>lpr) cpr = 0
        if(pon<lpo) cpo = 0
        lpr = prn
        lpo = pon
        cpr++
        cpo++
        if(cpr>=k && cpo>=k) res.push(i+1)
    }
    return res
};

```