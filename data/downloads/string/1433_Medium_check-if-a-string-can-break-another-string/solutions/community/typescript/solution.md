# Simple Typescript Approach

**Author:** veinu
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/5037185/](https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/5037185/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
At first thought it seems like we need to find all permutations and compare them but on second read and going through examples we can see that sorting will provide the same resolution
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```
function checkIfCanBreak(s1: string, s2: string): boolean {
    const s1sorted = s1.split('').sort();
    const s2sorted = s2.split('').sort();
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i< s1.length; i++){ 
        if(s1sorted[i] >= s2sorted[i]){ count1++ }
        if(s2sorted[i] >= s1sorted[i]){ count2++;}
    }
    
    return ((count1 == s1.length || count2 == s2.length))
};
```