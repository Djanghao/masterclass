# indexOf(), while, mod

**Author:** Arsene_knows
**Votes:** 0
**Link:** [https://leetcode.com/problems/hash-divided-string/solutions/5765586/](https://leetcode.com/problems/hash-divided-string/solutions/5765586/)

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
```typescript []
function stringHash(s: string, k: number): string {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    let i = 0;
    let num = 0;
    let str = "";
    while (i < s.length)
    {
        num+= abc.indexOf(s[i]);
        if ((i+1)%k===0)
        {
            str+= abc[num%26];
            num = 0;
        }   
        i++;
    }
    return str;
};
```