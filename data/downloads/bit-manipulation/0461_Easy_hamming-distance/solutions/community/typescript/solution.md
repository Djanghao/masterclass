# 1 row easy O(1) solution TypeScript ✅ (XOR | STRING)

**Author:** sergeykoryagin
**Votes:** 1
**Link:** [https://leetcode.com/problems/hamming-distance/solutions/3405040/](https://leetcode.com/problems/hamming-distance/solutions/3405040/)

---



# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


# Code
```
function hammingDistance(x: number, y: number): number {
    return (x ^ y).toString(2).match(/1/g)?.length || 0;
};
```