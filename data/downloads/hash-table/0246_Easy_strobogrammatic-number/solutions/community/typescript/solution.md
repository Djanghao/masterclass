# Beast 100% of the Typescript solutions

**Author:** Sanskruti_ak
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number/solutions/5971027/](https://leetcode.com/problems/strobogrammatic-number/solutions/5971027/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: )(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function isStrobogrammatic(num: string): boolean {
    const strobogramaticMap: Map<string, string> = new Map([["0", "0"],["1", "1"],["6", "9"],["8", "8"],["9", "6"]]);
    const reverseArray = [];
    for(let i=0 ; i < num.length; i++){
        if(!strobogramaticMap.has(num[i])){
            return false;
        }
        reverseArray.push(strobogramaticMap.get(num[i]));
    }
    return num === reverseArray.reverse().join("");
};
```