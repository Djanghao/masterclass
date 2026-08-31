# Combination (Mathematical) approach

**Author:** gyanendra2058
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/5814379/](https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/5814379/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
This is pure counting problem. Concept of Permutation and Combinations helps here. 
Imagine you are give X chars and you want to place them at Y positions. Here X is arg c and Y is 2. So in order to substrings to end with same character c you need to place 'N' which is count of same character to 2 places. The value with the help of combinatorial formula will be nC2 = n*n-1/2. Additionaly you need to take account n single char substring..so. total count = n+ n*(n-1)/2 = n(n+1)/2

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function countSubstrings(s: string, c: string): number {
     const charLength = [...s].filter(char => char === c).length;
    return charLength + (charLength * (charLength - 1)) / 2
};
```