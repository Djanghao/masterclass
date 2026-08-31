# ⛳️ Simple TypeScript solution

**Author:** AlexanderFSP
**Votes:** 1
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4/solutions/4347764/](https://leetcode.com/problems/read-n-characters-given-read4/solutions/4347764/)

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
const solution = (read4: any) => (buf4: string[], n: number): void => {
    while (buf4.length < n) {
        const buf: string[] = [];
        
        read4(buf);

        if (!buf.length) return;

        const needed = n - buf4.length;
                
        buf4.push(...buf.slice(0, Math.min(needed, 4)));
    }
};
```