# simple easy solution with O (log n)

**Author:** shamnad_skr
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-common-factors/solutions/6011760/](https://leetcode.com/problems/number-of-common-factors/solutions/6011760/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function commonFactors(a: number, b: number): number {

    //to get the lowest number
    const min:number = Math.min(a,b);
    let count:number =0;

    for(let i=1; i<=min ; i++){

        if(a%i === 0 && b%i === 0) count++;
    }

    return count ;


    
};
```