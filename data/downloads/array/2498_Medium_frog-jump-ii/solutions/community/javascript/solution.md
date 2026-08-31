# Beats 100% runtime JavaScript solution (Space-optimized DP)

**Author:** toestack
**Votes:** 1
**Link:** [https://leetcode.com/problems/frog-jump-ii/solutions/4078735/](https://leetcode.com/problems/frog-jump-ii/solutions/4078735/)

---

# Space optimised DP solution
![Screenshot 2023-09-23 074744.png](./images/0.png)


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} stones
 * @return {number}
 */
var maxJump = function(stones) {
    /**
    Target: minimal cost
    Intuition: Build your example gradually.
        Suppose you have [0,1], you can go 0->1 and 1->0.
        Now lets add a 2 in our example, [0, 1, 2], we can go to 2 via
        0->1->2 and come back 2-> 0 (as we have already visited 1 and cannot revisit any stones in between)
        or, 0->2 and come back 2->0 or 2-> 1> 0
        Notice that in both cases we have the min cost of 2 which we derive from arr[i] - arr[i-2]
     */
    let n = stones.length;

    if (n == 2)
        return stones[1] - stones[0];
    
    let res = stones[1] - stones[0];

    for(let i=2; i<n; i++)
        res = Math.max(res, stones[i] - stones[i-2]);
    
    return res;
};
```