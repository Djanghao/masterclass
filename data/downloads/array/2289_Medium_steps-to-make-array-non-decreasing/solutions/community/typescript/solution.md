# TypeScript Monotonic Stack

**Author:** pandey_suraj
**Votes:** 0
**Link:** [https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/4685312/](https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/4685312/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function totalSteps(nums: number[]): number {

 const monoStack = [];
 let answer = 0

    for(let i of nums){
        let t = 0
        while(monoStack.length && monoStack[monoStack.length - 1][0] <= i){
            t = Math.max(t, monoStack.pop()![1])
        }
        let x = 0
        if(monoStack.length){
            x = t+1
        }
        monoStack.push([i,x])
        answer = Math.max(answer,x)
    }
    return answer
             
};
```