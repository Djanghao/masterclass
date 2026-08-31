# Typescript - forEach(), Math.pow()

**Author:** Arsene_knows
**Votes:** 0
**Link:** [https://leetcode.com/problems/armstrong-number/solutions/5407843/](https://leetcode.com/problems/armstrong-number/solutions/5407843/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function isArmstrong(n: number): boolean 
{
    let dig = n.toString().length;

    let mySum = 0;
    
    n.toString().split('').forEach((x)=>
    {
        mySum += Math.pow(parseInt(x), dig)
    }
    );

    return n === mySum;

};
```